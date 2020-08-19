const express = require("express");
const router = express.Router();
const liste = require("../assets/restaurants.json");
// console.log(liste);

router.get("/liste/restaurants", async (req, res) => {
  const restaurants = await liste.find();
  res.json(restaurants);
  console.log(restaurants);
});

router.get("liste/restaurant/:id", async (req, res) => {
  try {
    const restaurantByID = await liste.findById({ id: req.params.id });
    console.log(restaurantByID);
    console.log(req.params.id);
    console.log(req.params);
    res.json(restaurantByID);
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});
module.exports = router;
