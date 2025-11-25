const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const noteRoutes = require("./src/routes/note.routes");
const errorHandler = require("./src/middleware/errorHandler");
const rateLimiter = require("./src/middleware/rateLimiter");
const orderRoutes = require("./src/routes/order.routes");
const authRoutes = require("./src/routes/auth.routes");




dotenv.config();
const app = express();

app.use(express.json());

// Apply rate limiter globally
app.use(rateLimiter);

// connect to DB
connectDB();

// routes
app.use("/api/notes", noteRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/auth", authRoutes);

// error handler
app.use(errorHandler);

// start server
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
