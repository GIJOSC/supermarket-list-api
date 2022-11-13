const express = require("express");
const ListItem = require("../models/ListItem");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/list-items", async (req, res) => {
  const items = await ListItem.find();
  return res.json(items);
});

router.post("/list-item", async (req, res) => {
  const newItems = await ListItem.create({
    name: req.body.name,
    quantity: req.body.quantity,
    checked: req.body.checked,
  });
  return res.json(newItems);
});

router.delete("/list-item/:id", async (req, res) => {
  const id = req.params.id;
  const listItemDeleted = await ListItem.findByIdAndDelete(id);
  return res.json(listItemDeleted);
});

router.put("/list-item/:id", async (req, res) => {
  const id = req.params.id;
  const listItemUpdated = await ListItem.findByIdAndUpdate(
    id,
    {
      name: req.body.name,
      quantity: req.body.quantity,
      checked: req.body.checked,
    },
    {
      new: true,
    }
  );
  return res.json(listItemUpdated);
});

module.exports = router;
