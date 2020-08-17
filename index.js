const express = require("express");
const mongoose = require("mongoose");
const cloudinary = require("cloudinary").v2;
const formidable = require("express-formidable");
const cors = require("cors");
const app = express();
app.use(formidable());
app.use(cors());
// mongoose.connect(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
const user = require("./routes/user");
app.use(user);
const restaurant = require("./routes/restaurant");
app.use(restaurant);
app.get("/", (req, res) => {
  res.json("server started");
});
app.listen(process.env.PORT || 3025, () => {
  console.log("server started");
});
