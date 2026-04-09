# Repository Guidelines

## Project Structure & Module Organization
This repository has two apps:

- `client/`: React 19 + TypeScript + Vite frontend. Main source lives in `client/src/`, with UI in `components/`, route definitions in `routes/`, shared layout in `layout/`, context providers in `context/`, and static assets in `assets/`.
- `server/`: Laravel 12 backend. Application code lives in `server/app/`, routes in `server/routes/`, frontend-facing Laravel assets in `server/resources/`, database files in `server/database/`, and tests in `server/tests/Feature` and `server/tests/Unit`.

Keep changes scoped to the app you are editing. Avoid cross-app assumptions without checking both sides.

## Build, Test, and Development Commands
- `cd client && npm install && npm run dev`: start the Vite frontend locally.
- `cd client && npm run build`: run TypeScript project build and produce a production bundle.
- `cd client && npm run lint`: run ESLint on all `ts` and `tsx` files.
- `cd server && composer install && npm install`: install Laravel and frontend dependencies.
- `cd server && composer run dev`: run Laravel, queue worker, logs, and Vite together.
- `cd server && composer test`: clear config and run the PHPUnit suite.

Use the top-level `package-lock.json` only as a workspace artifact; active app scripts live under each app directory.

## Coding Style & Naming Conventions
Use TypeScript for client code and PSR-style PHP for Laravel code. Follow existing 2-space indentation in frontend files and Laravel defaults in backend files. Prefer:

- React components in `PascalCase` files, such as `FloatingLabelInput.tsx`
- hooks, helpers, and variables in `camelCase`
- clear folder names by feature or responsibility

Frontend linting is configured in `client/eslint.config.js`. Backend formatting should use Laravel Pint when needed.

## Testing Guidelines
Backend tests use PHPUnit 11 via Laravel’s test runner. Place unit tests in `server/tests/Unit` and request/feature coverage in `server/tests/Feature`. Name test files with the `*Test.php` suffix.

The client currently has no configured test runner. At minimum, run `npm run lint` and `npm run build` before opening a PR that changes frontend code.

## Commit & Pull Request Guidelines
Recent commits use short, imperative summaries like `Applied tailwindcss` and `Added header and sidebar and its functions`. Keep commit messages concise and action-oriented.

PRs should include:

- a short description of the change and affected app (`client` or `server`)
- linked issue or task reference when available
- screenshots or short recordings for UI changes
- notes on verification performed, such as `npm run lint`, `npm run build`, or `composer test`
