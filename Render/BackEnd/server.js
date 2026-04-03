require("dotenv").config();

const express = require("express");
const cors = require("cors");
const restaurantRoutes = require("./src/restaurants/routes");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Health check
app.get("/", (req, res) => {
  res.send("Hello Point Park University");
});

// Routes
app.use("/api/v1/restaurants", restaurantRoutes);

// IMPORTANT for Render
const PORT = process.env.PORT || 8004;
app.listen(PORT, () => console.log(`running on ${PORT}`));