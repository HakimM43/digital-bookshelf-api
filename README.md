# Digital Bookshelf API

## Project Overview

The Digital Bookshelf API is a RESTful API built with Node.js, Express, MongoDB, and Mongoose. The application allows users to manage a collection of books by creating, viewing, updating, and deleting book records.

This project helped me practice creating Mongoose schemas and models, connecting an Express application to MongoDB Atlas, organizing an application into separate files and directories, and building CRUD API routes.

## Technologies Used

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- dotenv
- Git
- GitHub

## Project Structure

```text
digital-bookshelf-api/
├── db/
│   └── connection.js
├── models/
│   └── Book.js
├── routes/
│   └── bookRoutes.js
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
└── server.js
```

The `.env` file and `node_modules` directory are excluded from GitHub using `.gitignore`.

## Book Model

Each book contains the following fields:

```js
title: String
author: String
isbn: String
publishedDate: Date
inStock: Boolean
```

`title` and `author` are required, `isbn` must be unique, and `inStock` defaults to `true`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| POST | `/api/books` | Create a new book |
| GET | `/api/books` | Retrieve all books |
| GET | `/api/books/:id` | Retrieve one book by ID |
| PUT | `/api/books/:id` | Update a book by ID |
| DELETE | `/api/books/:id` | Delete a book by ID |

## Example Book

```json
{
  "title": "The Alchemist",
  "author": "Paulo Coelho",
  "isbn": "9780061122415",
  "publishedDate": "1988-01-01",
  "inStock": true
}
```

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

Create a `.env` file in the root directory:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

Start the application:

```bash
node server.js
```

The server will run at:

```text
http://localhost:3000
```

The API base route is:

```text
http://localhost:3000/api/books
```

## Testing

I tested the API endpoints using HTTP requests to make sure each CRUD operation worked correctly.

I successfully tested creating a book, retrieving all books, retrieving an individual book by ID, updating a book, and deleting a book.

## Reflection Questions

### 1. Why is it beneficial to separate your routes, models, and database connection into different directories?

Separating routes, models, and the database connection keeps the project organized and makes the code easier to understand and maintain. Each directory has its own responsibility. The model handles the structure of the data, the routes handle API requests, and the database file handles the MongoDB connection. This also makes it easier to find and update code as the project becomes larger.

### 2. What is the difference between PUT and PATCH HTTP methods, and which one does your PUT /:id endpoint more closely resemble?

PUT is normally used to replace an entire resource, while PATCH is used to update only specific fields of an existing resource. My `PUT /:id` route uses the data provided in `req.body` to update selected fields without requiring every field to be sent again. Because of this, the behavior of my route more closely resembles PATCH even though the route uses the PUT method.

### 3. In the DELETE route, what is a good practice for the response you send back to the client after a successful deletion? Should you send the deleted object, a simple success message, or something else? Why?

A simple success message is a good response after deleting a resource because it clearly lets the client know that the deletion was successful without returning unnecessary data. In this project, my DELETE route sends a confirmation message saying that the book was deleted successfully. Another common option is to return a `204 No Content` response, but a success message is helpful because it clearly confirms what happened.

## What I Learned

This project gave me more practice working with MongoDB and Mongoose. I learned how to create a schema and model, connect a Node.js application to MongoDB Atlas, use Express routers, work with `req.body` and `req.params`, and build CRUD operations with async/await and try/catch error handling.