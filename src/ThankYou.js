import React from "react";

import "./App.css";
import { Container, Paper } from "@material-ui/core/";

function App() {
  return (
    <Container maxWidth="sm" id="biggo">
      <Paper align="center" elevation="3">
      <h1 align="center">Formulario para Cotización</h1>
      
        Gracias por llenar el formulario de cotización.
        <br />
        La cotización se ha enviado a su correo
      </Paper>
    </Container>
  );
}

export default App;
