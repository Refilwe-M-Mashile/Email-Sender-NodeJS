const express = require("express");
require("dotenv").config();

const app = express();
app.use(express.json());

const port = process.env.PORT || 3001;
const transporter = require("./transporter-config");

app.post("/send", (req, res) => {
  const { to, subject, text } = req.body;
  const mailOptions = { to, subject, text };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log("Error " + err.message);
    } else {
      res.send("Email sent successfully");
    }
  });
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});
