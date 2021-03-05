import React from "react";
import { AUTRES } from "../constantes";
import AutreProjet from "./AutreProjet";

function TriAutre(props) {
  return (
    <>
      {/*Les autres projets sous forme de polaroid */}

      {Object.keys(AUTRES).map((key, i) =>
        props.techno === AUTRES[i].techno ? (
          <AutreProjet
            key={"autre" + key}
            id={AUTRES[i].id}
            image={AUTRES[i].image}
            titre={AUTRES[i].titre}
            lien={AUTRES[i].lien}
            lienWeb={AUTRES[i].lienWeb}
          />
        ) : null
      )}
    </>
  );
}
export default TriAutre;
