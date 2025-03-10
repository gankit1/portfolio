/**
 * Formats a date string to a readable format
 * @param dateString - Date string to format
 * @param includeDay - Whether to include the day in the formatted date
 * @returns Formatted date string
 */
export const formatDate = (
  dateString: string,
  includeDay: boolean = false
): string => {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "short",
    day: includeDay ? "numeric" : undefined,
  };
  return new Intl.DateTimeFormat("en-US", options).format(date);
};

/**
 * Capitalizes the first letter of each word in a string
 * @param str - String to capitalize
 * @returns String with first letter of each word capitalized
 */
export const capitalizeWords = (str: string): string => {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

/**
 * Truncates a string if it exceeds max length
 * @param text - Text to truncate
 * @param maxLength - Maximum length before truncation
 * @returns Truncated text with ellipsis if needed
 */
export const truncateText = (text: string, maxLength: number): string => {
  if (text.length <= maxLength) return text;
  return `${text.substring(0, maxLength)}...`;
};

/**
 * Generates a random ID string
 * @param length - Length of the ID to generate
 * @returns Random ID string
 */
export const generateRandomId = (length: number = 8): string => {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

/**
 * Debounce function to limit the rate at which a function can fire
 * @param func - Function to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced function
 */
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  delay: number
): ((...args: Parameters<F>) => void) => {
  let timeoutId: NodeJS.Timeout;

  return function (this: any, ...args: Parameters<F>) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(this, args), delay);
  };
};

/**
 * Scroll to element by ID with smooth scrolling
 * @param elementId - ID of element to scroll to
 * @param offset - Optional offset from the top of the element
 */
export const scrollToElement = (
  elementId: string,
  offset: number = 0
): void => {
  const element = document.getElementById(elementId);
  if (element) {
    const elementPosition =
      element.getBoundingClientRect().top + window.pageYOffset;
    window.scrollTo({
      top: elementPosition - offset,
      behavior: "smooth",
    });
  }
};

/**
 * Check if an element is in the viewport
 * @param element - DOM element to check
 * @param offset - Optional offset for when element is considered in viewport
 * @returns Boolean indicating if element is in viewport
 */
export const isInViewport = (
  element: HTMLElement,
  offset: number = 0
): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top + offset <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
};
