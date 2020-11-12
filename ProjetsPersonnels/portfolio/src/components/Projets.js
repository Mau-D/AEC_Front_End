import React from "react";
import { Container, Row } from "react-bootstrap";
import ListeProjet from "./ListeProjet";
import { AUTRES, PROJETS } from "../constantes";
import AutreProjet from "./AutreProjet";

/*Fonction pour afficher tous les projets de la constante PROJETS, props de toutes les propriétés */
function Projets() {
  return (
    <>
      {Object.keys(PROJETS).map((key, i) => (
        <>
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
        </>
      ))}
      {/*Les autres projets sous forme de polaroid */}
      <Container>
        <Row>
          {Object.keys(AUTRES).map((key, i) => (
            <>
              <AutreProjet
                key={"autre" + key}
                id={AUTRES[i].id}
                image={AUTRES[i].image}
                titre={AUTRES[i].titre}
                lien={AUTRES[i].lien}
              />
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Projets;
