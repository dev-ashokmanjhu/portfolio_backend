const mongoose = require("mongoose");

const portfolio = new mongoose.Schema({
  name: String,
  description: String,
});

const Portfolio = mongoose.model("users", portfolio);
module.exports = Portfolio;
