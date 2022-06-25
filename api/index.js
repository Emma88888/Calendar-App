const express = require("express");
const router = express.Router();
const calendarAPI = require("./calendar")

router.use("/calendar", calendarAPI)

module.exports = router