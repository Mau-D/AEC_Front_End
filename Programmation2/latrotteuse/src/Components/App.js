import React from "react";
import "./App.css";
import { Accueil } from "./Accueil";
import AjouterTrip from "./AjouterTrip";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";

function App() {
  return (
    <>
      <Container fluid>
        {/*Accueil est la première page*/}
        <Route path={process.env.PUBLIC_URL + "/"} exact component={Accueil} />
        <Route path="/ajouterTrip" component={AjouterTrip} />
      </Container>
    </>
  );
}

export default App;
