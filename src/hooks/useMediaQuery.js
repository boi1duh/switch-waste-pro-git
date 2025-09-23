import { useState, useEffect } from 'react';

/**
 * Custom hook to detect media queries (e.g., for responsive components)
 * @param {string} query - Media query string, e.g., '(max-width: 768px)'
 * @returns {boolean} - Whether the query matches current viewport
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    if (mediaQuery.matches !== matches) {
      setMatches(mediaQuery.matches);
    }

    const handler = (e) => setMatches(e.matches);
    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, [query, matches]);

  return matches;
};

export default useMediaQuery;