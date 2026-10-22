import { useState, useEffect, useRef } from 'react';

/**
 * Hook to count up numbers when scrolled into view.
 * @param {number} target The target number to count up to.
 * @param {number} duration Duration in ms (default 1600ms).
 * @param {number} decimals Number of decimal places (default 0).
 */
export function useCountUp(target, duration = 1600, decimals = 0) {
  const [value, setValue] = useState(() => {
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return target;
    }
    return 0;
  });

  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    // If reduced motion is requested, value is already initialized to target
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            let startTime = null;

            const animate = (timestamp) => {
              if (!startTime) startTime = timestamp;
              const progress = Math.min((timestamp - startTime) / duration, 1);
              // Ease-out cubic
              const easeOut = 1 - Math.pow(1 - progress, 3);
              const currentVal = easeOut * target;
              setValue(decimals > 0 ? parseFloat(currentVal.toFixed(decimals)) : Math.floor(currentVal));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setValue(target);
              }
            };

            requestAnimationFrame(animate);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [target, duration, decimals]);

  return [value, elementRef];
}

