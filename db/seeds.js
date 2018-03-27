const caffeineData = require("./caffeine.json");
const mongoose = require("./models.js");
const Caffeine = mongoose.model("Caffeine");

Caffeine.remove({})
  .then(() => {
    Caffeine.collection.insert(caffeineData).then(caffeines => {
      console.log(caffeines);
      process.exit();
    });
  })
  .catch(err => {
    console.log(err);
  });
