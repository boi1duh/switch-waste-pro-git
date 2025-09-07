import React, { useMemo } from 'react';

const Skeleton = React.forwardRef(({
  className = '',
  variant = 'rectangle',
  width,
  height,
  animation = true,
  speed = 'normal',
  theme = 'light',
  ...props
}, ref) => {
  // Memoize style object to prevent recreation
  const style = useMemo(() => ({
    ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
    ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
  }), [width, height]);

  // Memoize class computation for performance
  const classes = useMemo(() => {
    const baseClasses = 'relative overflow-hidden rounded';

    // Animation classes based on speed and animation preference
    const animationClasses = animation ? {
      slow: 'animate-pulse',
      normal: 'animate-pulse',
      fast: 'animate-pulse duration-500',
    }[speed] || 'animate-pulse' : '';

    // Theme-based background colors
    const themeClasses = {
      light: 'bg-gray-200',
      dark: 'bg-gray-700',
      auto: 'bg-gray-200 dark:bg-gray-700',
    }[theme] || 'bg-gray-200';

    const variants = {
      rectangle: '',
      circle: 'rounded-full',
      text: 'h-4',
      title: 'h-6 w-3/4',
      avatar: 'rounded-full',
      card: 'rounded-lg',
      button: 'rounded-md h-10',
      input: 'rounded-md h-10',
      image: 'aspect-video',
      video: 'aspect-video',
    };

    return `${baseClasses} ${animationClasses} ${themeClasses} ${variants[variant] || ''} ${className}`.trim();
  }, [animation, speed, theme, variant, className]);

  // Shimmer effect overlay
  const shimmerEffect = useMemo(() => {
    if (!animation) return null;

    return (
      <div
        className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"
        style={{
          animation: speed === 'fast' ? 'shimmer 1s infinite' : speed === 'slow' ? 'shimmer 3s infinite' : 'shimmer 2s infinite'
        }}
        aria-hidden="true"
      />
    );
  }, [animation, speed]);

  return (
    <div
      ref={ref}
      className={classes}
      style={style}
      role="presentation"
      aria-label="Loading content"
      {...props}
    >
      {shimmerEffect}
    </div>
  );
});

Skeleton.displayName = 'Skeleton';

// Enhanced sub-components with better performance and accessibility
const SkeletonText = React.memo(({ lines = 3, className = '', theme = 'light', ...props }) => {
  const skeletonLines = React.useMemo(() =>
    Array.from({ length: lines }, (_, i) => (
      <Skeleton
        key={i}
        variant="text"
        theme={theme}
        className={i === lines - 1 ? 'w-3/4' : 'w-full'}
      />
    )), [lines, theme]
  );

  return (
    <div
      className={`space-y-2 ${className}`}
      role="presentation"
      aria-label={`Loading ${lines} lines of text`}
      {...props}
    >
      {skeletonLines}
    </div>
  );
});

SkeletonText.displayName = 'SkeletonText';

const SkeletonCard = React.memo(({
  className = '',
  showAvatar = false,
  theme = 'light',
  ...props
}) => (
  <div
    className={`p-4 border border-gray-200 rounded-lg ${className}`}
    role="presentation"
    aria-label="Loading card content"
    {...props}
  >
    {showAvatar && (
      <div className="flex items-center space-x-3 mb-3">
        <Skeleton variant="avatar" width="40px" height="40px" theme={theme} />
        <div className="flex-1">
          <Skeleton variant="title" className="mb-2" theme={theme} />
          <Skeleton variant="text" width="60%" theme={theme} />
        </div>
      </div>
    )}
    <SkeletonText lines={2} theme={theme} />
    <div className="flex space-x-2 mt-4">
      <Skeleton variant="button" width="80px" theme={theme} />
      <Skeleton variant="button" width="60px" theme={theme} />
    </div>
  </div>
));

SkeletonCard.displayName = 'SkeletonCard';

const SkeletonTable = React.memo(({
  rows = 5,
  columns = 4,
  className = '',
  theme = 'light',
  ...props
}) => {
  const tableContent = React.useMemo(() => {
    const headerRow = Array.from({ length: columns }, (_, i) => (
      <Skeleton key={`header-${i}`} variant="text" className="flex-1" theme={theme} />
    ));

    const dataRows = Array.from({ length: rows }, (_, rowIndex) => (
      <div key={`row-${rowIndex}`} className="flex space-x-4">
        {Array.from({ length: columns }, (_, colIndex) => (
          <Skeleton
            key={`cell-${rowIndex}-${colIndex}`}
            variant="text"
            className="flex-1"
            theme={theme}
            style={{ width: colIndex === 0 ? '30%' : '20%' }}
          />
        ))}
      </div>
    ));

    return { headerRow, dataRows };
  }, [rows, columns, theme]);

  return (
    <div
      className={`space-y-3 ${className}`}
      role="presentation"
      aria-label={`Loading table with ${rows} rows and ${columns} columns`}
      {...props}
    >
      {/* Table header */}
      <div className="flex space-x-4">
        {tableContent.headerRow}
      </div>
      {/* Table rows */}
      {tableContent.dataRows}
    </div>
  );
});

SkeletonTable.displayName = 'SkeletonTable';

const SkeletonProduct = React.memo(({
  className = '',
  theme = 'light',
  ...props
}) => (
  <div
    className={`space-y-3 ${className}`}
    role="presentation"
    aria-label="Loading product information"
    {...props}
  >
    <Skeleton variant="image" theme={theme} />
    <Skeleton variant="title" theme={theme} />
    <SkeletonText lines={2} theme={theme} />
    <div className="flex justify-between items-center">
      <Skeleton variant="text" width="80px" theme={theme} />
      <Skeleton variant="button" width="100px" theme={theme} />
    </div>
  </div>
));

SkeletonProduct.displayName = 'SkeletonProduct';

const SkeletonProfile = React.memo(({
  className = '',
  theme = 'light',
  ...props
}) => (
  <div
    className={`space-y-4 ${className}`}
    role="presentation"
    aria-label="Loading profile information"
    {...props}
  >
    <div className="flex items-center space-x-4">
      <Skeleton variant="avatar" width="80px" height="80px" theme={theme} />
      <div className="space-y-2 flex-1">
        <Skeleton variant="title" theme={theme} />
        <Skeleton variant="text" width="60%" theme={theme} />
      </div>
    </div>
    <SkeletonText lines={4} theme={theme} />
  </div>
));

SkeletonProfile.displayName = 'SkeletonProfile';

// Add shimmer animation keyframes (can be added to global CSS)
const shimmerKeyframes = `
@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
`;

// Inject keyframes if not already present
if (typeof document !== 'undefined') {
  const existingStyle = document.getElementById('skeleton-shimmer-keyframes');
  if (!existingStyle) {
    const style = document.createElement('style');
    style.id = 'skeleton-shimmer-keyframes';
    style.textContent = shimmerKeyframes;
    document.head.appendChild(style);
  }
}

// Attach sub-components to Skeleton
Skeleton.Text = SkeletonText;
Skeleton.Card = SkeletonCard;
Skeleton.Table = SkeletonTable;
Skeleton.Product = SkeletonProduct;
Skeleton.Profile = SkeletonProfile;

export default Skeleton;