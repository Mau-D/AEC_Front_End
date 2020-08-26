import React from "react";
import { Menu } from "./Menu";
import { Accueil } from "./Accueil";
import { GaleriePhotos } from "./GaleriePhotos";
import { Video } from "./Video";
import { Carte } from "./Carte";
import { RetourAccueil } from "./RetourAccueil";
import { ListePersonnages } from "./ListePersonnages";
import { PersonnageComplet } from "./PersonnageComplet";
import { PageNotFound } from "./PageNotFound";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
//Toutes les routes des liens sont définis, une page introuvable et un lien pour le retour à l'accueil
//Route pour une liste de personnage lorsque cliqué affiche les informations complètes, graĉe au paramètre :id
function App() {
  return (
    <>
      <Menu />
      <Container fluid>
        <Switch>
          <Route path="/" exact component={Accueil} />
          <Route path="/GaleriePhotos" component={GaleriePhotos} />
          <Route path="/Video" component={Video} />
          <Route path="/Carte" component={Carte} />
          <Route path="/Personnage" component={ListePersonnages} />
          <Route path="/Perso/:id" component={PersonnageComplet} />
          {/*Lien placé dans le component Perso.js */}
          <Route component={PageNotFound} />
        </Switch>
        <RetourAccueil />
      </Container>
    </>
  );
}

export default App;
