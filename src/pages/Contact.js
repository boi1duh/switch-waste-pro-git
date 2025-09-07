import React, { useState } from "react";
import { useForm } from "../hooks";
import SEO from "../components/SEO";

const Contact = () => {
  const [successMessage, setSuccessMessage] = useState('');

  // Form validation function
  const validate = (values) => {
    const errors = {};

    if (!values.name?.trim()) errors.name = 'Name is required';
    if (!values.email?.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';
    if (!values.service) errors.service = 'Please select a service';
    if (!values.message?.trim()) errors.message = 'Message is required';
    if (!values.consent) errors.consent = 'You must agree to the terms';

    return errors;
  };

  // Initialize form with useForm hook
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      company: '',
      service: '',
      waste_volume: '',
      collection_frequency: '',
      message: '',
      consent: false,
      newsletter: false
    },
    validate
  );

  // Form submission handler
  const onSubmit = async (formValues) => {
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

      const response = await fetch('/php/contact-handler.php', {
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

      // Provide user-friendly error messages
      if (error.message.includes('Failed to fetch') || error.message.includes('NetworkError')) {
        throw new Error('Network error. Please check your internet connection and try again.');
      } else if (error.message.includes('HTTP 404')) {
        throw new Error('Contact form is temporarily unavailable. Please email us directly at info@switchwaste.co.za');
      } else if (error.message.includes('HTTP 500')) {
        throw new Error('Server error. Please try again later or contact us by phone.');
      } else {
        throw new Error(error.message || 'Failed to send message. Please try again.');
      }
    }
  };

  // Structured data for contact page
  const contactStructuredData = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Switch Waste Management Solutions",
    "description": "Get in touch with Switch Waste Solutions for professional waste management services in Johannesburg. Free quotes and emergency services available.",
    "url": "https://www.switchwaste.co.za/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Switch Waste Management Solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "48 16th Avenue",
        "addressLocality": "Edenvale",
        "addressRegion": "Johannesburg",
        "postalCode": "1609",
        "addressCountry": "ZA"
      },
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+27-10-006-9158",
          "contactType": "customer service",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+27-61-600-4720",
          "contactType": "emergency",
          "availableLanguage": "English",
          "description": "Emergency waste management services"
        }
      ],
      "email": "info@switchwaste.co.za"
    }
  };

  return (
    <>
      <SEO
        title="Contact Switch Waste Solutions | Free Quote | Emergency Services | Johannesburg"
        description="Contact Switch Waste Solutions for professional waste management in Johannesburg. Free quotes, emergency pickups available 24/7. Call +27 10 006 9158 or email info@switchwaste.co.za."
        keywords="contact switch waste, waste management quote, emergency waste services, Johannesburg contact, medical waste disposal contact, Gauteng waste services"
        canonical="/contact"
        ogImage="/assets/logo/switch_Pro_logo.png"
        structuredData={contactStructuredData}
      />

      {/* Page Hero */}
      <section className="relative bg-gradient-to-r from-blue-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="hero-badge inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>📞</span>
            <span>Johannesburg, Gauteng</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            <span className="text-blue-600">📞</span> Contact Switch Waste Solutions
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get your free consultation and quote for professional waste management services with complete regulatory compliance.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span>✓</span>
              <span className="text-sm">SANS Compliant</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span>✓</span>
              <span className="text-sm">Emergency Services</span>
            </div>
            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm">
              <span>✓</span>
              <span className="text-sm">24/7 Support</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Get In Touch</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Ready to switch to professional waste management? Contact us today for a free consultation and customized quote for your specific needs.
                </p>
              </div>

              {/* Facility Images */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <img
                  src="/assets/contact-location.jpg"
                  alt="Switch Waste Solutions Johannesburg office location"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
                <img
                  src="/assets/safety-equipment.jpg"
                  alt="Professional safety equipment and waste management facilities"
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                  loading="lazy"
                />
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-blue-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
                      <p className="text-gray-600">48 16th Avenue, Edenvale<br />Johannesburg, 1609<br />Gauteng, South Africa</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-green-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Numbers</h3>
                      <p className="text-gray-600">
                        <a href="tel:0100069158" className="text-blue-600 hover:text-blue-700">010 006 9158</a><br />
                        <a href="tel:0616004720" className="text-blue-600 hover:text-blue-700">061 600 4720</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-purple-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
                      <p className="text-gray-600">
                        <a href="mailto:info@switchwaste.co.za" className="text-blue-600 hover:text-blue-700">info@switchwaste.co.za</a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-clock text-orange-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
                      <p className="text-gray-600">
                        Monday - Friday: 7:30 AM - 4:30 PM<br />
                        Saturday: 8:00 AM - 12:00 PM<br />
                        Sunday: Closed<br />
                        <strong className="text-red-600">Emergency Services: 24/7</strong>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-user text-indigo-600"></i>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Operations Manager</h3>
                      <p className="text-gray-600">
                        Nicholas<br />
                        <span className="text-sm">Available for consultations and site assessments</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-xl">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <i className="fas fa-exclamation-triangle"></i>
                  Emergency Services
                </h3>
                <p className="mb-6">For urgent waste management situations, spill response, or emergency collections:</p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:0100069158" className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center">
                    Call Emergency Line
                  </a>
                  <a href="mailto:emergency@switchwaste.co.za" className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-center">
                    Email Emergency
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Request Your Free Quote</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a customized solution for your waste management needs.
              </p>

              {successMessage && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <i className="fas fa-check-circle mr-2"></i>
                  {successMessage}
                </div>
              )}

              <form onSubmit={(e) => handleSubmit(onSubmit)(e)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      onBlur={() => handleBlur('name')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.name && touched.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.name && touched.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={() => handleBlur('email')}
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                        errors.email && touched.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      required
                    />
                    {errors.email && touched.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
                    <input
                      type="tel"
                      name="phone"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={() => handleBlur('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="e.g., 011 123 4567"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Company/Organization</label>
                    <input
                      type="text"
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
                  <label className="block text-gray-700 font-medium mb-2">Primary Service Required *</label>
                  <select
                    name="service"
                    value={values.service}
                    onChange={handleChange}
                    onBlur={() => handleBlur('service')}
                    className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                      errors.service && touched.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="healthcare-waste">Healthcare Risk Waste Management</option>
                    <option value="pharmaceutical">Pharmaceutical Waste Disposal</option>
                    <option value="pathological">Pathological Waste Services</option>
                    <option value="general-waste">General Waste & Recycling</option>
                    <option value="training">Staff Training Programs</option>
                    <option value="compliance">Compliance Consulting</option>
                    <option value="emergency">Emergency Response Services</option>
                    <option value="multiple">Multiple Services</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                  {errors.service && touched.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Estimated Waste Volume</label>
                    <select
                      name="waste_volume"
                      value={values.waste_volume}
                      onChange={handleChange}
                      onBlur={() => handleBlur('waste_volume')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select volume</option>
                      <option value="small">Small (Under 50kg/week)</option>
                      <option value="medium">Medium (50-200kg/week)</option>
                      <option value="large">Large (200-500kg/week)</option>
                      <option value="very-large">Very Large (500kg+/week)</option>
                      <option value="unknown">Not sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2">Collection Frequency</label>
                    <select
                      name="collection_frequency"
                      value={values.collection_frequency}
                      onChange={handleChange}
                      onBlur={() => handleBlur('collection_frequency')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="">Select frequency</option>
                      <option value="daily">Daily</option>
                      <option value="weekly">Weekly</option>
                      <option value="bi-weekly">Bi-weekly</option>
                      <option value="monthly">Monthly</option>
                      <option value="on-call">On-call basis</option>
                      <option value="flexible">Flexible schedule</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-medium mb-2">Message & Special Requirements *</label>
                  <textarea
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
                  ></textarea>
                  {errors.message && touched.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                <div className="space-y-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="consent"
                      checked={values.consent}
                      onChange={handleChange}
                      onBlur={() => handleBlur('consent')}
                      className="mt-1"
                      required
                    />
                    <span className="text-sm text-gray-600">
                      I agree to be contacted by Switch Waste Solutions regarding my inquiry and consent to the processing of my personal information in accordance with the Privacy Policy.
                    </span>
                  </label>
                  {errors.consent && touched.consent && <p className="text-red-500 text-sm">{errors.consent}</p>}

                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
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
                >
                  {isSubmitting ? (
                    <>
                      <i className="fas fa-spinner fa-spin"></i>
                      Sending...
                    </>
                  ) : (
                    <>
                      <i className="fas fa-paper-plane"></i>
                      Send My Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;