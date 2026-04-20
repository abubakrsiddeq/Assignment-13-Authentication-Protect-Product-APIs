# Assignment 13 - Authentication + Protected Product APIs

## Objective
Add authentication and authorization to Product CRUD APIs using JWT.

## Setup
1. Install dependencies:
   npm install
2. Create `.env` file from `.env.example`
3. Add valid values for:
   - `MONGODB_URI`
   - `JWT_SECRET`
   - `PORT` (optional)
4. Run server:
   npm run dev

## Base URL
http://localhost:5504

## Authentication APIs
- POST `/auth/register`
  - body: `name`, `email`, `password`
- POST `/auth/login`
  - body: `email`, `password`
  - success response includes JWT token

## Product APIs
- GET `/products`
- GET `/products/:id`
- POST `/products` (Protected)
- PUT `/products/:id` (Protected)
- DELETE `/products/:id` (Protected)

## Authorization Header for Protected APIs
Authorization: Bearer <your_token>

## Testing Flow (Postman/Thunder Client)
1. Register user using `/auth/register`
2. Login user using `/auth/login`
3. Copy token from login response
4. Add header in protected requests:
   Authorization: Bearer <token>
5. Test create/update/delete product APIs
6. Test protected route without token (should return 401)

## Submission Checklist
- Register API screenshot
- Login API screenshot (with token)
- Protected route success screenshot
- Unauthorized access screenshot
- GitHub repository link
