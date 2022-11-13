const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
const port = 3333;

async function connectDatabase() {
  await mongoose.connect("mongodb://localhost:27017");
}

const listItemSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  checked: Boolean,
});

const ListItem = mongoose.model("list_item", listItemSchema);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/list-items", async (req, res) => {
  const items = await ListItem.find();
  return res.json(items);
});

app.post("/list-item", async (req, res) => {
  const newItems = await ListItem.create({
    name: req.body.name,
    quantity: req.body.quantity,
    checked: req.body.checked,
  });
  return res.json(newItems);
});

app.delete("/list-item/:id", async (req, res) => {
  const id = req.params.id;
  const listItemDeleted = await ListItem.findByIdAndDelete(id);
  return res.json(listItemDeleted);
});

app.put("/list-item/:id", async (req, res) => {
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

app.listen(port, () => {
  connectDatabase().catch((error) => {
    console.log(`Error connecting database: ${error}`);
  });
  console.log("App is running at port 3333");
});
