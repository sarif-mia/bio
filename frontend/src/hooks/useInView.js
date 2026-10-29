import { useEffect, useRef, useState } from 'react';

// Returns [ref, inView]; once the element is visible it stays "in view".
export default function useInView({ threshold = 0.15, rootMargin = '0px 0px -10% 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || inView) return;
    if (!('IntersectionObserver' in window)) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.disconnect();
      }
    }, { threshold, rootMargin });

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, inView]);

  return [ref, inView];
}
