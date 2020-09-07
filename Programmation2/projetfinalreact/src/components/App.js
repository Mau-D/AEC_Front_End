import React from "react";
import "../style/App.css"; /*Modifier ce fichier pour le style en sass*/
import { Accueil } from "./Accueil";
import AjouterTrip from "./AjouterTrip";
import ManageTrips from "./ManageTrips";
//import FormEditTrip from "./FormEditTrip";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import DetailTrip from "./DetailTrip";

function App() {
  /*let location = useLocation(); variable de la page où je me trouve */
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
          {/*Dans la page d'accueil, lien pour la liste des road trips*/}
          {/*Dans la liste des trips, bouton pour ajouter un trip*/}
          <Route path="/listetrips" component={ManageTrips} />

          <Route path="/ajoutertrip" component={AjouterTrip} />
          {/*Un lien dans chacune des cards des différents trips, amène à un formulaire d'édition*/}
          <Route path="/trip/:titre" component={DetailTrip} />
          {/*En cas d'erreur dans l'url une page 404 s'affiche
          <Route component={PageNotFoundHook} />*/}
        </Switch>
      </Container>

      {/*{location.pathname !== "/" && <BoutonRetourAccueil />}*/}
    </>
  );
}

export default App;
