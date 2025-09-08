import React, { useState, useMemo } from 'react';
import { useForm } from '../../hooks';
import {
  SERVICE_OPTIONS,
  WASTE_VOLUME_OPTIONS,
  COLLECTION_FREQUENCY_OPTIONS,
  FORM_INITIAL_VALUES,
  API_ENDPOINTS
} from '../../constants/ContactData';
import { validateContactForm, getUserFriendlyErrorMessage } from '../../utils/validation';

const ContactForm = () => {
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Memoize validation function to prevent unnecessary re-renders
  const memoizedValidate = useMemo(() => validateContactForm, []);

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(FORM_INITIAL_VALUES, memoizedValidate);

  const onSubmit = async (formValues) => {
    setErrorMessage('');
    try {
      const formDataToSend = new FormData();

      // Add all form fields to FormData
      Object.keys(formValues).forEach(key => {
        if (key === 'consent' || key === 'newsletter') {
          formDataToSend.append(key, formValues[key] ? 'on' : '');
        } else {
          formDataToSend.append(key, formValues[key]);
        }
      });

      // Add timestamp for security
      formDataToSend.append('timestamp', new Date().toISOString());

      const response = await fetch(API_ENDPOINTS.CONTACT_HANDLER, {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorText || response.statusText}`);
      }

      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        throw new Error('Server returned invalid response format');
      }

      const result = await response.json();

      if (result.success) {
        setSuccessMessage(result.message || 'Thank you! Your message has been sent successfully.');
        setTimeout(() => setSuccessMessage(''), 5000);
      } else {
        throw new Error(result.message || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setErrorMessage(getUserFriendlyErrorMessage(error));
    }
  };

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Request Your Free Quote</h2>
      <p className="text-gray-600 mb-8">
        Fill out the form below and we'll get back to you within 24 hours with a customized solution for your waste management needs.
      </p>

      {successMessage && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6" role="alert">
          <i className="fas fa-check-circle mr-2" aria-hidden="true"></i>
          {successMessage}
        </div>
      )}

      {errorMessage && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6" role="alert">
          <i className="fas fa-exclamation-triangle mr-2" aria-hidden="true"></i>
          {errorMessage}
        </div>
      )}

      <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="space-y-6" noValidate>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={() => handleBlur('name')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
              }`}
              required
              aria-describedby={errors.name && touched.name ? "name-error" : undefined}
            />
            {errors.name && touched.name && (
              <p id="name-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.name}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={() => handleBlur('email')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
              }`}
              required
              aria-describedby={errors.email && touched.email ? "email-error" : undefined}
            />
            {errors.email && touched.email && (
              <p id="email-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={() => handleBlur('phone')}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.phone && touched.phone ? 'border-red-500' : 'border-gray-300'
              }`}
              placeholder="e.g., 011 123 4567"
              aria-describedby={errors.phone && touched.phone ? "phone-error" : undefined}
            />
            {errors.phone && touched.phone && (
              <p id="phone-error" className="text-red-500 text-sm mt-1" role="alert">
                {errors.phone}
              </p>
            )}
          </div>
          <div>
            <label htmlFor="company" className="block text-gray-700 font-medium mb-2">
              Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={values.company}
              onChange={handleChange}
              onBlur={() => handleBlur('company')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Optional"
            />
          </div>
        </div>

        <div>
          <label htmlFor="service" className="block text-gray-700 font-medium mb-2">
            Primary Service Required *
          </label>
          <select
            id="service"
            name="service"
            value={values.service}
            onChange={handleChange}
            onBlur={() => handleBlur('service')}
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.service && touched.service ? 'border-red-500' : 'border-gray-300'
            }`}
            required
            aria-describedby={errors.service && touched.service ? "service-error" : undefined}
          >
            {SERVICE_OPTIONS.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.service && touched.service && (
            <p id="service-error" className="text-red-500 text-sm mt-1" role="alert">
              {errors.service}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="waste_volume" className="block text-gray-700 font-medium mb-2">
              Estimated Waste Volume
            </label>
            <select
              id="waste_volume"
              name="waste_volume"
              value={values.waste_volume}
              onChange={handleChange}
              onBlur={() => handleBlur('waste_volume')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {WASTE_VOLUME_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="collection_frequency" className="block text-gray-700 font-medium mb-2">
              Collection Frequency
            </label>
            <select
              id="collection_frequency"
              name="collection_frequency"
              value={values.collection_frequency}
              onChange={handleChange}
              onBlur={() => handleBlur('collection_frequency')}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {COLLECTION_FREQUENCY_OPTIONS.map(option => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
            Message & Special Requirements *
          </label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            onBlur={() => handleBlur('message')}
            rows="5"
            className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
              errors.message && touched.message ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Please describe your waste management needs, any special requirements, current challenges, or questions you may have..."
            required
            aria-describedby={errors.message && touched.message ? "message-error" : undefined}
          />
          {errors.message && touched.message && (
            <p id="message-error" className="text-red-500 text-sm mt-1" role="alert">
              {errors.message}
            </p>
          )}
        </div>

        <div className="space-y-4">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={values.consent}
              onChange={handleChange}
              onBlur={() => handleBlur('consent')}
              className="mt-1"
              required
              aria-describedby={errors.consent && touched.consent ? "consent-error" : undefined}
            />
            <span className="text-sm text-gray-600">
              I agree to be contacted by Switch Waste Solutions regarding my inquiry and consent to the processing of my personal information in accordance with the Privacy Policy.
            </span>
          </label>
          {errors.consent && touched.consent && (
            <p id="consent-error" className="text-red-500 text-sm" role="alert">
              {errors.consent}
            </p>
          )}

          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              id="newsletter"
              name="newsletter"
              checked={values.newsletter}
              onChange={handleChange}
              onBlur={() => handleBlur('newsletter')}
              className="mt-1"
            />
            <span className="text-sm text-gray-600">
              I would like to receive updates about waste management best practices and regulatory changes.
            </span>
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          aria-describedby={isSubmitting ? "submitting-status" : undefined}
        >
          {isSubmitting ? (
            <>
              <i className="fas fa-spinner fa-spin" aria-hidden="true"></i>
              <span id="submitting-status">Sending...</span>
            </>
          ) : (
            <>
              <i className="fas fa-paper-plane" aria-hidden="true"></i>
              Send My Request
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;