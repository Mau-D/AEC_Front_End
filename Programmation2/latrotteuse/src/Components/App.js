import React from "react";
import "../style/App.css"; /*Modifier ce fichier pour le style en sass*/
import { Accueil } from "./Accueil";
//import AjouterTrip from "./AjouterTrip";
//import ManageTrips from "./ManageTrips";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      {/*Pour enlever le bouton ajouter dans la page d'ajout, la modification et la page not found
      <ToastContainer autoClose={3000} hideProgressBar />
      {location.pathname !== "/ajouterMoto" &&
        !location.pathname.startsWith("/Motorcycle") && (
          <BoutonAjouterMotoHook />
        )} */}
      <Container fluid>
        <Switch>
          {/*Accueil est la première page*/}
          <Route path="/" exact component={Accueil} />
        </Switch>
      </Container>

      {/*{location.pathname !== "/" && <BoutonRetourAccueil />}*/}
    </>
  );
}

export default App;
