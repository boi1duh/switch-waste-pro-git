# Switch Waste Pro - Enterprise-Grade Waste Management Website

A modern, enterprise-level React application for Switch Waste Management Solutions, providing comprehensive waste management services in Johannesburg, South Africa. Built with robust architecture, performance optimization, and accessibility compliance.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.2.4-38B2AC.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue.svg)
![GitHub Pages](https://img.shields.io/badge/GitHub_Pages-Deployed-green.svg)
![Enterprise](https://img.shields.io/badge/Enterprise_Ready-✓-green.svg)
![Accessibility](https://img.shields.io/badge/WCAG_AA-Compliant-blue.svg)

## 🌟 Features

- **Modern React Architecture**: Built with React 18 and modern JavaScript
- **Responsive Design**: Fully responsive with Tailwind CSS
- **Professional UI**: Clean, modern design with consistent branding
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized bundle size and loading times
- **Accessibility**: WCAG compliant components and navigation
- **PWA Ready**: Service worker and manifest for offline functionality
- **GitHub Pages Deployment**: Automated deployment to GitHub Pages

## 🏗️ Enterprise Architecture

### State Management

- **Context API + Reducer Pattern**: Centralized state management with `AppContext`
- **Modular State Structure**: Organized state by feature domains
- **Type-Safe Actions**: Strongly typed action creators and reducers
- **Performance Optimized**: Memoized selectors and efficient re-renders

### API Layer

- **Robust HTTP Client**: Custom API service with retry logic and error handling
- **Authentication Support**: JWT token management and automatic header injection
- **Request/Response Interceptors**: Centralized request processing and error handling
- **Type-Safe Endpoints**: Strongly typed API endpoints and response schemas

### Validation & Security

- **Comprehensive Validation**: Client-side validation for all forms and inputs
- **XSS Protection**: Input sanitization and secure data handling
- **File Upload Security**: Secure file validation and processing
- **South African Compliance**: Localized validation for ZA-specific formats

### Performance Monitoring

- **Core Web Vitals Tracking**: Real-time monitoring of CLS, FID, LCP, FCP
- **Custom Metrics**: Application-specific performance measurements
- **Resource Monitoring**: Detection of slow-loading resources
- **Performance Reporting**: Automated metrics collection and reporting

### Configuration Management

- **Environment-Based Config**: Centralized configuration management
- **Feature Flags**: Runtime feature toggling and A/B testing support
- **Security Settings**: Configurable security policies and CSP rules
- **Analytics Integration**: Pluggable analytics and error reporting

### Testing Infrastructure

- **Jest Setup**: Comprehensive test configuration with mocks
- **Component Testing**: Unit tests for React components
- **Accessibility Testing**: Automated a11y compliance checks
- **Performance Testing**: Bundle size and runtime performance tests

## 📁 Project Structure

```text
switch-waste-pro/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA manifest
│   ├── robots.txt          # Search engine crawling rules
│   └── sitemap.xml         # Website sitemap
├── src/
│   ├── components/         # Reusable React components
│   │   ├── ui/            # Base UI components
│   │   └── home/          # Home page specific components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── constants/         # Application constants
│   ├── styles/            # Global styles
│   ├── context/           # React Context providers
│   │   └── AppContext.js  # Global state management
│   ├── services/          # API services and external integrations
│   │   └── api.js         # HTTP client with retry logic
│   ├── utils/             # Utility functions
│   │   ├── validation.js  # Form and data validation
│   │   ├── logger.js      # Structured logging
│   │   └── performance.js # Performance monitoring
│   ├── config/            # Configuration management
│   │   └── index.js       # Centralized app configuration
│   ├── setupTests.js      # Jest testing configuration
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── tsconfig.json          # TypeScript configuration
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/switch-waste-pro.git
   cd switch-waste-pro
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 📜 Available Scripts

- `npm start` - Start development server
- `npm run build` - Create production build
- `npm run deploy` - Deploy to GitHub Pages
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## 🚀 Deployment

### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

The deployment will create a `gh-pages` branch and deploy the built files.

### Manual Deployment

You can also deploy manually by:

1. Building the project: `npm run build`
2. Uploading the `build` folder contents to your web server
3. Configuring your server to serve the `index.html` file for all routes

## 🛠️ Technologies Used

### Core Framework

- **React 18** - Modern JavaScript library for building user interfaces
- **TypeScript 5.9** - Type-safe JavaScript with static type checking
- **React Router** - Declarative routing for React applications

### Styling & UI

- **Tailwind CSS** - Utility-first CSS framework
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing
- **CSSNano** - CSS minification and optimization

### State Management & Architecture

- **React Context API** - Built-in state management solution
- **useReducer** - Complex state logic management
- **Custom Hooks** - Reusable stateful logic

### API & Data

- **Fetch API** - Modern HTTP client with retry logic
- **JWT Authentication** - Secure token-based authentication
- **Form Validation** - Client-side validation with security

### Development & Testing

- **ESLint** - JavaScript linting with React and accessibility rules
- **Jest** - JavaScript testing framework
- **Testing Library** - React component testing utilities
- **PropTypes** - Runtime type checking for React props

### Performance & Monitoring

- **Performance Observer API** - Core Web Vitals monitoring
- **React.memo** - Component memoization for performance
- **Code Splitting** - Dynamic imports for optimized bundles
- **Service Worker** - Offline functionality and caching

### Build & Deployment

- **Create React App** - Zero-configuration React application setup
- **Webpack** - Module bundling and optimization
- **GitHub Pages** - Free web hosting for static sites
- **GitHub Actions** - CI/CD pipeline automation

### Security & Accessibility

- **Content Security Policy** - XSS protection and security headers
- **WCAG AA Compliance** - Accessibility standards compliance
- **Input Sanitization** - XSS prevention in user inputs
- **Helmet** - Secure document head management

## 🎨 Customization

### Branding

- Update colors in `tailwind.config.js`
- Replace logo and images in `public/` directory
- Modify company information in components

### Content

- Update service descriptions in `src/constants/`
- Modify contact information
- Add new pages or sections

### Styling

- Customize Tailwind configuration
- Modify global styles in `src/styles/`
- Update component-specific styles

## 📱 Features Overview

### Frontend Features

- **Responsive Design**: Optimized for all devices and screen sizes
- **Interactive Components**: Carousel, forms, animations
- **Professional UI**: Consistent design system
- **SEO Optimized**: Meta tags and structured data
- **Fast Loading**: Code splitting and optimization

### Components

- **Hero Section**: Engaging homepage banner with carousel
- **Services Grid**: Display of waste management services
- **Testimonials**: Customer feedback section
- **Contact Forms**: Lead generation forms
- **Navigation**: Responsive mobile menu
- **Footer**: Site-wide footer with links

## 🧪 Testing

### Running Tests

```bash
npm test
```

### Linting

```bash
npm run lint
npm run lint:fix  # Auto-fix issues
```

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For support or questions:

- Email: <admin@switchwaste.co.za>
- Phone: +27 10 006 9158
- Address: 48 16th Avenue, Edenvale, Johannesburg 1609

## 🔄 Version History

### v1.0.0

- Initial release with complete React application
- Modern responsive design with Tailwind CSS
- Professional waste management website
- GitHub Pages deployment ready
- SEO optimized and accessible

---

## Built with ❤️ for Switch Waste Management Solutions
