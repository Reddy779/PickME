# User Registration API Documentation

## POST /users/register

### Description
This endpoint registers a new user in the system. It validates the provided information, hashes the password using bcrypt, creates a user record in the database, and returns an authentication token.

### Request Method
```
POST /users/register
```

### Request Body
The request body must be sent as JSON with the following structure:

```json
{
  "fullname": {
    "firstname": "string (required, min 3 characters)",
    "lastname": "string (optional, min 3 characters)"
  },
  "email": "string (required, must be valid email format)",
  "password": "string (required, min 6 characters)"
}
```

### Request Validation
- **Email**: Must be a valid email address format
- **First Name** (`fullname.firstname`): Must be at least 3 characters long
- **Password**: Must be at least 6 characters long

### Response

#### Success Response
**Status Code:** `201 Created`

```json
{
  "user": {
    "_id": "string",
    "fullname": {
      "firstname": "string",
      "lastname": "string"
    },
    "email": "string",
    "socketId": "string or null"
  },
  "token": "string (JWT token)"
}
```

#### Error Response
**Status Code:** `400 Bad Request`

```json
{
  "errors": [
    {
      "type": "field",
      "value": "invalid_value",
      "msg": "error message",
      "path": "field_name",
      "location": "body"
    }
  ]
}
```

### Status Codes
- **201 Created**: User successfully registered. Returns user object and authentication token.
- **400 Bad Request**: Validation failed. Check the errors array for specific validation messages.

### Example Request
```bash
curl -X POST http://localhost:3000/users/register \
  -H "Content-Type: application/json" \
  -d '{
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "password": "password123"
  }'
```

### Example Success Response
```json
{
  "user": {
    "_id": "507f1f77bcf86cd799439011",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john@example.com",
    "socketId": null
  },
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

### Example Error Response
```json
{
  "errors": [
    {
      "type": "field",
      "value": "invalid-email",
      "msg": "Please enter a valid email address",
      "path": "email",
      "location": "body"
    }
  ]
}
```

### Notes
- Passwords are automatically hashed using bcrypt with a salt round of 10
- A JWT token is generated upon successful registration using the user's MongoDB ID
- Email addresses must be unique in the database
