import React from "react";
import Accueil from "./Accueil";
import OnePager from "./OnePager";
import Header from "./Header";
import Footer from "./Footer";
import Apropos from "./APropos";
import Contact from "./Contact";
import { Container } from "react-bootstrap";
import { Redirect, Route, Switch, useLocation } from "react-router-dom";
import "../styles/principal.sass";
import IntroProjet from "./IntroProjet";

function App() {
  let location = useLocation(); /*variable de la page où je me trouve */

  return (
    <>
      {/*Contenu de l'app*/}
      <Container fluid className="p-0 .min100 m-0">
        <Header />
        <Container fluid>
          <Switch>
            {/*Accueil est la première page*/}
            <Route path="/" exact component={Accueil} />
            {/*Version onepage*/}
            <Route path="/onepage" component={OnePager} />
            <Route path="/apropos" component={Apropos} />
            <Route path="/projets" component={IntroProjet} />
            <Route path="/contact" component={Contact} />
            <Redirect to="/" />
          </Switch>
        </Container>

        {location.pathname !== "/contact" && <Footer />}
      </Container>
    </>
  );
}

export default App;
