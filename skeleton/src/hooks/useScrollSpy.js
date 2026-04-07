import { useState, useEffect } from 'react';

export function useScrollSpy(ids, offset = 100) {
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + offset;
      let current = '';
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) current = id;
      }
      setActive(current);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);

  return active;
}
