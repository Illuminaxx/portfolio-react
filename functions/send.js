const nodemailer = require('nodemailer');
const dotenv = require('dotenv')
dotenv.config()

exports.handler = function(event, context, callback) {

    let data = JSON.parse(event.body)
    

    let transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            type: 'OAuth2',
            user: process.env.email,
            pass: process.env.password,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN
        }
    });

    transporter.sendMail({
        from: data.email,
        to: process.env.email,
        subject: data.subject,
        html: `
            <h1>Email from ${data.name} - < ${data.email} > <h1>
            <p>${data.message}<p>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                'result': 'success',
                'message': 'Thanks for contacting us. We will get back to you shortly'
            })
        });
        }
    });
}