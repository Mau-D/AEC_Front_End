import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
//"homepage": "https://mau-d.github.io/AEC_Front_End/Programmation2/adventure_motorcycles_hooks/build",
ReactDOM.render(
  <Router basename="/AEC_Front_End/Programmation2/adventure_motorcycles_hooks/build">
    <App />
  </Router>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
