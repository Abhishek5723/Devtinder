const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    firstName: {
        type: String
    },
    secondName: {
        type: String
    },
    contact: {
        type: Number
    },
    gender: {
        type: String
    },
    age: {
        type: Number
    }
});

module.exports = mongoose.model("User", userSchema);
