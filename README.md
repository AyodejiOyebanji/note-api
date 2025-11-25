This project is a simple Node.js + Express + MongoDB REST API built as part of a technical interview task.
It includes Notes CRUD operations, pagination, an aggregation query, optional JWT authentication, and an integration test using Jest + Supertest.
 Features
1. Notes CRUD API

Create a new note

Get all notes

Get a single note

Update a note

Delete a note

2. Pagination

Supports:

GET /api/notes?page=1&limit=10


Useful for large datasets and performance optimization.

3. MongoDB Aggregation

Aggregation pipeline to calculate total amount spent per user for completed orders:

Example output:

[
  { "userId": 1, "name": "Alice", "totalSpent": 250 },
  { "userId": 2, "name": "Bob", "totalSpent": 500 }
]

4. JWT Authentication 
Register
Login


5. Integration Test (Jest + Supertest)


Installation
git clone https://github.com/AyodejiOyebanji/note-api.git
cd notes-api
npm install

Environment Variables
Create a .env file in the root directory:

MONGO_URI=mongodb://127.0.0.1:27017/noteapp
PORT=5000
JWT_SECRET=ysecret

 Run the Server
npm start

Run Tests
npm test