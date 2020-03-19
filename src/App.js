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
  Paper,
  InputAdornment,
  Container
} from "@material-ui/core/";

function App() {
  return (
    <Container maxWidth="sm" id="biggo">
      <h1>Formulario para Cotización</h1>
      <form>
        {/* Datos Personales */}
        <Paper elevation="2">
          <Container>
            <h5>Datos Personales</h5>
            <TextField
              label="Email"
              required
              data-persist="garlic"
              style={{ margin: 9 }}
              margin="normal"
              InputLabelProps={{
                shrink: true
              }}
            ></TextField>
            <br />
            <TextField
              required
              label="Código Postal"
              data-persist="garlic"
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
            <h5>Informacion de Consumo</h5>
            <Container maxWidth="sm">
              <img className="bill" src={bill} alt="Bill"></img>
            </Container>
            <TextField
              required
              style={{ margin: 9 }}
              data-persist="garlic"
              label="Fecha de Inicio del Periodo"
              type="date"
              format="DD-MM-YYYY"
              InputLabelProps={{
                shrink: true
              }}
            />
            <TextField
              required
              label="Energía del Primer Periodo"
              data-persist="garlic"
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
              data-persist="garlic"
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
              data-persist="garlic"
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
              data-persist="garlic"
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
              data-persist="garlic"
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
              data-persist="garlic"
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
            <h5> ¿Con cuántos de los siguientes electrodomésticos cuenta usted? </h5>
            <Box display="flex" justifyContent="space-around">
              <ImageInput title="Arrocera" alt="Arrocera" src={arroz} />
              <ImageInput title="Cafetera" alt="Cafetera" src={coffee} />
              <ImageInput title="Foco Circular" alt="Foco Circular" src={light} />
            </Box>
          </Container>
        </Paper>
      </form>
    </Container>
  );
}

export default App;
