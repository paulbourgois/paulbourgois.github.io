import { useEffect, useRef, useState } from "react";

/**
 * Hook to detect when an element is in the viewport
 * @param {Object} options - Intersection Observer options
 * @param {number} options.threshold - A number between 0 and 1 indicating the percentage that should be visible
 * @param {string|Element} options.root - The element that is used as the viewport
 * @param {string} options.rootMargin - Margin around the root
 * @returns {Object} - The ref to attach to the element and whether it is in view
 */
export function useInView({
  threshold = 0.1,
  root = null,
  rootMargin = "0px",
} = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold,
        root,
        rootMargin,
      }
    );

    const currentRef = ref.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, root, rootMargin]);

  return { ref, isInView };
}
