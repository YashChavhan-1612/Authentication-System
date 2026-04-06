require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const protect = require("./middleware/authMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/auth", authRoutes);

app.get("/api/dashboard", protect, (req, res) => {
  res.json({ message: "Welcome to dashboard" });
});

app.listen(5000, () => console.log("Server running on port 5000"));