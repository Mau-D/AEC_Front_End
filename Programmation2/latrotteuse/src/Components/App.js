import React from "react";
import "../App.css";
import { Accueil } from "./Accueil";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <Container fluid>
      <Switch>
        {/*Accueil est la première page*/}
        <Route path="/" exact component={Accueil} />
      </Switch>
    </Container>
  );
}

export default App;
