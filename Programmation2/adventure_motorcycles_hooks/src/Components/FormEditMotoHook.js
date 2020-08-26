import React, { useState, useEffect } from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

function FormEditMotoHook(props) {
  const [donneesRecues, setDonneesRecues] = useState({
    modele: "",
    fabricant: "",
    photo: "",
    specifications: ["", ""],
  });

  const [motoID, setMotoID] = useState(
    props.location.search.substring(4, props.location.search.length)
  );

  //useEffect
  useEffect(() => {
    getMoto();
  }, []);
  //On récupère la moto pour ensuite remplir le formulaire.Pour le hook renommer getMoto
  async function getMoto() {
    //On récupère le dernier caractère de l'url substring(4,fin du string)
    //*********Le state motoID, n'est pas déclaré au début de la fonction ou classe************ */
    try {
      await console.log(motoID);
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/" + motoID
      );
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      console.log(this.state.donneesRecues);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //Méthode pour modifier la bd avec le formulaire, semblable à l'ajout ajouter l'id à l'URL et changer la methode pour PUT
  async function editMoto(picture, model, manufacturer, comments, price) {
    try {
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/" + motoID,
        {
          /*Pour un ajout utiliser la méthode POST */
          method: "PUT",
          /*Pour un ajout ajouter un headers */
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: motoID,
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
        toast.warning("Modification de la moto, modèle:  " + model);

        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  function handleEdit(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/
    /*variables des infos entrées dans le formulaire*/
    const picture = document.getElementById("photoMoto").value;
    const model = document.getElementById("modeleMoto").value;
    const manufacturer = document.getElementById("fabricantMoto").value;
    const comments = document.getElementById("descriptionMoto").value;
    const price = document.getElementById("prixMoto").value;

    /*Fonction pour entrer les infos dans la bd */
    editMoto(picture, model, manufacturer, comments, price);
  }
  //Méthode pour supprimer la moto de la bd, method delete
  async function removeMoto() {
    try {
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/" + motoID,
        {
          method: "delete",
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json();

        console.log("SUPPRESSION!");

        props.history.push("/");

        toast.error("Supression de la moto ");

        return jsonResponse;
      }

      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  //Méthode sur événement onBlur, si une image est changé elle s'affichera lorsque l'on sort du champ

  console.log(donneesRecues.photo);
  return (
    <>
      <Container>
        <Row>
          <Col>
            <Form>
              <Form.Group controlId="modeleMoto">
                <Form.Label>Modèle de la moto</Form.Label>
                <Form.Control type="text" defaultValue={donneesRecues.modele} />
              </Form.Group>
              <Form.Group controlId="fabricantMoto">
                <Form.Label>Fabricant de la moto</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={donneesRecues.fabricant}
                />
              </Form.Group>
              <Form.Group controlId="photoMoto">
                <Form.Label>URL d'une photo de la moto</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Entrer une URL valide"
                  onBlur={() =>
                    setDonneesRecues.photo(
                      document.getElementById("photoMoto").value
                    )
                  }
                  defaultValue={donneesRecues.photo}
                />
                {donneesRecues.photo !== "" && (
                  <Image src={donneesRecues.photo} rounded width="125" />
                )}
              </Form.Group>

              <Form.Group controlId="descriptionMoto">
                <Form.Label>Courte description de la moto</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={donneesRecues.specifications[0].description}
                />
              </Form.Group>
              <Form.Group controlId="prixMoto">
                <Form.Label>Prix de la moto</Form.Label>
                <Form.Control
                  type="text"
                  defaultValue={donneesRecues.specifications[1].prix}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
              </Button>
              <p className="btn btn-danger ml-3 mt-3" onClick={removeMoto}>
                Supprimer la Moto
              </p>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default FormEditMotoHook;
