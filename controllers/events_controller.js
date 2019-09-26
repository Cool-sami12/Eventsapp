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
            description:req.body.description,
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

exports.getevent = async function(req,res) {
    try {
        const event =await Events.find();
        response = {
            statuscode: 200,
            data: [event],
            message: 'Success'
        };
        res.json(response);
         } catch (error) {
        res.json({ message: err });
        
    }
}