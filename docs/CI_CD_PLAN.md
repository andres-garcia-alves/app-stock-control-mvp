# CI/CD Pipeline Setup Plan

## Overview
This document outlines the GitHub Actions CI/CD pipeline for automated testing and deployment.

## ✅ IMPLEMENTED Workflows

### 1. Pull Request Checks (pr-checks.yml)
Runs on every pull request to main/develop:
- **Lint**: ESLint code quality checks
- **Unit Tests**: Jest tests with coverage
- **Build**: Production build validation

**Trigger**: `on pull_request to main or develop`

### 2. Deploy to GitHub Pages (deploy.yml)
Runs on push to main branch:
- **Lint**: Code quality check (continue on error)
- **Tests**: Jest tests (continue on error)
- **Build**: GitHub Pages build with `npm run deploy`
- **Deploy**: Automatic deployment to `https://andres-garcia-alves.github.io/app-stock-control-mvp/`

**Trigger**: `on push to main`

### 3. Complete CI/CD Pipeline (ci-cd.yml)
Comprehensive pipeline with all checks:
- **Lint**: ESLint validation
- **Tests**: Jest unit tests + coverage
- **Build**: Angular production build
- **E2E**: Cypress end-to-end tests (optional, can be slow)
- **Deploy**: GitHub Pages deployment (requires main branch)
- **Notify**: Final status check

**Trigger**: `on push/PR to main or develop`

## File Structure

```
.github/
└── workflows/
    ├── pr-checks.yml      # Runs on PRs (fast checks)
    ├── deploy.yml         # Runs on push to main (deploy)
    └── ci-cd.yml          # Full pipeline (lint+test+build+e2e+deploy)
```

## Setup Instructions

### Step 1: Enable GitHub Pages
1. Go to repository Settings → Pages
2. Set Source to: **Deploy from a branch**
3. Branch: **gh-pages** (will be created automatically by Actions)
4. Save

### Step 2: Enable Actions (if needed)
1. Go to repository Actions tab
2. Enable GitHub Actions for this repository
3. Workflows should auto-trigger on push/PR

### Step 3: Verify Workflows

After first push with workflows:
1. Check Actions tab in GitHub
2. Verify jobs run successfully
3. Check GitHub Pages deployment status

## Workflow Triggers

| Workflow | Trigger | Purpose |
|----------|---------|---------|
| pr-checks.yml | PR to main/develop | Fast validation before merge |
| deploy.yml | Push to main | Automatic deployment |
| ci-cd.yml | Push/PR to main/develop | Complete validation |

## Key Features

✅ **Automated Linting**: ESLint runs on all code changes
✅ **Automated Testing**: Jest runs all unit tests
✅ **Build Validation**: Ensures production build succeeds
✅ **Automatic Deployment**: Deploys to GitHub Pages on main push
✅ **E2E Testing**: Optional Cypress tests for E2E validation
✅ **Coverage Reports**: Jest generates coverage reports
✅ **Node.js Caching**: npm cache speeds up workflows
✅ **Fail Fast**: Early detection of issues

## Job Dependencies

```
PR Checks:
  lint → (independent)
  test → (independent)
  build → (independent)

CI/CD Full Pipeline:
  lint → \
  test → → build → \
          \       → e2e → deploy → notify
```

## Environment

- **Node.js**: v20.19.0 (matches project)
- **npm**: v10.8.2 (cached)
- **OS**: ubuntu-latest
- **Cache**: npm dependencies cached per workflow run

## Performance

| Workflow | Typical Duration |
|----------|-----------------|
| pr-checks.yml | ~3-5 minutes |
| deploy.yml | ~4-6 minutes |
| ci-cd.yml | ~8-12 minutes (includes E2E) |

## Troubleshooting

### Workflows not triggering
- Check Actions tab is enabled
- Verify branch names in workflow (main/develop)
- Check `.github/workflows/*.yml` files exist

### Build fails
- Run `npm run build` locally to test
- Check Node.js version matches v20.19.0
- Verify all dependencies installed: `npm ci`

### Deployment fails
- Check GitHub Pages is enabled in Settings
- Verify deploy script works: `npm run deploy`
- Check `docs` folder is created after build

### Tests fail
- Run `npm test` locally
- Check Jest configuration in `jest.config.js`
- Review test files in error message

## Future Enhancements

- [ ] Add Slack notifications on workflow failure
- [ ] Add code coverage badge to README
- [ ] Add automated changelog generation
- [ ] Add performance budget checks
- [ ] Add accessibility testing (axe-core)
- [ ] Add visual regression testing
- [ ] Add semantic versioning automation
- [ ] Add automatic documentation generation

## Reference

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Setting up CI/CD in Angular](https://angular.io/guide/build#deployment)
- [Cypress in CI](https://docs.cypress.io/guides/continuous-integration/introduction)
- [Jest Coverage](https://jestjs.io/docs/code-coverage)

2. **Setup Node.js**
   ```bash
   node: v20.19.0
   npm: v10.8.2
   ```

3. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

4. **Lint code**
   ```bash
   npm run lint
   ```

5. **Run tests**
   ```bash
   npm test -- --coverage --watch=false
   ```

6. **Build application**
   ```bash
   npm run build
   ```

7. **Run E2E tests** (optional - requires server)
   ```bash
   # Start dev server in background
   # Run Cypress tests
   npm run cypress:run
   ```

8. **Deploy to GitHub Pages**
   ```bash
   npm run deploy  # (on main branch only)
   ```

## GitHub Secrets Required
- None initially (public repo)
- Later: deployment tokens if needed

## Branch Protection Rules (TO BE CONFIGURED)
- [ ] Require status checks to pass before merging
- [ ] Require code review before merging
- [ ] Dismiss stale PR approvals when new commits are pushed
- [ ] Require branches to be up to date before merging

## Success Criteria
- ✅ All tests pass on each push
- ✅ Code coverage maintained above 80%
- ✅ Linting passes on all code
- ✅ Production build completes without errors
- ✅ Deployment to GitHub Pages on main branch

## Notes
- E2E tests with Cypress may require Cypress Cloud or additional setup for CI
- Consider using GitHub Actions artifacts for build outputs
- Set up notifications for failed builds

## Implementation Timeline
- **When ready**: Create PR with workflows
- **Step-by-step**: Add workflow stages incrementally
- **Testing**: Validate on a test branch first

## Related Files
- Current testing setup: [TESTING.md](./TESTING.md)
- GitHub Actions docs: https://docs.github.com/en/actions
- Cypress CI docs: https://docs.cypress.io/guides/continuous-integration/ci-provider-examples
