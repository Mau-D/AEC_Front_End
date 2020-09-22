import React, { useEffect, useState } from "react";
//importer la constante de l'API
import { ajoutBD } from "../constantes";
import { API } from "../constantes";

//Formulaire d'ajout pour une nouveau road trip
function AjoutBD() {
  const [donneesRecues, setDonneesRecues] = useState({});

  useEffect(() => {
    getBDInfos();
  }, []);
  //On récupère la moto pour ensuite remplir le formulaire.Pour le hook renommer getMoto
  async function getBDInfos() {
    //On récupère le dernier caractère de l'url substring(4,fin du string)
    //*********Le state motoID, n'est pas déclaré au début de la fonction ou classe************ */
    try {
      const response = await fetch(ajoutBD);
      const reponseDeBD = await response;
      setDonneesRecues(reponseDeBD);

      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
    ajouterBD(donneesRecues);
  }
  async function ajouterBD(donneesRecues) {
    try {
      const response = await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "array",
        },
        body: JSON.stringify({
          donneesRecues,
        }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();

        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  return console.log("bdréussie");
}

export default AjoutBD;
