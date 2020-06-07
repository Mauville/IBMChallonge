import React from "react";

import "./App.css";
import { Container, Paper } from "@material-ui/core/";
import { lightBlue } from "@material-ui/core/colors";
import { border } from "@material-ui/system";
import { Box } from "@material-ui/core";

function App() {
  return (
    <Container
      maxWidth="md"
      id="biggo"
      style={{ backgroundColor: "#eeeeee", borderRadius: 10, padding: 10 }}
    >
      {/*This manages the text inside the container */}
      <Paper
        align="center"
        elevation="3"
        style={{ borderRadius: 10, paddingTop: 5, margin: 10 }}
      >
        <h1 align="center" style={{ borderRadius: 10 }}>
          Formulario para Cotización
        </h1>

        <Box style={{ marginBottom: 15, padding: 10 }}>
          <p>
            Gracias por llenar el formulario!
            <br />
            La cotización se ha enviado a su correo.
          </p>
        </Box>
      </Paper>
    </Container>
  );
}

export default App;
