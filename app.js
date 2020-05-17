require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');


const app = express();

app.use(bodyParser.json());


const testEvent = require('./routes/events.route');



//includes  database connection
require('./db');


app.use('/eventapp',testEvent);

//defines server port
let port = 4000;
app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});

