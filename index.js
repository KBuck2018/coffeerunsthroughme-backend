const express = require("express");
const parser = require("body-parser");
const mongoose = require("./db/models.js");
const Caffeine = mongoose.model("Caffeine");
const cors = require("cors");
const passport = require("./config/passport")();
const userController = require("./controllers/users.js");

const app = express();

app.set("port", process.env.Port || 3001);
app.use(cors());
app.use(parser.json());
app.use(passport.initialize());

app.get("/main", (req, res) => {
  Caffeine.find()
    .then(caffeines => {
      res.json(caffeines);
    })
    .catch(err => {
      console.log(err);
    });
});

app.post("/main", (req, res) => {
  Caffeine.create(req.body)
    .then(caffeine => {
      res.json(caffeine);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/main/:id", (req, res) => {
  Caffeine.findById(req.params.id)
    .then(caffeine => {
      res.json(caffeine);
    })
    .catch(err => {
      console.log(err);
    });
});

app.use("/users", userController);

app.listen(app.get("port"), () => {
  console.log("Server listening on port " + app.get("port"));
});
