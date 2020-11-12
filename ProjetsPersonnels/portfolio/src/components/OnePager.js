import React from "react";
import Accueil from "./Accueil";
import APropos from "./APropos";
import IntroProjet from "./IntroProjet";
import CV from "./CV";

function OnePager() {
  return (
    <>
      <Accueil />
      <APropos></APropos>
      <IntroProjet></IntroProjet>
      <CV></CV>
    </>
  );
}

export default OnePager;
