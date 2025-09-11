import logger from '../utils/logger';

// Base API configuration
const API_CONFIG = {
  baseURL: process.env.REACT_APP_API_BASE_URL || 'https://api.switchwaste.co.za',
  timeout: 10000,
  retries: 3,
  retryDelay: 1000
};

// Custom error class for API errors
export class ApiError extends Error {
  constructor(message, status, data = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// Generic request function with retry logic
async function makeRequest(url, options = {}, retryCount = 0) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), API_CONFIG.timeout);

  try {
    const response = await fetch(`${API_CONFIG.baseURL}${url}`, {
      ...options,
      signal: controller.signal,
      headers: {
        'Content-Type': 'application/json',
        ...options.headers
      }
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new ApiError(
        errorData.message || `HTTP ${response.status}`,
        response.status,
        errorData
      );
    }

    return await response.json();
  } catch (error) {
    clearTimeout(timeoutId);

    if (error.name === 'AbortError') {
      throw new ApiError('Request timeout', 408);
    }

    if (retryCount < API_CONFIG.retries && shouldRetry(error)) {
      logger.warn(`API request failed, retrying (${retryCount + 1}/${API_CONFIG.retries}):`, error.message);
      await new Promise(resolve => setTimeout(resolve, API_CONFIG.retryDelay * (retryCount + 1)));
      return makeRequest(url, options, retryCount + 1);
    }

    logger.error('API request failed:', error);
    throw error;
  }
}

// Determine if error should be retried
function shouldRetry(error) {
  return error.status >= 500 || error.name === 'TypeError' || error.name === 'AbortError';
}

// HTTP methods
export const api = {
  get: (url, options = {}) => makeRequest(url, { ...options, method: 'GET' }),
  post: (url, data, options = {}) => makeRequest(url, {
    ...options,
    method: 'POST',
    body: JSON.stringify(data)
  }),
  put: (url, data, options = {}) => makeRequest(url, {
    ...options,
    method: 'PUT',
    body: JSON.stringify(data)
  }),
  patch: (url, data, options = {}) => makeRequest(url, {
    ...options,
    method: 'PATCH',
    body: JSON.stringify(data)
  }),
  delete: (url, options = {}) => makeRequest(url, { ...options, method: 'DELETE' })
};

// Specific API endpoints
export const endpoints = {
  // Contact form submission
  submitContact: (data) => api.post('/contact', data),

  // Newsletter subscription
  subscribeNewsletter: (email) => api.post('/newsletter/subscribe', { email }),

  // Service inquiries
  submitServiceInquiry: (serviceType, data) => api.post(`/services/${serviceType}/inquiry`, data),

  // Client testimonials (if dynamic)
  getTestimonials: () => api.get('/testimonials'),

  // Company information
  getCompanyInfo: () => api.get('/company'),

  // Waste collection scheduling
  scheduleCollection: (data) => api.post('/collections/schedule', data),

  // Compliance training registration
  registerTraining: (data) => api.post('/training/register', data)
};

// Request interceptor for authentication
export function setAuthToken(token) {
  if (token) {
    // Store token for future requests
    localStorage.setItem('authToken', token);
  } else {
    localStorage.removeItem('authToken');
  }
}

// Add auth token to requests
function addAuthHeader(options = {}) {
  const token = localStorage.getItem('authToken');
  if (token) {
    return {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${token}`
      }
    };
  }
  return options;
}

// Enhanced API methods with auth
export const authenticatedApi = {
  get: (url, options = {}) => api.get(url, addAuthHeader(options)),
  post: (url, data, options = {}) => api.post(url, data, addAuthHeader(options)),
  put: (url, data, options = {}) => api.put(url, data, addAuthHeader(options)),
  patch: (url, data, options = {}) => api.patch(url, data, addAuthHeader(options)),
  delete: (url, options = {}) => api.delete(url, addAuthHeader(options))
};

export default api;