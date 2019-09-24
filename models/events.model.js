const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let eventSchema = new Schema({
    name: {
        type:String, 
        required:true,
        max:255
    },
    location: {
        type:String,
        required: true,
        max: 255

    },
    date: {
        type: Date,
        default:Date.now,
        required: false
    },
    
})


const eventTest = mongoose.model('eventTest', eventSchema);
module.exports = eventTest;