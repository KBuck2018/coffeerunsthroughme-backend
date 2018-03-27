const caffeineData = require("./caffeine.json");

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
