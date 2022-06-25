// const mongoose = require("mongoose")
const express = require("express");
const router = express.Router();

const calendarController = require("../../controllers/calendar");

router.get("/", calendarController.getAll);

router.post("/", calendarController.create);

router.put("/:id", calendarController.update);

router.delete("/:id", calendarController.remove);

module.exports = router;
