const mongoose = require("./connection")
const seeds = require("")

const Calendar = require("./models/calendar")

Calendar.deleteMany({}).then(() => {
    console.log('deleted all events')
})
