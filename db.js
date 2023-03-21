const mongoose = require("mongoose");

// const URL = "mongodb://localhost:27017/fruitsDB";
const URL = "mongodb+srv://navi:Mukul@cluster0.ybtdcqu.mongodb.net/test";

mongoose
  .connect(URL)
  .then(() => {
    console.log("Db is connected".blue.bold);
  })
  .catch((err) => {
    console.log("Db Connected Failed".red.bold);
  });
