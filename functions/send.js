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
            user: process.env.G_EMAIL,
            pass: process.env.G_PASSWORD,
            clientId: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            refreshToken: process.env.REFRESH_TOKEN,
            accessToken: process.env.ACCESS_TOKEN
        }
    });

    transporter.sendMail({
        from: data.email,
        to: process.env.email,
        subject: data.subject + ' ' + new Date().toLocaleString(),
        html: `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>Portfolio Mailer !</title>
                </head>
                <body>
                    <table width="100%" border="0" align="left" cellpadding="0" cellspacing="0">
                        <tbody>
                            <tr>
                                <td align="left">
                                    <table class="col-600" width="800" border="0" align="center" cellpadding="0" cellspacing="0">
                                        <tbody>
                                            <tr>
                                                <td align="center" valign="top"
                                                background="https://aurelien-hennuyer.netlify.app/images/header.jpg"
                                                bgcolor="#2a2e45" style="background-size:cover; background-position:top;height="800""="">
                                                    <table class="col-600" width="800" height="600" border="0" align="center" cellpadding="0" cellspacing="0">
                                                        <tbody>
                                                            <tr>
                                                                <td height="40"></td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" style="line-height: 0px;">
                                                                    <img style="display:block; line-height:0px; font-size:0px; border:0px;"
                                                                        src="https://aurelien-hennuyer.netlify.app/images/Aurelien_H.jfif"
                                                                        width="109" height="120" alt="logo">
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#c2cae8; line-height:24px; font-weight: 300; padding:0 50px;">
                                                                    <h1>Email de ${data.name}</h1>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#c2cae8; line-height:24px; font-weight: 300; padding:0 50px;">
                                                                    <p>${data.message}</p>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td align="center" style="font-family: 'Lato', sans-serif; font-size:15px; color:#c2cae8; line-height:24px; font-weight: 300; padding:0 50px;">
                                                                    <div><p>Vous pouvez recontacter cette personne via cet email ${data.email}</p></div>
                                                                </td>
                                                            </tr>
                                                            <tr>
                                                                <td height="40"></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </body>
            </html>
            `
    }, function(error, info) {
        if (error) {
            callback(error);
        } else {
            callback(null, {
            statusCode: 200,
            body: JSON.stringify({
                'result': 'success',
                'message': 'Merci ! Nous vous recontacterons sous peu'
            })
        });
        }
    });
}