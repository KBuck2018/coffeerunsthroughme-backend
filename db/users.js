const mongoose = require("./connection.js");

const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

mongoose.model("User", userSchema);

module.exports = mongoose;
