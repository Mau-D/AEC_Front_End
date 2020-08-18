import React from "react";
import { Accueil } from "./Accueil";
/*import { ManageMotorcycle } from "./ManageMotorcycle";*/
import { PageNotFound } from "./PageNotFound";
import { AjouterMoto } from "./AjouterMoto";
import { BoutonAjouterMoto } from "./BoutonAjouterMoto";
import { BoutonRetourAccueil } from "./BoutonRetourAccueil";
import { FormEditMoto } from "./FormEditMoto";
import {
  Route,
  Switch,
} from "react-router-dom"; /*useLocation permet de savoir où je me trouve*/
import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  let location = useLocation(); /*variable de la page où je me trouve */
  return (
    <>
      {/*Pour enlever le bouton ajouter dans la page d'ajout, la modification et la page not found */}
      <ToastContainer autoClose={3000} hideProgressBar />
      {location.pathname !== "/ajouterMoto" &&
        !location.pathname.startsWith("/Motorcycle") && <BoutonAjouterMoto />}
      <Switch>
        <Route path="/" exact component={Accueil} />
        {/*<Route path="Motorcycle/:id" component={ManageMotorcycle} />*/}
        {/*Le lien est placé dansle component Motorcycle.js */}
        <Route path="/ajouterMoto" component={AjouterMoto} />
        <Route path="/Motorcycle/:modele" component={FormEditMoto} />
        <Route component={PageNotFound} />
      </Switch>

      {location.pathname !== "/" && <BoutonRetourAccueil />}
    </>
  );
}

export default App;
