import React, { useState, useEffect } from "react";
import {
  Form,
  Button,
  Image,
  Container,
  Row,
  Col,
  Accordion,
  Card,
} from "react-bootstrap";
import { API } from "../constantes";
import { regions } from "../constantes";
import { toast } from "react-toastify";
import "../style/formulaires.sass";
/*Fonstion pour l'édition du road trip */
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
      {
        nom_attrait: "",
        ville: "",
        image_attrait: "",
        description_attrait: "",
      },
    ],
  });

  const [regionState, setRegionState] = useState("");
  const [editInfosAttraits, setEditInfosAttraits] = useState([]);
  const tripID = props.location.search.substring(
    4,
    props.location.search.length
  );
  const [photo1, setPhoto1] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photoA1, setPhotoA1] = useState("");
  const [photoA2, setPhotoA2] = useState("");
  const [photoA3, setPhotoA3] = useState("");
  const [photoA4, setPhotoA4] = useState("");

  //useEffect
  useEffect(() => {
    getTripInfos();
  }, []);
  //On récupère les infos de la bd
  async function getTripInfos() {
    //On récupère le dernier caractère de l'url substring(4,fin du string)
    //*********Le state motoID, n'est pas déclaré au début de la fonction ou classe************ */
    try {
      const response = await fetch(API + tripID);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      setRegionState(reponseDeApi.region);
      //setDonneesAttraits(reponseDeApi.attraits);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  /*Ajout des attraits dans un tableau */
  function edithandleSave() {
    toast.dark("Sauvegarde des données");
    //Ajout de l'attrait 1 dans un tableau
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
    //Ajout de l'attrait 2 dans un tableau
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
    //Ajout de l'attrait 3 dans un tableau
    const nomEditActivity3 = document.getElementById("nomAttrait3ID").value;
    const imageEditActivity3 = document.getElementById("imageAttrait3ID").value;
    const villeEditActivity3 = document.getElementById("villeAttrait3ID").value;
    const descriptionEditActivity3 = document.getElementById(
      "descriptionAttrait3ID"
    ).value;

    editInfosAttraits.push({
      nom_attrait: nomEditActivity3,
      image_attrait: imageEditActivity3,
      ville: villeEditActivity3,
      description_attrait: descriptionEditActivity3,
    });
    //Ajout de l'attrait 4 dans un tableau
    const nomEditActivity4 = document.getElementById("nomAttrait4ID").value;
    const imageEditActivity4 = document.getElementById("imageAttrait4ID").value;
    const villeEditActivity4 = document.getElementById("villeAttrait4ID").value;
    const descriptionEditActivity4 = document.getElementById(
      "descriptionAttrait4ID"
    ).value;

    editInfosAttraits.push({
      nom_attrait: nomEditActivity4,
      image_attrait: imageEditActivity4,
      ville: villeEditActivity4,
      description_attrait: descriptionEditActivity4,
    });
  }

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
  /* Va chercher les infos des inputs du formulaire */
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
  //Fonction pour supprimer le road trip  de la bd, method delete
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
  //Fonction pour le changement de région
  function handleChange(e) {
    console.log("Region Selected!!");
    setRegionState(e.target.value);
  }

  return (
    <Container fluid id="formEdit">
      <Container>
        <Row>
          <Col xs={12}>
            <h1 className="my-5 text-center font-large">
              Modifier le road trip
            </h1>
          </Col>
        </Row>
        <Row className="fondGris">
          <Col xs={12}>
            {/*Édition du road trip*/}
            <Form className="py-5">
              <Form.Group controlId="nametripID">
                <Form.Label>Titre du road trip</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.nom} />
              </Form.Group>
              <Form.Group controlId="pictureID1">
                <Form.Label>Image 1</Form.Label>
                <Form.Control
                  onBlur={() =>
                    setPhoto1(document.getElementById("pictureID1").value)
                  }
                  type="text"
                  placeholder="Entrer une URL valide"
                  defaultValue={donneesRecues.image1}
                  className="mb-3 d-block"
                />
                {photo1 !== "" ? (
                  <Image src={photo1} rounded width="125" />
                ) : (
                  <Image src={donneesRecues.image1} rounded width="125" />
                )}
              </Form.Group>
              <Form.Group controlId="pictureID2">
                <Form.Label>Image 2</Form.Label>
                <Form.Control
                  onBlur={() =>
                    setPhoto2(document.getElementById("pictureID2").value)
                  }
                  type="text"
                  placeholder="Entrer une URL valide"
                  defaultValue={donneesRecues.image2}
                  className="mb-3 d-block"
                />
                {photo2 !== "" ? (
                  <Image src={photo2} rounded width="125" />
                ) : (
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
                <select id="selectRegion" onChange={handleChange}>
                  {/*pour garder la valeur dans le formulaire */}
                  <option selected>{donneesRecues.region}</option>
                  {regions.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Form>
            {/*Accordion pour les 4 attraits*/}
            <Accordion>
              <Card className="w-100">
                <Card.Header className="text-center">
                  <Accordion.Toggle as={Button} variant="link" eventKey="0">
                    <h2>Attrait #1</h2>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                  <Card.Body>
                    <Form>
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
                          onBlur={() =>
                            setPhotoA1(
                              document.getElementById("imageAttrait1ID").value
                            )
                          }
                          id="imageAttrait1ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[0].image_attrait}
                          className="mb-3 d-block"
                        />
                        {photoA1 !== "" ? (
                          <Image src={photoA1} rounded width="125" />
                        ) : (
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
                          defaultValue={
                            donneesRecues.attraits[0].description_attrait
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              {/*attrait 2 */}
              <Card className="w-100">
                <Card.Header className="text-center">
                  <Accordion.Toggle as={Button} variant="link" eventKey="1">
                    <h2>Attrait #2</h2>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                  <Card.Body>
                    <Form>
                      <Form.Group>
                        <Form.Label>Nom de l'attrait 2</Form.Label>
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
                          onBlur={() =>
                            setPhotoA2(
                              document.getElementById("imageAttrait2ID").value
                            )
                          }
                          id="imageAttrait2ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[1].image_attrait}
                          className="mb-3 d-block"
                        />
                        {photoA2 !== "" ? (
                          <Image src={photoA2} rounded width="125" />
                        ) : (
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
                          defaultValue={
                            donneesRecues.attraits[1].description_attrait
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="w-100">
                <Card.Header className="text-center">
                  <Accordion.Toggle as={Button} variant="link" eventKey="2">
                    <h2>Attrait #3</h2>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                  <Card.Body>
                    <Form>
                      <Form.Group>
                        <Form.Label>Nom de l'attrait 3</Form.Label>
                        <Form.Control
                          id="nomAttrait3ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[2].nom_attrait}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Endroit de l'attrait attrait 3</Form.Label>
                        <Form.Control
                          id="villeAttrait3ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[2].ville}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Image de l'attrait 3</Form.Label>
                        <Form.Control
                          onBlur={() =>
                            setPhotoA3(
                              document.getElementById("imageAttrait3ID").value
                            )
                          }
                          id="imageAttrait3ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[2].image_attrait}
                          className="mb-3 d-block"
                        />
                        {photoA3 !== "" ? (
                          <Image src={photoA3} rounded width="125" />
                        ) : (
                          <Image
                            src={donneesRecues.attraits[2].image_attrait}
                            rounded
                            width="125"
                          />
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description de l'attrait 3</Form.Label>
                        <Form.Control
                          id="descriptionAttrait3ID"
                          as="textarea"
                          rows="8"
                          defaultValue={
                            donneesRecues.attraits[2].description_attrait
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card className="w-100">
                <Card.Header className="text-center">
                  <Accordion.Toggle as={Button} variant="link" eventKey="3">
                    <h2>Attrait #4</h2>
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                  <Card.Body>
                    <Form>
                      <Form.Group>
                        <Form.Label>Nom de l'attrait 4</Form.Label>
                        <Form.Control
                          id="nomAttrait4ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[3].nom_attrait}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Endroit de l'attrait attrait 4</Form.Label>
                        <Form.Control
                          id="villeAttrait4ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[3].ville}
                        />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Image de l'attrait 4</Form.Label>
                        <Form.Control
                          onBlur={() =>
                            setPhotoA4(
                              document.getElementById("imageAttrait4ID").value
                            )
                          }
                          id="imageAttrait4ID"
                          type="text"
                          defaultValue={donneesRecues.attraits[3].image_attrait}
                          className="mb-3 d-block"
                        />
                        {photoA4 !== "" ? (
                          <Image src={photoA4} rounded width="125" />
                        ) : (
                          <Image
                            src={donneesRecues.attraits[3].image_attrait}
                            rounded
                            width="125"
                          />
                        )}
                      </Form.Group>
                      <Form.Group>
                        <Form.Label>Description de l'attrait 4</Form.Label>
                        <Form.Control
                          id="descriptionAttrait4ID"
                          as="textarea"
                          rows="8"
                          defaultValue={
                            donneesRecues.attraits[3].description_attrait
                          }
                        />
                      </Form.Group>
                    </Form>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>

            <Button
              id="enregistrer"
              className="my-5"
              variant="primary"
              type="submit"
              onClick={handleEdit}
            >
              Enregistrer
            </Button>
            <Button
              className="btn btn-danger ml-3 my-5 float-right"
              onClick={removeTrip}
            >
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
