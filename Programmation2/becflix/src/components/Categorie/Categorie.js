import React from 'react';
import Row from 'react-bootstrap/Row';
import { TvShow } from '../TvShow/TvShow';
//Titre de la catégorie des séries télé
//let nomCategorie = 'Suspense';
const tabSuspense = [
    {
        src: require("../../img/Suspense/lesinvincibles.jpg"),
        alt: "Les invincibles",
        title: "Les invincibles"
    },
    {
        src: require("../../img/Suspense/19-2.jpg"),
        alt: "19-2",
        title: "19-2"
    },
    {
        src: require("../../img/Suspense/district31.jpg"),
        alt: "district31",
        title: "district31"
    },
    {
        src: require("../../img/Suspense/fugueuse.jpg"),
        alt: "fugueuse",
        title: "fugueuse"
    },
    {
        src: require("../../img/Suspense/serienoire.jpg"),
        alt: "serienoire",
        title: "serienoire"
    },
    {
        src: require("../../img/Suspense/unite9.jpg"),
        alt: "unite9",
        title: "unite9"
    }
];
const tabHumour = [
    {
        src: require("../../img/Humour/lanceEtCompte.jpg"),
        alt: "Lance et compte",
        title: "Lance et compte"
    },
    {
        src: require("../../img/Humour/lapetitevie.jpg"),
        alt: "La petite vie",
        title: "La petite vie"
    },
    {
        src: require("../../img/Humour/lesbeauxmalaises.jpg"),
        alt: "Les beaux malaises",
        title: "Les beaux malaises"
    },
    {
        src: require("../../img/Humour/lesbougon.jpg"),
        alt: "Les bougons",
        title: "Les bougons"
    },
    {
        src: require("../../img/Humour/lesboys.jpg"),
        alt: "Les boys",
        title: "Les boys"
    },
    {
        src: require("../../img/Humour/minuitlesoir.jpg"),
        alt: "Minuit le soir",
        title: "Minuit le soir"
    }
];
const tabSeriesAmericaines = [
    {
        src: require("../../img/Series americaines/betterCallSaul.jpg"),
        alt: "Better call Saul",
        title: "Better call Saul"
    },
    {
        src: require("../../img/Series americaines/breakingbad.jpg"),
        alt: "Breaking bad",
        title: "Breaking bad"
    },
    {
        src: require("../../img/Series americaines/dexter.jpg"),
        alt: "Dexter",
        title: "Dexter"
    },
    {
        src: require("../../img/Series americaines/got.jpg"),
        alt: "Got",
        title: "Got"
    },
    {
        src: require("../../img/Series americaines/mandalorian.jpg"),
        alt: "Mandalorian",
        title: "Mandalorian"
    },
    {
        src: require("../../img/Series americaines/vikings.jpg"),
        alt: "Vikings",
        title: "Vikings"
    }
];

export class Categorie extends React.Component {
    render() {
        return (
            //Placer deux rangées titre(genre) et 6 images des séries télé
            //Appeler le props définit dans Catalogue.js
            //Appel de la méthode this, du Categorie et ne pas oublier ()
            <>
                <Row>
                    <h1>{this.props.categorie}</h1>
                </Row>
                <Row>
                    {this.AfficherCategorie()}
                </Row>
            </>
        )
    }
    //Créer des variables tableaux contenant les props de chacunes des catégories
    //tableau[], objet du tableau{}+',' entre chaque élément et une ',' après les éléments
    AfficherCategorie() {

        return (
            <Row>
                {this.props.categorie === "Suspense" &&
                    tabSuspense.map((element, i) => <TvShow
                        keys={"suspense" + i}
                        src={element.src}
                        alt={element.alt}
                        title={element.title}
                    />)
                }
                {this.props.categorie === "Humour" &&
                    tabHumour.map((element, i) => <TvShow
                        keys={"humour" + i}
                        src={element.src}
                        alt={element.alt}
                        title={element.title}
                    />)
                }
                {this.props.categorie === "Séries américaines" &&
                    tabSeriesAmericaines.map((element, i) => <TvShow
                        keys={"seriesAmericaines" + i}
                        src={element.src}
                        alt={element.alt}
                        title={element.title}
                    />)
                }
            </Row>
        )
    }
};
//Voir corrigé utilisant des if, voir github Shany
Categorie.defaultProps = { categorie: "Suspense" };
//Props categorie par défaut, placer-le en dehors de la class
//Les 3 props src, alt et title sont ajoutés à chaque TvShow
//Ajouter un if selon la categorie dans la fonction AfficherCategorie(), 
//ajouter un outer element regroupant les composants Tvshow
//Au lieu des étapes précédentes: Des variables-tableaux contenant les props sont envoyé à 
//la composante grâce à un nomDuTableau.map