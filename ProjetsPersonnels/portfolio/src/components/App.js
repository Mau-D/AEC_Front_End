import React from "react";
import Accueil from "./Accueil";
import OnePager from "./OnePager";
import Header from "./Header";
import Footer from "./Footer";
import Apropos from "./APropos";
import { Container } from "react-bootstrap";
import { Route, Switch, useLocation } from "react-router-dom";
import DetailsFormation from "./DetailsFormation";

function App() {
  let location = useLocation(); /*variable de la page où je me trouve */

  return (
    <>
      {/*Contenu de l'app*/}
      <Container fluid className="p-0">
        {location.pathname !== "/onepage/" && <Header />}
        <Container fluid>
          <Switch>
            {/*Accueil est la première page*/}
            <Route path="/" exact component={Accueil} />
            <Route path="/onepage" exact component={OnePager} />
            <Route path="/apropos" exact component={Apropos} />
            <Route
              path="/apropos/detailsformation"
              component={DetailsFormation}
            />
          </Switch>
        </Container>
        {location.pathname !== "/onepage/" && <Footer />}
      </Container>
    </>
  );
}

export default App;
