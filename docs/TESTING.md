# Testing Guide

This project uses modern testing tools:
- **Jest** - Unit and integration testing
- **Cypress** - End-to-end (E2E) testing
- **ESLint** - Code linting

## Unit & Integration Tests (Jest)

### Running Tests

```bash
# Run all tests once
npm test

# Run tests in watch mode
npm run test:watch

# Run tests with coverage report
npm run test:coverage

# Run specific test file
npm test -- src/app/app.component.spec.ts
```

### Test File Structure

All test files follow the pattern: `*.spec.ts` and are co-located with the source files.

Example:
```
src/
├── app/
│   ├── app.component.ts
│   ├── app.component.spec.ts    ← Test file
│   ├── services/
│   │   ├── login.service.ts
│   │   └── login.service.spec.ts
│   └── componentes/
│       └── login/
│           ├── login.component.ts
│           └── login.component.spec.ts
```

### Writing Tests

The project uses Angular's TestBed for component and service testing:

#### Unit Test Example
```typescript
describe('LoginService', () => {
  let service: LoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
```

#### Component Test Example
```typescript
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
```

### Test Utilities

Helper functions are available in `src/app/testing/test-utils.ts`:

```typescript
import { TestUtils } from '@app/testing/test-utils';

// Query elements
TestUtils.querySelector(fixture, '.selector');
TestUtils.querySelectorAll(fixture, '.selector');

// Get text content
TestUtils.getTextContent(fixture, '.selector');

// Trigger events
TestUtils.triggerEvent(fixture, '.selector', 'click');
```

## End-to-End Tests (Cypress)

### Running E2E Tests

```bash
# Open Cypress Test Runner (interactive)
npm run e2e

# Run E2E tests headless (CI mode)
npm run cypress:run
```

### Test Files Location

E2E tests are located in `cypress/e2e/` directory:

```
cypress/
├── e2e/
│   ├── app.cy.ts
│   └── [other-tests].cy.ts
└── config.ts
```

### Writing E2E Tests

```typescript
describe('Stock Control MVP', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
  });

  it('should display the application', () => {
    cy.get('app-root').should('exist');
  });

  it('should navigate to login', () => {
    cy.get('nav a').contains('Login').click();
    cy.url().should('include', '/login');
  });
});
```

## Code Linting

### Running Linter

```bash
# Lint all TypeScript files
npm run lint

# Lint with auto-fix
npx eslint src --ext .ts --fix
```

### ESLint Configuration

ESLint is configured in `.eslintrc.json` with:
- TypeScript support via `@typescript-eslint`
- Angular recommended rules
- Code style enforcement (indentation, quotes, semicolons)

## Continuous Integration

Tests run automatically on:
- Pull requests
- Commits to main branch

(See GitHub Actions workflow in `.github/workflows/`)

## Best Practices

1. **Isolation**: Each test should be independent
2. **Clarity**: Test names should clearly describe what they test
3. **Coverage**: Aim for 80%+ code coverage
4. **Mocking**: Mock external dependencies and HTTP calls
5. **Async**: Use `async/await` for async operations in tests

## Migration Notes

- ✅ Migrated from Karma/Jasmine to Jest
- ✅ Migrated from Protractor to Cypress
- ✅ Migrated from TSLint to ESLint
- ✅ All tests use modern `async/await` pattern

## Resources

- [Jest Documentation](https://jestjs.io/)
- [Cypress Documentation](https://docs.cypress.io/)
- [Angular Testing Guide](https://angular.io/guide/testing)
- [ESLint Documentation](https://eslint.org/)
