const mongoose = require("../connection");
const Schema = mongoose.Schema;

let calendarSchema = new Schema({
    date: Date,
    time: String,
    task: String,
    location: String
})

const Calendar = mongoose.model("Calendar", calendarSchema)

module.exports = Calendar;