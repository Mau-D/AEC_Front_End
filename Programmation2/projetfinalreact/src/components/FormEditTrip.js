import React, { useState, useEffect } from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { API } from "../constantes";
import { regions } from "../constantes";
import { toast } from "react-toastify";
import "../style/formulaires.sass"; /*Modifier ce fichier pour le style en sass*/
function FormEditTrip(props) {
  const [donneesRecues, setDonneesRecues] = useState({
    nom: "",
    image1: "",
    image2: "",
    description: "",
    region: "",
    attraits: [
      {
        nom_attrait: "",
        ville: "",
        image_attrait: "",
        description_attrait: "",
      },
      {
        nom_attrait: "",
        ville: "",
        image_attrait: "",
        description_attrait: "",
      },
      {
        nom_attrait: "",
        ville: "",
        image_attrait: "",
        description_attrait: "",
      },
    ],
  });

  //Ajouter la première valeur si le onChange n'est pas pris en charge
  const [regionState, setRegionState] = useState("");
  const [editInfosAttraits, setEditInfosAttraits] = useState([]);
  const [donneesAttraits, setDonneesAttraits] = useState({});
  const tripID = props.location.search.substring(
    4,
    props.location.search.length
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
      setRegionState(reponseDeApi.region);
      setDonneesAttraits(reponseDeApi.attraits);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function edithandleSave() {
    toast.dark("Sauvegarde des données");

    const nomEditActivity1 = document.getElementById("nomAttrait1ID").value;
    const imageEditActivity1 = document.getElementById("imageAttrait1ID").value;
    const villeEditActivity1 = document.getElementById("villeAttrait1ID").value;
    const descriptionEditActivity1 = document.getElementById(
      "descriptionAttrait1ID"
    ).value;

    editInfosAttraits.push({
      nom_attrait: nomEditActivity1,
      image_attrait: imageEditActivity1,
      ville: villeEditActivity1,
      description_attrait: descriptionEditActivity1,
    });
    const nomEditActivity2 = document.getElementById("nomAttrait2ID").value;
    const imageEditActivity2 = document.getElementById("imageAttrait2ID").value;
    const villeEditActivity2 = document.getElementById("villeAttrait2ID").value;
    const descriptionEditActivity2 = document.getElementById(
      "descriptionAttrait2ID"
    ).value;

    editInfosAttraits.push({
      nom_attrait: nomEditActivity2,
      image_attrait: imageEditActivity2,
      ville: villeEditActivity2,
      description_attrait: descriptionEditActivity2,
    });
  }

  //editTrip(picture, nametrip, nameactivity, place);
  //Méthode pour modifier la bd avec le formulaire, semblable à l'ajout ajouter l'id à l'URL et changer la methode pour PUT
  async function editTrip(picture1, picture2, nametrip, descriptiontrip) {
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
          image1: picture1,
          image2: picture2,
          description: descriptiontrip,
          region: regionState,
          attraits: editInfosAttraits,
        }),
      });
      if (response.ok) {
        //const jsonResponse = await response.json();
        props.history.push(
          "/trip/" + donneesRecues.nom + "?id=" + donneesRecues._id
        ); //Retour à la page d'accueil

        return response;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/
    edithandleSave();
    /*variables des infos entrées dans le formulaire*/
    const picture1 = document.getElementById("pictureID1").value;
    const picture2 = document.getElementById("pictureID2").value;
    const nametrip = document.getElementById("nametripID").value;
    const descriptiontrip = document.getElementById("descriptionTripID").value;

    /*Fonction pour entrer les infos dans la bd */
    editTrip(picture1, picture2, nametrip, descriptiontrip);
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

        props.history.push("/listetrips");

        toast.error("Supression du road trip:  " + donneesRecues.nom);

        return response;
      }

      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  //Méthode sur événement onBlur, si une image est changé elle s'affichera lorsque l'on sort du champ
  function handleChange(e) {
    console.log("Region Selected!!");
    setRegionState(e.target.value);
  }

  return (
    <Container fluid id="formEdit">
      <Container>
        <Row>
          <Col>
            <h1 className="my-5 text-center">Modification du road trip</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="nametripID">
                <Form.Label>Titre du road trip</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.nom} />
              </Form.Group>
              <Form.Group controlId="pictureID1">
                <Form.Label>Image 1</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer une URL valide"
                  defaultValue={donneesRecues.image1}
                />
                {donneesRecues.photo !== "" && (
                  <Image src={donneesRecues.image1} rounded width="125" />
                )}
              </Form.Group>
              <Form.Group controlId="pictureID2">
                <Form.Label>Image 2</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer une URL valide"
                  defaultValue={donneesRecues.image2}
                />
                {donneesRecues.photo !== "" && (
                  <Image src={donneesRecues.image2} rounded width="125" />
                )}
              </Form.Group>
              <Form.Group controlId="descriptionTripID">
                <Form.Label>Description du road trip</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="8"
                  defaultValue={donneesRecues.description}
                />
              </Form.Group>
              <Form.Group>
                <select
                  id="selectRegion"
                  onChange={handleChange}
                  defaultValue={donneesRecues.region}
                >
                  <option selected>{donneesRecues.region}</option>
                  {regions.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Form>
            <Form>
              <h2>Attrait #1</h2>
              <Form.Group>
                <Form.Label>Nom de l'attrait 1</Form.Label>
                <Form.Control
                  id="nomAttrait1ID"
                  type="text"
                  defaultValue={donneesRecues.attraits[0].nom_attrait}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Endroit de l'attrait attrait 1</Form.Label>
                <Form.Control
                  id="villeAttrait1ID"
                  type="text"
                  defaultValue={donneesRecues.attraits[0].ville}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image de l'attrait 1</Form.Label>
                <Form.Control
                  id="imageAttrait1ID"
                  type="text"
                  defaultValue={donneesRecues.attraits[0].image_attrait}
                />
                {donneesRecues.attraits[0].image_attrait !== "" && (
                  <Image
                    src={donneesRecues.attraits[0].image_attrait}
                    rounded
                    width="125"
                  />
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Description de l'attrait 1</Form.Label>
                <Form.Control
                  id="descriptionAttrait1ID"
                  as="textarea"
                  rows="8"
                  defaultValue={donneesRecues.attraits[0].description_attrait}
                />
              </Form.Group>
            </Form>

            <Form>
              <h2>Attrait #2</h2>
              <Form.Group>
                <Form.Label>Nom attrait 2</Form.Label>
                <Form.Control
                  id="nomAttrait2ID"
                  type="text"
                  defaultValue={donneesRecues.attraits[1].nom_attrait}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Endroit de l'attrait attrait 2</Form.Label>
                <Form.Control
                  id="villeAttrait2ID"
                  type="text"
                  defaultValue={donneesRecues.attraits[1].ville}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Image de l'attrait 2</Form.Label>
                <Form.Control
                  id="imageAttrait2ID"
                  type="text"
                  defaultValue={donneesRecues.attraits[1].image_attrait}
                />
                {donneesRecues.attraits[1].image_attrait !== "" && (
                  <Image
                    src={donneesRecues.attraits[1].image_attrait}
                    rounded
                    width="125"
                  />
                )}
              </Form.Group>
              <Form.Group>
                <Form.Label>Description de l'attrait 2</Form.Label>
                <Form.Control
                  id="descriptionAttrait2ID"
                  as="textarea"
                  rows="8"
                  defaultValue={donneesRecues.attraits[1].description_attrait}
                />
              </Form.Group>
            </Form>

            <Button variant="primary" type="submit" onClick={handleEdit}>
              Enregistrer
            </Button>
            <Button className="btn btn-danger ml-3 mt-3" onClick={removeTrip}>
              Supprimer le road trip
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
FormEditTrip.defaultProps = { history: "/listetrips" };
export default FormEditTrip;
