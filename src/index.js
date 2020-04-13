// Main Renderer. This file is used to render all content into the page
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Mail from "../models/mailer/mail";

ReactDOM.render(
  <Mail panels="10" batteries="11" inversors="2" ages={11} />,
  document.getElementById("root")
);


