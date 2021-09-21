const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://localhost/reservespot");

app.get("/", (req, res) => {
  res.json({ message: "Routes work" });
});

app.listen(5000, () => {
  console.log("server up and running :)");
});
