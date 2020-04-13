import React from "react";
import "./mail.css";
// import logo from "./img/arroz.jpg";
import { Container } from "@material-ui/core/";
import ReactDOMServer from "react-dom/server";

function Mail(props) {
  return (
    <Container maxWidth="sm" id="biggo">
      <h4>Buen dia.</h4>
      <p>Agradecemos su interés por nuestros servicios.</p>

      <p>
        De acuerdo con los datos provistos en el formulario de cotización, estos
        son los recursos necesarios para la instalación solar en su hogar:
      </p>
      <ul>
        <li>{props.panels} paneles solares.</li>
        <li>{props.batteries} baterías.</li>
        <li>{props.inversors} inversores.</li>
      </ul>

      <p>
        De acuerdo a nuestras estadísticas internas, podemos estimar que su
        inversión inicial en energía solar se reintegrará en aproximadamente
        {props.ages} años.
      </p>
      <p>
        No olvide que si usted cambia sus habitos de consumo eléctrico, este
        número puede verse reducido aun más.
      </p>
      <p>No dude en contactarnos para cualquier aclaración.</p>
      <p>Atentamente, AXIOS</p>
      {/*<img alt="" src={logo} id="image" />*/}
    </Container>
  );
}

/**
 * @return {string}
 */
function GetMailMarkup(panels, batteries, inversors, years) {
  return ReactDOMServer.renderToStaticMarkup(
    <Mail panels="10" batteries="11" inversors="2" ages={11} />
  );
}

export default GetMailMarkup;
