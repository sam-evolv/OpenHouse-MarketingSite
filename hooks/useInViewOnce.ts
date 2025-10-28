import { useEffect, useState, RefObject } from "react";

export function useInViewOnce(
  ref: RefObject<Element>,
  options: IntersectionObserverInit = {}
): boolean {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    if (isInView) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      }
    }, options);

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, isInView, options]);

  return isInView;
}
