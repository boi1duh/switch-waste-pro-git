/**
 * GitHub Pages routing utilities
 * Handles SPA routing for GitHub Pages deployment
 */

/**
 * Fix routing for GitHub Pages deployment
 * GitHub Pages serves the app from a subdirectory, so we need to handle routing correctly
 */
export const fixGitHubPagesRouting = () => {
  // Only apply fix if we're on GitHub Pages (not localhost)
  if (window.location.hostname !== 'localhost' && window.location.hostname !== '127.0.0.1') {
    const repoName = '/switch-waste-Pro'; // Update this to match your repository name

    // If the current path doesn't start with the repo name and isn't the root
    if (!window.location.pathname.startsWith(repoName) && window.location.pathname !== '/') {
      // Prepend the repo name to the current path
      const newPath = repoName + window.location.pathname;
      window.history.replaceState(null, '', newPath);
    }
  }
};

/**
 * Get the correct public URL for assets
 */
export const getPublicUrl = (path = '') => {
  if (process.env.NODE_ENV === 'production') {
    const repoName = '/switch-waste-Pro';
    return `${repoName}${path}`;
  }
  return path;
};

/**
 * Check if we're running on GitHub Pages
 */
export const isGitHubPages = () => {
  return window.location.hostname.includes('github.io');
};

/**
 * Get the repository name from the URL
 */
export const getRepoName = () => {
  const pathParts = window.location.pathname.split('/').filter(Boolean);
  return pathParts.length > 0 ? `/${pathParts[0]}` : '';
};

export default {
  fixGitHubPagesRouting,
  getPublicUrl,
  isGitHubPages,
  getRepoName
};