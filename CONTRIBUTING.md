# Contributing to Switch Waste Pro

Thank you for your interest in contributing to Switch Waste Pro! We welcome contributions from the community and are grateful for your help in making this project better.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Workflow](#development-workflow)
- [Coding Standards](#coding-standards)
- [Testing](#testing)
- [Submitting Changes](#submitting-changes)
- [Reporting Issues](#reporting-issues)

## Code of Conduct {#code-of-conduct}

This project follows our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you agree to uphold this code.

## Getting Started {#getting-started}

### Prerequisites

- Node.js 16.x or higher
- npm or yarn
- Git

### Setup

1. **Fork the repository** on GitHub
2. **Clone your fork** locally:

   ```bash
   git clone https://github.com/your-username/switch-waste-pro.git
   cd switch-waste-pro
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

4. **Start development server**:

   ```bash
   npm start
   ```

## How to Contribute {#how-to-contribute}

### Types of Contributions

- **Bug fixes** - Fix existing issues
- **Features** - Add new functionality
- **Documentation** - Improve documentation
- **UI/UX** - Improve user interface and experience
- **Tests** - Add or improve tests
- **Maintenance** - Code refactoring, performance improvements

### Finding Issues to Work On

1. Check the [Issues](https://github.com/your-username/switch-waste-pro/issues) page
2. Look for issues labeled `good first issue` or `help wanted`
3. Comment on the issue to indicate you're working on it

## Development Workflow {#development-workflow}

### 1. Create a Branch

Create a descriptive branch for your work:

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-number-description
```

### 2. Make Changes

- Write clear, focused commits
- Test your changes thoroughly
- Follow the coding standards below

### 3. Test Your Changes

```bash
# Run tests
npm test

# Run linting
npm run lint

# Build for production
npm run build
```

### 4. Commit Your Changes

```bash
# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "feat: add new feature description"
```

### 5. Push and Create Pull Request

```bash
# Push your branch
git push origin feature/your-feature-name

# Create a Pull Request on GitHub
```

## Coding Standards {#coding-standards}

### JavaScript/React

- Use ES6+ features
- Use functional components with hooks
- Follow React best practices
- Use meaningful variable and function names
- Add comments for complex logic

### CSS/Tailwind

- Use Tailwind utility classes
- Follow mobile-first responsive design
- Maintain consistent spacing and colors
- Use CSS custom properties for theme values

### Git Commits

Follow conventional commit format:

```text
type(scope): description

[optional body]

[optional footer]
```

Types:

- `feat`: New feature
- `fix`: Bug fix

- `docs`: Documentation
- `style`: Code style changes
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance

Examples:

```text
feat: add contact form validation
fix: resolve mobile menu toggle issue
docs: update installation instructions
```

## Testing {#testing}

### Running Tests

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

### Writing Tests

- Write tests for new features
- Ensure all tests pass before submitting
- Aim for good test coverage
- Use descriptive test names

## Submitting Changes {#submitting-changes}

### Pull Request Process

1. **Ensure your branch is up to date**:

   ```bash
   git fetch origin
   git rebase origin/main
   ```

2. **Create a Pull Request**:
   - Use a descriptive title
   - Fill out the pull request template
   - Reference any related issues
   - Add screenshots for UI changes

3. **Pull Request Requirements**:
   - ✅ All tests pass
   - ✅ Code follows style guidelines
   - ✅ No linting errors
   - ✅ Documentation updated if needed
   - ✅ Commit messages follow conventions

### Pull Request Template

Please use our [Pull Request Template](.github/PULL_REQUEST_TEMPLATE.md) when creating PRs.
## Reporting Issues {#reporting-issues}


### Bug Reports

When reporting bugs, please include:

- **Description**: Clear description of the issue
- **Steps to reproduce**: Step-by-step instructions
- **Expected behavior**: What should happen
- **Actual behavior**: What actually happens
- **Environment**: Browser, OS, Node version
- **Screenshots**: If applicable

### Feature Requests

For feature requests, please include:

- **Description**: What feature you'd like to see
- **Use case**: Why this feature would be useful
- **Implementation ideas**: If you have any suggestions

## Getting Help

- **Email**: [admin@switchwaste.co.za](mailto:admin@switchwaste.co.za)
- **Issues**: [GitHub Issues](https://github.com/your-username/switch-waste-pro/issues)
- **Documentation**: Check our [README](README.md) first

## Recognition

Contributors will be recognized in our README and may be featured in our website's contributor section.

Thank you for contributing to Switch Waste Pro!
