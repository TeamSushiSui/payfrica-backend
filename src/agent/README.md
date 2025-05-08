**Agent API Endpoints**

Base path: `/agent`

---

## 1. Get Best Deposit Agent

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

## 2. Get Best Withdrawal Agent

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

## 3. Get Agent Account Details

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

## 4. Update Agent Account

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

## 5. List Withdraw Requests

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

## 6. List Deposit Requests

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

## 7. List Pending Withdraw Requests

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

## 8. List Pending Deposit Requests

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

## 9. Get Valid Agent Types

* **Endpoint**: `GET /valid-types`

**Response 200:**

```json
[
  { "shortName": "dep", "fullType": "Deposit Agent" },
  { "shortName": "wd", "fullType": "Withdrawal Agent" }
]
```

**Example:** above

---

## 10. Get Transaction History by Agent ID

* **Endpoint**: `GET /:agentId/transactions`
* **Path Parameters:**

  * `agentId` (string, required)

**Response 200 (schema):**

```json
[ /* Array with `type` field */ ]
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

## 11. Get All Requests by On-Chain Address

* **Endpoint**: `GET /requests?address=0xABCDEF123`
* **Query Parameters:**

  * `address` (string, required)

**Response 200 (schema):**

```json
[ /* AgentTransaction objects */ ]
```

**Example:** same as transactions example above
