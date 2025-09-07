import { useState, useCallback, useMemo } from 'react';

const useForm = (initialValues = {}, validate = () => ({})) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);

  // Memoize initial values to prevent unnecessary recalculations
  const memoizedInitialValues = useMemo(() => initialValues, []);

  // Handle input changes
  const handleChange = useCallback((e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === 'checkbox' ? checked : value;

    setValues(prev => ({
      ...prev,
      [name]: fieldValue
    }));

    // Clear error when user starts typing (only if error exists)
    setErrors(prev => {
      if (prev[name]) {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      }
      return prev;
    });
  }, []);

  // Handle input blur (mark as touched)
  const handleBlur = useCallback((fieldName) => {
    // Support both direct field name and function that returns field name
    const name = typeof fieldName === 'function' ? fieldName() : fieldName;

    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    // Validate field on blur
    const fieldErrors = validate(values);
    if (fieldErrors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: fieldErrors[name]
      }));
    }
  }, [values, validate]);

  // Handle form submission
  const handleSubmit = useCallback(async (onSubmit) => {
    setSubmitCount(prev => prev + 1);
    setIsSubmitting(true);

    // Mark all fields as touched
    const allTouched = Object.keys(values).reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {});
    setTouched(allTouched);

    // Validate all fields
    const validationErrors = validate(values);
    setErrors(validationErrors);

    // Check if form is valid
    const hasErrors = Object.keys(validationErrors).length === 0;

    if (hasErrors) {
      try {
        await onSubmit(values);
        // Reset form on successful submission
        setValues(memoizedInitialValues);
        setTouched({});
        setErrors({});
      } catch (error) {
        console.error('Form submission error:', error);
        // Keep form state on error
      }
    }

    setIsSubmitting(false);
  }, [values, validate, memoizedInitialValues]);

  // Reset form
  const reset = useCallback(() => {
    setValues(memoizedInitialValues);
    setErrors({});
    setTouched({});
    setSubmitCount(0);
  }, [memoizedInitialValues]);

  // Set specific field value programmatically
  const setFieldValue = useCallback((name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));
  }, []);

  // Set specific field error
  const setFieldError = useCallback((name, error) => {
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  }, []);

  // Memoize expensive calculations
  const formState = useMemo(() => {
    const hasErrors = Object.keys(errors).length > 0;
    const hasTouchedFields = Object.keys(touched).length > 0;
    const isValid = !hasErrors && hasTouchedFields;

    // More efficient dirty check using shallow comparison
    const isDirty = Object.keys(values).some(key =>
      values[key] !== memoizedInitialValues[key]
    );

    return { isValid, isDirty };
  }, [errors, touched, values, memoizedInitialValues]);

  return {
    values,
    errors,
    touched,
    isSubmitting,
    submitCount,
    isValid: formState.isValid,
    isDirty: formState.isDirty,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
    setFieldError,
  };
};

export default useForm;