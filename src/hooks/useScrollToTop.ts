/**
 * Custom hook for scrolling to the top of the page
 * Last updated by ShankarCoursera: 2025-03-08 19:06:17
 */

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopOptions {
  /**
   * Whether to smooth scroll to top
   */
  smooth?: boolean;

  /**
   * Dependencies to watch for changes and trigger scroll
   */
  deps?: any[];

  /**
   * Whether to scroll on route change
   */
  scrollOnRouteChange?: boolean;
}

/**
 * Custom hook that scrolls to the top of the page when route changes or dependencies update
 * @param options - Options for controlling scroll behavior
 */
const useScrollToTop = (options: ScrollToTopOptions = {}): void => {
  const { smooth = true, deps = [], scrollOnRouteChange = true } = options;
  const location = useLocation();

  // Function to scroll to top
  const scrollToTop = () => {
    const scrollOptions: ScrollToOptions = {
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto",
    };

    window.scrollTo(scrollOptions);
  };

  // Scroll on route change if enabled
  useEffect(() => {
    if (scrollOnRouteChange) {
      scrollToTop();
    }
  }, [location.pathname, scrollOnRouteChange]);

  // Scroll when dependencies change
  useEffect(() => {
    if (deps.length > 0) {
      scrollToTop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};

export default useScrollToTop;
