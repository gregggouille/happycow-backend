const mongoose = require("mongoose");
// import cloudinary = require("cloudinary")
const User = mongoose.model("User", {
  _id: String,
  picture: Object,
  username: String,
  email: String,
  salt: String,
  hash: String,
  token: String,
});
module.exports = User;
