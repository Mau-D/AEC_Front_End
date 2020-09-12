import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import AjouterAttrait from "./AjouterAttrait";

import { APIattraits } from "../constantes";

//Formulaire d'ajout pour les attraits touristiques du road trip
//Un props est passé(key) pour le nom du formulaire inséré dans un tableau[input-0, input-1]
function FormAjoutAttraits(props) {
  const [infosAttraits, setInfosAttraits] = useState([]);
  console.log("formattrait");
  console.log(props.CliqueSave);

  function handleAdd(event) {
    event.preventDefault();
    const nomActivity = document.getElementById("nomAttraitID").value;
    console.log(infosAttraits);
    setInfosAttraits(nomActivity);
    console.log(infosAttraits);
    if (props.cliqueSave) {
      return <AjouterAttrait infos={infosAttraits} />;
    }

    console.log(nomActivity);
  }
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
  async function remove() {
    try {
      const response = await fetch(APIattraits + "5f5a2c4ed899cd03e8b4e11d", {
        method: "delete",
      });

      if (response.ok) {
        //const jsonResponse = await response.json();

        console.log("SUPPRESSION!");
        return response;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  //Hook d'état pour la photo téléchargée voir plus tard, importer {useState}
  //const [photo, setPhoto] = useState("");
  //Fonction pour ajouter un attrait touristiques
  /*async function addAttrait(
    image_attrait,
    nom_attrait,
    description_attrait,
    endroit_attrait
  ) {
    try {
      const response = await fetch(APIattraits, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: nom_attrait,
          image: image_attrait,
          description: description_attrait,
          ville: endroit_attrait,
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
  }*/

  //Affiche la photo entrer en input, lorsque la souris sort du champ, grâce au changement d'état
  //handlePhoto() {
  // const image = document.getElementById("urlPhoto").value;
  //  this.setState({ photo: image });
  // }
  //Remplacer dans l'événement dans le return avec le hook d'état
  return (
    <>
      <div>
        {/*<Form.Control
            onBlur={() =>
              setPhoto(document.getElementById("urlPhoto").value)
            }
            type="text"
        />
            {photo !== "" && <Image src={photo} rounded width="125" />}
        </Form.Group>*/}

        <Form.Group controlId="nomAttraitID">
          <Form.Label>Entrer le nom de l'attrait touristique</Form.Label>
          <Form.Control type="text" />
          <Form.Text className="text-muted">ajouter une validation</Form.Text>
        </Form.Group>
        {/*<Form.Group controlId="imageAttraitID">
        <Form.Label>Entrer l'url de l'image'</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

      <Form.Group controlId="descriptionAttraitID">
        <Form.Label>Entrer la description de l'attrait touristique</Form.Label>
        <Form.Control as="textarea" rows="3" />
      </Form.Group>
      <Form.Group controlId="endroitAttraitID">
        <Form.Label>Entrer la ville de l'attrait touristique</Form.Label>
        <Form.Control type="text" />
        <Form.Text className="text-muted">ajouter une validation</Form.Text>
    </Form.Group>*/}
        <Button variant="primary" type="submit" onClick={handleAdd}>
          Enregistrer l'attrait
        </Button>
        <Button variant="primary" type="submit" onClick={remove}>
          supprimer
        </Button>
      </div>
    </>
  );
}

export default FormAjoutAttraits;
