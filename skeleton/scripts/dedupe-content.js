#!/usr/bin/env node
/**
 * Sprint 3.5 — Duplicate content ID cleanup
 *
 * content_*.js dosyalarında `C[ID] = { ... };` bloklarından duplicate tanımları
 * tespit edip sadece *sonuncusunu* (enriched versiyon) tutar.
 *
 * Güvenlik: regex yerine AST (acorn) kullanır — template literal'ların içinde
 * yanlışlıkla eşleşecek bir şey yok. Orijinal kaynağın kalan kısmına dokunmaz;
 * sadece duplicate statement'ların `start..end` karakter range'lerini siler.
 *
 * Kullanım:
 *   node scripts/dedupe-content.js                      # tüm content_*.js dosyalarını işler (dry-run)
 *   node scripts/dedupe-content.js --write              # dosyaları gerçekten yazar
 *   node scripts/dedupe-content.js content_silver.js    # tek dosya
 */

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import * as acorn from 'acorn';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_DIR = path.resolve(__dirname, '../src/data');

const args = process.argv.slice(2);
const write = args.includes('--write');
const targets = args.filter(a => !a.startsWith('--'));

const DEFAULT_FILES = [
  'content_silver.js',
  'content_gold.js',
  'content_diamond.js',
  'content_gemstone.js',
  'content_platinum.js',
  'content_shared.js',
];

const files = targets.length ? targets : DEFAULT_FILES;

function analyzeFile(absPath) {
  const src = fs.readFileSync(absPath, 'utf8');
  const ast = acorn.parse(src, {
    ecmaVersion: 'latest',
    sourceType: 'module',
    locations: true,
  });

  // Her C[NUM] = {...} assignment statement'ı için bilgileri topla.
  // Hedef AST şekli:
  // ExpressionStatement
  //   expression: AssignmentExpression
  //     left: MemberExpression
  //       object: Identifier("C")
  //       property: Literal (number)
  //       computed: true
  //     right: ObjectExpression
  const entries = []; // { id, start, end, order }
  let order = 0;

  for (const node of ast.body) {
    if (node.type !== 'ExpressionStatement') continue;
    const expr = node.expression;
    if (!expr || expr.type !== 'AssignmentExpression' || expr.operator !== '=') continue;
    const left = expr.left;
    if (!left || left.type !== 'MemberExpression' || !left.computed) continue;
    if (left.object?.type !== 'Identifier' || left.object.name !== 'C') continue;
    const prop = left.property;
    let id;
    if (prop?.type === 'Literal' && typeof prop.value === 'number') id = prop.value;
    else continue;

    entries.push({
      id,
      start: node.start,
      end: node.end,
      order: order++,
      line: node.loc.start.line,
    });
  }

  // Her id için: hangi entry'ler duplicate? Son olan kalıyor, önceki hepsi siliniyor.
  const byId = new Map();
  for (const e of entries) {
    if (!byId.has(e.id)) byId.set(e.id, []);
    byId.get(e.id).push(e);
  }

  const toRemove = []; // {start, end, id, line}
  const duplicateIds = [];
  for (const [id, arr] of byId.entries()) {
    if (arr.length <= 1) continue;
    duplicateIds.push({ id, count: arr.length, lines: arr.map(a => a.line) });
    // Keep the last (enriched), remove all earlier ones.
    for (let i = 0; i < arr.length - 1; i++) {
      toRemove.push({ ...arr[i] });
    }
  }

  // Remove in reverse-order of `start` so that earlier offsets remain valid.
  toRemove.sort((a, b) => b.start - a.start);

  let out = src;
  for (const r of toRemove) {
    // Remove the statement. We also trim up to a trailing newline if one is
    // directly after `end` (so we don't leave dangling blank lines).
    let end = r.end;
    if (out[end] === '\n') end += 1;
    // And leading whitespace on that same line (for readability):
    let start = r.start;
    // If the preceding character is a blank line pattern, leave it alone —
    // safer not to over-trim.
    out = out.slice(0, start) + out.slice(end);
  }

  return {
    path: absPath,
    totalDefs: entries.length,
    uniqueIds: byId.size,
    duplicateIds,
    removedCount: toRemove.length,
    originalSize: src.length,
    newSize: out.length,
    newSource: out,
  };
}

let grandTotal = 0;
for (const file of files) {
  const abs = path.resolve(DATA_DIR, file);
  if (!fs.existsSync(abs)) {
    console.error(`[SKIP] not found: ${abs}`);
    continue;
  }
  const r = analyzeFile(abs);
  grandTotal += r.removedCount;
  const delta = r.originalSize - r.newSize;
  const pct = ((delta / r.originalSize) * 100).toFixed(2);
  console.log(
    `\n${file}: total_defs=${r.totalDefs} unique_ids=${r.uniqueIds} ` +
    `duplicate_statements=${r.removedCount} size_delta=-${delta}B (-${pct}%)`
  );
  if (r.duplicateIds.length) {
    console.log(`  Duplicate IDs (count / first-seen lines):`);
    for (const d of r.duplicateIds.slice(0, 50)) {
      console.log(`    id=${d.id}  seen=${d.count}  lines=[${d.lines.join(', ')}]`);
    }
    if (r.duplicateIds.length > 50) {
      console.log(`    ... +${r.duplicateIds.length - 50} more`);
    }
  }
  if (write && r.removedCount > 0) {
    // Backup first — written beside the file with .bak.dedupe suffix.
    // NOT committed; caller can delete after verifying build.
    fs.writeFileSync(r.path + '.bak.dedupe', fs.readFileSync(r.path));
    fs.writeFileSync(r.path, r.newSource);
    console.log(`  ✓ wrote ${file} (backup: ${file}.bak.dedupe)`);
  }
}

console.log(`\n── Summary ──`);
console.log(`Total duplicate statements: ${grandTotal}`);
if (!write) console.log(`(dry-run: re-run with --write to apply)`);
