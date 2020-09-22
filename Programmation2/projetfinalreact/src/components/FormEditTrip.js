import React, { useState, useEffect } from "react";
import { Form, Button, Image, Container, Row, Col } from "react-bootstrap";
import { API } from "../constantes";
import { regions } from "../constantes";
import { toast } from "react-toastify";

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
    ],
  });

  const [regionState, setRegionState] = useState("Bas Saint-Laurent"); //Ajouter la première valeur si le onChange n'est pas pris en charge
  const [editInfosAttraits, setEditInfosAttraits] = useState([]);
  const [donneesAttraits, setdonneesAttraits] = useState([]);
  const [position, setPosition] = useState(0);
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

      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  function edithandleSave(event) {
    toast.dark("Sauvegarde des données");
    event.preventDefault();

    const nomEditActivity = document.getElementById("editAttraitNom").value;
    const endroitEditActivity = document.getElementById("editAttraitVille")
      .value;
    const imageEditActivity = document.getElementById("editAttraitImage").value;
    const descriptionEditActivity = document.getElementById(
      "editAttraitDescription"
    ).value;

    editInfosAttraits.push({
      nom_attrait: nomEditActivity,
      ville: endroitEditActivity,
      image_attrait: imageEditActivity,
      description_attrait: descriptionEditActivity,
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
        toast.dark("Modification du road trip:  " + donneesRecues.nom);

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
    <>
      <Container>
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
                  rows="3"
                  defaultValue={donneesRecues.description}
                />
              </Form.Group>
              <Form.Group>
                <select
                  defaultvalue={donneesRecues.region}
                  onChange={handleChange}
                >
                  {regions.map((key) => (
                    <option key={key} value={key}>
                      {key}
                    </option>
                  ))}
                </select>
              </Form.Group>
              {/*Bouton pour modifier les attraits */}
              Édition des attraits
              {Object.keys(donneesRecues.attraits).map((key) => (
                <Form.Group>
                  <Form.Control
                    type="text"
                    defaultValue={donneesRecues.attraits[key].nom_attrait}
                    id="editAttraitNom"
                  />

                  <Form.Control
                    type="text"
                    placeholder="Entrer une URL valide"
                    defaultValue={donneesRecues.attraits[key].image_attrait}
                    id="editAttraitImage"
                  />
                  {donneesRecues.attraits[key].image_attrait !== "" && (
                    <Image
                      src={donneesRecues.attraits[key].image_attrait}
                      rounded
                      width="125"
                    />
                  )}

                  <Form.Control
                    type="text"
                    defaultValue={donneesRecues.attraits[key].ville}
                    id="editAttraitVille"
                  />

                  <Form.Control
                    type="text"
                    defaultValue={
                      donneesRecues.attraits[key].description_attrait
                    }
                    id="editAttraitDescription"
                  />
                  <Button type="submit" onClick={edithandleSave}>
                    Enregistrer la modification attrait touristique
                  </Button>
                </Form.Group>
              ))}
              <Button variant="primary" type="submit" onClick={handleEdit}>
                Enregistrer
              </Button>
              <Button className="btn btn-danger ml-3 mt-3" onClick={removeTrip}>
                Supprimer le road trip
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
}
FormEditTrip.defaultProps = { history: "/listetrips" };
export default FormEditTrip;
