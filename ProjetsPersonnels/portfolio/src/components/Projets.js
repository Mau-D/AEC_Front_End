import React from "react";
import ListeProjet from "./ListeProjet";
import { PROJETS } from "../constantes";

function Projets() {
  return PROJETS.map((key, i) => (
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
  ));
}
export default Projets;
