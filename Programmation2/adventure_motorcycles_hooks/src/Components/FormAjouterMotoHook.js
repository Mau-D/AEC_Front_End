import React, { useState } from "react";
import { Row, Col, Form, Button, Image, Container } from "react-bootstrap";
import { toast } from "react-toastify";

//Formulaire d'ajout pour une nouvelle moto
function FormAjouterMotoHook(props) {
  //Hook d'état pour la photo téléchargée
  const [photo, setPhoto] = useState("");

  async function addMoto(picture, model, manufacturer, comments, price) {
    try {
      const newID = await getID(); /*Fonction pour obtenir le dernier id de la bd */
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/",
        {
          /*Pour un ajout utiliser la méthode POST */
          method: "POST",
          /*Pour un ajout ajouter un headers */
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: newID,
            modele: model,
            fabricant: manufacturer,
            photo: picture,
            specifications: [
              {
                description: comments,
              },
              {
                prix: price,
              },
            ],
          }),
        }
      );
      if (response.ok) {
        const jsonResponse = await response.json();
        props.history.push("/"); //Retour à la page d'accueil
        toast.success("Ajout de la moto, modèle:  " + model);

        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  //Retourne le prochain ID pour savoir où ajouter la nouvel objet
  async function getID() {
    try {
      let nextID = 0;
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/"
      );
      const reponseDeApi = await response.json();
      for (let i = 0; i < reponseDeApi.length; i++) {
        if (reponseDeApi[i].id > nextID) {
          nextID = reponseDeApi[i].id;
        }
      }
      if (!response.ok) {
        throw Error(response.statusText);
      }
      return nextID + 1;
    } catch (error) {
      console.log(error);
    }
  }

  function handleAdd(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/
    /*variables des infos entrées dans le formulaire*/
    const picture = document.getElementById("urlPhoto").value;
    const model = document.getElementById("nomModele").value;
    const manufacturer = document.getElementById("nomFabricant").value;
    const comments = document.getElementById("texteDescription").value;
    const price = document.getElementById("valeurPrix").value;

    /*Fonction pour entrer les infos dans la bd */
    addMoto(picture, model, manufacturer, comments, price);
  }

  //Affiche la photo entrer en input, lorsque la souris sort du champ, grâce au changement d'état
  //handlePhoto() {
  // const image = document.getElementById("urlPhoto").value;
  //  this.setState({ photo: image });
  // }
  //Remplacer dans l'événement dans le return avec le hook d'état

  return (
    <Container>
      <Row>
        <Col>
          <h1>Formulaire d'enregistrement d'une nouvelle moto</h1>
          <Form>
            <Form.Group controlId="urlPhoto">
              <Form.Label>Entrer l'url de l'image</Form.Label>
              <Form.Control
                onBlur={() =>
                  setPhoto(document.getElementById("urlPhoto").value)
                }
                type="text"
              />
              {photo !== "" && <Image src={photo} rounded width="125" />}
            </Form.Group>
            <Form.Group controlId="nomModele">
              <Form.Label>Entrer le modèle de la moto</Form.Label>
              <Form.Control
                type="text"
                placeholder="exemple: 790 ADVENTURE R"
              />
              <Form.Text className="text-muted">
                ajouter une validation
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="nomFabricant">
              <Form.Label>Entrer le nom du fabricant</Form.Label>
              <Form.Control type="text" placeholder="exemple: KTM" />
            </Form.Group>
            <Form.Text className="text-muted">
              Faire un menu déroulant
            </Form.Text>
            <Form.Group controlId="texteDescription">
              <Form.Label>Description de la moto</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="valeurPrix">
              <Form.Label>Entrer le prix coûtant</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={handleAdd}>
              Ajouter une moto
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
FormAjouterMotoHook.defaultProps = { history: "/" };
export default FormAjouterMotoHook;
