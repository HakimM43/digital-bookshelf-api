const express = require("express");
require("dotenv").config();

const connectDB = require("./db/connection.js");
const bookRoutes = require("./routes/bookRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Routes
app.use("/api/books", bookRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});