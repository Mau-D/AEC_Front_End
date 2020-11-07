import React from "react";
import ListeProjet from "./ListeProjet";
import DetailsProjet from "./DetailsProjet";
import { PROJETS } from "../constantes";

function Projets() {
  return PROJETS.map((key, i) => (
    <>
      <ListeProjet
        titre={PROJETS[i].titre}
        soustitre={PROJETS[i].sousTitre}
        date={PROJETS[i].date}
        lien={PROJETS[i].liengithub}
        description={PROJETS[i].description}
        image={PROJETS[i].imagePrincipale}
      />
      <DetailsProjet
        image={PROJETS[i].imagePrincipale}
        carousel1={PROJETS[i].carousel[0]}
        carousel2={PROJETS[i].carousel[1]}
        carousel3={PROJETS[i].carousel[2]}
        details={PROJETS[i].detailsProjet}
        lien={PROJETS[i].liengithub}
      />
    </>
  ));
}
export default Projets;
