const mongoose = require("./connection.js");

const caffeineSchema = new mongoose.Schema({
  drinkType: {
    type: String,
    enum: ["Coffee", "Tea", "Soda", "EnergyDrink"],
    required: true
  },
  quantity: Number
});

mongoose.model("Caffeine", caffeineSchema);

module.exports = mongoose;
