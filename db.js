const mongoose = require('mongoose');

const URL = "mongodb+srv://Mukul:mukul@cluster0.j6c5epo.mongodb.net/test";

mongoose.connect(URL).then(() => {
     console.log("Db is connected".blue.bold)
})
    .catch((err) => {
    console.log("Db Connected Failed".red.bold)
});