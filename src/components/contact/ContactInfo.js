import React from 'react';
import { CONTACT_INFO } from '../../constants/ContactData';

const ContactInfo = () => {
  return (
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
              <i className="fas fa-map-marker-alt text-blue-600" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Our Location</h3>
              <p className="text-gray-600">
                {CONTACT_INFO.address.street}<br />
                {CONTACT_INFO.address.locality}, {CONTACT_INFO.address.region} {CONTACT_INFO.address.postalCode}<br />
                Gauteng, South Africa
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-phone text-green-600" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Phone Numbers</h3>
              <p className="text-gray-600">
                {CONTACT_INFO.phones.map((phone, index) => (
                  <a key={index} href={phone.href} className="text-blue-600 hover:text-blue-700 block">
                    {phone.number}
                  </a>
                ))}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-envelope text-purple-600" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Email Address</h3>
              <p className="text-gray-600">
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-600 hover:text-blue-700">
                  {CONTACT_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-clock text-orange-600" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Business Hours</h3>
              <p className="text-gray-600">
                {CONTACT_INFO.businessHours.weekdays}<br />
                {CONTACT_INFO.businessHours.saturday}<br />
                {CONTACT_INFO.businessHours.sunday}<br />
                <strong className="text-red-600">{CONTACT_INFO.businessHours.emergency}</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center flex-shrink-0">
              <i className="fas fa-user text-indigo-600" aria-hidden="true"></i>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Operations Manager</h3>
              <p className="text-gray-600">
                {CONTACT_INFO.operationsManager}<br />
                <span className="text-sm">Available for consultations and site assessments</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-red-500 to-red-600 text-white p-8 rounded-xl">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <i className="fas fa-exclamation-triangle" aria-hidden="true"></i>
          Emergency Services
        </h3>
        <p className="mb-6">For urgent waste management situations, spill response, or emergency collections:</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href={CONTACT_INFO.phones[0].href}
            className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
            aria-label="Call emergency line"
          >
            Call Emergency Line
          </a>
          <a
            href="mailto:emergency@switchwaste.co.za"
            className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-center"
            aria-label="Email emergency services"
          >
            Email Emergency
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;