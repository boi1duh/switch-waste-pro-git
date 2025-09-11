/**
 * Validation utilities for forms and data
 */

// Email validation regex
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Phone number validation regex (South African format)
const PHONE_REGEX = /^(\+27|0)[6-8][0-9]{8}$/;

// Postal code validation (South African)
const POSTAL_CODE_REGEX = /^[0-9]{4}$/;

/**
 * Validate email address
 */
export function validateEmail(email) {
  if (!email || typeof email !== 'string') {
    return { isValid: false, message: 'Email is required' };
  }

  const trimmedEmail = email.trim();

  if (!EMAIL_REGEX.test(trimmedEmail)) {
    return { isValid: false, message: 'Please enter a valid email address' };
  }

  return { isValid: true };
}

/**
 * Validate phone number
 */
export function validatePhone(phone) {
  if (!phone || typeof phone !== 'string') {
    return { isValid: false, message: 'Phone number is required' };
  }

  const trimmedPhone = phone.trim().replace(/\s+/g, '');

  if (!PHONE_REGEX.test(trimmedPhone)) {
    return { isValid: false, message: 'Please enter a valid South African phone number' };
  }

  return { isValid: true };
}

/**
 * Validate required field
 */
export function validateRequired(value, fieldName = 'Field') {
  if (!value || (typeof value === 'string' && value.trim() === '')) {
    return { isValid: false, message: `${fieldName} is required` };
  }

  return { isValid: true };
}

/**
 * Validate string length
 */
export function validateLength(value, min = 0, max = Infinity, fieldName = 'Field') {
  if (!value || typeof value !== 'string') {
    return { isValid: false, message: `${fieldName} is required` };
  }

  const length = value.trim().length;

  if (length < min) {
    return { isValid: false, message: `${fieldName} must be at least ${min} characters` };
  }

  if (length > max) {
    return { isValid: false, message: `${fieldName} must be no more than ${max} characters` };
  }

  return { isValid: true };
}

/**
 * Validate postal code
 */
export function validatePostalCode(postalCode) {
  if (!postalCode || typeof postalCode !== 'string') {
    return { isValid: false, message: 'Postal code is required' };
  }

  const trimmedCode = postalCode.trim();

  if (!POSTAL_CODE_REGEX.test(trimmedCode)) {
    return { isValid: false, message: 'Please enter a valid 4-digit postal code' };
  }

  return { isValid: true };
}

/**
 * Validate contact form
 */
export function validateContactForm(formData) {
  const errors = {};

  // Name validation
  const nameValidation = validateLength(formData.name, 2, 100, 'Name');
  if (!nameValidation.isValid) {
    errors.name = nameValidation.message;
  }

  // Email validation
  const emailValidation = validateEmail(formData.email);
  if (!emailValidation.isValid) {
    errors.email = emailValidation.message;
  }

  // Phone validation (optional)
  if (formData.phone) {
    const phoneValidation = validatePhone(formData.phone);
    if (!phoneValidation.isValid) {
      errors.phone = phoneValidation.message;
    }
  }

  // Company validation (optional)
  if (formData.company) {
    const companyValidation = validateLength(formData.company, 2, 100, 'Company');
    if (!companyValidation.isValid) {
      errors.company = companyValidation.message;
    }
  }

  // Message validation
  const messageValidation = validateLength(formData.message, 10, 1000, 'Message');
  if (!messageValidation.isValid) {
    errors.message = messageValidation.message;
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate service inquiry form
 */
export function validateServiceInquiryForm(formData) {
  const errors = {};

  // Service type validation
  if (!formData.serviceType) {
    errors.serviceType = 'Please select a service type';
  }

  // Contact form validation
  const contactValidation = validateContactForm(formData);
  if (!contactValidation.isValid) {
    Object.assign(errors, contactValidation.errors);
  }

  // Additional fields based on service type
  if (formData.serviceType === 'waste-collection') {
    if (!formData.collectionDate) {
      errors.collectionDate = 'Collection date is required';
    }

    if (!formData.wasteType) {
      errors.wasteType = 'Waste type is required';
    }

    if (formData.address) {
      const addressValidation = validateLength(formData.address, 10, 500, 'Address');
      if (!addressValidation.isValid) {
        errors.address = addressValidation.message;
      }
    }
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * Validate newsletter subscription
 */
export function validateNewsletterSubscription(email) {
  return validateEmail(email);
}

/**
 * Sanitize input to prevent XSS
 */
export function sanitizeInput(input) {
  if (typeof input !== 'string') return input;

  return input
    .replace(/</g, '<')
    .replace(/>/g, '>')
    .replace(/"/g, '"')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
}

/**
 * Validate file upload
 */
export function validateFileUpload(file, allowedTypes = [], maxSize = 5 * 1024 * 1024) {
  const errors = [];

  if (!file) {
    errors.push('No file selected');
    return { isValid: false, errors };
  }

  // Check file size
  if (file.size > maxSize) {
    errors.push(`File size must be less than ${Math.round(maxSize / 1024 / 1024)}MB`);
  }

  // Check file type
  if (allowedTypes.length > 0 && !allowedTypes.includes(file.type)) {
    errors.push(`File type not allowed. Allowed types: ${allowedTypes.join(', ')}`);
  }

  return {
    isValid: errors.length === 0,
    errors
  };
}

export default {
  validateEmail,
  validatePhone,
  validateRequired,
  validateLength,
  validatePostalCode,
  validateContactForm,
  validateServiceInquiryForm,
  validateNewsletterSubscription,
  sanitizeInput,
  validateFileUpload
};