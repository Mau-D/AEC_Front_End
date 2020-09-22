import React from "react";
import { Button } from "react-bootstrap";
import { API } from "../constantes";

//importer la constante de l'API
import { ajoutBD } from "../constantes";

//Formulaire d'ajout pour une nouveau road trip
function AjoutBD(props) {
  //const [photo, setPhoto] = useState("");

  async function addBD() {
    try {
      const response = await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: ajoutBD.nom,
          image1: ajoutBD.image1,
          image2: ajoutBD.image2,
          description: ajoutBD.description,
          region: ajoutBD.region,
          attraits: ajoutBD.attraits,
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
  return <Button onClick={addBD}>Ajouter la bd</Button>;
}

export default AjoutBD;
