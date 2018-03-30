var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/caffeine"), { useMongoClient: true };

module.exports = mongoose;
