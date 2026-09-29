# Chalets Horizon Nature

A bilingual (French/English) chalet booking website built with Next.js and Strapi CMS.

More details on the Strapi Starter kit used as a baseline can be found [here](./README-STRAPI-STARTER.md).

## Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **State Management**: Zustand
- **UI Components**: Headless UI, Heroicons, Material Design Icons
- **Maps**: Google Maps API (@vis.gl/react-google-maps)
- **Gallery**: PhotoSwipe
- **Date Picker**: react-day-picker
- **Error Tracking**: Sentry
- **Markdown**: react-markdown with remark-gfm

### Backend
- **CMS**: Strapi 5.12
- **Database**: PostgreSQL
- **Plugins**:
  - SEO
  - Sentry
  - Color Picker
  - Users & Permissions
  - Material Symbols
  - Populate Deep
- **Error Tracking**: Sentry

### Hosting
- **Platform**: Digital Ocean
- **Reverse Proxy**: Nginx
- **Process Management**: PM2

## Prerequisites

- **Node.js**: >=18.0.0 <=22.x.x
- **Yarn**: >=4.0.0
- **PostgreSQL**

## Installation

### Postgres setup

```shell
# access psql
sudo -u postgres psql postgres

# create user
sudo -u postgres createuser jbeauchemin -P

# create db
sudo -u postgres createdb chalets-horizon-nature

```

### Platform setup

```bash
# Install all dependencies (root, frontend, backend)
yarn setup

# Or install individually
yarn install
yarn setup:frontend
yarn setup:backend
```

## Development

```bash
# Run both frontend and backend concurrently
yarn dev

# Run frontend only (http://localhost:3000)
yarn frontend

# Run backend only (http://localhost:1337)
yarn backend
```

## Environment Variables

Copy and rename .env.example to .env and replace the values with your own.

### Frontend (`.env`)
```env
NEXT_PUBLIC_STRAPI_API_TOKEN=your_api_token
NEXT_PUBLIC_PAGE_LIMIT=6
NEXT_PUBLIC_STRAPI_FORM_SUBMISSION_TOKEN=your_form_token
NEXT_PUBLIC_STRAPI_API_URL=http://localhost:1337
GOOGLE_MAP_API_KEY=your_google_maps_key
SENTRY_AUTH_TOKEN=your_sentry_token
SENTRY_DSN=your_sentry_dsn
```

### Backend (`.env`)
```env
HOST=localhost
PORT=1337
STRAPI_URL=http://localhost:1337
APP_KEYS=your_app_keys
API_TOKEN_SALT=your_token_salt
ADMIN_JWT_SECRET=your_jwt_secret
JWT_SECRET=your_jwt_secret
TRANSFER_TOKEN_SALT=your_transfer_salt
STRAPI_PLUGIN_I18N_INIT_LOCALE_CODE=fr
SENTRY_DSN=your_sentry_dsn
DATABASE_CLIENT=postgres
DATABASE_HOST=127.0.0.1
DATABASE_PORT=5432
DATABASE_NAME=chalets-horizon-nature
DATABASE_USERNAME=your_db_username
DATABASE_PASSWORD=your_db_password
DATABASE_SSL=false
```

## Available Scripts

- `yarn dev` - Start both frontend and backend in development
- `yarn frontend` - Start frontend only
- `yarn backend` - Start backend only
- `yarn clear` - Clear frontend cache (.next and cache directories)
- `yarn setup` - Install all dependencies
- `yarn seed` - Import seed data to Strapi (requires seed-data.tar.gz)
- `yarn export` - Export Strapi data to seed-data.tar.gz

## Project Structure

```
chalets-horizon-nature/
├── frontend/           # Next.js application
│   ├── src/
│   │   ├── app/       # App router pages
│   │   └── components/ # React components
│   └── public/        # Static assets
├── backend/           # Strapi CMS
│   ├── config/        # Strapi configuration
│   ├── src/           # Strapi source code
│   │   ├── api/       # Content types
│   │   └── plugins/   # Strapi plugins
│   └── public/        # Uploads
└── package.json       # Root workspace scripts
```

## Code Quality

- **Linting**: ESLint with Next.js, React, and TypeScript rules
- **Formatting**: Prettier
- **Git Hooks**: Husky with lint-staged for pre-commit checks
- **TypeScript**: Strict mode enabled

## Deployment

The project uses GitHub Actions for automatic deployment to Digital Ocean on push to `main` branch. The workflow:
1. Builds backend on CI
2. Transfers zipped build files via SCP
3. Builds frontend on the server (to fix: issues while building the frontend on GitHub actions)
4. Restarts services with PM2
