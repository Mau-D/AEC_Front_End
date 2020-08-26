import React from "react";
import AccueilHook from "./AccueilHook";
/*import { ManageMotorcycle } from "./ManageMotorcycle";*/
import PageNotFoundHook from "./PageNotFoundHook";
/*Enlever {} lorsque l'on import un hook*/
import AjouterMotoHook from "./AjouterMotoHook";
import BoutonAjouterMotoHook from "./BoutonAjouterMotoHook";
import BoutonRetourAccueilHook from "./BoutonRetourAccueilHook";
import FormEditMotoHook from "./FormEditMotoHook";
import { Route, Switch } from "react-router-dom";
/*useLocation permet de savoir où je me trouve*/
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
        !location.pathname.startsWith("/Motorcycle") && (
          <BoutonAjouterMotoHook />
        )}
      <Switch>
        <Route path="/" exact component={AccueilHook} />
        {/*<Route path="Motorcycle/:id" component={ManageMotorcycle} />*/}
        {/*Le lien est placé dansle component Motorcycle.js */}
        <Route path="/ajouterMoto" component={AjouterMotoHook} />
        <Route path="/Motorcycle/:modele" component={FormEditMotoHook} />
        <Route component={PageNotFoundHook} />
      </Switch>

      {location.pathname !== "/" && <BoutonRetourAccueilHook />}
    </>
  );
}

export default App;
