import React from "react";
import "../style/App.css"; /*Modifier ce fichier pour le style en sass*/
import { Accueil } from "./Accueil";
import AjouterTrip from "./AjouterTrip";
import ManageTrips from "./ManageTrips";
import FormEditTrip from "./FormEditTrip";
//import BoutonRetourManage from "./BoutonRetourManage";
import Menu from "./Menu";
import { Route, Switch, Redirect } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailTrip from "./DetailTrip";
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      {/* Same as */}
      <ToastContainer />
      <Container fluid>
        <Menu />
        <Switch>
          {/*Accueil est la première page*/}
          <Route path="/" exact component={Accueil} />
          {/*Dans la page d'accueil, lien pour la liste des road trips*/}
          <Route path="/listetrips" component={ManageTrips} />
          {/*Dans la liste des trips, bouton pour ajouter un trip*/}
          <Route path="/ajoutertrip" component={AjouterTrip} />
          {/*Un lien dans chacune des cards des différents trips, amène à un formulaire d'édition*/}
          <Route path="/trip/edit/:titre" component={FormEditTrip} />
          {/*Un lien dans chacune dans la liste des différents trips, amène à la page détaillée du road trip*/}
          <Route path="/trip/:titre" component={DetailTrip} />
          {/*En cas d'erreur dans l'url on retourne à la page d'accueil*/}
          <Redirect to="/" />
        </Switch>
      </Container>
    </>
  );
}

export default App;
