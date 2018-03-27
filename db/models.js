const mongoose = require("./connection.js");

const caffeineSchema = new mongoose.Schema({
  coffee: Number,
  tea: Number,
  soda: Number
});

mongoose.model("Caffeine", caffeineSchema);

module.exports = mongoose;
