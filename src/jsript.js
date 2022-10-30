const express = require("express")
const app = express();
const port = process.env.Port || 8000;
app.use(express.json())
require("./connection/connect");

const practicecollectin = require('./databasestruc/structur')




app.post("/studentss", async(req, res) => {

    try {

        const result = practicecollectin(req.body)
        const data = await result.save();
        console.log(data);
        res.send(data)

    } catch (e) {
        res.status(400).send(e)
    }
})


app.listen(port, () => {
    console.log("connected");
})