var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/caffeine");

module.exports = mongoose;
