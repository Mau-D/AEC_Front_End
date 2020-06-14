import React from "react";
import Row from "react-bootstrap/Row";

import { Album } from "./Album";
import { Recherche } from "./Recherche";
import { Chansons } from "./Chansons";
import { RetourCatalogue } from "./RetourCatalogue";

//Variables des photos, titres et artistes
const albums = [
  {
    image: require("../img/nirvana_nevermind.jpg"),
    alt: "Image de l'album",
    titre: "Nevermind",
    artiste: "Nirvana",
    nbrChansons: "12",
    duree: "30",
  },
  {
    image: require("../img/arcadeFire_thesuburbs.jpg"),
    alt: "Image de l'album",
    titre: "The Suburbs",
    artiste: "Arcade Fire",
    nbrChansons: "16",
    duree: "31",
  },
  {
    image: require("../img/theBlackKeys_brothers.jpg"),
    alt: "Image de l'album",
    titre: "Brothers",
    artiste: "The Black Keys",
    nbrChansons: "15",
    duree: "32",
  },
  {
    image: require("../img/jeanLeloup_ledome.jpg"),
    alt: "Image de l'album",
    titre: "Le Dôme",
    artiste: "Jean Leloup",
    nbrChansons: "14",
    duree: "33",
  },
  {
    image: require("../img/nofx_punkindrublic.jpg"),
    alt: "Image de l'album",
    titre: "Punk in Drublic",
    artiste: "NOFX",
    nbrChansons: "17",
    duree: "34",
  },
  {
    image: require("../img/radiohead_okcomputer.jpg"),
    alt: "Image de l'album",
    titre: "OK Computer",
    artiste: "Radiohead",
    nbrChansons: "12",
    duree: "35",
  },
];

//Composant pour tous les 6 albums
export class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modeRecherche: false,
      strSearch: "",
      modeChanson: false,
      objectChanson: {},
    };

    this.changeRecherche = this.changeRecherche.bind(this);
    this.changeString = this.changeString.bind(this);
    this.changeChanson = this.changeChanson.bind(this);
    this.informationsAlbums = this.informationsAlbums.bind(this);
    this.informationsChansons = this.informationsChansons.bind(this);
    this.informationsRecherche = this.informationsRecherche.bind(this);
    this.recuperationInfos = this.recuperationInfos.bind(this);
    this.sortirRecherche = this.sortirRecherche.bind(this);
  }
  //Méthode pour changer l'état du mode recherche
  changeRecherche(etat) {
    this.setState({ modeRecherche: etat });
  }
  //Méthode pour changer l'état du string de recherche
  changeString(str) {
    this.setState({ strSearch: str });
  }
  //Méthode pour changer l'état du mode chanson
  changeChanson(etat) {
    this.setState({ modeChanson: etat });
    this.setState({ modeRecherche: false });
  }
  sortirRecherche() {
    this.setState({ modeRecherche: false });
  }
  //Méthode pour afficher les résultats de la recherche
  informationsRecherche() {
    const str = this.state.strSearch;
    return (
      <>
        <RetourCatalogue onClick={this.sortirRecherche} />

        <Row className="bgNoir">
          {albums.map((element, i) =>
            element.titre.toLowerCase().includes(str) ||
            element.artiste.toLowerCase().includes(str) ? (
              <Album
                keys={"Album" + i}
                image={element.image}
                alt={element.alt}
                titre={element.titre}
                artiste={element.artiste}
                nbrChansons={element.nbrChansons}
                duree={element.duree}
                onClick={this.changeChanson}
                infos={this.recuperationInfos}
              />
            ) : null
          )}
        </Row>
      </>
    );
  }
  //Méthode pour afficher tous les albums
  informationsAlbums() {
    return (
      <>
        <Row className="bgNoir pl-5 py-5 text-light">
          <h1>Albums</h1>
        </Row>
        <Row className="bgNoir">
          {albums.map((element, i) => (
            <Album
              keys={"Album" + i}
              image={element.image}
              alt={element.alt}
              titre={element.titre}
              artiste={element.artiste}
              nbrChansons={element.nbrChansons}
              duree={element.duree}
              onClick={this.changeChanson}
              infos={this.recuperationInfos}
            />
          ))}
        </Row>
      </>
    );
  }
  //Méthode por l'affichage des chansons
  informationsChansons() {
    return (
      <>
        <Chansons
          album={this.state.objectChanson.album}
          title={this.state.objectChanson.title}
          artist={this.state.objectChanson.artist}
          keys={this.state.objectChanson.keys}
          nbrSongs={this.state.objectChanson.nbrSongs}
          during={this.state.objectChanson.during}
        />
      </>
    );
  }
  recuperationInfos(objet) {
    this.setState({ objectChanson: objet });
  }
  //Retourne les informations(props de Album)et mode recherche
  render() {
    console.log(this.state.modeChanson);
    console.log(this.state.modeRecherche);
    //Si mode recherche

    if (this.state.modeRecherche) {
      return this.informationsRecherche();
    } else if (this.state.modeChanson) {
      return this.informationsChansons();
    } else {
      return (
        <>
          <Recherche
            onClick={this.changeRecherche}
            recherche={this.changeString}
          />
          {this.informationsAlbums()}
        </>
      );
    }
  }
}
