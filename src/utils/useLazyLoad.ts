// src/utils/useLazyLoad.ts
import { useEffect } from 'react';

export function useLazyLoad() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll<HTMLElement>('.lazy-item').forEach(el => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}
