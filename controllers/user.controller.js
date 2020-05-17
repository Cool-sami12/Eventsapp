const User = require('../models/user.model');
const Events = require('../models/events.model');

exports.register =  function (req, res) {
  try{
      console.log(req.body)
    let user = new User(
        {
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            event_id: req.body.event_id,
            phonenumber:req.body.phonenumber,
            
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


exports.getuser = async function (req, res) {
    try {
        
        const userevent = await User.find({event_id: req.body.event_id});
        response = {
            statuscode: 200,
            data: [userevent],
            message: 'Success'
        };
        res.json(response);
    } catch (err) {
        res.json({ message: err });
    };
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

