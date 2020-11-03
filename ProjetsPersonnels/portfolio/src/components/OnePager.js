import React from "react";
import Accueil from "./Accueil";
import APropos from "./APropos";

function OnePager() {
  return (
    <>
      <Accueil />
      <h1>À propos</h1>
      <APropos></APropos>
    </>
  );
}

export default OnePager;
