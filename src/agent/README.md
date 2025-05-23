**Agent API Endpoints**
Base path: `/agent`

## Summary of Endpoints

| Method | Path                               | Description                                    |
|--------|---------------------------------------|------------------------------------------------|
| GET    | [/](#1-get-all-agents)              | Get all agents                                  |
| GET    | [/best-deposit-agent](#2-get-best-deposit-agent) | Find best agent for deposit        |
| GET    | [/best-withdraw-agent](#3-get-best-withdrawal-agent) | Find best agent for withdrawal |
| GET    | [/account-details](#4-get-agent-account-details) | Get agent account details         |
| PATCH  | [/:agentId/account](#5-update-agent-account) | Update agent account info           |
| GET    | [/:agentId/withdraw-requests](#6-list-withdraw-requests) | List agent's withdraw requests |
| GET    | [/:agentId/deposit-requests](#7-list-deposit-requests) | List agent's deposit requests |
| GET    | [/:agentId/pending-withdraw-requests](#8-list-pending-withdraw-requests) | List agent's pending withdrawals |
| GET    | [/:agentId/pending-deposit-requests](#9-list-pending-deposit-requests) | List agent's pending deposits |
| GET    | [/valid-types](#10-get-valid-agent-types) | Get valid agent types                |
| GET    | [/:agentId/transactions](#11-get-transaction-history-by-agent-id) | Get agent's transaction history |
| GET    | [/requests](#12-get-all-requests-by-on-chain-address) | Get all requests by on-chain address |
| GET    | [/agent](#13-get-agent-by-on-chain-address) | Get agent by on-chain address      |

---

## 1. Get All Agents

* **Endpoint**: `GET /`
* **Description**: Returns a list of all agents.
* **Query Parameters:** None

**Response 200 (schema):**

```json
[
  {
    "id": "string",
    "addr": "string",
    "balance": number,
    "coinType": "string",
    "accountNumber": "string",
    "bank": "string",
    "name": "string",
    "pendingWithdrawals": ["string"],
    "successfulWithdrawals": ["string"],
    "totalSuccessfulWithdrawals": number,
    "totalPendingWithdrawals": number,
    "totalSuccessfulWithdrawalsAmount": number,
    "totalPendingWithdrawalsAmount": number,
    "pendingDeposits": ["string"],
    "successfulDeposits": ["string"],
    "totalSuccessfulDeposits": number,
    "totalPendingDeposits": number,
    "totalSuccessfulDepositsAmount": number,
    "totalPendingDepositsAmount": number,
    "unsuccessfulDeposits": ["string"],
    "totalUnsuccessfulDeposits": number,
    "maxWithdrawLimit": number,
    "maxDepositLimit": number,
    "minWithdrawLimit": number,
    "minDepositLimit": number,
    "createdAt": "ISODate",
    "updatedAt": "ISODate"
  }
]
```

**Example:**

```json
[
  {
    "id": "a1b2c3d4",
    "addr": "0xABCDEF123",
    "balance": 1000000,
    "coinType": "NGNC",
    "accountNumber": "0123456789",
    "bank": "First Bank",
    "name": "John Doe",
    "pendingWithdrawals": [],
    "successfulWithdrawals": [],
    "totalSuccessfulWithdrawals": 0,
    "totalPendingWithdrawals": 0,
    "totalSuccessfulWithdrawalsAmount": 0,
    "totalPendingWithdrawalsAmount": 0,
    "pendingDeposits": [],
    "successfulDeposits": [],
    "totalSuccessfulDeposits": 0,
    "totalPendingDeposits": 0,
    "totalSuccessfulDepositsAmount": 0,
    "totalPendingDepositsAmount": 0,
    "unsuccessfulDeposits": [],
    "totalUnsuccessfulDeposits": 0,
    "maxWithdrawLimit": 0,
    "maxDepositLimit": 0,
    "minWithdrawLimit": 0,
    "minDepositLimit": 0,
    "createdAt": "2025-05-01T10:00:00.000Z",
    "updatedAt": "2025-05-08T12:34:56.000Z"
  }
]
```

---

## 2. Get Best Deposit Agent

* **Endpoint**: `GET /best-deposit-agent`
* **Query Parameters:**

  * `coinType` (string, required) – e.g. `"NGNC"`
  * `amount` (integer, required) – e.g. `5000`

**Response 200 (schema):**

```json
{
  "id": "string",
  "accountNumber": "string",
  "bank": "string",
  "name": "string",
  "comment": "string"
}
```

**Example:**

```json
{
  "id": "a1b2c3d4",
  "accountNumber": "0123456789",
  "bank": "First Bank",
  "name": "John Doe",
  "comment": "AB123"
}
```

---

## 3. Get Best Withdrawal Agent

* **Endpoint**: `GET /best-withdraw-agent`
* **Query Parameters:**

  * `coinType` (string, required)
  * `amount` (integer, required)

**Response 200 (schema):**

```json
{ "id": "string" }
```

**Example:**

```json
{ "id": "w4x5y6z7" }
```

---

## 4. Get Agent Account Details

* **Endpoint**: `GET /account-details`
* **Query Parameters:**

  * `agentId` (string, required)

**Response 200 (schema):**

```json
{
  "accountNumber": "string",
  "bank": "string",
  "name": "string"
}
```

**Example:**

```json
{
  "accountNumber": "0123456789",
  "bank": "GTBank",
  "name": "Jane Smith"
}
```

---

## 5. Update Agent Account

* **Endpoint**: `PATCH /:agentId/account`
* **Path Parameters:**

  * `agentId` (string, required)
* **Request Body:**

```json
{
  "accountName": "New Name",
  "accountNumber": "9876543210",
  "accountBank": "Access Bank"
}
```

**Response 200 (schema):**

```json
{
  "id": "string",
  "addr": "string",
  "balance": number,
  "coinType": "string",
  "accountNumber": "string",
  "bank": "string",
  "name": "string",
  "createdAt": "ISODate",
  "updatedAt": "ISODate"
}
```

**Example:**

```json
{
  "id": "a1b2c3d4",
  "addr": "0xABCDEF123",
  "balance": 1000000,
  "coinType": "NGNC",
  "accountNumber": "9876543210",
  "bank": "Access Bank",
  "name": "New Name",
  "createdAt": "2025-05-01T10:00:00.000Z",
  "updatedAt": "2025-05-08T12:34:56.000Z"
}
```

---

## 6. List Withdraw Requests

* **Endpoint**: `GET /:agentId/withdraw-requests`
* **Path Parameters:**

  * `agentId` (string, required)

**Response 200 (schema):**

```json
[ /* WithdrawRequest objects */ ]
```

**Example:**

```json
[
  {
    "id": "wr1",
    "amount": 5000,
    "user": "0xUSER1",
    "agentId": "a1b2c3d4",
    "coinType": "NGNC",
    "status": "PENDING",
    "requestTime": "2025-05-07T09:00:00.000Z",
    "statusTime": null,
    "createdAt": "2025-05-07T09:00:00.000Z",
    "updatedAt": "2025-05-07T09:00:00.000Z"
  }
]
```

---

## 7. List Deposit Requests

* **Endpoint**: `GET /:agentId/deposit-requests`
* **Path Parameters:**

  * `agentId` (string, required)

**Response 200 (schema):**

```json
[ /* DepositRequest objects */ ]
```

**Example:**

```json
[
  {
    "id": "dr1",
    "amount": 10000,
    "user": "0xUSER2",
    "agentId": "a1b2c3d4",
    "successfulAgentId": null,
    "coinType": "NGNC",
    "comment": "CD456",
    "status": "COMPLETED",
    "requestTime": "2025-05-06T14:30:00.000Z",
    "statusTime": "2025-05-06T15:00:00.000Z",
    "createdAt": "2025-05-06T14:30:00.000Z",
    "updatedAt": "2025-05-06T15:00:00.000Z"
  }
]
```

---

## 8. List Pending Withdraw Requests

* **Endpoint**: `GET /:agentId/pending-withdraw-requests`
* **Path Parameters:**

  * `agentId` (string, required)

**Response 200 (schema):**

```json
[ /* Pending WithdrawRequest objects */ ]
```

**Example:**

```json
[
  {
    "id": "wr2",
    "amount": 2500,
    "user": "0xUSER4",
    "agentId": "a1b2c3d4",
    "coinType": "NGNC",
    "status": "PENDING",
    "requestTime": "2025-05-08T11:15:00.000Z",
    "statusTime": null,
    "createdAt": "2025-05-08T11:15:00.000Z",
    "updatedAt": "2025-05-08T11:15:00.000Z"
  }
]
```

---

## 9. List Pending Deposit Requests

* **Endpoint**: `GET /:agentId/pending-deposit-requests`
* **Path Parameters:**

  * `agentId` (string, required)

**Response 200 (schema):**

```json
[ /* Pending DepositRequest objects */ ]
```

**Example:**

```json
[
  {
    "id": "dr2",
    "amount": 2000,
    "user": "0xUSER3",
    "agentId": "a1b2c3d4",
    "successfulAgentId": null,
    "coinType": "NGNC",
    "comment": "EF789",
    "status": "PENDING",
    "requestTime": "2025-05-08T08:00:00.000Z",
    "statusTime": null,
    "createdAt": "2025-05-08T08:00:00.000Z",
    "updatedAt": "2025-05-08T08:00:00.000Z"
  }
]
```

---

## 10. Get Valid Agent Types

* **Endpoint**: `GET /valid-types`

**Response 200:**

```json
[
  { "shortName": "dep", "fullType": "Deposit Agent" },
  { "shortName": "wd",  "fullType": "Withdrawal Agent" }
]
```

---

## 11. Get Transaction History by Agent ID

* **Endpoint**: `GET /:agentId/transactions`
* **Path Parameters:**

  * `agentId` (string, required)

**Response 200 (schema):**

```json
[ /* Array with a `type` field showing 'withdrawal' or 'deposit' */ ]
```

**Example:**

```json
[
  {
    "id": "wr1",
    "amount": 5000,
    "user": "0xUSER1",
    "agentId": "a1b2c3d4",
    "coinType": "NGNC",
    "status": "PENDING",
    "requestTime": "2025-05-07T09:00:00.000Z",
    "statusTime": null,
    "createdAt": "2025-05-07T09:00:00.000Z",
    "updatedAt": "2025-05-07T09:00:00.000Z",
    "type": "withdrawal"
  },
  {
    "id": "dr1",
    "amount": 10000,
    "user": "0xUSER2",
    "agentId": "a1b2c3d4",
    "successfulAgentId": null,
    "coinType": "NGNC",
    "comment": "CD456",
    "status": "COMPLETED",
    "requestTime": "2025-05-06T14:30:00.000Z",
    "statusTime": "2025-05-06T15:00:00.000Z",
    "createdAt": "2025-05-06T14:30:00.000Z",
    "updatedAt": "2025-05-06T15:00:00.000Z",
    "type": "deposit"
  }
]
```

---

## 12. Get All Requests by On-Chain Address

* **Endpoint**: `GET /requests?address=<on-chain-address>`
* **Query Parameters:**

  * `address` (string, required)

**Response 200 (schema):**

```json
[ /* AgentTransaction objects, same format as `/transactions` above */ ]
```

**Example:** same as the transaction-history example above.

---

## 13. Get Agent by On-Chain Address

* **Endpoint**: `GET /agent?address=<on-chain-address>`
* **Query Parameters:**
  * `address` (string, required) - The agent's blockchain address

**Response 200 (schema):**
```json
{
  "id": "string"
}
```

**Example:**
```json
{
  "id": "a1b2c3d4"
}
```

---

> **Note:** All endpoints may return:
> - **404 Not Found** when the requested resource doesn't exist
> - **400 Bad Request** for invalid parameters