import React from "react";
import { Row, Col, Form, Button, Container } from "react-bootstrap";
//importer la constante de l'API
import { API } from "../constantes";
//import { toast } from "react-toastify";

//Formulaire d'ajout pour une nouveau road trip
function FormAjouterTrip(props) {
  //Hook d'état pour la photo téléchargée voir plus tard, importer {useState}
  //const [photo, setPhoto] = useState("");

  async function addTrip(photo, nomTrip, nomAttrait, endroit) {
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
          image: photo,
          attraits: [
            {
              nomAttrait: nomAttrait,
            },
            {
              endroit: endroit,
            },
          ],
        }),
      });
      if (response.ok) {
        const jsonResponse = await response.json();
        props.history.push("/listetrips"); //Retour à la page d'accueil
        //toast.success("Ajout de la moto, modèle:  " + model);
        console.log("ajout du trip réussi");

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
    const photo = document.getElementById("urlPhoto").value;
    const nomTrip = document.getElementById("nomDuTrip").value;
    const nomAttrait = document.getElementById("nomDeLAttrait").value;
    const endroit = document.getElementById("endroitDeLAttrait").value;

    /*Fonction pour entrer les infos dans la bd */
    addTrip(photo, nomTrip, nomAttrait, endroit);
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
          <h1>Formulaire d'enregistrement d'un nouveau road trip</h1>
          <Form>
            <Form.Group controlId="urlPhoto">
              <Form.Label>Entrer l'url de l'image</Form.Label>
              <Form.Control type="text" />

              {/*<Form.Control
                onBlur={() =>
                  setPhoto(document.getElementById("urlPhoto").value)
                }
                type="text"
            />
              {photo !== "" && <Image src={photo} rounded width="125" />}*/}
            </Form.Group>
            <Form.Group controlId="nomDuTrip">
              <Form.Label>Entrer le nom du trip</Form.Label>
              <Form.Control type="text" />
              <Form.Text className="text-muted">
                ajouter une validation
              </Form.Text>
            </Form.Group>
            <Form.Group controlId="nomDeLAttrait">
              <Form.Label>Entrer le nom de l'attrait principal</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Form.Group controlId="endroitDeLAttrait">
              <Form.Label>Endroit</Form.Label>
              <Form.Control type="text" />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={handleAdd}>
              Ajouter un Road trip
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
FormAjouterTrip.defaultProps = { history: "/listetrips" };
export default FormAjouterTrip;
