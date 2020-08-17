const express = require("express");
const router = express.Router();
const liste = require("../assets/restaurants.json");
// console.log(liste);

router.get("/liste/restaurants", (req, res) => {
  const restaurant = liste;
  res.json(restaurant);
  console.log(restaurant);
});
module.exports = router;
