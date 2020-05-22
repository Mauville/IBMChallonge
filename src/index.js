// Main Renderer. This file is used to render all content into the page
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from './App.js';
// import Mail from "../helpers/mailer/mail";

ReactDOM.render(
  <App></App>,
  // <Mail panels="10" batteries="11" inversors="2" ages={11} />,
  document.getElementById("root")
);


