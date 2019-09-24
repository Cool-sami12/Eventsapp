// Set up mongoose connection
const mongoose = require('mongoose');


const mongoDB = process.env.MONGODB_URI;

mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));