const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const PORT = process.env.PORT || 8000;
dotenv.config();


// Home page
app.get("/", (req, res) => {
  res.send("Captains Log");
})


// Setups the local host to 3000: http://localhost:3000/
app.listen(3000, () => {
  console.log("Listening to port 3000")
});