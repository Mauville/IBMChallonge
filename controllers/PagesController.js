import quote from "../helpers/Quote";

exports.answers = (req, res) => {
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
