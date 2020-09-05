import React from "react";
import FormAjouterTrip from "./FormAjouterTrip";
//Dans ce cas il n'y a pas d'état ou d'appel au serveur, pas useState  et de useEffect
//Remplacer la class par la function
//Mettre le mot props en paramètre
//aller chercher le props = props.history, le defaultProps n'a pas besoin du props.
function AjouterTrip(props) {
  return (
    <>
      <FormAjouterTrip history={props.history} />
    </>
  );
}
AjouterTrip.defaultProps = { history: "/" };
export default AjouterTrip;
