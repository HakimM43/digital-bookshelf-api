const express = require("express");
const path = require("path");
require("dotenv").config();

const connectDB = require("./db/connection.js");
const bookRoutes = require("./routes/bookRoutes.js");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());

// Serve files from public folder
app.use(express.static(path.join(__dirname, "public")));

// Home page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// API routes
app.use("/api/books", bookRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});