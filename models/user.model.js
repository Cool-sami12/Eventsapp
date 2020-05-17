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
    
    email:{
        type: String, 
        unique: true, 
        trim:true, 
        lowercase: true, 
        required: true, 
        max: 100,
       
    },
    event_id: {
        type: String,
        required: true,
        max: 255,
    },
    
    phonenumber: {
        type: String,
        required: true,
        max: 255,
    },

})



const User = mongoose.model('User', userSchema);
module.exports = User;