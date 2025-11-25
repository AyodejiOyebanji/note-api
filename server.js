const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./src/config/db");
const noteRoutes = require("./src/routes/note.routes");
const errorHandler = require("./src/middleware/errorHandler");

dotenv.config();
const app = express();

app.use(express.json());

// connect to DB
connectDB();

// routes
app.use("/api/notes", noteRoutes);

// error handler
app.use(errorHandler);

// start server
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});
