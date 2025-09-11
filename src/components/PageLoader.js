import React, { memo } from 'react';
import PropTypes from 'prop-types';

/**
 * PageLoader component for Suspense fallback
 * Provides a skeleton loading state for page transitions
 */
const PageLoader = memo(({ className = "" }) => {
  return (
    <div className={`min-h-screen bg-white ${className}`} role="status" aria-label="Loading page content">
      {/* Header skeleton */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" aria-hidden="true"></div>
              <div className="space-y-2">
                <div className="w-32 h-4 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
                <div className="w-24 h-3 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
              </div>
            </div>
            <div className="hidden md:flex space-x-8">
              {Array.from({ length: 5 }, (_, i) => (
                <div key={i} className="w-20 h-4 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main content skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Hero section skeleton */}
          <div className="min-h-[60vh] bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
            <div className="text-center space-y-4">
              <div className="w-96 h-8 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
              <div className="w-80 h-6 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
              <div className="w-64 h-4 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
            </div>
          </div>

          {/* Content sections skeleton */}
          <div className="grid md:grid-cols-3 gap-6">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm space-y-4">
                <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse" aria-hidden="true"></div>
                <div className="w-32 h-6 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
                <div className="space-y-2">
                  <div className="w-full h-4 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
                  <div className="w-3/4 h-4 bg-gray-200 rounded animate-pulse" aria-hidden="true"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screen reader announcement */}
      <div className="sr-only" aria-live="polite">
        Loading page content, please wait...
      </div>
    </div>
  );
});

PageLoader.propTypes = {
  className: PropTypes.string
};

PageLoader.displayName = 'PageLoader';

export default PageLoader;