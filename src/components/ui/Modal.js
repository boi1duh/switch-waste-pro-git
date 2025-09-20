import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const Modal = ({
  isOpen,
  onClose,
  children,
  title,
  size = 'medium',
  closeOnOverlayClick = true,
  showCloseButton = true,
  className = '',
}) => {
  const stableOnClose = useCallback(onClose, [onClose]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        stableOnClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, stableOnClose]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget && closeOnOverlayClick) {
      onClose();
    }
  };

  const sizes = {
    small: 'max-w-md',
    medium: 'max-w-lg',
    large: 'max-w-2xl',
    extraLarge: 'max-w-4xl',
    full: 'max-w-7xl',
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      handleOverlayClick(e);
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black bg-opacity-50 transition-opacity flex items-center justify-center p-4"
      onClick={handleOverlayClick}
      onKeyDown={handleKeyDown}
      role="presentation" // Use presentation to indicate it's a container for the dialog
    >
        <div
          className={`relative w-full ${sizes[size]} bg-white rounded-xl shadow-2xl transform transition-all ${className}`}
          role="dialog"
          aria-modal="true"
          aria-labelledby={title ? "modal-title" : undefined}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              {title && (
                <h2 id="modal-title" className="text-xl font-bold text-gray-900">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  aria-label="Close modal"
                >
                  <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-6">
            {children}
          </div>
        </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'extraLarge', 'full']),
  closeOnOverlayClick: PropTypes.bool,
  showCloseButton: PropTypes.bool,
  className: PropTypes.string,
};

export default Modal;