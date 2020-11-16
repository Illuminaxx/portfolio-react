const path = require("path");
const express = require("express");
const transporter = require("./config");
const dotenv = require("dotenv");
dotenv.config();
const app = express();

const buildPath = path.join(__dirname, "..", "build");
app.use(express.json());
app.use(express.static(buildPath));

app.post("/api/send", (req, res) => {
  try {
    const mailOptions = {
      from: req.body.email, // sender address
      to: process.env.email, // list of receivers
      subject: req.body.subject, // Subject line
      html: `
        <h3>Email from ${req.body.name} <${req.body.email}></h3>
        <p>${req.body.message}</p>
        `
    };

    transporter.sendMail(mailOptions, function (err, info) {
      if (err) {
        res.status(500).send({
          success: false,
          message: "Something went wrong. Try again later",
        });
      } else {
        res.send({
          success: true,
          message: "Thanks for contacting us. We will get back to you shortly",
        });
      }
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "Something went wrong. Try again later",
    });
  }
});

app.listen(3000, () => {
  console.log("Server start on port 3000");
});
