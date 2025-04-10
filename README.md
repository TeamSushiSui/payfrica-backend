To update your README file with detailed documentation for your API services, including setup instructions and endpoint details, you can replace or append the following content to your existing README file:

---

# API Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Setup Instructions](#setup-instructions)
   - [Prerequisites](#prerequisites)
   - [Installation](#installation)
   - [Environment Variables](#environment-variables)
   - [Running the Application](#running-the-application)
3. [API Endpoints](#api-endpoints)
   - [Users Service](#users-service)
     - [GET /users/:address](#get-usersaddress)
     - [GET /users/:address/transactions](#get-usersaddresstransactions)
     - [GET /users/:address/stats](#get-usersaddressstats)
   - [Agent Service](#agent-service)
     - [POST /agent](#post-agent)
     - [GET /agent](#get-agent)
     - [GET /agent/type/:coinType](#get-agenttypecointype)
     - [GET /agent/:id](#get-agentid)
     - [GET /agent/:id/account](#get-agentidaccount)
     - [PUT /agent/:id/limits](#put-agentidlimits)
     - [POST /agent/:id/balance](#post-agentidbalance)
     - [POST /agent/withdraw](#post-agentwithdraw)
     - [POST /agent/withdraw/:id/approve](#post-agentwithdrawidapprove)
     - [POST /agent/deposit](#post-agentdeposit)
     - [POST /agent/deposit/:id/approve](#post-agentdepositidapprove)
     - [POST /agent/deposit/:id/cancel](#post-agentdepositidcancel)
     - [POST /agent/:id/withdraw-balance](#post-agentidwithdraw-balance)
4. [Error Handling](#error-handling)
5. [License](#license)

---

## Introduction
This API provides services for managing users and agents in a financial platform. It includes features such as user creation, transaction history retrieval, agent management, and handling deposits and withdrawals.

---

## Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or pnpm (v7 or higher)
- PostgreSQL database

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo-name.git
   cd your-repo-name
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

3. The API will be available at `http://localhost:3000`.

---

## API Endpoints

### Users Service

#### **GET /users/:address**
- **Description**: Retrieves a user by their address. If the user does not exist, it creates a new user.
- **Parameters**:
  - `address` (path): The blockchain address of the user.
- **Response**:
  ```json
  {
    "id": "user123",
    "address": "0x123",
    "username": "john_doe",
    "totalWithdrawn": 1000,
    "totalDeposited": 2000
  }
  ```

#### **GET /users/:address/transactions**
- **Description**: Retrieves the transaction history (withdrawals and deposits) for a user.
- **Parameters**:
  - `address` (path): The blockchain address of the user.
- **Response**:
  ```json
  {
    "user": { ... },
    "withdrawals": [ ... ],
    "deposits": [ ... ]
  }
  ```

#### **GET /users/:address/stats**
- **Description**: Retrieves user statistics, including totals and active transactions.
- **Parameters**:
  - `address` (path): The blockchain address of the user.
- **Response**:
  ```json
  {
    "address": "0x123",
    "totalWithdrawn": 1000,
    "totalDeposited": 2000,
    "activeWithdrawals": 2,
    "activeDeposits": 3,
    "activeWithdrawalAmount": 500,
    "activeDepositAmount": 800
  }
  ```

---

### Agent Service

#### **POST /agent**
- **Description**: Creates a new agent.
- **Request Body**:
  ```json
  {
    "addr": "0x123",
    "coinType": "BTC",
    "minWithdrawLimit": 100,
    "maxWithdrawLimit": 1000,
    "minDepositLimit": 50,
    "maxDepositLimit": 500,
    "accountNumber": "123456789",
    "bank": "Test Bank",
    "name": "Agent Name"
  }
  ```

#### **GET /agent**
- **Description**: Retrieves all agents.
- **Response**:
  ```json
  [
    { ... },
    { ... }
  ]
  ```

#### **GET /agent/type/:coinType**
- **Description**: Retrieves agents filtered by their coin type.
- **Parameters**:
  - `coinType` (path): The type of coin (e.g., BTC, ETH).

#### **GET /agent/:id**
- **Description**: Retrieves an agent by their ID.

#### **GET /agent/:id/account**
- **Description**: Retrieves account details for a specific agent.

#### **PUT /agent/:id/limits**
- **Description**: Updates withdrawal and deposit limits for an agent.
- **Request Body**:
  ```json
  {
    "minWithdrawLimit": 100,
    "maxWithdrawLimit": 1000,
    "minDepositLimit": 50,
    "maxDepositLimit": 500
  }
  ```

#### **POST /agent/:id/balance**
- **Description**: Adds funds to an agent's balance.
- **Request Body**:
  ```json
  {
    "amount": 500
  }
  ```

#### **POST /agent/withdraw**
- **Description**: Creates a withdrawal request for an agent.

#### **POST /agent/withdraw/:id/approve**
- **Description**: Approves a withdrawal request by its ID.

#### **POST /agent/deposit**
- **Description**: Creates a deposit request for an agent.

#### **POST /agent/deposit/:id/approve**
- **Description**: Approves a deposit request by its ID.

#### **POST /agent/deposit/:id/cancel**
- **Description**: Cancels a deposit request by its ID.

#### **POST /agent/:id/withdraw-balance**
- **Description**: Allows an agent to withdraw funds from their balance.

---

## Error Handling
- **404 Not Found**: Returned when a resource (e.g., user, agent) is not found.
- **400 Bad Request**: Returned for invalid input or missing required fields.
- **500 Internal Server Error**: Returned for unexpected server errors.

---

## License
This project is licensed under the MIT License.

---

You can now replace or append this content to your existing README file. Let me know if you need further assistance!