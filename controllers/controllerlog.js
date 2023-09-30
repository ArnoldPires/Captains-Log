const express = require("express");
const router = express.Router();
const Log = require("../models/modellog");

// -------------
// INDEX
// -------------
router.get("/index", async (req, res) => {
  try {
    const logs = await Log.find();
    res.render("logs/Index", { logs });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;