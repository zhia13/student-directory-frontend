# Student Directory API – React Frontend with JWT Authentication

## Project Description

This project is a React-based Student Directory application connected to a REST API backend. It uses JWT authentication to allow registered users to log in and access protected student records.

## Features

- User registration
- User login with JWT authentication
- Protected student directory
- Display student records
- Logout functionality
- Automatic redirect for unauthenticated users
- Authorization header for protected API requests

## Technologies Used

- React
- Vite
- JavaScript
- React Router DOM
- Node.js
- Express.js
- MongoDB Atlas
- JWT Authentication

## Installation and Setup

### 1. Clone the Repository

```bash
git clone MONGO_URI=mongodb+srv://altheadwynnrich_db_user:AllawanDimple@cluster0.dxnesyc.mongodb.net/student_dictionary
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Frontend

```bash
npm run dev
```

Open the application at:

`http://localhost:5173`

## Backend Configuration

The frontend connects to the Lesson 5 backend running at:

`http://localhost:3000`

API endpoints:

- POST `/api/auth/register`
- POST `/api/auth/login`
- GET `/students`

The backend requires a valid MongoDB Atlas connection and appropriate environment variables.

## Authentication

The application stores the JWT token in localStorage after a successful login. The token is included in the Authorization header when accessing protected student records.

## Screenshots

The screenshots folder contains:

1. Login Page
2. Register Page
3. Successful Login and Student List
4. Failed Login
5. Protected Route Redirect
6. JWT Authorization Header

## Reflection Questions

### 1. Why is localStorage used to store the JWT token? What are its risks?

LocalStorage is used because it allows the application to keep the login token even when the browser is refreshed. However, it can be accessed by JavaScript, so it may be exposed during a Cross-Site Scripting (XSS) attack. More secure options include HttpOnly cookies with appropriate security settings.

### 2. Why use Context API instead of passing props?

Context API allows different components to access authentication information without passing props through many components. It makes the application easier to manage.

### 3. What happens when a JWT token expires?

When a token expires, the backend rejects the request. The application should clear the expired token, log out the user, and redirect them to the login page.

### 4. Why is backend authentication still necessary if ProtectedRoute is implemented?

ProtectedRoute only controls access to frontend pages. It does not secure the API itself. Backend authentication is necessary to verify the JWT and prevent unauthorized users from accessing protected data.

## Author

Althea Dwynn Rich A. Allawan BSIT-3
