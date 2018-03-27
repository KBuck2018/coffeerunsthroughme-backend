const caffeineData = require("./caffeine.json");
const mongoose = require("./models.js");
const Caffeine = mongoose.model("Caffeine");
const userData = require("./user.json");
const mongoose2 = require("./users.js");
const User = mongoose2.model("User");

Caffeine.remove({})
  .then(() => {
    Caffeine.collection.insert(caffeineData).then(caffeines => {
      console.log(caffeines);
    });
  })
  .then(() => {
    User.collection.insert(userData).then(users => {
      console.log(users);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });
