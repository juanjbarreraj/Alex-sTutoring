const pool = require("../../db");
const queries = require("./queries");

// GET /api/v1/restaurants
const getRestaurants = (req, res) => {
  pool.query(queries.getRestaurants, (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
    return res.status(200).json(results.rows);
  });
};

// GET /api/v1/restaurants/:id
const getRestaurantById = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  pool.query(queries.getRestaurantById, [id], (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: error.message });
    }
    if (results.rows.length === 0) {
      return res.status(404).json({ error: "Restaurant not found" });
    }
    return res.status(200).json(results.rows[0]);
  });
};

// POST /api/v1/restaurants
const addRestaurant = (req, res) => {
  const {
    restaurant_name,
    rating = null,
    location = null,
    type = null,
  } = req.body;

  if (!restaurant_name || typeof restaurant_name !== "string") {
    return res.status(400).json({ error: "restaurant_name is required" });
  }

  pool.query(
    queries.addRestaurant,
    [restaurant_name, rating, location, type],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }
      return res.status(201).json(results.rows[0]);
    }
  );
};

// PUT /api/v1/restaurants/:id
const updateRestaurant = (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id)) {
    return res.status(400).json({ error: "Invalid id" });
  }

  const { restaurant_name, rating, location, type } = req.body;

  pool.query(
    queries.updateRestaurant,
    [
      restaurant_name ?? null,
      rating ?? null,
      location ?? null,
      type ?? null,
      id,
    ],
    (error, results) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ error: error.message });
      }
      if (results.rows.length === 0) {
        return res.status(404).json({ error: "Restaurant not found" });
      }
      return res.status(200).json(results.rows[0]);
    }
  );
};

module.exports = {
  getRestaurants,
  getRestaurantById,
  addRestaurant,
  updateRestaurant,
};