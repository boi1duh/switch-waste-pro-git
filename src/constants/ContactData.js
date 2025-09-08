// Contact page constants
export const CONTACT_INFO = {
  address: {
    street: "48 16th Avenue",
    locality: "Edenvale",
    region: "Johannesburg",
    postalCode: "1609",
    country: "ZA"
  },
  phones: [
    { number: "010 006 9158", href: "tel:0100069158" },
    { number: "061 600 4720", href: "tel:0616004720" }
  ],
  email: "info@switchwaste.co.za",
  businessHours: {
    weekdays: "Monday - Friday: 7:30 AM - 4:30 PM",
    saturday: "Saturday: 8:00 AM - 12:00 PM",
    sunday: "Sunday: Closed",
    emergency: "Emergency Services: 24/7"
  },
  operationsManager: "Nicholas"
};

export const SERVICE_OPTIONS = [
  { value: "", label: "Select a service" },
  { value: "healthcare-waste", label: "Healthcare Risk Waste Management" },
  { value: "pharmaceutical", label: "Pharmaceutical Waste Disposal" },
  { value: "pathological", label: "Pathological Waste Services" },
  { value: "general-waste", label: "General Waste & Recycling" },
  { value: "training", label: "Staff Training Programs" },
  { value: "compliance", label: "Compliance Consulting" },
  { value: "emergency", label: "Emergency Response Services" },
  { value: "multiple", label: "Multiple Services" },
  { value: "consultation", label: "Free Consultation" }
];

export const WASTE_VOLUME_OPTIONS = [
  { value: "", label: "Select volume" },
  { value: "small", label: "Small (Under 50kg/week)" },
  { value: "medium", label: "Medium (50-200kg/week)" },
  { value: "large", label: "Large (200-500kg/week)" },
  { value: "very-large", label: "Very Large (500kg+/week)" },
  { value: "unknown", label: "Not sure" }
];

export const COLLECTION_FREQUENCY_OPTIONS = [
  { value: "", label: "Select frequency" },
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
  { value: "bi-weekly", label: "Bi-weekly" },
  { value: "monthly", label: "Monthly" },
  { value: "on-call", label: "On-call basis" },
  { value: "flexible", label: "Flexible schedule" }
];

export const FORM_INITIAL_VALUES = {
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
};

export const API_ENDPOINTS = {
  CONTACT_HANDLER: process.env.REACT_APP_CONTACT_HANDLER_URL || '/php/contact-handler.php'
};