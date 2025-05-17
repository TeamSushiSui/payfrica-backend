## Summary of Endpoints

| Method | Path                                  | Description                                |
|--------|---------------------------------------|--------------------------------------------|
| GET    | `/users/:address`                     | Get full user details including relations  |
| GET    | `/users/:address/basic`               | Find or create a user by wallet address    |
| GET    | `/users/:address/transactions`        | Get a user's transaction history           |
| GET    | `/users/:address/stats`               | Get a user's summary stats                 |
| GET    | `/users/:userId/base-token`           | Get a user's selected base token           |
| PATCH  | `/users/:userId/base-token`           | Upsert & update a user's base token        |
| PATCH  | `/users/:address`                     | Update user general information            |
| PATCH  | `/users/:address/account-details`     | Update user's bank account details         |

---

### 1. Find or Create User (Basic)

Fetches basic user record for the given blockchain address, creating it if not present.

> **Note:** this will return the user's scalar fields only (no related entities).

**Request**  
```http
GET /users/:address/basic
```

- `:address` — the user's wallet address (serves as primary key)

**Response**  
- **200 OK**  
  ```json
  {
    "id": "0x1234ABCD",
    "address": "0x1234ABCD",
    "username": null,
    "baseTokenId": null,
    "accountDetails": null,
    "createdAt": "2025-04-26T10:00:00.000Z",
    "updatedAt": "2025-04-26T10:00:00.000Z"
  }
  ```

### 1b. Get Full User Details

Fetches complete user information including related entities like country and account details.

**Request**  
```http
GET /users/:address
```

**Response**  
- **200 OK**  
  ```json
  {
    "id": "0x1234ABCD",
    "address": "0x1234ABCD",
    "username": "alice",
    "country": {
      "id": 1,
      "name": "Nigeria",
      // ...country fields...
    },
    "accountDetails": {
      "accountNumber": "1234567890",
      "name": "Alice Smith",
      "bank": "First Bank"
    }
  }
  ```

---

### 2. Get Transaction History

Returns a user object plus an array of their transactions ordered by date descending.

**Request**  
```http
GET /users/0x1234ABCD/transactions
```

- `:address` — the user’s wallet address

**Response**  
- **200 OK**  
  ```json
  {
    "user": {
      "id": "0x1234ABCD",
      "address": "0x1234ABCD",
      "username": "alice",
      /* …other scalar fields… */
    },
    "transactions": [
      {
        "id": "ckj…xyz",
        "transactionId": "0xTX…001",
        "type": "SEND",
        "status": "SUCCESS",
        "date": "2025-04-26T09:00:00.000Z",
        "incomingAsset": null,
        "incomingAmount": null,
        "outgoingAsset": "SUI",
        "outgoingAmount": 12.5,
        "fees": 0
      },
      /* …more transactions… */
    ]
  }
  ```
- **404 Not Found** if the user does not exist.

---

### 3. Get User Stats

Summarizes active (pending) deposits and withdrawals for a user.

**Request**  
```http
GET /users/0x1234ABCD/stats
```

- `:address` — the user’s wallet address

**Response**  
- **200 OK**  
  ```json
  {
    "address": "0x1234ABCD",
    "activeWithdrawals": 2,
    "activeDeposits": 1,
    "activeWithdrawalAmount": 1500,
    "activeDepositAmount": 500
  }
  ```
- **404 Not Found** if the user does not exist.

---

### 4. Get User’s Base Token

Fetches the user’s preferred `BaseToken` record, or `null` if none set.

**Request**  
```http
GET /users/0x1234ABCD/base-token
```

- `:userId` — the user’s primary key (same as address)

**Response**  
- **200 OK**  
  ```json
  {
    "name": "NGNC",
    "coinType": "0x920d…784ca0d::ngnc::NGNC",
    "decimals": 6,
    "symbol": "₦"
  }
  ```
- **200 OK** with `null` body if the user exists but hasn’t selected a base token.
- **404 Not Found** if the user does not exist.

---

### 5. Upsert & Update User’s Base Token

Creates or updates a `BaseToken` record and associates it with the user.

**Request**  
```http
PATCH /users/0x1234ABCD/base-token
Content-Type: application/json

{
  "name":     "NGNC",
  "coinType": "0x920d…784ca0d::ngnc::NGNC",
  "decimals": 6,
  "symbol":   "₦"
}
```

- **Body (`UpdateBaseTokenDto`)**  
  - `name` (string): unique token name  
  - `coinType` (string): full on‐chain type  
  - `decimals` (integer): decimal precision  
  - `symbol` (string): display symbol

**Response**  
- **200 OK**  
  ```json
  {
    "name":     "NGNC",
    "coinType": "0x920d…784ca0d::ngnc::NGNC",
    "decimals": 6,
    "symbol":   "₦"
  }
  ```
- **400 Bad Request** if the body is missing or invalid.
- **404 Not Found** if the user does not exist.

---

### 6. Update User

Updates general user information.

**Request**  
```http
PATCH /users/:address
Content-Type: application/json

{
  "username": "alice",
  // ... other updateable fields
}
```

**Response**  
- **200 OK** Returns the updated user object
- **404 Not Found** if user doesn't exist

### 7. Update Account Details

Updates or creates bank account details for a user.

**Request**  
```http
PATCH /users/:address/account-details
Content-Type: application/json

{
  "accountNumber": "1234567890",
  "name": "Alice Smith",
  "bank": "First Bank"
}
```

**Response**  
- **200 OK** Returns the updated account details
- **404 Not Found** if user doesn't exist

---

### Error Responses

- **400 Bad Request**: invalid/missing query or body parameters  
- **404 Not Found**: user or related resource not found  
- **500 Internal Server Error**: unexpected failures  

---

> **Security**  
> These endpoints may be protected by a JWT guard (`JwtAuthGuard`) once you uncomment and configure it. Ensure you pass a valid bearer token in the `Authorization` header.