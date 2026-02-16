# User API Documentation

Complete API documentation for user authentication and profile management endpoints.

---

## POST /users/register

Registers a new user in the system and returns an authentication token.

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

### Errors
- **400 Bad Request**: Validation failed (email, firstname, or password)

---

## POST /users/login

Authenticates a user with email and password, returns authentication token.

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

---

## GET /users/profile

Retrieves the authenticated user's profile information. Requires valid authentication token.

### Headers
```
Authorization: Bearer <JWT token>
```

### Response (200 OK)
```json
{
  "user": {
    "_id": "string",
    "fullname": { "firstname": "string", "lastname": "string" },
    "email": "string",
    "socketId": "string or null"
  }
}
```

### Example
```bash
  -H "Authorization: Bearer <your_jwt_token>"
```

### Errors
- **401 Unauthorized**: Invalid or missing authentication token

---

## POST /users/logout

Logs out the authenticated user by blacklisting their token and clearing the session cookie.

### Headers
```
Authorization: Bearer <JWT token>
```

### Response (200 OK)
```json
{
  "message": "Logged out successfully"
}
```

### Example
```bash
  -H "Authorization: Bearer <your_jwt_token>"
```

### Errors
- **401 Unauthorized**: Invalid or missing authentication token

---

## Authentication

All protected endpoints (profile, logout) require a valid JWT token in the `Authorization` header using the Bearer scheme:
```
Authorization: Bearer <token>
```

Tokens are also stored in cookies after login for automatic session management.

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created (successful registration) |
| 400 | Bad Request (validation failed) |
| 401 | Unauthorized (invalid credentials or token) |
