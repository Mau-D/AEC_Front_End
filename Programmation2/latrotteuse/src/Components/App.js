import React from "react";
import "../App.css";
import { Accueil } from "./Accueil";
import AjouterTrip from "./AjouterTrip";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container fluid>
      <Switch>
        {/*Accueil est la première page*/}
        <Route path="/" exact component={Accueil} />
        <Route path="/ajoutertrip" component={AjouterTrip} />
      </Switch>
    </Container>
  );
}

export default App;
