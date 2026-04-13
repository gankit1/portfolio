import { useEffect, useCallback } from "react";
import { useLocation } from "react-router-dom";

interface ScrollToTopOptions {
  smooth?: boolean;
  deps?: any[];
  scrollOnRouteChange?: boolean;
}

/**
 * Custom hook that scrolls to the top of the page when route changes or dependencies update
 * @param options - Options for controlling scroll behavior
 */
const useScrollToTop = (options: ScrollToTopOptions = {}): void => {
  const { smooth = true, deps = [], scrollOnRouteChange = true } = options;
  const location = useLocation();

  // Function to scroll to top — stable with useCallback
  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: smooth ? "smooth" : "auto",
    });
  }, [smooth]);

  // Scroll on route change if enabled
  useEffect(() => {
    if (scrollOnRouteChange) {
      scrollToTop();
    }
  }, [location.pathname, scrollOnRouteChange, scrollToTop]);

  // Scroll when dependencies change
  useEffect(() => {
    if (deps.length > 0) {
      scrollToTop();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);
};

export default useScrollToTop;
