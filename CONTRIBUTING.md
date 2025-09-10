# 🤝 Contributing to Switch Waste Management Solutions

Thank you for your interest in contributing to Switch Waste Management Solutions! We welcome contributions from the community and are grateful for your help in making our project better.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)
- [Style Guidelines](#style-guidelines)

## 📜 Code of Conduct

This project adheres to a code of conduct that all contributors are expected to follow. Please read [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) before contributing.

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **npm** or **yarn** package manager
- **Git** for version control
- **VS Code** (recommended) with our workspace settings

### Quick Setup

```bash
# Fork and clone the repository
git clone https://github.com/your-username/switch-waste-pro.git
cd switch-waste-pro

# Install dependencies
npm install

# Start development server
npm start

# Open http://localhost:3000 in your browser
```

## 💡 How to Contribute

### Types of Contributions

- 🐛 **Bug fixes** - Fix existing issues
- ✨ **Features** - Add new functionality
- 📚 **Documentation** - Improve documentation
- 🎨 **UI/UX** - Improve user interface and experience
- 🧪 **Testing** - Add or improve tests
- 🔧 **Maintenance** - Code refactoring, performance improvements

### Contribution Process

1. **Find an issue** or **create a new one**
2. **Fork the repository**
3. **Create a feature branch**
4. **Make your changes**
5. **Test your changes**
6. **Submit a pull request**

## 🛠️ Development Setup

### Environment Setup

1. **Install Node Version Manager (nvm)**
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Use the correct Node.js version**
   ```bash
   nvm use
   # or
   nvm install 18
   nvm use 18
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

### Development Scripts

```bash
# Start development server
npm start

# Run tests
npm test

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Build for production
npm run build

# Analyze bundle size
npm run build:analyze
```

## 📝 Submitting Changes

### Commit Guidelines

We follow conventional commit format:

```bash
# Feature commits
feat: add new waste collection feature

# Bug fixes
fix: resolve mobile navigation issue

# Documentation
docs: update installation instructions

# Style changes
style: format code with prettier

# Refactoring
refactor: simplify component structure

# Performance improvements
perf: optimize image loading

# Testing
test: add unit tests for form validation
```

### Pull Request Process

1. **Create a descriptive PR title**
2. **Provide a clear description** of what was changed and why
3. **Reference related issues** using `#issue-number`
4. **Include screenshots** for UI changes
5. **Ensure CI checks pass**

### PR Template

Please use our PR template which includes:
- [ ] Description of changes
- [ ] Related issues
- [ ] Testing instructions
- [ ] Screenshots (if applicable)
- [ ] Checklist completion

## 🐛 Reporting Issues

### Bug Reports

When reporting bugs, please include:

- **Clear title** describing the issue
- **Steps to reproduce** the problem
- **Expected behavior** vs. actual behavior
- **Browser and OS** information
- **Screenshots** if applicable
- **Console errors** or logs

### Feature Requests

For new features, please provide:

- **Clear description** of the proposed feature
- **Use case** and benefits
- **Mockups or examples** if applicable
- **Implementation suggestions** (optional)

## 🎨 Style Guidelines

### Code Style

- **ESLint** and **Prettier** are configured
- Follow **React best practices**
- Use **functional components** with hooks
- Implement **proper error boundaries**
- Write **meaningful component and variable names**

### File Structure

```
src/
├── components/     # Reusable components
│   ├── ui/        # Base UI components
│   └── home/      # Page-specific components
├── pages/         # Route components
├── hooks/         # Custom React hooks
├── constants/     # Application constants
├── styles/        # Global styles
└── utils/         # Utility functions
```

### Component Guidelines

- Use **functional components** with hooks
- Implement **PropTypes** for type checking
- Add **ARIA labels** for accessibility
- Use **semantic HTML** elements
- Follow **Tailwind CSS** utility classes

### Naming Conventions

- **Components**: PascalCase (e.g., `UserProfile.js`)
- **Files**: kebab-case (e.g., `user-profile.js`)
- **Functions**: camelCase (e.g., `handleSubmit`)
- **Constants**: SCREAMING_SNAKE_CASE (e.g., `API_BASE_URL`)

## 🧪 Testing

### Testing Guidelines

- Write tests for **new features**
- Maintain **test coverage** above 80%
- Use **descriptive test names**
- Test **user interactions** and **edge cases**

### Running Tests

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm test -- --watch
```

## 📞 Getting Help

If you need help or have questions:

- 📧 **Email:** info@switchwaste.co.za
- 📱 **Phone:** +27 10 006 9158
- 🏢 **Address:** 48 16th Avenue, Edenvale, Johannesburg 1609

## 🙏 Recognition

Contributors will be recognized in:
- **README.md** contributors section
- **GitHub repository** contributors list
- **Release notes** for significant contributions

## 📄 License

By contributing to this project, you agree that your contributions will be licensed under the same license as the project (MIT License).

---

Thank you for contributing to Switch Waste Management Solutions! 🚀
