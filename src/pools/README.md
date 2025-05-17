## Summary of Endpoints

| Method | Path                                   | Description                                     |
|--------|----------------------------------------|-------------------------------------------------|
| GET    | [/pools](#1-list-all-pools)          | List all pools                                  |
| GET    | [/pools/:poolId](#2-get-pool-by-id)  | Get a single pool by its ID                     |
| GET    | [/pools/:poolId/providers](#3-list-liquidity-providers) | List liquidity providers for a pool |
| GET    | [/pools/:poolId/fees/default](#4-get-default-swap-fee) | Get a pool's default fee percentage |
| GET    | [/pools/:poolId/fees/scenarios](#5-list-swap-fee-scenarios) | List all custom swap‐fee scenarios |
| GET    | [/pools/:poolId/rewards/:provider](#6-get-unclaimed-rewards) | Get unclaimed rewards for a specific provider |
| GET    | [/pools/:poolId/rates](#7-get-pool-rates) | Get a pool's `coinDecimal` and `ratesDollar` |
| GET    | [/pools/coin/:coinName](#8-lookup-by-coin-name) | Lookup a pool by its human‐friendly `coinName` |
| PATCH  | [/pools/coin/:coinName/rates](#9-update-usd-rate-by-coin-name) | Update USD exchange rate for a pool by name |

---

## 1. List All Pools

**Request**  
```http
GET /pools
```

**Response**  
- **200 OK**  
  ```json
  [
    {
      "id": "0xAAA...111",
      "coinType": "0x1::sui::SUI",
      "coinName": "SUI",
      "coinBalance": 123456n,
      "rewardsBalance": 9876n,
      "feeDecimal": 2,
      "defaultFees": 100,
      "coinDecimal": 9,
      "ratesDollar": 0.50,
      "createdAt": "2025-04-26T10:00:00Z"
    },
  ]
  ```

---

## 2. Get Pool by ID

**Request**  
```http
GET /pools/:poolId
```

- `:poolId` — the object ID of the pool

**Response**  
- **200 OK**  
  ```json
  {
    "id": "0xAAA...111",
    "coinType": "0x1::sui::SUI",
    "coinName": "SUI",
    "coinBalance": 123456n,
    "rewardsBalance": 9876n,
    "feeDecimal": 2,
    "defaultFees": 100,
    "coinDecimal": 9,
    "ratesDollar": 0.50,
    "createdAt": "2025-04-26T10:00:00Z"
  }
  ```
- **404 Not Found** if the pool doesn’t exist.

---

## 3. List Liquidity Providers

**Request**  
```http
GET /pools/:poolId/providers
```

- `:poolId` — the object ID of the pool

**Response**  
- **200 OK**  
  ```json
  [
    {
      "id": "0xAAA...111-0xProv1",
      "poolId": "0xAAA...111",
      "provider": "0xProv1",
      "amount": 2500n,
      "rewards": 100n
    },
    /* ...other providers... */
  ]
  ```

---

## 4. Get Default Swap Fee

**Request**  
```http
GET /pools/:poolId/fees/default
```

**Response**  
- **200 OK**  
  ```json
  { "defaultFees": 100 }    // percentage in hundredths (1% = 100)
  ```
- **404 Not Found** if the pool doesn’t exist.

---

## 5. List Swap-Fee Scenarios

**Request**  
```http
GET /pools/:poolId/fees/scenarios
```

**Response**  
- **200 OK**  
  ```json
  [
    { "threshold": 1000n, "fee": 50 },
    { "threshold": 5000n, "fee": 30 }
  ]
  ```

---

## 6. Get Unclaimed Rewards

**Request**  
```http
GET /pools/:poolId/rewards/:provider
```

- `:provider` — the provider’s address

**Response**  
- **200 OK**  
  ```json
  100n
  ```
- **200 OK** with `0n` if no record exists (or use 404 if you prefer).

---

## 7. Get Pool Rates

**Request**  
```http
GET /pools/:poolId/rates
```

**Response**  
- **200 OK**  
  ```json
  {
    "coinDecimal": 9,
    "ratesDollar": 0.50
  }
  ```

---

## 8. Lookup by Coin Name

**Request**  
```http
GET /pools/coin/:coinName
```

- `:coinName` — e.g. `KHSC`, `NGNC`

**Response**  
- **200 OK**  
  ```json
  {
    "CoinId":      "0x...::khsc::KHSC",
    "PoolId":      "0xDDD...444",
    "coinName":    "KHSC",
    "decimals":    6,
    "rates_dollar": 15.56
  }
  ```
- **404 Not Found** if no pool has that `coinName`.

---

## 9. Update USD Rate by Coin Name

**Request**  
```http
PATCH /pools/coin/:coinName/rates
Content-Type: application/json

{ "rates_dollar": 16.23 }
```

- **Body**  
  - `rates_dollar` (Number): new USD price

**Response**  
- **200 OK**  
  ```json
  {
    "CoinId":      "0x...::khsc::KHSC",
    "PoolId":      "0xDDD...444",
    "coinName":    "KHSC",
    "decimals":    6,
    "rates_dollar": 16.23
  }
  ```
- **404 Not Found** if `coinName` not found.

---

### Error Responses

- **400 Bad Request**: missing/invalid parameters  
- **404 Not Found**: pool or coinName doesn’t exist  
- **500 Internal Server Error**: unexpected failure  

---