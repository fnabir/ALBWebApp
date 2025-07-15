'use client';

import { useEffect } from 'react';

export default function ScrollHandler() {
  useEffect(() => {
    const targetId = sessionStorage.getItem('scrollTo');
    if (targetId) {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      sessionStorage.removeItem('scrollTo');
    }
  }, []);

  return null;
}