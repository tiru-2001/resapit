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


app.get("/studentss/:ids", async(req, res) => {
    try {
        const id = req.params.ids;
        const d = await practicecollectin.findById({ _id: id });
        console.log(d);
        res.status(200).send(d);
    } catch (e) {
        res.status(400).send(`there is proble${e}`)
    }
})


app.patch("/studentss/:id", async(req, res) => {
    try {
        const up = req.params.id
        const re = await practicecollectin.findById({ _id: up });
        const da = await re.updateOne({ nam: "hardworke" })
        console.log(da);
        res.send(da)

    } catch (e) {

        res.status(500).send(e)

    }
})


app.delete("/studentss/:id", async(req, res) => {
    try {
        const i = req.params.id;
        const data = await practicecollectin.findByIdAndDelete({ _id: i })
        console.log(data);
        res.send(data)
    } catch (e) {
        res.status(400).send(`error${e}`)
    }
})