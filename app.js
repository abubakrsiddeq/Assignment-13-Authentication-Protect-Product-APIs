const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./src/routes/authRoutes");
const productRoutes = require("./src/routes/productRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5504;

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Assignment 13 Product API is running",
  });
});

app.use("/auth", authRoutes);
app.use("/products", productRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

const startServer = async () => {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("MONGODB_URI is missing in environment variables");
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET is missing in environment variables");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Server startup failed:", error.message);
    process.exit(1);
  }
};

startServer();
