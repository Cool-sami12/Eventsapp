const Events = require('../models/events.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};


exports.eventCreate = function (req, res, next){
    console.log(req.body);
    let testEvent = new Events(
        {
            name:req.body.name,
            location:req.body.location,
            date: req.body.date
        }

    );

    testEvent.save(function(err){
        if (err){
            return next (err);
        }
        res.send('Event Created Successfully')
    })
}