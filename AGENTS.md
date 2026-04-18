# RNLDemo — React + Laravel Monorepo

## Structure

```
RNLDemo/
  client/     React 19 + Vite + TypeScript frontend
  server/     Laravel 12 PHP backend
```

- `client/` API base URL: `http://127.0.0.1:8000/api` (hardcoded in `src/services/AxiosIntance.ts`)
- `server/` serves API at `http://127.0.0.1:8000`; `client/` dev server at `http://localhost:5173`

## Running the App

**Full dev stack** (runs all services concurrently):
```powershell
cd server; npm run dev
```

Individual:
```powershell
cd client; npm run dev          # Vite dev server (port 5173)
php artisan serve               # Laravel server (port 8000)
```

## Build & Check Commands

```powershell
# Client
cd client
npm run build    # TypeScript check + Vite production build
npm run lint     # ESLint (flat config, typescript-eslint)

# Server
cd server
composer run build     # Vite build (for assets)
composer run test      # php artisan test
./vendor/bin/pint      # Laravel Pint (code style)
```

## Database

- Default: MySQL (`rnldemo_db`). Config in `server/.env`.
- SQLite file exists at `server/database/database.sqlite` (not actively used).
- Custom table naming: `tbl_users`, `tbl_genders`; primary keys: `user_id`, `gender_id`.
- Migrations: `php artisan migrate`

## Tailwind CSS

Tailwind v4 is configured via `@tailwindcss/vite` plugin, **not** a `tailwind.config.js`. Styles live in `src/index.css` with a single `@import 'tailwindcss'`.

## TypeScript

`client/` uses project references (`tsconfig.json` -> `tsconfig.app.json` / `tsconfig.node.json`). Build (`npm run build`) runs `tsc -b` first.

## Key Constraints

- No client-side tests configured (no Vitest/Cypress)
- Server uses Laravel Pint for linting, not PHP CS Fixer
- Auth: Laravel Sanctum is installed but API routes are currently unauthenticated
