const path = require("path");
const express = require("express");
const transporter = require("./config");
const dotenv = require("dotenv");
const compression = require('compression');
dotenv.config();
const app = express();


app.use(compression({
    level: 9
}))

const buildPath = path.join(__dirname, "..", "build");

app.use(express.json());
app.use(express.static(buildPath));

app.post("/api/send", (req, res) => {
    try {
        const mailOptions = {
            from: req.body.email, // sender address
            to: process.env.G_EMAIL, // list of receivers
            subject: req.body.subject + ' ' + new Date().toLocaleString(), // Subject line
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
        };

        transporter.sendMail(mailOptions, function (err, info) {
            if (err) {
                res.status(500).send({
                    success: false,
                    message: "Une erreur s'est produite. Réessayez plus tard",
                });
            } else {
                res.send({
                    success: true,
                    message: "Merci ! Nous vous recontacterons sous peu",
                });
            }
        });
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Une erreur s'est produite. Réessayez plus tard",
        });
    }
});

app.listen(3000, () => {
    console.log("Server start on port 3000");
});
