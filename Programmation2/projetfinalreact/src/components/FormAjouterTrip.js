import React, { useState } from "react";
import { Row, Col, Form, Button, Container, Modal } from "react-bootstrap";
//importer la constante de l'API
import { API } from "../constantes";
import { toast } from "react-toastify";

//Formulaire d'ajout pour une nouveau road trip
function FormAjouterTrip(props) {
  const [show, setShow] = useState(false);
  const [infosAttraits, setInfosAttraits] = useState([]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  function handleSave() {
    const nomActivity = document.getElementById("nomAttraitID").value;

    /*const endroitActivity = document.getElementById("endroitAttraitID").value;
    const imageActivity = document.getElementById("imageAttraitID").value;
    const descriptionActivity = document.getElementById("descriptionAttraitID")
  .value;*/

    infosAttraits.push({
      nom_attrait: nomActivity,
      /*ville: endroitActivity,
      image_attrait: imageActivity,
      description_attrait: descriptionActivity,*/
    });

    handleClose();
    console.log(infosAttraits);
  }
  //const [photo, setPhoto] = useState("");

  async function addTrip(photo1, photo2, nomTrip, descriptionTrip) {
    //InfosAttraits.map((objet) => addAttraits(objet));

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
          attraits: infosAttraits,
        }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        props.history.push("/listetrips"); //Retour à la page d'accueil
        toast("Ajout du nouveau road trip " + nomTrip);
        console.log("ajout du trip réussi");

        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  async function remove() {
    try {
      const response = await fetch(API + "5f5ac2b4d899cd03e8b4e161", {
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
  //Retourne le prochain ID pour savoir où ajouter la nouvel objet

  function handleAdd(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/
    /*variables des infos entrées dans le formulaire*/
    const photo1 = document.getElementById("urlPhoto1").value;
    const photo2 = document.getElementById("urlPhoto2").value;
    const descriptionTrip = document.getElementById("descriptionTripID").value;
    const nomTrip = document.getElementById("nomDuTripID").value;

    /*Fonction pour entrer les infos dans la bd */
    addTrip(photo1, photo2, nomTrip, descriptionTrip);
  }

  //Affiche la photo entrer en input, lorsque la souris sort du champ, grâce au changement d'état
  //handlePhoto() {
  // const image = document.getElementById("urlPhoto").value;
  //  this.setState({ photo: image });
  // }
  //Remplacer dans l'événement dans le return avec le hook d'état

  return (
    <>
      <Container>
        <Row>
          <Col>
            <h1>Formulaire d'enregistrement d'un nouveau road trip</h1>
            <Form>
              <Form.Group controlId="urlPhoto1">
                <Form.Label>Entrer l'url de la première image</Form.Label>
                <Form.Control type="text" />

                {/*<Form.Control
                onBlur={() =>
                  setPhoto(document.getElementById("urlPhoto").value)
                }
                type="text"
            />
              {photo !== "" && <Image src={photo} rounded width="125" />}*/}
              </Form.Group>
              <Form.Group controlId="urlPhoto2">
                <Form.Label>Entrer l'url de la deuxième image</Form.Label>
                <Form.Control type="text" />

                {/*<Form.Control
                onBlur={() =>
                  setPhoto(document.getElementById("urlPhoto").value)
                }
                type="text"
            />
              {photo !== "" && <Image src={photo} rounded width="125" />}*/}
              </Form.Group>

              <Form.Group controlId="nomDuTripID">
                <Form.Label>Entrer le nom du trip</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  ajouter une validation
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="descriptionTripID">
                <Form.Label>Description du road trip</Form.Label>
                <Form.Control as="textarea" rows="3" />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <div>
          <Button type="submit" onClick={handleShow}>
            Enregistrer nouvel attrait touristique
          </Button>
          <Button variant="primary" type="submit" onClick={remove}>
            supprimer
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form.Group controlId="nomAttraitID">
                <Form.Label>Entrer le nom de l'attrait touristique</Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  ajouter une validation
                </Form.Text>
              </Form.Group>
              {/*<Form.Group controlId="endroitAttraitID">
                <Form.Label>
                  Entrer l'endroit de l'attrait touristique
                </Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  ajouter une validation
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="imageAttraitID">
                <Form.Label>
                  Entrer l'url d'une image de l'attrait touristique
                </Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  ajouter une validation
                </Form.Text>
              </Form.Group>
              <Form.Group controlId="descriptionAttraitID">
                <Form.Label>
                  Entrer la description de l'attrait touristique
                </Form.Label>
                <Form.Control type="text" />
                <Form.Text className="text-muted">
                  ajouter une validation
                </Form.Text>
            </Form.Group>*/}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleSave}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <Button variant="primary" type="submit" onClick={handleAdd}>
          Ajouter un Road trip
        </Button>
      </Container>
    </>
  );
}
FormAjouterTrip.defaultProps = { history: "/listetrips" };
export default FormAjouterTrip;
