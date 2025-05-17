# Payfrica Backend API Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Running the Application](#running-the-application)
3. [API Documentation](#api-documentation)
   - [Users API](src/users/README.md)
   - [Agent API](src/agent/README.md)
   - [Pools API](src/pools/README.md)
   - [Admin API](src/admin/README.md)
4. [Error Handling](#error-handling)
5. [License](#license)

## Introduction
This API provides services for managing users and agents in a financial platform. It includes features such as user management, agent operations, liquidity pools, and administrative functions.

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm (v7 or higher)
- PostgreSQL database

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/TeamSushiSui/payfrica-backend.git
   cd payfrica-backend
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

### Environment Variables
Create a `.env` file in the root directory and configure the following variables:
```env
DATABASE_URL=postgresql://username:password@localhost:5432/database_name
PORT=3000
JWT_SECRET=your_jwt_secret
```

### Running the Application
1. Run database migrations:
   ```bash
   pnpm prisma migrate dev
   ```

2. Start the application:
   ```bash
   pnpm start:dev
   ```

3. The API will be available at `http://localhost:3000`

## API Documentation

Each module has its own detailed API documentation:

- [Users API](src/users/README.md) - User management and transaction endpoints
- [Agent API](src/agent/README.md) - Agent operations and request handling
- [Pools API](src/pools/README.md) - Liquidity pool management
- [Admin API](src/admin/README.md) - Administrative functions

## Error Handling

Common error responses across all endpoints:

- **400 Bad Request**: Invalid input or missing required fields
- **401 Unauthorized**: Missing or invalid authentication
- **403 Forbidden**: Insufficient permissions
- **404 Not Found**: Resource not found
- **500 Internal Server Error**: Unexpected server error

## License

This project is licensed under the MIT License.