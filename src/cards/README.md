# 📘 **Temporary Card API Documentation**

## 🧾 Base URL
```
https://your-api-domain.com/api
```

---

## 🔹 `GET /cards/owner/:ownerAddress`

### 📄 Description
Fetch all **temporary cards** owned by a specific user.

### 🧑‍💻 Request
```http
GET /cards/owner/0xabc123def456
```

### 🔐 Auth
No authentication required (unless you add it).

### 🔁 Parameters

| Name          | Type   | Required | Description                |
|---------------|--------|----------|----------------------------|
| `ownerAddress` | string | ✅ Yes   | Wallet address of the owner |

### ✅ Response `200 OK`

```json
[
  {
    "id": "card_001",
    "name": "Fire Dragon",
    "owner": "0xabc123def456",
    "cardAddress": "0xcard123",
    "expirationDate": "2025-12-31T23:59:59.000Z",
    "blobUrl": "https://cdn.example.com/fire-dragon.png",
    "blocked": false,
    "falseAttempts": 0,
    "numUnlocks": 3,
    "creationTime": "2025-05-18T10:00:00.000Z"
  },
  ...
]
```

### ❌ Error Responses

| Code | Message             |
|------|---------------------|
| 404  | Card owner not found (optional validation) |

---

## 🔹 `GET /cards/:cardAddress/history`

### 📄 Description
Retrieve **transaction history** (create, unlock, use, add/remove balance) for a specific card.

### 🧑‍💻 Request
```http
GET /cards/0xcard123/history
```

### 🔐 Auth
No authentication required (unless you add it).

### 🔁 Parameters

| Name         | Type   | Required | Description              |
|--------------|--------|----------|--------------------------|
| `cardAddress` | string | ✅ Yes   | Unique address of the card |

### ✅ Response `200 OK`

```json
[
  {
    "id": "txn_001",
    "transactionId": "card_001-created-1716001021211",
    "type": "CREATE",
    "interactedWith": null,
    "date": "2025-05-18T10:00:00.000Z",
    "status": "SUCCESS",
    "amount": 0,
    "cardId": "card_001"
  },
  {
    "id": "txn_002",
    "transactionId": "card_001-unlock-1716001121340",
    "type": "UNLOCK",
    "interactedWith": "0xuser456",
    "date": "2025-05-18T10:05:00.000Z",
    "status": "SUCCESS",
    "amount": 0,
    "cardId": "card_001"
  }
]
```

### ❌ Error Responses

| Code | Message         |
|------|-----------------|
| 404  | Card not found  |
| 500  | Internal server error |

---
