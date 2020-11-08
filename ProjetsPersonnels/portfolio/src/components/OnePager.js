import React from "react";
import Accueil from "./Accueil";
import APropos from "./APropos";
import Projets from "./Projets";
import CV from "./CV";

function OnePager() {
  return (
    <>
      <Accueil />
      <APropos></APropos>
      <Projets></Projets>
      <CV></CV>
    </>
  );
}

export default OnePager;
