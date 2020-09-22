import React from "react";
import "../style/App.css"; /*Modifier ce fichier pour le style en sass*/
import { Accueil } from "./Accueil";
import AjouterTrip from "./AjouterTrip";
import ManageTrips from "./ManageTrips";
import FormEditTrip from "./FormEditTrip";
import BoutonRetourAccueil from "./BoutonRetourAccueil";
import BoutonRetourManage from "./BoutonRetourManage";
import { useLocation, Route, Switch } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DetailTrip from "./DetailTrip";

import { Titre } from "./Titre";

function App() {
  let location = useLocation(); /*variable de la page où je me trouve */

  return (
    <>
      {/*Pour enlever le bouton ajouter dans la page d'ajout, la modification et la page not found*/}
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

      <Titre />
      <Switch>
        {/*Accueil est la première page*/}
        <Route path="/" exact component={Accueil} />
        {/*Dans la page d'accueil, lien pour la liste des road trips*/}
        {/*Dans la liste des trips, bouton pour ajouter un trip*/}
        <Route path="/listetrips" component={ManageTrips} />
        <Route path="/ajoutertrip" component={AjouterTrip} />
        {/*Un lien dans chacune des cards des différents trips, amène à un formulaire d'édition*/}
        <Route path="/trip/edit/:titre" component={FormEditTrip} />
        {/*Un lien dans chacune des cards des différents trips, amène à page détaillée du road trip*/}
        <Route path="/trip/:titre" component={DetailTrip} />
        {/*En cas d'erreur dans l'url une page 404 s'affiche
          <Route component={PageNotFoundHook} />*/}
      </Switch>

      {location.pathname !== "/" && <BoutonRetourAccueil />}
      {location.pathname !== "trip/" &&
        location.pathname !== "/" &&
        location.pathname !== "/listetrips" && <BoutonRetourManage />}
    </>
  );
}

export default App;
