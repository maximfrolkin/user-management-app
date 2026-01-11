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

1. Clone the repository:
   ```
   git clone <repository-url>
   cd user-management-app
   ```

2. Set up the backend:
   - Navigate to the `backend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Create a `.env` file based on the `.env.example` file and configure your database connection.
   - Run the backend server:
     ```
     npm run start
     ```

3. Set up the frontend:
   - Navigate to the `frontend` directory.
   - Install dependencies:
     ```
     npm install
     ```
   - Run the frontend application:
     ```
     npm run dev
     ```

4. Open your browser and go to `http://localhost:3000` to access the application.

## License

This project is open-source and free to use.