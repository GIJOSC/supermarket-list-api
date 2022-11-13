const express = require("express");
const ListItem = require("../models/ListItem");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/list-items", async (req, res) => {
  try {
    const items = await ListItem.find();
    return res.json(items);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.post("/list-item", async (req, res) => {
  try {
    const { name, quantity, checked } = req.body;
    if (!name || name.length < 3) {
      return res
        .status(400)
        .json({ error: "Name must be at least 3 characters" });
    }

    if (!quantity || typeof quantity !== "number") {
      return res.status(400).json({
        error: "Quantity must be a number",
      });
    }

    const newItems = await ListItem.create({
      name,
      quantity,
      checked: checked || false,
    });
    return res.json(newItems);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.delete("/list-item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "Id is mandatory",
      });
    }
    const listItemDeleted = await ListItem.findByIdAndDelete(id);
    return res.json(listItemDeleted);
  } catch (error) {
    return res.status(400).json({ error });
  }
});

router.put("/list-item/:id", async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(400).json({
        error: "Id is mandatory",
      });
    }

    const { name, quantity, checked } = req.body;
    if (!name || name.length < 3) {
      return res
        .status(400)
        .json({ error: "Name must be at least 3 characters" });
    }

    if (!quantity || typeof quantity !== "number") {
      return res.status(400).json({
        error: "Quantity must be a number",
      });
    }

    const listItemUpdated = await ListItem.findByIdAndUpdate(
      id,
      {
        name,
        quantity,
        checked: checked || false,
      },
      {
        new: true,
      }
    );
    return res.json(listItemUpdated);
  } catch (error) {
    return res.status(400).json({ error });
  }
});
module.exports = router;
