// Set up mongoose connection
const mongoose = require('mongoose');


const mongoDB = "mongodb+srv://zzzz:zzzzzzzz@test-ylbtt.mongodb.net/test?retryWrites=true&w=majority";

mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));