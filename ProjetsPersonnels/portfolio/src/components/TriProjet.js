import React from "react";
import { Container, Row } from "react-bootstrap";
import ListeProjet from "./ListeProjet";
import { AUTRES, PROJETS } from "../constantes";
import AutreProjet from "./AutreProjet";

function TriAutre(props) {
  return (
    <>
      {PROJETS.map((key, i) =>
        props.techno === PROJETS[i].techno ? (
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
        ) : null
      )}
      {/*Les autres projets sous forme de polaroid */}
      <Container>
        <Row>
          {AUTRES.map((key, i) =>
            props.techno === AUTRES[i].techno ? (
              <AutreProjet
                key={"autre" + key}
                id={AUTRES[i].id}
                image={AUTRES[i].image}
                titre={AUTRES[i].titre}
                lien={AUTRES[i].lien}
              />
            ) : null
          )}
        </Row>
      </Container>
    </>
  );
}
export default TriAutre;
