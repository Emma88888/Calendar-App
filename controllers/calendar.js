const Calendar = require("../models/calendar");

const getAll = (req, res) => {
  Calendar.find({}).then((allCalendars) => res.json(allCalendars));
};

const create = (req, res) => {
    console.log(req.body)
    Calendar.create(req.body).then(calendar => {
        res.json(calendar)
    })
}

const update = (req, res) => {
    const id = req.params.id
    const updateData = req.body
    // Calendar.findByIdAndUpdate(id, updateData).then(calendar => {
    //     res.json(calendar)
    // })
    Calendar.findById(id)
        .then((calendar) => {
            for (let key in updateData) {
                calendar[key] = updateData[key]
            }
            return calendar
        })
        .then((calendar) => {
            calendar.save()
                .then(() => {
                    res.json(calendar)
                })
        }) 
}

const remove = (req, res) => {
    const id = req.params.id
    Calendar.findByIdAndDelete(id)
        .then((calendar) => {
            res.json(calendar)
        })
}

module.exports = {
  getAll,
  create,
  update,
  remove
};
