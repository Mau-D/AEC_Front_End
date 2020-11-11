import React from "react";
import { Image, Row, Col } from "react-bootstrap";
import { PROJETS } from "../constantes";
import ListeProjet from "./ListeProjet";

function TriProjet(props) {
  return PROJETS.map((key, i) => (
    <>
      {props.techno === PROJETS[i].techno ? (
        <ListeProjet
          key={"projet" + key}
          id={PROJETS[i].id}
          titre={PROJETS[i].titre}
          sousTitre={PROJETS[i].sousTitre}
          date={PROJETS[i].date}
          lien={PROJETS[i].liengithub}
          description={PROJETS[i].description}
          image={PROJETS[i].imagePrincipale}
          carousel1={PROJETS[i].carousel[0]}
          carousel2={PROJETS[i].carousel[1]}
          carousel3={PROJETS[i].carousel[2]}
          details={PROJETS[i].detailsProjet}
        />
      ) : null}
    </>
  ));
}

export default TriProjet;
