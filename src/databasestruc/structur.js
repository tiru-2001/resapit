const { default: mongoose } = require("mongoose");
const mongose = require("mongoose");



const practiceSchema = new mongose.Schema({
    nam: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true,

    },
    email: {
        type: String,
        required: true,

    }
})


const practicecollection = mongose.model("practicecollection", practiceSchema)

module.exports = practicecollection;