const express = require("express")
const mongoose = require("mongoose")
const app = express()
const api = require("./api")
const cors = require("cors")
mongoose.connect("mongodb://localhost/4000")

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({origin: "*"}))
app.use("/api", api)


app.listen(4000, () => {
    console.log('app is listening')
})