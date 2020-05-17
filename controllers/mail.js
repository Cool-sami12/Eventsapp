const nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'sami4cari2c@gmail.com',
        pass: ''
    }
});

const mailOptions = {
    from: 'sami4cari2c@gmail.com', // sender address
    to: 'veragreen20@gmail.com, sandy4samuel@outlook.com', // list of receivers
    subject: 'testrunningg', // Subject line
    html: '<h1>HEllo</h1><p> this is just a test for mailnode</p>'// plain text body
};

transporter.sendMail(mailOptions, function (err, info) {
    if (err)
        console.log(err)
    else
        console.log(info);
});