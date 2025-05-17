# Admin API Documentation
Base path: `/admin`

## Summary of Endpoints

| Method | Path         | Description                     |
|--------|-------------|---------------------------------|
| POST   | `/`         | Create a new country            |
| GET    | `/`         | Get all country names           |

---

### 1. Create Country

Creates a new country record with associated currency settings.

**Request**
```http
POST /admin
Content-Type: application/json

{
  "name": "Nigeria",
  "currencySymbol": "₦",
  "baseTokencoinType": "0x2::sui::SUI"
}
```

**Response**
- **201 Created**
```json
{
  "id": 1,
  "name": "Nigeria",
  "currencySymbol": "₦",
  "baseTokencoinType": "0x2::sui::SUI",
  "createdAt": "2025-04-26T10:00:00.000Z",
  "updatedAt": "2025-04-26T10:00:00.000Z"
}
```

---

### 2. Get All Country Names

Returns an array of country names.

**Request**
```http
GET /admin
```

**Response**
- **200 OK**
```json
[
  "Nigeria",
  "Ghana",
  "Kenya"
]
```

---

## Error Responses

- **400 Bad Request**: Invalid request body
- **409 Conflict**: Country already exists
- **500 Internal Server Error**: Unexpected server error
