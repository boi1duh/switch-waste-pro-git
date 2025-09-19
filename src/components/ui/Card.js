import React from 'react';
import PropTypes from 'prop-types';

const Card = ({
  children,
  className = '',
  hover = true,
  shadow = 'md',
  padding = 'normal',
  ...props
}) => {
  const baseClasses = 'bg-white rounded-xl border border-gray-200 transition-all duration-200';

  const shadows = {
    none: '',
    sm: 'shadow-sm',
    md: 'shadow-md',
    lg: 'shadow-lg',
    xl: 'shadow-xl',
  };

  const paddings = {
    none: '',
    small: 'p-4',
    normal: 'p-6',
    large: 'p-8',
  };

  const hoverClasses = hover
    ? 'hover:shadow-lg hover:-translate-y-1 hover:border-gray-300'
    : '';

  const classes = `${baseClasses} ${shadows[shadow]} ${paddings[padding]} ${hoverClasses} ${className}`;

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  );
};

const CardHeader = ({ children, className = '', ...props }) => {
  return (
    <div className={`mb-4 ${className}`} {...props}>
      {children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  hover: PropTypes.bool,
  shadow: PropTypes.oneOf(['none', 'sm', 'md', 'lg', 'xl']),
  padding: PropTypes.oneOf(['none', 'small', 'normal', 'large']),
};

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardTitle.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardDescription.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

const CardTitle = ({ children, className = '', ...props }) => {
  return (
    <h3 className={`text-xl font-bold text-gray-900 mb-2 ${className}`} {...props}>
      {children}
    </h3>
  );
};

const CardDescription = ({ children, className = '', ...props }) => {
  return (
    <p className={`text-gray-600 ${className}`} {...props}>
      {children}
    </p>
  );
};

const CardContent = ({ children, className = '', ...props }) => {
  return (
    <div className={className} {...props}>
      {children}
    </div>
  );
};

const CardFooter = ({ children, className = '', ...props }) => {
  return (
    <div className={`mt-4 pt-4 border-t border-gray-200 ${className}`} {...props}>
      {children}
    </div>
  );
};

// Attach sub-components to Card
Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;