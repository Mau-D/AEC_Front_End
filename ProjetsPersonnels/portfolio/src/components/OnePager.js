import React from "react";
import Accueil from "./Accueil";
import APropos from "./APropos";
import Projets from "./Projets";

function OnePager() {
  return (
    <>
      <Accueil />
      <h1>À propos</h1>
      <APropos></APropos>
      <Projets></Projets>
    </>
  );
}

export default OnePager;
