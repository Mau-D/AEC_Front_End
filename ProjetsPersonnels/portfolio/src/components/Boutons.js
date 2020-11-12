import React from "react";
import { Button } from "react-bootstrap";
import "../styles/projets.sass";

/*Fonction  pour l'affichage des projets, tous les projets sont affichés et les boutons offrent un tri selon la techno*/
function Boutons() {
  //Faire des composants pour chacun des boutons et faire un évenement on Click sur le composant
  return (
    <>
      <Button className="mx-2 mb-2">React</Button>
    </>
  );
}

export default Boutons;
