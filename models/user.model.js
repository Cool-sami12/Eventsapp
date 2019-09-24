const mongoose = require('mongoose');
const Schema = mongoose.Schema;


let userSchema = new Schema({
    firstname:{
        type: String,
        required: true,
        max:255
    },
    lastname: {
        type: String,
        required: true,
        max: 255,
    },
    eventname: {
        type: String,
        required: true,
        max: 255
    }
})



const User = mongoose.model('User', userSchema);
module.exports = User;