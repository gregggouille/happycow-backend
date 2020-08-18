const express = require("express");
const router = express.Router();
const liste = require("../assets/restaurants.json");
// console.log(liste);

router.get("/liste/restaurants", (req, res) => {
  const restaurants = liste;
  res.json(restaurants);
  console.log(restaurants);
});

router.get("liste/restaurant/:id"), (req, res)=>{
const restaurant = await liste.findById({id: req.query.id });
console.log(restaurant);
res.json(restaurant);
}
module.exports = router;
