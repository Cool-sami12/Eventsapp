const User = require('../models/user.model');


exports.register =  function (req, res) {
  try{
      console.log(req.body)
    let user = new User(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            eventname: req.body.eventname
        }

    )
    console.log(user);
    user.save()
    res.json("Congratulation you just Register for an Event Successfully")
  }
  catch(err){
res.json(err)
  }
}


exports.getusers = async function (req, res) {
    try {
        const users = await User.find();
        response = {
            statuscode: 200,
            data: [users],
            message: 'Success'
        };
        res.json(response);
    } catch (err) {
        res.json({ message: err });
    };
}
