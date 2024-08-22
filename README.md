# Nest.js CRUD API with JWT Authentication

This is a Nest.js-based API that allows users to interact with a PostgreSQL database. The API supports CRUD operations and implements authentication and authorization using JSON Web Tokens (JWTs). The project also includes error handling, validation, and comprehensive API documentation using Swagger.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Running Tests](#running-tests)
- [Technologies Used](#technologies-used)

## Features

- CRUD (Create, Read, Update, Delete) operations for user data
- Authentication and authorization using JWTs
- Error handling and validation
- API documentation using Swagger
- Unit tests for API functionality

## Getting Started

Follow the instructions below to set up and run the project locally.

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (v16.x or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/) (v12 or higher)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/your-repository-name.git
   cd your-repository-name
2. **Install dependencies:**
    npm install

### Environment Variables
Create a .env file in the root directory of the project and add the following environment variables:
- JWT_SECRET=your_jwt_secret_key

### Running the Application
To start the application, use the following command:
npm run start
The application will start on http://localhost:3000.

### API Documentation
API documentation is available through Swagger. Once the application is running, visit the following URL to access the documentation:
http://localhost:3000/api-docs
The Swagger UI allows you to test the API endpoints directly from your browser.

### Running Tests
Unit tests are included to ensure the API functions as expected. To run the tests, use the following command:
npm run test

### Technologies Used
- Nest.js - A progressive Node.js framework
- TypeORM - ORM for TypeScript and JavaScript
- PostgreSQL - Relational database
- JWT - JSON Web Tokens for authentication
- Swagger - API documentation
- Jest - Testing framework



