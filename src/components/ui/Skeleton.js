import React from 'react';

const Skeleton = ({
  className = '',
  variant = 'rectangle',
  width,
  height,
  ...props
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const variants = {
    rectangle: '',
    circle: 'rounded-full',
    text: 'h-4 rounded',
    title: 'h-6 rounded w-3/4',
    avatar: 'rounded-full',
    card: 'rounded-lg',
    button: 'rounded-md h-10',
  };

  const style = {
    ...(width && { width }),
    ...(height && { height }),
  };

  const classes = `${baseClasses} ${variants[variant]} ${className}`;

  return <div className={classes} style={style} {...props} />;
};

// Specific skeleton components
const SkeletonText = ({ lines = 3, className = '', ...props }) => (
  <div className={`space-y-2 ${className}`} {...props}>
    {Array.from({ length: lines }, (_, i) => (
      <Skeleton
        key={i}
        variant="text"
        className={i === lines - 1 ? 'w-3/4' : 'w-full'}
      />
    ))}
  </div>
);

const SkeletonCard = ({ className = '', showAvatar = false, ...props }) => (
  <div className={`p-4 border border-gray-200 rounded-lg ${className}`} {...props}>
    {showAvatar && (
      <div className="flex items-center space-x-3 mb-3">
        <Skeleton variant="avatar" width="40px" height="40px" />
        <div className="flex-1">
          <Skeleton variant="title" className="mb-2" />
          <Skeleton variant="text" width="60%" />
        </div>
      </div>
    )}
    <SkeletonText lines={2} />
    <div className="flex space-x-2 mt-4">
      <Skeleton variant="button" width="80px" />
      <Skeleton variant="button" width="60px" />
    </div>
  </div>
);

const SkeletonTable = ({ rows = 5, columns = 4, className = '', ...props }) => (
  <div className={`space-y-3 ${className}`} {...props}>
    {/* Table header */}
    <div className="flex space-x-4">
      {Array.from({ length: columns }, (_, i) => (
        <Skeleton key={`header-${i}`} variant="text" className="flex-1" />
      ))}
    </div>
    {/* Table rows */}
    {Array.from({ length: rows }, (_, rowIndex) => (
      <div key={`row-${rowIndex}`} className="flex space-x-4">
        {Array.from({ length: columns }, (_, colIndex) => (
          <Skeleton
            key={`cell-${rowIndex}-${colIndex}`}
            variant="text"
            className="flex-1"
            style={{ width: colIndex === 0 ? '30%' : '20%' }}
          />
        ))}
      </div>
    ))}
  </div>
);

const SkeletonProduct = ({ className = '', ...props }) => (
  <div className={`space-y-3 ${className}`} {...props}>
    <Skeleton variant="rectangle" height="200px" />
    <Skeleton variant="title" />
    <SkeletonText lines={2} />
    <div className="flex justify-between items-center">
      <Skeleton variant="text" width="80px" />
      <Skeleton variant="button" width="100px" />
    </div>
  </div>
);

const SkeletonProfile = ({ className = '', ...props }) => (
  <div className={`space-y-4 ${className}`} {...props}>
    <div className="flex items-center space-x-4">
      <Skeleton variant="avatar" width="80px" height="80px" />
      <div className="space-y-2 flex-1">
        <Skeleton variant="title" />
        <Skeleton variant="text" width="60%" />
      </div>
    </div>
    <SkeletonText lines={4} />
  </div>
);

// Attach sub-components to Skeleton
Skeleton.Text = SkeletonText;
Skeleton.Card = SkeletonCard;
Skeleton.Table = SkeletonTable;
Skeleton.Product = SkeletonProduct;
Skeleton.Profile = SkeletonProfile;

export default Skeleton;