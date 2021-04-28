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
      <Container>
          <h1>seigi.ml</h1>
        <h3>You've arrived to the future of democracy.</h3>
      </Container>
  );
}

export default App;
