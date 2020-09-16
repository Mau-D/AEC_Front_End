import React from "react";

import { API } from "../constantes";

const baseDeDonnees = [
  {
    nom: "test bd",
    image1:
      "https://tourismecote-nord.com/fileadmin/_processed_/csm_Yourte_Cote-Nord_413f62475e.jpg",
    image2:
      "https://tourismecote-nord.com/fileadmin/_processed_/csm_Yourte_Cote-Nord_413f62475e.jpg",
    description: "desc test bd",
    region: "Bas Saint-Laurent",
    attraits: [
      {
        nom_attrait: "a1 test bd",
        ville: "v1 test bd",
        image_attrait:
          "https://tourismecote-nord.com/fileadmin/_processed_/csm_Yourte_Cote-Nord_413f62475e.jpg",
        description_attrait: "desc a 1 test bd",
      },
      {
        nom_attrait: "a2 test bd",
        ville: "v2 test bd",
        image_attrait:
          "https://tourismecote-nord.com/fileadmin/_processed_/csm_Yourte_Cote-Nord_413f62475e.jpg",
        description_attrait: "desc a2 test bd",
      },
    ],
  },
];

//Component pour Le cas d'une page introuvable
async function AjoutBD() {
  baseDeDonnees.map((objet) => {
    try {
      const response = fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          objet,
        }),
      });
      if (response.ok) {
        const jsonResponse = response.json();

        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  });
}

//Il faut exporter les fonctions
export default AjoutBD;
