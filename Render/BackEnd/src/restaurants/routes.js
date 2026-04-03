const { Router } = require("express");
const controller = require("./controller");

const router = Router();

// GET all restaurants
router.get("/", controller.getRestaurants);

// GET one restaurant by id
router.get("/:id", controller.getRestaurantById);

// POST create restaurant
router.post("/", controller.addRestaurant);

// PUT update restaurant
router.put("/:id", controller.updateRestaurant);

module.exports = router;