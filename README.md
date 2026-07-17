# Learn2Earn

Learn2Earn is a unified career platform for students, businesses, and administrators. This repository is organized as one product repo with a web backend and two Flutter applications while preserving the current runtime logic of each module.

## Repository Layout

```text
.
+-- apps/
|   +-- web/               # TypeScript Express, EJS, Prisma, MySQL
|   +-- flutter_student/   # Flutter app for student workflows
|   +-- flutter_business/  # Flutter app for business workflows
+-- docs/                  # Product and repository documentation
+-- .gitignore             # Monorepo ignore rules
+-- README.md              # Product-level documentation
```

## Modules

| Module | Purpose | Main stack |
| --- | --- | --- |
| `apps/web` | Server-rendered web application, authentication, job/CV/application workflows, Prisma database access. | Node.js, TypeScript, Express, EJS, Prisma, MySQL |
| `apps/flutter_student` | Mobile/web Flutter client for student login, job discovery, CV, application, chat, and settings flows. | Flutter, Supabase, SQLite |
| `apps/flutter_business` | Mobile/web Flutter client for business login, job management, candidate search, reports, chat, and settings flows. | Flutter, Supabase, SQLite, charts |

## Quick Start

### Web application

```bash
cd apps/web
npm install
cp .env.example .env
npm exec prisma generate
npm exec prisma migrate dev
npm run l2e
```

On Windows PowerShell:

```powershell
cd apps/web
npm install
Copy-Item .env.example .env
npm exec prisma generate
npm exec prisma migrate dev
npm run l2e
```

### Flutter student app

```bash
cd apps/flutter_student
flutter pub get
flutter run
```

### Flutter business app

```bash
cd apps/flutter_business
flutter pub get
flutter run
```

## Development Checks

Run checks from each module directory:

```bash
cd apps/web
npm exec prisma generate

cd ../flutter_student
flutter analyze
flutter test

cd ../flutter_business
flutter analyze
flutter test
```

## Git and GitHub

This repository uses the existing remote:

```text
https://github.com/daovanhung-dev/Learn2Earn.git
```

Local secrets and runtime files are ignored. Do not commit `.env`, generated Prisma output, `node_modules`, build folders, or uploaded runtime files. Use each module README for module-specific setup details.

## Status

The project is in active development. The current restructuring keeps application logic unchanged and focuses on a professional monorepo layout, documentation, and Git hygiene.
