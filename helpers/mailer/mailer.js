
const nodemailer = require("nodemailer");
require("dotenv").config();




// async..await is not allowed in global scope, must use a wrapper
async function main(a, b, c) {
   // create reusable transporter object using the default SMTP transport
   let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'testingmf00@gmail.com', // mail username 
      pass: 'Testing12%', // mail password
    },
    
    tls:{                        //
      rejectUnauthorized: false // This is only used if the server is a local server, remove if used on non local server
    }                          //
  });                         //

  // send mail with defined transport object
  let mailOptions = await transporter.sendMail({
    from: '"Testing account" <testingmf00@gmail.com>', // sender address
    to: 'example@gmail.com', // list of receivers
    subject: 'mail', // Subject line
    html: `<h4>Buen dia.</h4>
    <p>Agradecemos su interés por nuestros servicios.</p>

    <p>
      De acuerdo con los datos provistos en el formulario de cotización, estos
      son los recursos necesarios para la instalación solar en su hogar:
    </p>
    <ul>
      <li> ${a} paneles solares.</li>
      <li> ${b} baterías.</li>
      <li> ${c} inversores.</li>
    </ul>

    <p>
      De acuerdo a nuestras estadísticas internas, podemos estimar que su
      inversión inicial en energía solar se reintegrará en aproximadamente
      ${props.ages} años.
    </p>
    <p>
      No olvide que si usted cambia sus habitos de consumo eléctrico, este
      número puede verse reducido aun más.
    </p>
    <p>No dude en contactarnos para cualquier aclaración.</p>
    <p>Atentamente, AXIOS</p>`,
  });
  transporter.sendMail(mailOptions, (error, info) => {  
    if(error) {
      return console.log(error);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  });
  
}


main(12, 13, 14).catch(console.error);