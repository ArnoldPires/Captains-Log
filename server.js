const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");
const dotenv = require("dotenv");

// Configure the .env file
dotenv.config();

// Controllers
const controllerLog = require("./controllers/logs");
const controllerFood = require("./controllers/foodlog");

const Log = require("./models/logs");
const Foodlog = require("./models/foodlogs");

// Connect to Mongo
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use((req, res, next) => {
  console.log("Running");
  next();
});

// Tells express to use the current middleware
app.use(express.urlencoded({ extended: false }));

// Enable the ability to delete a log
app.use(methodOverride("_method"));

// Template Engine
app.set("view engine", "jsx");
// Configure jsx engine with empty options object
app.engine("jsx", jsxEngine({}));

// Load up the CSS
app.use(express.static('public'));

// app.use("/logs", controllerLog);
// app.use("/foodlog", controllerFood);

// Home page
app.get("/", (req, res) => {
  res.render("logs/Index");
});

// Lets you know if its connected to the mongo servers
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Setups the local host to 3000: http://localhost:3000/
app.listen(3000, () => {
  console.log("Listening to port 3000");
});
