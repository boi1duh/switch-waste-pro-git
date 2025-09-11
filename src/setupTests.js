/**
 * Jest setup file for React testing
 */

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});

// Mock IntersectionObserver
global.IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

// Mock ResizeObserver
global.ResizeObserver = class ResizeObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

// Mock window.scrollTo
window.scrollTo = jest.fn();

// Mock console methods for cleaner test output
const originalConsoleError = console.error;
const originalConsoleWarn = console.warn;

beforeAll(() => {
  console.error = (...args) => {
    if (
      typeof args[0] === 'string' &&
      args[0].includes('Warning: ReactDOM.render is no longer supported')
    ) {
      return;
    }
    originalConsoleError.call(console, ...args);
  };

  console.warn = (...args) => {
    if (
      typeof args[0] === 'string' &&
      (args[0].includes('Warning:') || args[0].includes('was not wrapped in act'))
    ) {
      return;
    }
    originalConsoleWarn.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
  console.warn = originalConsoleWarn;
});

// Mock fetch for API tests
global.fetch = jest.fn();

// Mock localStorage
const localStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.localStorage = localStorageMock;

// Mock sessionStorage
const sessionStorageMock = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
};
global.sessionStorage = sessionStorageMock;

// Mock window.location
delete window.location;
window.location = {
  href: 'http://localhost:3000',
  pathname: '/',
  search: '',
  hash: '',
  reload: jest.fn(),
  assign: jest.fn(),
  replace: jest.fn(),
};

// Mock environment variables
process.env.REACT_APP_API_BASE_URL = 'http://localhost:3001/api';
process.env.NODE_ENV = 'test';

// Helper function to create mock props
export const createMockProps = (overrides = {}) => ({
  ...overrides
});

// Helper function to render components with providers
export const renderWithProviders = (component, options = {}) => {
  const { store, ...renderOptions } = options;

  // You can add providers here as needed
  // For now, just return the component
  return component;
};

// Custom test matchers
expect.extend({
  toHaveClass(received, className) {
    const pass = received.classList.contains(className);
    return {
      message: () =>
        `expected ${received} ${pass ? 'not ' : ''}to have class "${className}"`,
      pass,
    };
  },

  toHaveAttribute(received, attr, value) {
    const pass = received.hasAttribute(attr) &&
                 (value === undefined || received.getAttribute(attr) === value);
    return {
      message: () =>
        `expected ${received} ${pass ? 'not ' : ''}to have attribute "${attr}"${value !== undefined ? ` with value "${value}"` : ''}`,
      pass,
    };
  },

  toBeVisible(received) {
    const pass = received.offsetWidth > 0 || received.offsetHeight > 0 ||
                 received.getClientRects().length > 0;
    return {
      message: () =>
        `expected ${received} ${pass ? 'not ' : ''}to be visible`,
      pass,
    };
  }
});