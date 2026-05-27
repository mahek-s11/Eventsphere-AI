const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const connectDB = require("./config/db");

// Route Imports
const authRoutes = require("./routes/authRoutes");
const testRoutes = require("./routes/testRoutes");
const eventRoutes = require("./routes/eventRoutes");
const ticketRoutes = require("./routes/ticketRoutes");

// Load Environment Variables
dotenv.config();

// Connect MongoDB
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);

app.use("/api/test", testRoutes);

app.use("/api/events", eventRoutes);

app.use("/api/tickets", ticketRoutes);

// Default Route
app.get("/", (req, res) => {
  res.send("EventSphere API Running");
});

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
