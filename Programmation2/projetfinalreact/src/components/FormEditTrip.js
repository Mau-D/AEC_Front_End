import React, { useState, useEffect } from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { API } from "../constantes";

//import { toast } from "react-toastify";

function FormEditTrip(props) {
  const [donneesRecues, setDonneesRecues] = useState({
    nom: "",
    image: "",
    attraits: ["", ""],
  });

  const [tripID, setTripID] = useState(
    props.location.search.substring(4, props.location.search.length)
  );

  //useEffect
  useEffect(() => {
    getTripInfos();
  }, []);
  //On récupère la moto pour ensuite remplir le formulaire.Pour le hook renommer getMoto
  async function getTripInfos() {
    //On récupère le dernier caractère de l'url substring(4,fin du string)
    //*********Le state motoID, n'est pas déclaré au début de la fonction ou classe************ */
    try {
      const response = await fetch(API + tripID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);

      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //editTrip(picture, nametrip, nameactivity, place);
  //Méthode pour modifier la bd avec le formulaire, semblable à l'ajout ajouter l'id à l'URL et changer la methode pour PUT
  async function editTrip(picture, nametrip, nameactivity, place) {
    try {
      const response = await fetch(API + tripID, {
        /*Pour un ajout utiliser la méthode POST */
        method: "PUT",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          nom: nametrip,
          image: picture,
          attraits: [
            {
              nomAttrait: nameactivity,
            },
            {
              endroit: place,
            },
          ],
        }),
      });
      if (response.ok) {
        //const jsonResponse = await response.json();
        //props.history.push("/"); //Retour à la page d'accueil
        //toast.warning("Modification de la moto, modèle:  " + model);

        return response;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/
    /*variables des infos entrées dans le formulaire*/
    const picture = document.getElementById("pictureID").value;
    const nametrip = document.getElementById("nametripID").value;
    const nameactivity = document.getElementById("nameactivityID").value;
    const place = document.getElementById("placeID").value;

    /*Fonction pour entrer les infos dans la bd */
    editTrip(picture, nametrip, nameactivity, place);
  }
  //Méthode pour supprimer le road trip  de la bd, method delete
  async function removeTrip() {
    try {
      const response = await fetch(API + tripID, {
        method: "delete",
      });

      if (response.ok) {
        //const jsonResponse = await response.json();

        console.log("SUPPRESSION!");

        //props.history.push("/");

        //toast.error("Supression de la moto ");

        return response;
      }

      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  //Méthode sur événement onBlur, si une image est changé elle s'affichera lorsque l'on sort du champ

  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nametripID">
                <Form.Label>Titre du road trip</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.nom} />
              </Form.Group>

              <Form.Group controlId="pictureID">
                <Form.Label>URL d'une photo du road trip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer une URL valide"
                  defaultValue={donneesRecues.image}
                />
                {donneesRecues.photo !== "" && (
                  <Image src={donneesRecues.image} rounded width="125" />
                )}
              </Form.Group>

              <Form.Group controlId="nameactivityID">
                <Form.Label>Attrait principal</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={donneesRecues.attraits[0].nomAttrait}
                />
              </Form.Group>
              <Form.Group controlId="placeID">
                <Form.Label>endroit</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={donneesRecues.attraits[1].endroit}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
              </Button>
              <p className="btn btn-danger ml-3 mt-3" onClick={removeTrip}>
                Supprimer le road trip
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default FormEditTrip;
