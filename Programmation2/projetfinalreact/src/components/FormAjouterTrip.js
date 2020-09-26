import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Row,
  Col,
  Form,
  Button,
  Container,
  Modal,
  Image,
} from "react-bootstrap";
//importer la constante de l'API
import { API } from "../constantes";
import { regions } from "../constantes";
import { toast } from "react-toastify";
import "../style/formulaires.sass"; /*Modifier ce fichier pour le style en sass*/

//Formulaire d'ajout pour une nouveau road trip
function FormAjouterTrip(props) {
  const [show, setShow] = useState(false);
  const [infosAttraits, setInfosAttraits] = useState([]);
  const [regionState, setRegionState] = useState("Bas Saint-Laurent"); //Ajouter la première valeur si le onChange n'est pas pris en charge
  const [photo, setPhoto] = useState("");
  const [photo2, setPhoto2] = useState("");
  const [photoAttrait, setPhotoAttrait] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSave() {
    const nomActivity = document.getElementById("nomAttraitID").value;
    const endroitActivity = document.getElementById("endroitAttraitID").value;
    const imageActivity = document.getElementById("imageAttraitID").value;
    const descriptionActivity = document.getElementById("descriptionAttraitID")
      .value;
    infosAttraits.push({
      nom_attrait: nomActivity,
      ville: endroitActivity,
      image_attrait: imageActivity,
      description_attrait: descriptionActivity,
    });

    handleClose();
    console.log(infosAttraits);
  }
  async function addTrip(photo1, photo2, nomTrip, descriptionTrip) {
    try {
      const response = await fetch(API, {
        /*Pour un ajout utiliser la méthode POST */
        method: "POST",
        /*Pour un ajout ajouter un headers */
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nom: nomTrip,
          image1: photo1,
          image2: photo2,
          description: descriptionTrip,
          region: regionState,
          attraits: infosAttraits,
        }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        props.historyAjout.push("/listetrips"); //Retour à la page d'accueil
        toast("Ajout du nouveau road trip " + nomTrip);
        console.log("modification du trip réussi");
        return jsonResponse;
      }

      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  //Retourne le prochain ID pour savoir où ajouter la nouvel objet

  function handleAdd(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/
    /*variables des infos entrées dans le formulaire*/
    const photo1 = document.getElementById("urlPhoto1").value;
    const photo2 = document.getElementById("urlPhoto2").value;
    const descriptionTrip = document.getElementById("descriptionTripID").value;
    const nomTrip = document.getElementById("nomDuTripID").value;
    if (infosAttraits.length < 4) {
      for (var i = infosAttraits.length; i < 4; i++) {
        infosAttraits.push({
          nom_attrait: "",
          ville: "",
          image_attrait: "",
          description_attrait: "",
        });
      }
    }
    /*Fonction pour entrer les infos dans la bd */
    addTrip(photo1, photo2, nomTrip, descriptionTrip);
  }
  function handleChange(e) {
    console.log("Region Selected!!");
    setRegionState(e.target.value);
  }

  return (
    <Container fluid id="formAjout">
      <Container className="pb-5">
        <Row>
          <Col sm={12}>
            <h1 className="my-5 text-center font-large">Nouveau road trip</h1>
          </Col>
        </Row>
        <Row className="fondGris">
          <Col xs={12}>
            <Form>
              <Form.Group controlId="urlPhoto1">
                <Form.Label className="font-small mt-3">
                  Entrer l'url de la première image
                </Form.Label>
                <Form.Control
                  type="text"
                  onBlur={() =>
                    setPhoto(document.getElementById("urlPhoto1").value)
                  }
                  type="text"
                />
                {photo !== "" && <Image src={photo} rounded width="125" />}
              </Form.Group>
              <Form.Group controlId="urlPhoto2">
                <Form.Label className="font-small mt-3">
                  Entrer l'url de la deuxième image
                </Form.Label>
                <Form.Control
                  type="text"
                  onBlur={() =>
                    setPhoto2(document.getElementById("urlPhoto2").value)
                  }
                  type="text"
                />
                {photo2 !== "" && <Image src={photo2} rounded width="125" />}
              </Form.Group>

              <Form.Group controlId="nomDuTripID">
                <Form.Label className="font-small mt-3">
                  Entrer le nom du trip
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group controlId="descriptionTripID">
                <Form.Label className="font-small mt-3">
                  Description du road trip
                </Form.Label>
                <Form.Control as="textarea" rows="8" />
              </Form.Group>
              <Form.Group>
                <Form.Label className="font-small mt-3 mr-2">Région</Form.Label>
                <select onChange={handleChange}>
                  {regions.map((key) => (
                    <option key={"region" + key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </Form.Group>
            </Form>
          </Col>
        </Row>
        {infosAttraits.length < 4 ? (
          <Row className="fondGris text-center">
            <Col xs={12}>
              <Button id="ajoutAttrait" type="submit" onClick={handleShow}>
                Ajouter un attrait touristique
              </Button>
            </Col>
            <Col xs={{ span: 8, offset: 2 }}>
              <p>Ajout de {infosAttraits.length} attraits (maximum: 4)</p>
            </Col>
          </Row>
        ) : null}

        <Row className="fondGris">
          <Col xs={12} md={6} className="pb-5">
            <Button
              id="ajoutTrip"
              variant="primary"
              type="submit"
              onClick={handleAdd}
            >
              Enregistrer le Road trip
            </Button>
          </Col>
          <Col xs={12} md={6} className="text-right">
            <Link to="/listetrips" className="btn btn-primary " id="retourRT">
              Retour à la liste des road trips
            </Link>
          </Col>
        </Row>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Attrait #{infosAttraits.length + 1}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group controlId="nomAttraitID">
            <Form.Label>Entrer le nom de l'attrait touristique</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group controlId="endroitAttraitID">
            <Form.Label>Entrer la ville de l'attrait touristique</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group controlId="imageAttraitID">
            <Form.Label>
              Entrer l'url d'une image de l'attrait touristique
            </Form.Label>
            <Form.Control
              type="text"
              onBlur={() =>
                setPhotoAttrait(document.getElementById("imageAttraitID").value)
              }
              type="text"
            />
            {photoAttrait !== "" && (
              <Image src={photoAttrait} rounded width="125" />
            )}
          </Form.Group>
          <Form.Group controlId="descriptionAttraitID">
            <Form.Label>
              Entrer la description de l'attrait touristique
            </Form.Label>
            <Form.Control as="textarea" row="3" type="text" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Annuler
          </Button>
          <Button id="save" variant="primary" onClick={handleSave}>
            Sauvegarder
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}
FormAjouterTrip.defaultProps = { historyAjout: "/listetrips" };
export default FormAjouterTrip;
