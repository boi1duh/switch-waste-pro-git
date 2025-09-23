# Switch Waste Pro - Professional Waste Management Website

A modern, responsive React application for Switch Waste Management Solutions, providing comprehensive waste management services in Johannesburg, South Africa.

![React](https://img.shields.io/badge/React-18.2.0-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.2.4-38B2AC.svg)
![Netlify](https://img.shields.io/badge/Netlify-Deployed-00C7B7.svg)

## Features

- **Modern React Architecture**: Built with Create React App, React 18, and modern JavaScript
- **Responsive Design**: Fully responsive with Tailwind CSS
- **Professional UI**: Clean, modern design with consistent branding
- **SEO Optimized**: Meta tags, structured data, and semantic HTML
- **Performance Focused**: Optimized bundle size and loading times
- **Accessibility**: WCAG compliant components and navigation
- **PWA Ready**: Service worker and manifest for offline functionality
- **Continuous Deployment**: Automated deployment from GitHub to Netlify

## Project Structure

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
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── .gitignore             # Git ignore rules
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
└── README.md             # This file
```

## Quick Start

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/boi1duh/switch-waste-pro-git.git
   cd switch-waste-pro-git
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
- `npm run test` - Run tests
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues

## Deployment

### Netlify Deployment

This project is configured for continuous deployment from GitHub to Netlify.

1. **Connect Your Repository**: Log in to Netlify and select "Add new site" -> "Import an existing project". Connect to your GitHub account and choose the `switch-waste-pro-git` repository.
2. **Configure Build Settings**: Netlify will automatically detect that this is a Create React App project. The settings should be:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
3. **Deploy**: Click "Deploy site". Netlify will build and deploy your project. Any future pushes to your main branch will trigger a new deployment automatically.

### Manual Deployment

You can also deploy manually by:

1. Building the project: `npm run build`
2. Uploading the `build` folder contents to your web server
3. Configuring your server to serve the `index.html` file for all routes

## Technologies Used

- **React 18** - Modern JavaScript library for building user interfaces
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Declarative routing for React
- **React Helmet Async** - Document head management
- **PostCSS** - CSS processing tool
- **Autoprefixer** - CSS vendor prefixing
- **ESLint** - JavaScript linting and code quality
- **Netlify** - High-performance web hosting and deployment

## Customization

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

## Features Overview

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

## Testing

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
- Netlify deployment ready
- SEO optimized and accessible

---

This project was built for **Switch Waste Management Solutions**.

**Ready for GitHub Launch: Repository structured with clean root, ignored builds, optimized public/, and CI-ready.**
