# Contributing Guidelines

## Development Setup

1. **Fork the repository**
   ```bash
   # Fork via GitHub UI, then clone your fork
   git clone https://github.com/YOUR_USERNAME/shaurya-unfold.git
   cd shaurya-unfold
   ```

2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

## Code Standards

### TypeScript & React
- Use TypeScript for all new code
- Follow React hooks patterns and best practices
- Implement proper error boundaries
- Use semantic HTML elements

### Code Style
- Follow existing ESLint configuration
- Use Prettier for code formatting
- Write meaningful variable and function names
- Add JSDoc comments for complex functions

### Component Structure
```typescript
// Example component structure
import React from 'react';
import { cn } from '@/lib/utils';

interface ComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export const Component: React.FC<ComponentProps> = ({ 
  className, 
  children 
}) => {
  return (
    <div className={cn('base-styles', className)}>
      {children}
    </div>
  );
};
```

## Testing

### Unit Tests
- Write tests for utility functions
- Test component rendering and behavior
- Use React Testing Library for component tests

### Running Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Generate coverage report
npm run test:coverage
```

## Pull Request Process

1. **Update documentation** if your changes affect the API or user experience
2. **Run linting and tests** to ensure code quality
   ```bash
   npm run lint
   npm test
   npm run build
   ```
3. **Create descriptive PR title** following conventional commits format:
   - `feat: add new portfolio section`
   - `fix: resolve mobile navigation issue`
   - `docs: update installation instructions`
   - `style: improve responsive design`

4. **Fill out PR template** with:
   - Clear description of changes
   - Screenshots for UI changes
   - Testing instructions
   - Related issue numbers

5. **Request review** from project maintainers
6. **Address feedback** promptly and professionally

## Issue Reporting

### Bug Reports
Use the bug report template and include:
- Clear description of the problem
- Steps to reproduce
- Expected vs actual behavior
- Browser/OS information
- Screenshots if applicable

### Feature Requests
Use the feature request template and include:
- Clear description of the desired feature
- Use case and business value
- Proposed implementation approach
- Alternative solutions considered

## Development Guidelines

### Accessibility
- Ensure all interactive elements are keyboard accessible
- Use proper ARIA labels and roles
- Maintain color contrast ratios (WCAG 2.1 AA)
- Test with screen readers when possible

### Performance
- Optimize images and assets
- Use lazy loading for non-critical content
- Implement proper caching strategies
- Monitor bundle size and performance metrics

### Responsive Design
- Mobile-first approach
- Test on multiple device sizes
- Use semantic breakpoints
- Ensure touch targets are appropriately sized

## Code Review Checklist

### Before Submitting
- [ ] Code follows TypeScript and React best practices
- [ ] All tests pass locally
- [ ] Code is properly formatted with Prettier
- [ ] No console.log or debugging code remains
- [ ] Documentation is updated if needed
- [ ] Accessibility considerations are addressed

### Review Criteria
- Code quality and maintainability
- Performance implications
- Security considerations
- User experience impact
- Test coverage adequacy

## Getting Help

- **Documentation**: Check the README and inline documentation first
- **Issues**: Search existing issues before creating new ones
- **Discussions**: Use GitHub Discussions for questions and ideas
- **Contact**: Reach out to maintainers for urgent matters

## Recognition

Contributors will be recognized in:
- GitHub contributors list
- Release notes for significant contributions
- Project documentation

Thank you for contributing to making this portfolio better! 🚀