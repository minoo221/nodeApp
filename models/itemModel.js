const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
  date: { type: String, required: true },
  value: { type: String },
});

module.exports = mongoose.model("Item", ItemSchema);
