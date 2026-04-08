# RNLDemo Project Context

RNLDemo is a modern web application featuring a decoupled architecture with a React frontend and a Laravel backend.

## Project Structure

- **`client/`**: Standalone React frontend application.
  - **Framework**: React 19
  - **Build Tool**: Vite 8
  - **Routing**: React Router 7
  - **Styling**: Tailwind CSS 4
- **`server/`**: Laravel backend application (intended for API use).
  - **Framework**: Laravel 12
  - **PHP Version**: 8.2+
  - **Asset Management**: Laravel Vite Plugin + Tailwind CSS 4

## Building and Running

### Frontend (`client/`)

1. **Navigate to the client directory**:
   ```bash
   cd client
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the development server**:
   ```bash
   npm run dev
   ```
4. **Build for production**:
   ```bash
   npm run build
   ```
5. **Linting**:
   ```bash
   npm run lint
   ```

### Backend (`server/`)

1. **Navigate to the server directory**:
   ```bash
   cd server
   ```
2. **Install PHP dependencies**:
   ```bash
   composer install
   ```
3. **Environment Setup**:
   - Copy `.env.example` to `.env`.
   - Run `php artisan key:generate`.
4. **Run Development Services**:
   The project includes a `dev` composer script that runs the server, queue listener, and logs concurrently.
   ```bash
   composer run dev
   ```
5. **Run Tests**:
   ```bash
   composer run test
   ```

## Development Conventions

- **Decoupled Frontend**: The frontend is located in `client/` and is entirely separate from the Laravel backend views. Communication should happen via API calls.
- **Tailwind CSS 4**: Both frontend and backend utilize the latest Tailwind CSS 4 features.
- **Laravel 12 Features**: The backend uses the latest Laravel 12 features, including Pail for logging and a simplified application structure.
- **Type Safety**: The frontend is built with TypeScript; ensure types are correctly defined and maintained.
- **API Development**: When adding API routes to the backend, ensure they follow RESTful conventions. Since this is a decoupled setup, you may need to run `php artisan install:api` if API routes are not yet fully initialized in `routes/api.php`.
