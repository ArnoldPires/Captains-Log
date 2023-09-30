const express = require("express");
const app = express();
const jsxEngine = require("jsx-view-engine");
const methodOverride = require("method-override");

const controllerlog = require("./controllers/controllerlog");

const dotenv = require("dotenv");
dotenv.config();

const mongoose = require("mongoose");

const Log = require("./models/modellog");

app.use(express.urlencoded({ extended: false }));

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.set("view engine", "jsx");
app.engine("jsx", jsxEngine());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/logs", controllerlog);

// Home page
app.get("/", (req, res) => {
  res.render("logs/HomePage");
})

// Lets you know if its connected to the mongo servers
mongoose.connection.once("open", () => {
  console.log("connected to mongo");
});

// Setups the local host to 3000: http://localhost:3000/
app.listen(process.env.PORT || 3000, () => {
  console.log("listening to port 3000");
});