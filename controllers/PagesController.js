// import {main} from "./main";
let validate = require("express-validator");
let quote = require("../helpers/Quote");
let mailer = require("../helpers/mailer/mailer");

exports.answers = (req, res) => {
  console.log("GOTCHA");
    validate
        .check("mail")
        .isEmail()
        .normalizeEmail();
    validate
        .check("name")
        .isLength({ min: 3 })
        .trim()
        .escape();
    validate
        .check("age")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("date")
        .trim()
        .escape();
    validate
        .check("eng1")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("eng2")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("eng3")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("eng4")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("eng5")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("eng6")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("rice")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("coffee")
        .isNumeric()
        .trim()
        .escape();
    validate
        .check("circ")
        .isNumeric()
        .trim()
        .escape();
    let data = {
      mail: req.body.mail,
      zip: req.body.zip,
      date: req.body.date,
      energy: [
        req.body.eng1,
        req.body.eng2,
        req.body.eng3,
        req.body.eng4,
        req.body.eng5,
        req.body.eng6
      ],
      rice: req.body.rice,
      coffee: req.body.coffee,
      circ: req.body.circ
    };
    console.log(data);
    // Generate quote using client's script
    let varia = quote.getInfo(data);
    // Put into DBs

    // Send Mail to customer
    mailer.sendMail(varia.panels, varia.batteries, varia.inversors, 3, data.mail);
    res.send("Mail SENT");
  }
