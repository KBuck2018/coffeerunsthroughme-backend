const mongoose = require("./connection.js");

const userSchema = new mongoose.Schema({
  user: String
});

mongoose.model("User", userSchema);

module.exports = mongoose;
