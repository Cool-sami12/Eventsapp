const User = require('../models/user.model');


exports.register = function (req, res, next) {
  console.log(req.body)
    let user = new User(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            eventname: req.body.eventname
        }

    )
    console.log(user);
    user.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Congratulation you just Register for an Event Successfully')
    })
}

