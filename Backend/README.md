# User API Documentation

Complete API documentation for user authentication and profile management endpoints.

---

## POST /users/register

Registers a new user in the system and returns an authentication token.

**Request Headers:**
- Content-Type: application/json

**Required Fields:**
- email: string (valid email address)
- fullname.firstname: string (minimum 3 characters)
- password: string (minimum 6 characters)

**Optional Fields:**
- fullname.lastname: string (user's last name)

**Response Status:** 201 Created

**Success Response includes:**
- _id: User unique identifier
- fullname: Object with firstname and lastname
- email: User's email address
- socketId: Socket connection ID (null if not connected)
- token: JWT authentication token

**Error Codes:**
- 400 Bad Request: Validation failed (email, firstname, or password)

---

## POST /users/login

Authenticates a user with email and password, returns authentication token.

**Request Headers:**
- Content-Type: application/json

**Required Fields:**
- email: string (valid email address)
- password: string (minimum 6 characters)

**Response Status:** 200 OK

**Success Response includes:**
- _id: User unique identifier
- fullname: Object with firstname and lastname
- email: User's email address
- socketId: Socket connection ID
- token: JWT authentication token

**Error Codes:**
- 400 Bad Request: Validation failed
- 401 Unauthorized: User not found or invalid password

---

## GET /users/profile

Retrieves the authenticated user's profile information. Requires valid authentication token.

**Request Headers:**
- Authorization: Bearer <JWT token>

**Response Status:** 200 OK

**Success Response includes:**
- _id: User unique identifier
- fullname: Object with firstname and lastname
- email: User's email address
- socketId: Socket connection ID

**Error Codes:**
- 401 Unauthorized: Invalid or missing authentication token

---

## POST /users/logout

Logs out the authenticated user by blacklisting their token and clearing the session cookie.

**Request Headers:**
- Authorization: Bearer <JWT token>

**Response Status:** 200 OK

**Success Response includes:**
- message: "Logged out successfully"

**Error Codes:**
- 401 Unauthorized: Invalid or missing authentication token

---

## Authentication

All protected endpoints (profile, logout) require a valid JWT token in the Authorization header using Bearer scheme.

Tokens are stored in cookies after login for automatic session management.

---

---

# Captain API Documentation

Complete API documentation for captain registration, authentication, and profile management endpoints.

---

## POST /captains/register

Registers a new captain with vehicle information.

**Request Body:**
```json
{
  "email": "email@example.com",                    // required, valid email, unique
  "fullname": {
    "firstname": "John",                           // required, min 3 chars
    "lastname": "Doe"                              // optional
  },
  "password": "password123",                       // required, min 6 chars
  "vehicle": {
    "color": "black",                              // required, min 3 chars
    "plate": "ABC123",                             // required, min 3 chars
    "capacity": 4,                                 // required, integer min 1
    "vehicleType": "car"                           // required, 'car'|'motorcycle'|'auto'
  }
}
```

**Response (201 Created):**
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "email": "email@example.com",
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "vehicle": {"color": "black", "plate": "ABC123", "capacity": 4, "vehicleType": "car"}
  }
}
```

**Error (400):** `{"message": "Captain with this email already exists."}`

---

## POST /captains/login

Authenticates a captain.

**Request Body:**
```json
{
  "email": "email@example.com",     // required, valid email
  "password": "password123"         // required, min 6 chars
}
```

**Response (200 OK):**
```json
{
  "token": "jwt_token_here",
  "captain": {
    "_id": "captain_id",
    "email": "email@example.com",
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "vehicle": {"color": "black", "plate": "ABC123", "capacity": 4, "vehicleType": "car"}
  }
}
```

**Error (400):** `{"message": "Invalid email or password."}`

---

## GET /captains/profile

Retrieves captain profile (requires authentication).

**Request Headers:**
- Authorization: Bearer <JWT token>

**Response (200 OK):**
```json
{
  "captain": {
    "_id": "captain_id",
    "email": "email@example.com",
    "fullname": {"firstname": "John", "lastname": "Doe"},
    "vehicle": {"color": "black", "plate": "ABC123", "capacity": 4, "vehicleType": "car"}
  }
}
```

**Error (401):** Unauthorized

---

## POST /captains/logout

Logs out captain (requires authentication).

**Request Headers:**
- Authorization: Bearer <JWT token>

**Response (200 OK):**
```json
{
  "message": "Logged out successfully."
}
```

**Error (400/401):** `{"message": "No token provided."}`

---

## Status Codes

| Code | Description |
|------|-------------|
| 200 | Success |
| 201 | Created |
| 400 | Bad Request |
| 401 | Unauthorized |
