import { useEffect } from 'react';

/**
 * Custom lightweight hook that attaches an IntersectionObserver to all elements
 * with the `.reveal` or `.observe-reveal` class and toggles `.is-visible`.
 * Respects prefers-reduced-motion automatically.
 */
export function useScrollReveal() {
  useEffect(() => {
    // If reduced motion is requested, reveal everything immediately
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('is-visible');
      });
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            // Unobserve after revealing to prevent repetitive re-triggering & layout thrash
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.12,
      }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);
}

