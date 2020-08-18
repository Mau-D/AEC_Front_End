import React from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

export class FormEditMoto extends React.Component {
  constructor(props) {
    super(props);
    //Afin d'éviter une erreur undefined lorsqu'on lit le tableau specifications, on l'initialise à un tableau vide pour débuter.
    this.state = {
      donneesRecues: {
        modele: "",
        fabricant: "",
        photo: "",
        specifications: ["", ""],
      },
      setErrors: {},
    };
    //setErrors, pour la validation du formulaire
    this.handleEdit = this.handleEdit.bind(this);
    this.editMoto = this.editMoto.bind(this);
    this.handlePhoto = this.handlePhoto.bind(this);
    this.removeMoto = this.removeMoto.bind(this);
  }
  //On récupère le Pokemon pour ensuite remplir le formulaire.
  async componentDidMount() {
    //On récupère le dernier caractère de l'url
    try {
      await this.setState({
        motoID: this.props.location.search.substring(
          4,
          this.props.location.search.length
        ),
      });
      await console.log(this.state.motoID);
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/" + this.state.motoID
      );
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      console.log(this.state.donneesRecues);
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //Méthode pour modifier la bd avec le formulaire, semblable à l'ajout ajouter l'id à l'URL et changer la methode pour PUT
  async editMoto(picture, model, manufacturer, comments, price) {
    try {
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/" + this.state.motoID,
        {
          /*Pour un ajout utiliser la méthode POST */
          method: "PUT",
          /*Pour un ajout ajouter un headers */
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            id: this.state.motoID,
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
        this.props.history.push("/"); //Retour à la page d'accueil
        toast.warning("Modification de la moto, modèle:  " + model);

        return jsonResponse;
      }
      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }

  handleEdit(event) {
    event.preventDefault(); /*Empêche de rafraîchir la page, car le bouton est de type submit*/
    /*variables des infos entrées dans le formulaire*/
    const picture = document.getElementById("photoMoto").value;
    const model = document.getElementById("modeleMoto").value;
    const manufacturer = document.getElementById("fabricantMoto").value;
    const comments = document.getElementById("descriptionMoto").value;
    const price = document.getElementById("prixMoto").value;

    /*Fonction pour entrer les infos dans la bd */
    this.editMoto(picture, model, manufacturer, comments, price);
  }
  //Méthode pour supprimer la moto de la bd
  async removeMoto() {
    try {
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles/" + this.state.motoID,
        {
          method: "delete",
        }
      );

      if (response.ok) {
        const jsonResponse = await response.json();

        console.log("SUPPRESSION!");

        this.props.history.push("/");

        toast.error("Supression de la moto ");

        return jsonResponse;
      }

      throw new Error("Request failed!");
    } catch (error) {
      console.log(error);
    }
  }
  //Méthode sur événement onBlur, si une image est changé elle s'affichera lorsque l'on sort du champ
  //Pour le setState, voir le code pour changer une seule propriété de l'objet
  handlePhoto(event) {
    const photos = document.getElementById("photoMoto").value;
    this.setState((state) => ({
      donneesRecues: Object.assign({}, state.donneesRecues, {
        photo: photos,
      }),
    }));
  }
  render() {
    console.log(this.state.donneesRecues.photo);
    return (
      <>
        <Container>
          <Row>
            <Col>
              <Form>
                <Form.Group controlId="modeleMoto">
                  <Form.Label>Modèle de la moto</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={this.state.donneesRecues.modele}
                  />
                </Form.Group>
                <Form.Group controlId="fabricantMoto">
                  <Form.Label>Fabricant de la moto</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={this.state.donneesRecues.fabricant}
                  />
                </Form.Group>
                <Form.Group controlId="photoMoto">
                  <Form.Label>URL d'une photo de la moto</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Entrer une URL valide"
                    onBlur={this.handlePhoto}
                    defaultValue={this.state.donneesRecues.photo}
                  />
                  {this.state.donneesRecues.photo !== "" && (
                    <Image
                      src={this.state.donneesRecues.photo}
                      rounded
                      width="125"
                    />
                  )}
                </Form.Group>

                <Form.Group controlId="descriptionMoto">
                  <Form.Label>Courte description de la moto</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={
                      this.state.donneesRecues.specifications[0].description
                    }
                  />
                </Form.Group>
                <Form.Group controlId="prixMoto">
                  <Form.Label>Prix de la moto</Form.Label>
                  <Form.Control
                    type="text"
                    defaultValue={
                      this.state.donneesRecues.specifications[1].prix
                    }
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  onClick={this.handleEdit}
                >
                  Enregistrer
                </Button>
                <p
                  className="btn btn-danger ml-3 mt-3"
                  onClick={this.removeMoto}
                >
                  Supprimer la Moto
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
