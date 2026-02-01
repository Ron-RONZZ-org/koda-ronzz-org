# Ghost Development Guide

This is a **production Ghost installation** (v6.16.0) deployed using Ghost-CLI with a versioned directory structure.

## Project Structure

```
/var/www/read-ronzz-org/
├── current -> versions/6.16.0  (symlink to active version)
├── versions/
│   └── 6.16.0/                  (actual Ghost installation)
├── content/                     (persisted content across versions)
├── config.production.json       (production configuration)
└── .ghost-cli                   (Ghost-CLI metadata)
```

**Working directory**: Always work in `/var/www/read-ronzz-org/current` or `/var/www/read-ronzz-org/versions/6.16.0`

## Core Architecture

Ghost is a Node.js CMS with a layered architecture:

- **`core/boot.js`** - Application bootstrap sequence
- **`core/server/`** - Backend API, data models, services
  - `api/endpoints/` - REST API endpoints
  - `models/` - Bookshelf.js ORM models
  - `services/` - Business logic (70+ services for members, email, stripe, webhooks, etc.)
  - `data/` - Database migrations and schema
- **`core/frontend/`** - Theme rendering engine
  - `apps/` - Frontend applications
  - `helpers/` - Handlebars template helpers
  - `services/` - Frontend-specific services (routing, themes)
- **`core/shared/`** - Shared utilities between server and frontend
- **`ghost.js`** - CLI entry point with modes: default, repl, timetravel, generate-data

## Database & Migrations

- **ORM**: Bookshelf.js on top of Knex
- **Migrations**: Managed by `knex-migrator` (requires `MigratorConfig.js` in project root)
- Configuration in `config.production.json` or environment

## Build & Development Commands

```bash
# Development server (with file watching)
yarn dev

# Build assets
yarn build:assets        # CSS + JS
yarn build:assets:css    # CSS only
yarn build:assets:js     # JS only
yarn build:tsc           # TypeScript compilation

# Linting
yarn lint                # All linting (server, shared, frontend, test, types)
yarn lint:server         # Backend code only
yarn lint:frontend       # Frontend code only
yarn lint:types          # TypeScript type checking

# Testing
yarn test                # Alias for test:unit
yarn test:unit           # Unit tests (fast, 2s timeout)
yarn test:integration    # Integration tests (10s timeout)
yarn test:e2e            # E2E tests (15s timeout)
yarn test:browser        # Playwright browser tests
yarn test:all            # Run all tests + lint

# Run single test
yarn test:single path/to/test.js

# Code coverage
c8 yarn test:unit        # With coverage report
```

## TypeScript Usage

- TypeScript files in `core/**/*.ts` and `test/**/*.ts`
- Configuration: `tsconfig.json` (strict mode, target ES2022, CommonJS modules)
- Mixed codebase: Both `.js` and `.ts` files
- Run `yarn build:tsc` before running tests or linting types

## Testing Conventions

- **Test runner**: Mocha with `should` assertions
- **Mocking**: Sinon for stubs/spies, `mock-knex` for database, `nock` for HTTP
- **Test structure**: 
  - Unit tests in `./test/unit/` - isolated, fast
  - Integration tests in `./test/integration/` - database interactions
  - E2E tests in `./test/e2e-*` - full stack
  - Browser tests with Playwright in `test/e2e-browser/`
- **Test imports**: Use `tsx` loader for TypeScript (`--import=tsx`)
- **Overrides**: Required via `./test/utils/overrides.js` for test environment setup

## Key Patterns

### Service Architecture
Services live in `core/server/services/` and are typically structured as:
- Self-contained modules with their own dependencies
- Expose a public API via `index.js`
- May include: controllers, repositories, service classes, event handlers
- Examples: `members/`, `email-service/`, `stripe/`, `webhooks/`

### API Layer
- REST API endpoints in `core/server/api/endpoints/`
- Uses `@tryghost/api-framework` for routing and validation
- API versioning supported
- Middleware: authentication, validation, permission checks

### Database Models
- Bookshelf.js models in `core/server/models/`
- Plugins: `@tryghost/bookshelf-plugins` for common patterns
- Relations defined in model files
- Timestamps: `created_at`, `updated_at` automatically managed

### Frontend Themes
- Handlebars-based templating
- Theme validation via `gscan`
- Custom helpers in `core/frontend/helpers/`
- Default themes in `content/themes/`

### Configuration
- Central config via `core/shared/config/`
- Environment-specific: `config.{environment}.json`
- Logging config: `loggingrc.js` in project root

## Important Notes

- **Production environment**: This is a live site. Test changes carefully.
- **Ghost-CLI managed**: Use `ghost` CLI commands for deployments, not manual restarts.
- **Content persistence**: `content/` directory persists across version upgrades.
- **Symlink awareness**: `current` symlink gets updated during Ghost upgrades.
- **No test directory at root**: Tests are in the Ghost source (if present in versions/).
