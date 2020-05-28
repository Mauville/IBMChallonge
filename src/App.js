// This is responsible for the design of the questionnaire

import React from "react";
import bill from "./img/bill.jpg";
import arroz from "./img/arroz.jpg";
import coffee from "./img/coffee.jpg";
import light from "./img/light.png";

import ImageInput from "./cpt/ImageInput.js";
import "./App.css";
import {
  TextField,
  Box,
  Button,
  Paper,
  InputAdornment,
  Container
} from "@material-ui/core/";

function App() {
  return (
    <Container maxWidth="sm" id="biggo" >
      <h1 align="center">Formulario para Cotización</h1>
      <form data-persist="garlic" method="get" action="/cotizacion.html">
        {/* Datos Personales */}
        <Paper elevation="2">
          <Container>
            <h4>Datos Personales</h4>
            <TextField label="Email" required style={{ margin: 9 }} margin="normal" InputLabelProps={{ shrink: true }} ></TextField>
            
            <TextField
              required
              label="Código Postal"
              style={{ margin: 9 }}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            ></TextField>
          </Container>
        </Paper>
        {/* Receipt */}
        <Paper elevation="2">
          <Container>
            <h4>Informacion de Consumo</h4>
            <Container maxWidth="sm">
              <img className="bill" src={bill} alt="Bill"></img>
            </Container>
            {/* Inicio del periodo */}
            <TextField
              required
              style={{ margin: 9 }}

              label="Fecha de Inicio del Periodo"
              
              type="date"
              format="DD-MM-YYYY"
              InputLabelProps={{
                shrink: true
              }}
            />
            {/*Energia del primer Periodo */}
            <TextField
              required
              label="Energía del Primer Periodo"
              Texto
              style={{ margin: 9 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kWh</InputAdornment>
                )
              }}
            />
            <TextField
              required
              label="Energía del Segundo Periodo"
              style={{ margin: 9 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kWh</InputAdornment>
                )
              }}
            />
            <TextField
              required
              label="Energía del Tercer Periodo"
              style={{ margin: 9 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kWh</InputAdornment>
                )
              }}
            />
            <TextField
              required
              label="Energía del Cuarto Periodo"
              style={{ margin: 9 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kWh</InputAdornment>
                )
              }}
            />
            <TextField
              required
              label="Energía del Quinto Periodo"
              style={{ margin: 9 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kWh</InputAdornment>
                )
              }}
            />
            <TextField
              required
              label="Energía del Sexto Periodo"
              style={{ margin: 9 }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">kWh</InputAdornment>
                )
              }}
            />
          </Container>
        </Paper>
        {/* Appliances */}
        <Paper elevation="2">
          <Container>
            <h5>
              {" "}
              ¿Con cuántos de los siguientes electrodomésticos cuenta usted?{" "}
            </h5>
            <Box display="flex" justifyContent="space-around">
              <ImageInput title="Arrocera" alt="Arrocera" src={arroz} />
              <ImageInput title="Cafetera" alt="Cafetera" src={coffee} />
              <ImageInput
                title="Foco Circular"
                alt="Foco Circular"
                src={light}
              />
            </Box>
          </Container>
        </Paper>
        <br />
        <Button variant="contained" color="primary">
          Obtener Cotización
        </Button>
      </form>
    </Container>
  );
}

export default App;
