# Testing Guidelines

This document outlines the testing strategy and guidelines for the AI Stack NextJS application.

## Overview

The application implements comprehensive testing with:
- **Unit Testing:** Jest and React Testing Library
- **E2E Testing:** Playwright
- **100% Code Coverage:** Both unit and e2e tests
- **Accessibility Testing:** Screen reader and keyboard navigation
- **Responsive Testing:** Cross-browser and mobile testing

## Testing Stack

### Unit Testing
- **Jest:** Test runner and assertion library
- **React Testing Library:** Component testing utilities
- **@testing-library/jest-dom:** Custom Jest matchers
- **@testing-library/user-event:** User interaction simulation

### E2E Testing
- **Playwright:** Cross-browser testing framework
- **Multiple browsers:** Chrome, Firefox, Safari
- **Mobile testing:** Responsive design validation

## Test Structure

```
src/
├── __tests__/
│   ├── components/
│   │   ├── ui/
│   │   ├── layout/
│   │   ├── tickets/
│   │   └── services/
│   ├── services/
│   └── utils/
├── e2e/
│   ├── tests/
│   ├── fixtures/
│   └── utils/
```

## Unit Testing Guidelines

### Component Testing

#### Test File Structure
```typescript
// ComponentName.test.tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ComponentName from '@/components/ComponentName';

describe('ComponentName', () => {
  it('should render correctly', () => {
    render(<ComponentName />);
    expect(screen.getByRole('button')).toBeInTheDocument();
  });

  it('should handle user interactions', async () => {
    const user = userEvent.setup();
    const mockOnClick = jest.fn();
    
    render(<ComponentName onClick={mockOnClick} />);
    
    await user.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalled();
  });

  it('should be accessible', () => {
    render(<ComponentName />);
    expect(screen.getByRole('button')).toHaveAttribute('aria-label');
  });
});
```

#### Testing Checklist
- [ ] Component renders without errors
- [ ] Props are handled correctly
- [ ] User interactions work as expected
- [ ] Accessibility features are present
- [ ] Responsive behavior is correct
- [ ] Error states are handled
- [ ] Loading states are displayed

### Service Testing

#### Test File Structure
```typescript
// serviceName.test.ts
import { ServiceName } from '@/api/services/serviceName';

describe('ServiceName', () => {
  let service: ServiceName;

  beforeEach(() => {
    service = new ServiceName();
  });

  it('should return data correctly', async () => {
    const result = await service.getAllItems();
    expect(result).toBeDefined();
    expect(Array.isArray(result)).toBe(true);
  });

  it('should handle errors gracefully', async () => {
    // Mock error scenario
    const result = await service.getById('invalid-id');
    expect(result).toBeNull();
  });
});
```

#### Testing Checklist
- [ ] All methods return expected data
- [ ] Error handling works correctly
- [ ] Async operations complete properly
- [ ] Data transformations are correct
- [ ] Mock data is used appropriately

## E2E Testing Guidelines

### Test File Structure
```typescript
// feature.test.ts
import { test, expect } from '@playwright/test';

test.describe('Feature Name', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display main content', async ({ page }) => {
    await expect(page.getByRole('main')).toBeVisible();
    await expect(page.getByText('Welcome')).toBeVisible();
  });

  test('should handle user interactions', async ({ page }) => {
    await page.click('[data-testid="button"]');
    await expect(page.getByText('Success')).toBeVisible();
  });

  test('should be responsive', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await expect(page.getByRole('navigation')).toBeVisible();
  });
});
```

### E2E Testing Checklist
- [ ] Page loads correctly
- [ ] Navigation works properly
- [ ] User interactions function
- [ ] Data is displayed correctly
- [ ] Responsive design works
- [ ] Accessibility features work
- [ ] Cross-browser compatibility

## Accessibility Testing

### Screen Reader Testing
```typescript
test('should be accessible to screen readers', async ({ page }) => {
  await page.goto('/');
  
  // Check for proper heading structure
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  
  // Check for ARIA labels
  await expect(page.getByLabel('Search')).toBeVisible();
  
  // Check for keyboard navigation
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toBeVisible();
});
```

### Keyboard Navigation Testing
```typescript
test('should support keyboard navigation', async ({ page }) => {
  await page.goto('/');
  
  // Tab through interactive elements
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toBeVisible();
  
  // Test Enter key functionality
  await page.keyboard.press('Enter');
  await expect(page.getByText('Action completed')).toBeVisible();
});
```

## Coverage Requirements

### Unit Test Coverage
- **Statements:** 100%
- **Branches:** 100%
- **Functions:** 100%
- **Lines:** 100%

### E2E Test Coverage
- **User workflows:** 100%
- **Page interactions:** 100%
- **Responsive breakpoints:** 100%
- **Browser compatibility:** 100%

## Running Tests

### Unit Tests
```bash
# Run all tests
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage
npm run test:coverage
```

### E2E Tests
```bash
# Run all e2e tests
npm run test:e2e

# Run e2e tests with UI
npm run test:e2e:ui

# Run specific browser
npx playwright test --project=chromium
```

## Test Data

### Mock Data
- Use realistic test data
- Include edge cases
- Test with different data types
- Validate data transformations

### Test Utilities
```typescript
// test-utils.tsx
import { render } from '@testing-library/react';
import { ThemeProvider } from '@/contexts/ThemeContext';

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
};

const customRender = (ui: React.ReactElement, options = {}) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
```

## Best Practices

### Writing Tests
1. **Test behavior, not implementation**
2. **Use descriptive test names**
3. **Follow AAA pattern (Arrange, Act, Assert)**
4. **Test one thing per test**
5. **Use meaningful assertions**

### Test Organization
1. **Group related tests**
2. **Use beforeEach for setup**
3. **Clean up after tests**
4. **Mock external dependencies**
5. **Use test data factories**

### Accessibility Testing
1. **Test with screen readers**
2. **Verify keyboard navigation**
3. **Check color contrast**
4. **Validate ARIA attributes**
5. **Test focus management**

## Continuous Integration

### GitHub Actions
```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run test:coverage
      - run: npm run test:e2e
```

### Coverage Reporting
- Generate coverage reports
- Upload to coverage service
- Set coverage thresholds
- Monitor coverage trends

## Debugging Tests

### Unit Tests
```bash
# Debug specific test
npm test -- --testNamePattern="ComponentName"

# Run with verbose output
npm test -- --verbose

# Debug with Node inspector
node --inspect-brk node_modules/.bin/jest
```

### E2E Tests
```bash
# Run with headed browser
npx playwright test --headed

# Debug with slow motion
npx playwright test --headed --slowmo=1000

# Generate trace
npx playwright test --trace=on
```

## Performance Testing

### Component Performance
```typescript
test('should render efficiently', () => {
  const startTime = performance.now();
  render(<ComponentName />);
  const endTime = performance.now();
  
  expect(endTime - startTime).toBeLessThan(100);
});
```

### Bundle Size Testing
```bash
# Analyze bundle size
npm run build
npx bundle-analyzer .next/static/chunks
```

## Future Enhancements

- **Visual regression testing**
- **Performance testing**
- **Load testing**
- **Security testing**
- **Internationalization testing** 