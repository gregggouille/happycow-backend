const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();
app.use(formidable());
require("dotenv").config();
app.use(cors());
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});
const userRoutes = require("./routes/user");
app.use(userRoutes);
const restaurantRoutes = require("./routes/restaurant");
app.use(restaurantRoutes);
app.get("/", (req, res) => {
  res.json("server started on", process.env.PORT);
});
app.listen(process.env.PORT || 3025, () => {
  console.log("server started", process.env.PORT);
});
