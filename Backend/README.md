# User API Documentation

## POST /users/register

Registers a new user and returns an authentication token.

### Request Body
```json
{
  "fullname": {
    "firstname": "string (required, min 3 chars)",
    "lastname": "string (optional)"
  },
  "email": "string (required, valid email)",
  "password": "string (required, min 6 chars)"
}
```

### Response (201 Created)
```json
{
  "user": {
    "_id": "string",
    "fullname": { "firstname": "string", "lastname": "string" },
    "email": "string",
    "socketId": "string or null"
  },
  "token": "JWT token"
}
```

### Example
```bash
  -H "Content-Type: application/json" \
  -d '{"fullname":{"firstname":"John","lastname":"Doe"},"email":"john@example.com","password":"password123"}'
```

### Error (400 Bad Request)
Validation errors in response array

---

## POST /users/login

Authenticates a user and returns an authentication token.

### Request Body
```json
{
  "email": "string (required, valid email)",
  "password": "string (required, min 6 chars)"
}
```

### Response (200 OK)
```json
{
  "user": {
    "_id": "string",
    "fullname": { "firstname": "string", "lastname": "string" },
    "email": "string",
    "socketId": "string or null"
  },
  "token": "JWT token"
}
```

### Example
```bash
  -H "Content-Type: application/json" \
  -d '{"email":"john@example.com","password":"password123"}'
```

### Errors
- **400 Bad Request**: Validation failed
- **401 Unauthorized**: User not found or invalid password
