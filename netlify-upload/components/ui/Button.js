import React, { useMemo } from 'react';

const Button = React.forwardRef(({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullWidth = false,
  icon,
  iconPosition = 'left',
  onClick,
  className = '',
  type = 'button',
  'aria-label': ariaLabel,
  ...props
}, ref) => {
  // Memoize class combinations for performance
  const classes = useMemo(() => {
    const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden';

    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500 shadow-md hover:shadow-lg active:bg-blue-800',
      secondary: 'bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-50 focus:ring-blue-500 active:bg-blue-100',
      danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg active:bg-red-800',
      success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-md hover:shadow-lg active:bg-green-800',
      outline: 'bg-transparent text-gray-700 border-2 border-gray-300 hover:bg-gray-50 focus:ring-gray-500 active:bg-gray-100',
      ghost: 'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500 active:bg-gray-200',
      link: 'bg-transparent text-blue-600 hover:text-blue-800 hover:underline focus:ring-blue-500 p-0 shadow-none hover:shadow-none',
    };

    const sizes = {
      small: 'px-3 py-2 text-sm gap-2',
      medium: 'px-4 py-3 text-base gap-2',
      large: 'px-6 py-4 text-lg gap-3',
      icon: 'p-2',
    };

    const widthClass = fullWidth ? 'w-full' : '';
    const loadingClass = loading ? 'cursor-wait' : '';

    return `${baseClasses} ${variants[variant] || variants.primary} ${sizes[size] || sizes.medium} ${widthClass} ${loadingClass} ${className}`.trim();
  }, [variant, size, fullWidth, loading, className]);

  // Memoize loading spinner to prevent recreation
  const loadingSpinner = useMemo(() => (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4 flex-shrink-0"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  ), []);

  // Handle click with loading prevention
  const handleClick = (e) => {
    if (loading || disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  // Determine accessibility label
  const computedAriaLabel = ariaLabel || (loading ? 'Loading...' : undefined);

  // Render icon with proper positioning
  const renderIcon = () => {
    if (!icon) return null;

    const iconElement = React.cloneElement(icon, {
      className: `flex-shrink-0 ${icon.props.className || ''}`,
      'aria-hidden': true,
    });

    return iconElement;
  };

  const renderContent = () => (
    <>
      {loading && loadingSpinner}
      {icon && iconPosition === 'left' && renderIcon()}
      {children}
      {icon && iconPosition === 'right' && renderIcon()}
    </>
  );

  return (
    <button
      ref={ref}
      type={type}
      className={classes}
      disabled={disabled || loading}
      onClick={handleClick}
      aria-label={computedAriaLabel}
      aria-disabled={disabled || loading}
      role="button"
      tabIndex={disabled || loading ? -1 : 0}
      {...props}
    >
      {renderContent()}

      {/* Focus ring enhancement for better accessibility */}
      <span className="absolute inset-0 rounded-lg ring-2 ring-transparent focus-within:ring-blue-500 focus-within:ring-offset-2 pointer-events-none" />
    </button>
  );
});

Button.displayName = 'Button';

export default Button;