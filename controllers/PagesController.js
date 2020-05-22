import quote from "../helpers/Quote";
import { check } from "express-validator";

exports.answers = (req, res) => {
  check("mail")
    .isEmail()
    .normalizeEmail();
  check("name")
    .isLength({ min: 3 })
    .trim()
    .escape();
  check("age")
    .isNumeric()
    .trim()
    .escape();
  check("date")
    .trim()
    .escape();
  check("eng1")
    .isNumeric()
    .trim()
    .escape();
  check("eng2")
    .isNumeric()
    .trim()
    .escape();
  check("eng3")
    .isNumeric()
    .trim()
    .escape();
  check("eng4")
    .isNumeric()
    .trim()
    .escape();
  check("eng5")
    .isNumeric()
    .trim()
    .escape();
  check("eng6")
    .isNumeric()
    .trim()
    .escape();
  check("rice")
    .isNumeric()
    .trim()
    .escape();
  check("coffee")
    .isNumeric()
    .trim()
    .escape();
  check("circ")
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
  // Send to script.js
  // Send Mails
  quote(data);

  res.send(req.body);
};
