# Learn2Earn

A career-oriented web platform for students and businesses to manage learning-to-career workflows, job opportunities, CVs, and applications.

## Overview

Learn2Earn is a full-stack web application focused on connecting students with business opportunities. The project includes server-rendered pages for student and business accounts, job posting workflows, CV management, and candidate application tracking.

The codebase is structured as a TypeScript Express application with EJS views, Prisma models, MySQL persistence, Passport-based session authentication, and Multer-based file uploads.

## Key Features

- Student and business authentication flows with role-based protected routes.
- Student home and job browsing pages with job detail views.
- Student CV creation, update, and profile-related pages.
- Job application flow for students, including application result viewing.
- Business job posting, job management, and job update pages.
- Business applicant list and CV detail views.
- Notification, chat, interview schedule, and settings pages for the existing user roles.
- Prisma data models for students, businesses, jobs, CVs, applications, chats, and notifications.

## Tech Stack

**Backend**

- Node.js
- TypeScript
- Express
- Passport.js
- Express Session
- JSON Web Token utilities
- Multer

**Frontend**

- EJS
- Static CSS and JavaScript assets served by Express

**Database**

- MySQL
- Prisma ORM

**External Services**

- Supabase client configuration is present for Supabase-backed integrations.

## Project Structure

```text
.
+-- prisma/              # Prisma schema and database migrations
+-- public/              # Static images, CSS, and client-side assets
+-- src/
|   +-- config/          # Database, Prisma, Supabase, and upload configuration
|   +-- controllers/     # Request handlers for web, student, business, CV, JD, and candidate flows
|   +-- middleware/      # Authentication and Passport configuration
|   +-- routes/          # Express route definitions
|   +-- services/        # Data access and domain service classes
|   +-- styles/          # Source style assets
|   +-- types/           # TypeScript type declarations
|   +-- utils/           # Shared utilities
|   +-- views/           # EJS templates
+-- uploads/             # Runtime upload directory, ignored by Git except for a placeholder
+-- package.json         # Project dependencies and npm scripts
+-- tsconfig.json        # TypeScript configuration
```

## Getting Started

### Prerequisites

- Node.js 22 or compatible
- npm
- MySQL database

### Installation

```bash
npm install
```

### Environment setup

Create a local `.env` file from `.env.example` and provide values for your environment:

```bash
cp .env.example .env
```

On Windows PowerShell:

```powershell
Copy-Item .env.example .env
```

### Database setup

Configure `DATABASE_URL` for a MySQL database, then generate the Prisma client and apply the existing migrations:

```bash
npm exec prisma generate
npm exec prisma migrate dev
```

Do not run migration commands against a production database without reviewing the migrations first.

### Run the application

```bash
npm run l2e
```

The server reads the port from `PORT`. For example, if `PORT=3000`, the application will be available at:

```text
http://localhost:3000
```

## Environment Variables

| Variable | Purpose |
| --- | --- |
| `PORT` | HTTP port used by the Express server. |
| `DATABASE_URL` | MySQL connection string used by Prisma and the MySQL client. |
| `JWT_SECRET` | Secret used by JWT utility helpers. |
| `JWT_EXPIRES` | JWT expiration value, such as `1d` or `7d`. |
| `SESSION_SECRET` | Secret used by Express Session. Falls back to `JWT_SECRET` if not set. |
| `SUPABASE_URL` | Supabase project URL for Supabase-backed integrations. |
| `SUPABASE_ANON_KEY` | Supabase anonymous key for Supabase-backed integrations. |

Use `.env.example` as the safe template. Do not commit real credentials or local `.env` files.

## Development Status

In active development. The repository contains working application flows and database migrations, but it should be reviewed and configured for the target environment before production use.

## Author

**Đào Văn Hùng**  
Full-stack Developer  
GitHub: <https://github.com/daovanhung-dev>  
LinkedIn: <https://www.linkedin.com/in/daovanhung11092005>
