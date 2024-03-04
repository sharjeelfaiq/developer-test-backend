const mongoose = require("mongoose");

const details = new mongoose.Schema({
  name: String,
  email: String,
  date: String,
});

module.exports = mongoose.model("details", details);
