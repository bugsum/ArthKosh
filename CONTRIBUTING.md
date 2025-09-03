# Contributing to ArthKosh

Thank you for your interest in contributing to ArthKosh! This document provides guidelines and information for contributors.

## 🤝 How to Contribute

### Types of Contributions

We welcome various types of contributions:

-   **Bug Reports**: Report bugs and issues
-   **Feature Requests**: Suggest new features
-   **Code Contributions**: Submit pull requests
-   **Documentation**: Improve docs and examples
-   **Testing**: Help test features and report issues
-   **Design**: Improve UI/UX and accessibility

### Before You Start

1. **Check existing issues**: Search for similar issues or feature requests
2. **Discuss major changes**: Open a discussion for significant features
3. **Read the codebase**: Familiarize yourself with the project structure

## 🚀 Development Setup

### Prerequisites

-   Node.js 18+
-   npm or yarn
-   Git
-   SQLite (for local development)

### Local Development

1. **Fork and clone**

    ```bash
    git clone https://github.com/YOUR_USERNAME/arthkosh.git
    cd arthkosh
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Set up environment**

    ```bash
    cp .env.example .env
    # Configure your .env file
    ```

4. **Set up database**

    ```bash
    npx prisma migrate dev
    npx prisma generate
    ```

5. **Start development server**
    ```bash
    npm run dev
    ```

## 📝 Development Workflow

### 1. Create a Feature Branch

```bash
git checkout -b feature/your-feature-name
# or
git checkout -b fix/issue-description
```

### 2. Make Your Changes

-   Write clean, readable code
-   Follow the existing code style
-   Add tests for new functionality
-   Update documentation as needed

### 3. Test Your Changes

```bash
npm run lint          # Check code quality
npm run build         # Ensure build works
npm run test          # Run tests (if available)
```

### 4. Commit Your Changes

```bash
git add .
git commit -m "feat: add new feature description"
```

**Commit Message Format:**

-   `feat:` New features
-   `fix:` Bug fixes
-   `docs:` Documentation changes
-   `style:` Code style changes
-   `refactor:` Code refactoring
-   `test:` Adding tests
-   `chore:` Maintenance tasks

### 5. Push and Create Pull Request

```bash
git push origin feature/your-feature-name
```

Then create a Pull Request on GitHub.

## 🎨 Code Style Guidelines

### TypeScript

-   Use strict TypeScript configuration
-   Prefer interfaces over types for object shapes
-   Use meaningful variable and function names
-   Add JSDoc comments for complex functions

### React/Next.js

-   Use functional components with hooks
-   Follow Next.js App Router patterns
-   Use proper TypeScript types for props
-   Implement proper error boundaries

### CSS/Tailwind

-   Use TailwindCSS utility classes
-   Follow mobile-first responsive design
-   Maintain consistent spacing and typography
-   Use CSS variables for theme customization

### Database/Prisma

-   Use descriptive model names
-   Add proper indexes for performance
-   Include validation in schema
-   Use transactions for complex operations

## 🧪 Testing Guidelines

### Unit Tests

-   Test individual functions and components
-   Mock external dependencies
-   Test edge cases and error conditions
-   Aim for good test coverage

### Integration Tests

-   Test API endpoints
-   Test database operations
-   Test authentication flows
-   Test user interactions

### Manual Testing

-   Test on different browsers
-   Test responsive design
-   Test accessibility features
-   Test performance

## 📚 Documentation

### Code Documentation

-   Document complex business logic
-   Add JSDoc comments for public APIs
-   Include examples in comments
-   Keep documentation up-to-date

### User Documentation

-   Write clear user guides
-   Include screenshots and examples
-   Document configuration options
-   Provide troubleshooting tips

## 🔍 Pull Request Guidelines

### PR Title and Description

-   Use clear, descriptive titles
-   Include issue numbers if applicable
-   Describe changes and motivation
-   List any breaking changes

### PR Checklist

-   [ ] Code follows style guidelines
-   [ ] Tests pass locally
-   [ ] Documentation updated
-   [ ] No console errors
-   [ ] Responsive design tested
-   [ ] Accessibility reviewed

### Review Process

1. **Automated Checks**: CI/CD pipeline must pass
2. **Code Review**: At least one maintainer approval
3. **Testing**: Verify functionality works as expected
4. **Documentation**: Ensure docs are updated
5. **Merge**: Squash and merge when ready

## 🐛 Bug Reports

### Bug Report Template

```markdown
**Description**
Clear description of the bug

**Steps to Reproduce**

1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What should happen

**Actual Behavior**
What actually happens

**Environment**

-   OS: [e.g. Windows, macOS, Linux]
-   Browser: [e.g. Chrome, Firefox, Safari]
-   Version: [e.g. 1.0.0]

**Additional Context**
Screenshots, logs, or other relevant information
```

## 💡 Feature Requests

### Feature Request Template

```markdown
**Problem Statement**
Clear description of the problem

**Proposed Solution**
Description of the proposed feature

**Alternative Solutions**
Other approaches considered

**Additional Context**
Use cases, examples, or mockups
```

## 🚫 What Not to Do

-   Don't submit PRs without testing
-   Don't ignore code review feedback
-   Don't commit directly to main branch
-   Don't submit incomplete features
-   Don't ignore accessibility guidelines
-   Don't skip documentation updates

## 🏷️ Labels and Milestones

### Issue Labels

-   `bug`: Something isn't working
-   `enhancement`: New feature or request
-   `documentation`: Improvements to docs
-   `good first issue`: Good for newcomers
-   `help wanted`: Extra attention needed
-   `priority: high`: High priority issues

### Milestones

-   `v1.0.0`: Initial release
-   `v1.1.0`: Minor features
-   `v1.2.0`: Bug fixes and improvements

## 🎯 Getting Help

### Questions and Discussions

-   Use GitHub Discussions for questions
-   Join our community chat (if available)
-   Check existing documentation
-   Search closed issues and PRs

### Mentorship

-   Ask for help in issues or discussions
-   Request code reviews from maintainers
-   Join community events and meetups
-   Follow best practices from other contributors

## 📜 Code of Conduct

### Our Standards

-   Be respectful and inclusive
-   Use welcoming and inclusive language
-   Be collaborative and constructive
-   Focus on what is best for the community
-   Show empathy towards other community members

### Enforcement

-   Unacceptable behavior will not be tolerated
-   Maintainers will address violations
-   Consequences may include warnings or bans
-   Report violations to maintainers

## 🏆 Recognition

### Contributors

-   All contributors are listed in README
-   Significant contributions get special recognition
-   Contributors can request maintainer status
-   Regular contributors are invited to core team

### Contribution Types

-   **Code**: Bug fixes, features, improvements
-   **Documentation**: Guides, examples, API docs
-   **Testing**: Test cases, bug reports
-   **Design**: UI/UX improvements, accessibility
-   **Community**: Helping others, organizing events

## 📞 Contact

-   **Maintainers**: [Samarth Sharma]
-   **Email**: [samarthsharma9377@gmail.com]
-   **Discussions**: [GitHub Discussions](link)
-   **Issues**: [GitHub Issues](link)

---

Thank you for contributing to ArthKosh! 🎉
