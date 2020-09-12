import React from "react";
import { APIattraits } from "../constantes";
//Dans ce cas il n'y a pas d'état ou d'appel au serveur, pas useState  et de useEffect
//Remplacer la class par la function
//Mettre le mot props en paramètre
//aller chercher le props = props.history, le defaultProps n'a pas besoin du props.
//history={props.history}

async function addAttraits(props) {
  //setInfosAttraits(infosAttraits.push({ nom_attrait: nomActivity }));
  console.log(props.infos);

  try {
    const response = await fetch(APIattraits, {
      /*Pour un ajout utiliser la méthode POST */
      method: "POST",
      /*Pour un ajout ajouter un headers */
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nom_attrait: props.infos,
      }),
    });
    if (response.ok) {
      const jsonResponse = await response.json();

      console.log("ajout des attraits réussi");

      return jsonResponse;
    }
    throw new Error("Request failed!");
  } catch (error) {
    console.log(error);
  }
}

addAttraits.defaultProps = { history: "/listetrips" };
export default addAttraits;
