# User Management Application

This project is a simple web application that allows users to manage their personal information, including Name, Surname, Date of Birth, Sport, and T-shirt size. The application is built using TypeScript and JavaScript, with a backend powered by Express and a frontend using React.

## Project Structure

```
user-management-app
├── backend                # Backend application
│   ├── src                # Source files for the backend
│   │   ├── index.ts       # Entry point for the backend
│   │   ├── controllers     # Controllers for handling requests
│   │   ├── models          # Database models
│   │   ├── routes          # API routes
│   │   └── utils           # Utility functions
│   ├── package.json        # Backend dependencies
│   ├── tsconfig.json       # TypeScript configuration for backend
│   └── .env                # Environment variables
├── frontend               # Frontend application
│   ├── src                # Source files for the frontend
│   │   ├── main.tsx       # Entry point for the frontend
│   │   ├── App.tsx        # Main application component
│   │   ├── components      # Reusable components
│   │   ├── pages          # Page components
│   │   └── styles         # CSS styles
│   ├── package.json        # Frontend dependencies
│   ├── tsconfig.json       # TypeScript configuration for frontend
│   └── vite.config.ts      # Vite configuration
├── db                     # Database setup
│   └── migrations         # Database migration files
│       └── init.sql       # SQL commands to initialize the database
├── .gitignore             # Files to ignore in Git
├── docker-compose.yml      # Docker configuration for services
├── README.md              # Project documentation
└── .env.example           # Example environment variables
```

## Features

- User can add, edit, and view their information.
- All user information can be viewed in a list format.
- Built with a modern tech stack using TypeScript and JavaScript.

## Getting Started

Follow these steps to run the application locally on Windows (PowerShell). These instructions assume you have Node.js and npm installed.

Prerequisites
- Node.js (recommended >= 14) and npm
- Git (to clone the repo)

Quick start (recommended for development)

1) Clone the repository

```powershell
git clone <repository-url>
cd user-management-app
```


2) Backend (run in one terminal)

```powershell
cd backend
npm install

# Recommended fast dev run (skips strict TS type-checking and avoids ts-node-dev TS API issues)
npm run dev:fast

# Alternatively use the watcher (may show ts-node-dev TypeScript API errors on some setups):
npm run dev

# To build and run compiled JS (production-like):
npm run build
node dist/index.js
```

Notes for the backend
- The project uses a simple file-based DB at `backend/data/db.json` (no external DB required). This is intended for development/demo only.
- The server listens on `PORT` environment variable or defaults to `5000`.
- Health endpoint: `http://localhost:5000/` (returns a short text message).
- API base (as used by the frontend via Vite proxy): `http://localhost:5000/users` (frontend uses `/api/users`).


3) Frontend (run in a second terminal)

```powershell
cd frontend
npm install --legacy-peer-deps
npm run dev
```

By default Vite serves the app on port `3000` (it will use the next free port if 3000 is in use). Open the local address printed by Vite (e.g. `http://localhost:3000/`).

Proxy behavior
- The frontend is configured to proxy `/api/*` to the backend (see `frontend/vite.config.ts`). The frontend code should call `/api/users` so the dev server forwards requests to `http://localhost:5000/users`.

Troubleshooting
- If frontend shows `ERR_CONNECTION_REFUSED` for `/api` requests, ensure the backend is running on port 5000 and reachable.
- If `ts-node-dev` produces a TypeScript API error, use the `dev:fast` script shown above.
- If Vite picks a different port (3001, 3002...), open the URL printed in the frontend terminal.
- If ports are in use, find and kill the process with:

```powershell
netstat -aon | findstr ":3000"  # or ":5000"
taskkill /PID <PID> /F
```

Security & production notes
- `backend/data/db.json` is not suitable for production; migrate to a proper DB (Postgres/Mongo/SQLite) for anything beyond a demo.
- `docker-compose.yml` currently references services (Postgres) but the backend code uses a file DB; update the compose file and backend DB code before using Docker for local development.

If you want, I can update `README.md` further to add quick troubleshooting commands or a sample `.env` file — tell me which you prefer.

## License

This project is open-source and free to use.