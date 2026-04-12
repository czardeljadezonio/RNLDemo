# RNLDemo Project Context

This project is a full-stack web application consisting of a React frontend and a Laravel backend. It is designed for managing "Genders" and "Users" in a demo environment.

## Project Structure

- `/client`: Frontend application built with React, TypeScript, and Vite.
- `/server`: Backend API built with Laravel (PHP).

## Technologies

### Frontend (`/client`)
- **Framework:** React 19 (TypeScript)
- **Build Tool:** Vite
- **Styling:** Tailwind CSS 4
- **Routing:** React Router 7
- **HTTP Client:** Axios (configured in `src/services/AxiosIntance.ts`)
- **Linting:** ESLint with TypeScript and React Hook plugins

### Backend (`/server`)
- **Framework:** Laravel 12 (PHP 8.2+)
- **Database:** SQLite (default)
- **Authentication:** Laravel Sanctum (available for use)
- **Testing:** PHPUnit

## Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- PHP 8.2+
- Composer

### Installation & Setup

You can use the built-in composer scripts for a quick setup:

```bash
cd server
composer run setup
```
This script will install PHP dependencies, create the `.env` file, generate an application key, run database migrations, and build the frontend assets.

### Running the Application

To run both the server and the client concurrently:

```bash
cd server
composer run dev
```

Alternatively, you can run them separately:

**Client:**
```bash
cd client
npm install
npm run dev
```

**Server:**
```bash
cd server
composer install
php artisan serve
```

## Development Conventions

### Frontend
- **API Communication:** Use the `AxiosInstance` located in `client/src/services/AxiosIntance.ts` for all API calls. It is pre-configured with the base URL and authorization interceptors.
- **Routing:** Define all application routes in `client/src/routes/AppRoutes.tsx`.
- **Components:** Prefer functional components and React Hooks.
- **Styling:** Utilize Tailwind CSS 4 utility classes for styling.

### Backend
- **Controllers:** Place API controllers in `server/app/Http/Controllers/Api/`.
- **Routes:** Define API routes in `server/routes/api.php`.
- **Models:** Use Eloquent models for database interactions, located in `server/app/Models/`.
- **Migrations:** Add new table schemas in `server/database/migrations/`.
- **Testing:** Write feature and unit tests in `server/tests/`.

## Key Files
- `client/src/services/AxiosIntance.ts`: Centralized Axios configuration.
- `client/src/routes/AppRoutes.tsx`: Main application routing.
- `server/routes/api.php`: API endpoint definitions.
- `server/database/database.sqlite`: Default SQLite database file.
- `server/.env`: Backend configuration environment variables.
