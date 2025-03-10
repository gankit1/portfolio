/**
 * Custom hook for detecting when an element enters the viewport
 * Last updated by ShankarCoursera: 2025-03-08 19:06:17
 */

import { useState, useEffect, useRef, RefObject } from "react";

interface IntersectionObserverOptions {
  /**
   * Root element to use as viewport (null means browser viewport)
   */
  root?: Element | null;

  /**
   * Margin around the root element
   */
  rootMargin?: string;

  /**
   * Threshold(s) at which to trigger callback
   */
  threshold?: number | number[];

  /**
   * Whether to disconnect the observer after first intersection
   */
  disconnectOnEntry?: boolean;
}

/**
 * Custom hook that observes an element and detects when it enters the viewport
 * @param options - IntersectionObserver options
 * @returns [ref, isIntersecting, entry] - Element reference, boolean indicating if element is intersecting, and the IntersectionObserverEntry
 */
const useIntersectionObserver = <T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T>, boolean, IntersectionObserverEntry | null] => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const elementRef = useRef<T>(null!);
  const {
    root = null,
    rootMargin = "0px",
    threshold = 0,
    disconnectOnEntry = false,
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observerCallback: IntersectionObserverCallback = ([entry]) => {
      setIsIntersecting(entry.isIntersecting);
      setEntry(entry);

      // Disconnect observer if element has entered and disconnect option is true
      if (disconnectOnEntry && entry.isIntersecting && observer) {
        observer.disconnect();
      }
    };

    const observer = new IntersectionObserver(observerCallback, {
      root,
      rootMargin,
      threshold,
    });

    observer.observe(element);

    // Cleanup: disconnect observer when component unmounts
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [root, rootMargin, threshold, disconnectOnEntry]);

  return [elementRef, isIntersecting, entry];
};

export default useIntersectionObserver;
