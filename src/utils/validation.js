// Form validation utilities
export const validateContactForm = (values) => {
  const errors = {};

  // Name validation
  if (!values.name?.trim()) {
    errors.name = 'Name is required';
  } else if (values.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  }

  // Email validation
  if (!values.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email is invalid';
  }

  // Phone validation (optional but if provided, validate format)
  if (values.phone?.trim() && !/^[\+]?[0-9\s\-\(\)]{10,}$/.test(values.phone.trim())) {
    errors.phone = 'Please enter a valid phone number';
  }

  // Service validation
  if (!values.service) {
    errors.service = 'Please select a service';
  }

  // Message validation
  if (!values.message?.trim()) {
    errors.message = 'Message is required';
  } else if (values.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  }

  // Consent validation
  if (!values.consent) {
    errors.consent = 'You must agree to the terms';
  }

  return errors;
};

// Error message utilities
export const getUserFriendlyErrorMessage = (error) => {
  if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
    return 'Network error. Please check your internet connection and try again.';
  } else if (error.message.includes('HTTP 404')) {
    return 'Contact form is temporarily unavailable. Please email us directly at info@switchwaste.co.za';
  } else if (error.message.includes('HTTP 500')) {
    return 'Server error. Please try again later or contact us by phone.';
  } else if (error.message.includes('Invalid response format')) {
    return 'Server returned an unexpected response. Please try again.';
  } else {
    return error.message || 'Failed to send message. Please try again.';
  }
};