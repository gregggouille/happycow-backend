const express = require("express");
const router = express.Router();

router.get("/user", (req, res) => {
  res.json({ message: "user" });
});
router.post("/user/signup", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.fields.email });

    if (user) {
      res.json({ message: "This email already has an account" });
    } else {
      if (req.fields.email && req.fields.password && req.fields.username) {
        // Générer le token et encrypter le mot de passe
        const token = uid2(64);
        const salt = uid2(64);
        const hash = SHA256(req.fields.password + salt).toString(encBase64);

        const newUser = new User({
          username: req.fields.username,
          email: req.fields.email,
          token: token,
          hash: hash,
          salt: salt,
        });

        await newUser.save();
        res.status(200).json({
          _id: newUser._id,
          username: newUser.username,
          email: newUser.email,
          token: newUser.token,
        });
      } else {
        res.status(400).json({ message: "Missing parameters" });
      }
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});
router.post("/user/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.fields.email });
    console.log(user);

    if (user) {
      // Est-ce qu'il a rentré le bon mot de passe ?
      // req.fields.password
      // user.hash
      // user.salt
      if (
        SHA256(req.fields.password + user.salt).toString(encBase64) ===
        user.hash
      ) {
        res.status(200).json({
          _id: user._id,
          token: user.token,
          username: user.username,
        });
      } else {
        res.status(401).json({ error: "Unauthorized" });
      }
    } else {
      res.status(400).json({ message: "User not found" });
    }
  } catch (error) {
    console.log(error.message);
    res.json({ message: error.message });
  }
});

module.exports = router;
