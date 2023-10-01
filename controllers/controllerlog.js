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

// -------------
// NEW
// -------------
router.get("/NewLogs", (req, res) => {
  res.render("logs/NewLogs");
});

// -------------
// CREATE
// -------------
router.post("/Index", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") req.body.shipIsBroken = true;
    if (req.body.shipIsBroken === "off") req.body.shipIsBroken = false;
    await Log.create(req.body);
    res.redirect("/logs/Index");
  } catch (error) {
    console.log(error);
  }
});

// -------------
// EDIT
// -------------
router.get("/:id/edit", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("logs/EditLogs", { log });
  } catch (error) {
    cosnole.log(error);
  }
});

// -------------
// UPDATE
// -------------
router.put("/:id", async (req, res) => {
  try {
    if (req.body.shipIsBroken === "on") req.body.shipIsBroken = true;
    if (req.body.shipIsBroken === "off") req.body.shipIsBroken = false;
    await Log.findByIdAndUpdate(req.params.id, req.body);
    res.redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

// -------------
// DELETE
// -------------
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
    res.redirect("Index"); // redirect back to logs index
  } catch (error) {
    console.log(error);
  }
});

// -------------
// SHOW
// -------------
router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    const log = await Log.findById(req.params.id);
    res.render("logs/ShowLogs", { log: log });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;