const express = require("express");
const router = express.Router();
const liste = require("../assets/restaurants.json");
// console.log(liste);

router.get("/liste/restaurants", async (req, res) => {
  const restaurants = await liste.find();
  res.json(restaurants);
  console.log(restaurants);
});

router.get("liste/restaurant/:id"),
  async (req, res) => {
    const restaurant = await liste.findById({ id: req.query.id });
    console.log(restaurant);
    res.json(restaurant);
  };
module.exports = router;
