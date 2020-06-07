// This is responsible for the design of the questionnaire

import React from "react";
import bill from "./img/bill.jpg";
import arroz from "./img/arroz.jpg";
import coffee from "./img/coffee.jpg";
import light from "./img/foco.png";

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
    <Container maxWidth="sm" id="biggo"style={{backgroundColor:"gainsboro",borderRadius:10}} >
      <h1 align="center">Formulario para Cotización</h1>
      <form data-persist="garlic" method="get" action="/cotizacion.html">
        {/* Datos Personales */}
        <Paper elevation="4"style={{backgroundColor:"whitesmoke",borderRadius:10}}>
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
        <Paper elevation="4"style={{backgroundColor:"whitesmoke",borderRadius:10}}>
          <Container>
            <h4>Informacion de Consumo</h4>
            <Container maxWidth="sm">
              <img className="bill" src={bill} alt="Bill"></img>
            </Container>
            {/* Inicio del periodo */}
            <TextField
              required
              style={{ margin: 9}}
              label="Fecha de Inicio del Periodo"
              type="date"
              format="DD-MM-YYYY"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"> -----> </InputAdornment>
                )
              }}
            />
            {/*Energia del primer Periodo */}
            <TextField
              required
              label="Energía del Primer Periodo"
              style={{ margin: 9}}
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
        <Paper elevation="4"style={{backgroundColor:"whitesmoke",borderRadius:10}}>
          <Container>
            <h4>
              ¿Con cuántos de los siguientes electrodomésticos cuenta usted?{" "}
            </h4>
            <Box display="flex"  justifyContent="center"style={{borderRadius:4,marginTop:-20}}>
              <ImageInput title="Arroceras" alt="Arroceras" src={arroz}   />
              <ImageInput title="Cafeteras" alt="Cafeteras" src={coffee} />
              <ImageInput title="Focos" alt="Focos" src={light}/>
            </Box>
          </Container>
        </Paper>
        <br />
        <Button variant="contained" color="Primary" elevation="2">
          Obtener Cotización
        </Button>
      </form>
    </Container>
  );
}

export default App;
