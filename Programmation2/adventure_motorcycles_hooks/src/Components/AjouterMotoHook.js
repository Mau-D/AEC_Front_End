import React from "react";
import FormAjouterMotoHook from "./FormAjouterMotoHook";
//Dans ce cas il n'y a pas d'état ou d'appel au serveur, pas useState  et de useEffect
//Remplacer la class par la function
//Mettre le mot props en paramètre
//aller chercher le props = props.history, le defaultProps n'a pas besoin du props.
function AjouterMotoHook(props) {
  return (
    <>
      <FormAjouterMotoHook history={props.history} />
    </>
  );
}
AjouterMotoHook.defaultProps = { history: "/" };
export default AjouterMotoHook;
