
// your server-side functionality
const express = require("express")
const app = express()
const serverless = require("serverless-http")
const router = express.Router()
const PORT = process.env.PORT || 3001;
require("dotenv").config();
const bodyParser = require("body-parser");
var nodemailer = require("nodemailer");
const cors = require("cors");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;
// using cors
router.use(
    cors({
        origin: ["http://localhost:3000", "https://trippayer.netlify.app"], // restrict calls to those this address
        methods: "POST" // only allow POST requests
    })
);
const oauth2Client = new OAuth2(
    process.env.OAUTH_CLIENTID, // ClientID
    process.env.OAUTH_CLIENT_SECRET, // Client Secret
    "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.OAUTH_REFRESH_TOKEN
});
const accessToken = oauth2Client.getAccessToken()
//using body-parser
// Body-parser middleware
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.post("/message", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    var details = {
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    }
    //Transporter Details
    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: process.env.MAIL_USERNAME,
            pass: process.env.MAIL_PASSWORD,
            clientId: process.env.OAUTH_CLIENTID,
            clientSecret: process.env.OAUTH_CLIENT_SECRET,
            refreshToken: process.env.OAUTH_REFRESH_TOKEN,
            accessToken: accessToken
        }
    })

    var mailOptions = {
        from: details.email,
        to: process.env.MAIL_USERNAME,
        subject: details.name + " sending Email from Trippayer Website",
        text: details.message + "\n sent from " + details.email
    };

    transporter.sendMail(mailOptions, function (err, info) {
        if (err) {
            res.json({ "info": "failed" })
            console.log(err);
        } else {
            console.log("Email sent: " + info.response);
            res.json({ "info": "success" })
        }
    });
})

router.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

module.exports.handler = serverless(app)