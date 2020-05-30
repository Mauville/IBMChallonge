import React from "react";

import "./App.css";
import { Container, Paper } from "@material-ui/core/";
import { lightBlue } from "@material-ui/core/colors";
import { border } from "@material-ui/system";

function App() {
  return (
    <Container maxWidth="md" id="biggo" style={{backgroundColor:"lightblue",borderRadius:10}}>
      {/*This manages the text inside the container */ }
      <Paper align="center" elevation="3" style={{backgroundColor: "lightgrey",borderRadius:10}} >
      <h1 align="center" style={{backgroundColor: "lightgrey",borderRadius:10}}>Formulario para Cotización</h1>
      
        Gracias por llenar el formulario de cotización!
        <br />
        La cotización se ha enviado a su correo
      </Paper>
    </Container>
  );
}

export default App;
