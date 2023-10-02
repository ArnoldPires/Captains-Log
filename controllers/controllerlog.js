const express = require("express");
const router = express.Router();
const Log = require("../models/modellog");

// Index
router.get("/index", async (req, res) => {
  try {
    const logs = await Log.find();
    res.render("logs/Index", { logs });
  } catch (error) {
    console.log(error);
  }
});

// New
router.get("/NewLogs", (req, res) => {
  res.render("logs/NewLogs");
});

// Create
router.post("/Index", async (req, res) => {
  try {
    // Check if the shipIsBroken checkbox is checked
    const shipIsBroken = req.body.shipIsBroken === "on";
    await Log.create({
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: shipIsBroken,
    });
    res.redirect("/logs/Index");
  } catch (error) {
    console.log(error);
  }
});

// Edit
router.get("/:id/edit", async (req, res) => {
  try {
    const log = await Log.findById(req.params.id);
    res.render("logs/EditLogs", { log });
  } catch (error) {
    console.log(error);
  }
});

// Update
router.put("/:id", async (req, res) => {
  try {
    const shipIsBroken = req.body.shipIsBroken === "on";
    await Log.findByIdAndUpdate(req.params.id, {
      title: req.body.title,
      entry: req.body.entry,
      shipIsBroken: shipIsBroken,
    });
    res.redirect(`/logs/${req.params.id}`);
  } catch (error) {
    console.log(error);
  }
});

// Delete
router.delete("/:id", async (req, res) => {
  try {
    await Log.findByIdAndRemove(req.params.id);
    res.redirect("/logs/Index");
  } catch (error) {
    console.log(error);
  }
});

// Show
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