const mongoose = require("mongoose");



const con = async() => {
    try {
        const connectionReusl = mongoose.connect("mongodb://localhost:27017/practicep");
        console.log(connectionReusl);
    } catch (e) {

        console.log(e);

    }
}

con();