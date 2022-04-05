const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const admin = require("firebase-admin");
admin.initializeApp();

// const async = require("async");
const mailer = require("nodemailer");

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM_USER,
    pass: process.env.EMAIL_FROM_USER_PASSWD,
  },
});

const Email = require("email-templates");

const email = new Email({
  message: {
    from: process.env.EMAIL_FROM_USER,
  },
  // transport: {
  //     jsonTransport: true
  // }
  transport: transporter,
});

const express = require("express");

// const serveStatic = require("serve-static");
// const path = require("path");

require("dotenv").config();

const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

const cors = require("cors");
app.use(cors({
  origin: [
    "http://localhost:8080",
    "http://localhost:8081",
    "http://sageye.xyz",
    "http://www.sageye.xyz",
    "http://www.sageye.io",
    "https://sageye.io",
  ],
}));

// app.use("/", serveStatic(path.join(__dirname, "/dist")));

/**
 *  contact: {
 *      id: <id>
 *      name: "Given Name"
 *      email: "contact@xyz.me"
 *      interest: "storybuilder" (for now!!!!)
 *      comments: "blah...blah...blah"
 *  }
 */
app.post("/api/contact", (req, res) => {
  const contact = req.body.contact;
  console.log("contact-us from ", contact);

  email
      .send({
        template: "builders",
        message: {
          to: process.env.EMAIL_TO_LIST.split(", ")[process.env.EMAIL_TO_INDEX],
        },
        locals: {
          name: contact.name,
          email: contact.email,
          interest: contact.interest,
          comments: contact.message,
        },
      })
      .then((res) => console.log(res))
      .catch((error) => console.error(error));

  // console.log('contact received of ' + contact['name'])
  return res.send("Contact added successfully!");
});

exports.app = functions.https.onRequest(app);
