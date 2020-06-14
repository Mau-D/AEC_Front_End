import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Image from "react-bootstrap/Image";
import { ListeChansons } from "./ListeChansons";
import { Paroles } from "./Paroles";
import { RetourCatalogue } from "./RetourCatalogue";
import { Catalogue } from "./Catalogue";
//Variables tableaux des listes des chansons, avec le nom de la clé de l'album
var Album0 = [
  "Smells Like Teen Spirit",
  "In Bloom",
  "Comes As You Are",
  "Breed",
  "Lithium",
  "Polly",
  "Territorial Pissings",
  "Drain You",
  "Lounge Act",
  "Stay Away",
  "On a Plain",
  "Something in the Way",
];
const Album1 = [
  "The Suburbs",
  "Ready to Start",
  "Modern Man",
  "Rococo",
  "Empty Room",
  "City with No Children",
  "Half Light I",
  "Half Light II (No Celebration)",
  "Suburban War	",
  "Month of May	",
  "Wasted Hours",
  "Deep Blue",
  "We Used to Wait	",
  "Sprawl I (Flatland)	",
  "Sprawl II (Mountains Beyond Mountains)	",
  "The Suburbs (continued)	",
];
const Album2 = [
  "Everlasting Light",
  "Next Girl",
  "Tighten Up",
  "Howlin' for You",
  "She's Long Gone",
  "Black Mud",
  "The Only One",
  "Too Afraid to Love You",
  "Ten Cent Pistol",
  "Sinister Kid",
  "The Go Getter",
  "I'm Not the One",
  "Unknown Brother",
  "Never Gonna Give You Up",
  "These Days",
];
const Album3 = [
  "Faire des enfants",
  "Edgar",
  "Sara",
  "La Chambre",
  "Johnny Go",
  "I Lost My Baby",
  "Sang d'encre	",
  "Le Castel impossible",
  "Le monde est à pleurer",
  "Le Dôme",
  "Vampire",
  "Fashion Victim",
  "Pigeon",
  "La Drop sociale",
];
const Album4 = [
  "Linoleum",
  "Leave It Alone",
  "Dig",
  "The Cause",
  "Don't Call Me White",
  "My Heart Is Yearning",
  "Perfect Government",
  "The Brews",
  "The Quass",
  "Dying Degree",
  "Fleas",
  "Lori Meyers",
  "Jeff Wears Birkenstocks",
  "Punk Guy",
  "Happy Guy",
  "Reeko",
  "Scavenger Type",
];
const Album5 = [
  "Airbag",
  "Paranoid Android",
  "Subterranean Homesick Alien",
  "Exit Music",
  "Let Down",
  "KarmaPolice",
  "Fitter Happier",
  "Electioneering",
  "Climbing Up the Walls",
  "No surprises",
  "Lucky",
  "The Tourist",
];
//Variable des paroles de chanson
const parolesChanson = {
  nirvana1: (
    <p>
      Load up on guns, bring your friends
      <br /> It's fun to lose and to pretend
      <br /> She's over bored and self assured <br />
      Oh no, I know a dirty word
      <br /> Hello, hello, hello, how low? [x3] <br />
      Hello, hello, hello!
      <br /> With the lights out, it's less dangerous
      <br /> Here we are now, entertain us <br />I feel stupid and contagious
      <br />
      Here we are now, entertain us <br />A mulatto An albino A mosquito My
      libido
      <br /> Yeah, hey, yay <br />
      I'm worse at what
      <br /> I do best And for this gift
      <br /> I feel blessed <br />
      Our little group has always been
      <br /> And always will until the end
      <br /> Hello, hello, hello, how low? [x3] <br />
      Hello, hello, hello!
      <br /> With the lights out, it's less dangerous
      <br /> Here we are now, entertain us I feel stupid and contagious <br />
      Here we are now, entertain us <br />A mulatto An albino A mosquito My
      libido
      <br /> Yeah, hey, yay <br />
      And I forget just why I taste
      <br /> Oh yeah, I guess it makes me smile
      <br /> I found it hard, it's hard to find <br />
      Oh well, whatever, never mind
      <br /> Hello, hello, hello, how low? [x3] <br />
      Hello, hello, hello!
      <br /> With the lights out, it's less dangerous <br />
      Here we are now, entertain us
      <br /> I feel stupid and contagious
      <br /> Here we are now, entertain us
      <br /> A mulatto An albino A mosquito My libido
    </p>
  ),

  nirvana2: (
    <p>
      Sell the kids for food
      <br />
      Weather changes moods
      <br />
      Spring is here again <br />
      Reproductive glands <br />
      He's the one <br />
      Who likes all our pretty songs <br />
      And he likes to sing along <br />
      And he likes to shoot his gun
      <br />
      But he knows not what it means
      <br />
      Knows not what it means
      <br />
      And I say he's the one
      <br />
      Who likes all our pretty songs
      <br />
      And he likes to sing along
      <br />
      And he likes to shoot his gun
      <br />
      But he knows not what it means
      <br />
      Knows not what it means
      <br />
      And I say yeah
      <br />
      We can have some more
      <br />
      Nature is a whore
      <br />
      Bruises on the fruit
      <br />
      Tender age in bloom
      <br />
      He's the one
      <br />
      Who likes all our pretty songs
      <br />
      And he likes to sing along
      <br />
      And he likes to shoot his gun
      <br />
      But he knows not what it means
      <br />
      Knows not what it means
      <br />
      And I say he's the one
      <br />
      Who likes all our pretty songs
      <br />
      And he likes to sing along
      <br />
      And he likes to shoot his gun
      <br />
      But he knows not what it means
      <br />
      Knows not what it means
      <br />
      And I say yeah
      <br />
      He's the one
      <br />
      Who likes all our pretty songs
      <br />
      And he likes to sing along
      <br />
      And he likes to shoot his gun
      <br />
      But he knows not what it means
      <br />
      Knows not what it means
      <br />
      And I say he's the one
      <br />
      Who likes all our pretty songs
      <br />
      And he likes to sing along
      <br />
      And he likes to shoot his gun
      <br />
      But he knows not what it means
      <br />
      Knows not what it means
      <br />
      Knows not what it means
      <br />
      Knows not what it means
      <br />
      And I say yeah
    </p>
  ),
  arcadeFire1: (
    <p>
      In the suburbs I
      <br />
      I learned to drive
      <br />
      And you told me we'd never survive
      <br />
      Grab your mother's keys we're leavin'
      <br />
      You always seemed so sure
      <br />
      That one day we'd be fighting
      <br />
      In a suburban war
      <br />
      Your part of town against mine
      <br />
      I saw you standing on the opposite shore
      <br />
      But by the time the first bombs fell
      <br />
      We were already bored
      <br />
      We were already, already bored
      <br />
      Sometimes I can't believe it
      <br />
      I'm movin' past the feeling
      <br />
      Sometimes I can't believe it
      <br />
      I'm movin' past the feeling again
      <br />
      Kids wanna be so hard
      <br />
      But in my dreams we're still screamin' and runnin' through the yard
      <br />
      And all of the walls that they built in the seventies finally fall
      <br />
      And all of the houses they built in the seventies finally fall
      <br />
      Meant nothin' at all
      <br />
      Meant nothin' at all
      <br />
      It meant nothin
      <br />
      Sometimes I can't believe it
      <br />
      I'm movin' past the feeling
      <br />
      Sometimes I can't believe it
      <br />
      I'm movin' past the feeling and into the night
      <br />
      So can you understand
      <br />
      Why I want a daughter while I'm still young?
      <br />
      I wanna hold her hand
      <br />
      And show her some beauty
      <br />
      Before all this damage is done
      <br />
      But if it's too much to ask, if it's too much to ask
      <br />
      Then send me a son
      <br />
      Under the overpass
      <br />
      In the parking lot we're still waiting
      <br />
      It's already past
      <br />
      So move your feet from hot pavement and into the grass
      <br />
      Cause it's already past
      <br />
      It's already, already past
      <br />
      Sometimes I can't believe it
      <br />
      I'm movin' past the feeling
      <br />
      Sometimes I can't believe it
      <br />
      I'm movin' past the feeling again
      <br />
      I'm movin' past the feeling
      <br />
      I'm movin' past the feeling
      <br />
      In my dreams we're still screamin'
      <br />
      We're still screamin'
      <br />
      We're still screamin'
    </p>
  ),
  arcadeFire2: (
    <p>
      <br />
      The businessmen are drinking my blood
      <br />
      Like the kids in art school said they would
      <br />
      And I guess I'll just begin again
      <br />
      You say, "can we still be friends?"
      <br />
      If I was scared
      <br />
      I would
      <br />
      And if I was bored
      <br />
      You know I would
      <br />
      And if I was yours
      <br />
      But I'm not
      <br />
      All the kids have always known
      <br />
      That the emperor wears no clothes
      <br />
      But they bow to down to him anyway
      <br />
      'Cause it's better than being alone
      <br />
      If I was scared
      <br />I would
      <br />
      And if I was bored
      <br />
      You know I would
      <br />
      And if I was yours
      <br />
      But I'm not
      <br />
      Now you're knocking at my door
      <br />
      Saying, "please come out with us tonight"
      <br />
      But I would rather be alone
      <br />
      Than pretend that I feel alright
      <br />
      If the businessmen are drinking my blood
      <br />
      Like the kids in art school said they would
      <br />
      Then I guess I'll just begin again
      <br />
      You say, "can we still be friends"
      <br />
      If I was scared
      <br />I would
      <br />
      And if I was pure
      <br />
      You know I would
      <br />
      And if I was yours
      <br />
      But I'm not
      <br />
      Now, I'm ready to start
      <br />
      If I was scared
      <br />
      I would
      <br />
      And if I was pure
      <br />
      You know I would
      <br />
      And if I was yours
      <br />
      But I'm not
      <br />
      Now, I'm ready to start
      <br />
      Now, I'm ready to start
      <br />
      I would rather be wrong
      <br />
      Than live in the shadows of your song
      <br />
      My mind is open wide
      <br />
      And now I'm ready to start
      <br />
      Now I'm ready to start
      <br />
      My mind is open wide
      <br />
      And now I'm ready to start
      <br />
      You're not sure you'll open the door
      <br />
      To step out into the dark
      <br />
      Now I'm ready
    </p>
  ),
  theBlackKeys3: (
    <p>
      I wanted love, I needed love
      <br />
      Most of all, most of all
      <br />
      Someone said true love was dead
      <br />
      And I'm bound to fall, bound to fall
      <br />
      For you
      <br />
      Oh, what can I do?
      <br />
      Yeah
      <br />
      Take my badge but my heart remains
      <br />
      Lovin' you, baby child
      <br />
      Tighten up on your reins
      <br />
      You're runnin' wild, runnin' wild
      <br />
      It's true
      <br />
      Sick for days in so many ways
      <br />
      I'm achin' now, I'm achin' now
      <br />
      It's times like these I need relief
      <br />
      Please show me how, oh show me how
      <br />
      To get right
      <br />
      Yeah, it's out of sight
      <br />
      When I was young and moving fast
      <br />
      Nothing slowed me down
      <br />
      Oh slowed me down
      <br />
      Now I let the others pass
      <br />
      I've come around
      <br />
      Oh come around
      <br />
      'Cause I've found
      <br />
      Living just to keep going
      <br />
      Going just to be sane
      <br />
      All the while not knowing
      <br />
      It's such a shame
      <br />
      I don't need to get steady
      <br />
      I know just how I feel
      <br />
      I'm telling you to be ready
      <br />
      My dear
    </p>
  ),
  theBlackKeys4: (
    <p>
      I must admit
      <br />
      I can't explain
      <br />
      I can't explain
      <br />
      Through my brain
      <br />
      It's true
      <br />
      Baby I'm howlin' for you
      <br />
      There's something wrong
      <br />
      With this plot
      <br />
      The actors here
      <br />
      Have not got
      <br />
      A clue
      <br />
      Baby I'm howlin' for you
      <br />
      Mockingbird
      <br />
      Can't you see
      <br />
      Little girl's
      <br />
      Got a hold on me
      <br />
      Like glue
      <br />
      Baby I'm howlin' for you
      <br />
      Throw the ball
      <br />
      To the stick
      <br />
      Swing and miss and a
      <br />
      Catcher's mitt
      <br />
      Strike two
      <br />
      Baby I'm howlin' for you
    </p>
  ),
  jeanLeloup6: (
    <p>
      I lost my baby
      <br />
      I lost my darling
      <br />
      I lost my friends <br />
      I lost my mind <br />
      I lost my baby <br />
      I lost my darling <br />
      I lost my friends <br />
      I lost my mind <br />
      Pour une fille d'Ottawa <br />
      Grandie à Ste-Foy <br />
      D'un père militaire <br />
      Et d'une belle fille qui fut sa mère <br />
      Qui écoutait du country <br />
      Entre deux caisses de bière <br />
      Et partait le samedi <br />
      Pour un lac de Hawkesbury <br />
      Rejoindre la grand-mère <br />
      And all the family <br />
      And all the family <br />
      Or je ne peux vivre sans toi <br />
      Et je ne peux vivre avec toi <br />
      Mais tu peux très bien vivre sans moi <br />
      Je suis foutu dans les deux cas <br />
      I lost my baby <br />
      I lost my darling <br />I lost my friends <br />I lost my mind <br />
      Coup de fil de Jami <br />
      Qui un jour tomba <br />
      Pour une fille d'Ottawa <br />
      Grandie je ne sais pas <br />
      D'un père pilote de l'air <br />
      Et d'une mère je ne sais quoi <br />
      Tous deux aimaient le cinéma (ah, oups, hahaha) <br />
      Nous sommes habitants de la Terre <br />
      Il y a des milliers de frontières <br />
      Quelqu'un existe dans l'univers <br />
      Pour quelqu'un d'autre et c'est la guerre <br />I lost my baby <br />I
      lost my darling <br />I lost my friends <br />I lost my mind <br />
      Pour une fille d'Ottawa <br />
      Grandie à Ste-Foy <br />
      Et qui un jour tomba <br />
      Pour un chanteur populaire <br />
      Grandi en Algérie, assez fucké merci <br />
      Et qui lui dit adieu, je repars faire ma vie <br />
      À Hawkesbury, àHawkesbury, à Hawkesbury, à Hawkesbury <br />
      I lost my baby <br />
      I lostmy darling <br />
      I lost my baby (I lost my friends) <br />
      I lost mydarling (I lost my mind) <br />
      I lost my friends (I lost my baby) <br />
      I lost my mind <br />
      I lost my baby (I lost my darling) <br />
      I lost myfriends (I do, my baby) <br />
      (I do, my baby)
    </p>
  ),
};

//Composant affiche les chansons de l'album cliqué
export class Chansons extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modeParole: false, titreSong: "", returned: false };
    this.fabricationTableau = this.fabricationTableau.bind(this);
    this.changeParole = this.changeParole.bind(this);
    this.recuperationTitre = this.recuperationTitre.bind(this);
    this.affichageTexte = this.affichageTexte.bind(this);
    this.retourCatalogue = this.retourCatalogue.bind(this);
  }
  //Méthode pour fabriquer le tableau de la liste des chansons de l'album
  fabricationTableau() {
    var tabChoisi = [];

    switch (this.props.keys) {
      case "Album0":
        tabChoisi = Album0;
        break;
      case "Album1":
        tabChoisi = Album1;
        break;
      case "Album2":
        tabChoisi = Album2;
        break;
      case "Album3":
        tabChoisi = Album3;
        break;
      case "Album4":
        tabChoisi = Album4;
        break;
      case "Album5":
        tabChoisi = Album5;
        break;
      default:
        tabChoisi = [];
    }
    return (
      <>
        {tabChoisi.map((element, i) => (
          <ListeChansons
            numero={i + 1}
            titreChanson={element}
            onClick={this.changeParole}
            recupTitre={this.recuperationTitre}
          />
        ))}
      </>
    );
  }
  //Méthode pour l'affichage des paroles
  changeParole(etat) {
    this.setState({ modeParole: etat });
  }
  //Méthode pour récupérer le titre de la chanson
  recuperationTitre(titre) {
    this.setState({ titreSong: titre });
    console.log("recuptitre");
  }
  //Méthode pour afficher le texte des chansons
  affichageTexte() {
    //var lyrics = "";
    if (this.state.titreSong === "Smells Like Teen Spirit") {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            texteChanson={parolesChanson.nirvana1}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    } else if (this.state.titreSong === "In Bloom") {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            texteChanson={parolesChanson.nirvana2}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    } else if (this.state.titreSong === "The Suburbs") {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            texteChanson={parolesChanson.arcadeFire1}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    } else if (this.state.titreSong === "Ready to Start") {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            texteChanson={parolesChanson.arcadeFire2}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    } else if (this.state.titreSong === "Tighten Up") {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            texteChanson={parolesChanson.theBlackKeys3}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    } else if (this.state.titreSong === "Howlin' for You") {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            texteChanson={parolesChanson.theBlackKeys4}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    } else if (this.state.titreSong === "I Lost My Baby") {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            texteChanson={parolesChanson.jeanLeloup6}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    } else {
      return (
        <>
          <Paroles
            keys={this.props.keys}
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
            chansonChoisi={this.state.titreSong}
          />
        </>
      );
    }
  }
  //Méthode pour le retour au catalogue
  retourCatalogue(etat) {
    this.setState({ returned: etat });
  }
  //Retourne la page des chansons
  render() {
    console.log("modeParole" + this.state.titreSong);

    if (this.state.modeParole) {
      return this.affichageTexte();
    } else if (this.state.returned) {
      return (
        <>
          <Catalogue />
        </>
      );
    } else {
      return (
        <Container className="px-0 mx-0">
          <RetourCatalogue onClick={this.retourCatalogue} />
          <Row className="bgNoir">
            <Col xs={12} md={6} className="my-auto px-0">
              <Image fluid src={this.props.album} style={{ height: "50vh" }} />
            </Col>
            <Col xs={12} md={6} className="py-3 text-light">
              <p>Album</p>
              <h1>{this.props.title}</h1>
              <p>Par {this.props.artist}</p>
              <p>
                2014 {this.props.nbrSongs} chansons, {this.props.during} min
              </p>

              <Button id="play">
                <Image className="play" src={require("../img/play.png")} />
              </Button>
            </Col>
          </Row>
          <Row>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>#</th>
                  <th></th>
                  <th>TITRE</th>
                </tr>
              </thead>
              <tbody>{this.fabricationTableau()}</tbody>
            </Table>
          </Row>
        </Container>
      );
    }
  }
}
