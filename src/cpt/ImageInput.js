// This is a custom made component used to create the little image cards
import React from "react";
import "../css/ImageInput.css";
import { TextField, Paper, Container } from "@material-ui/core/";

export default function ImageInput(props) {
  return (
    <Paper className="cont">
      <Container maxWidth="sm" id="center">
        <h4 >{props.title}</h4>
        <img alt={props.alt} src={props.src} id="image"></img>
        <br />
        <TextField
          required
          style={{ margin: 9 }}
          data-persist="garlic"
        />
      </Container>
    </Paper>
  );
}
