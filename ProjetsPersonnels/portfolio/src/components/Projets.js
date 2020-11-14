import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ListeProjet from "./ListeProjet";
import { AUTRES, PROJETS } from "../constantes";
import AutreProjet from "./AutreProjet";
//animations react reveal
import Swing from "react-reveal/Swing";

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
            lienWeb={PROJETS[i].lienWeb}
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
          <Swing>
            <Col xs={12} sm={8} className="mb-5 mt-5 titre">
              <h1 className="p-5">Autres Projets</h1>
            </Col>
          </Swing>
        </Row>
        <Row>
          {Object.keys(AUTRES).map((key, i) => (
            <>
              <AutreProjet
                key={"autre" + key}
                id={AUTRES[i].id}
                image={AUTRES[i].image}
                titre={AUTRES[i].titre}
                lien={AUTRES[i].lien}
                lienWeb={AUTRES[i].lienWeb}
              />
            </>
          ))}
        </Row>
      </Container>
    </>
  );
}
export default Projets;
