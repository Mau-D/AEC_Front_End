import React from 'react';
import Row from 'react-bootstrap/Row';
import { TvShow } from '../TvShow/TvShow';
//Titre de la catégorie des séries télé
//let nomCategorie = 'Suspense';

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
                {this.AfficherCategorie()}
            </>
        )
    }
    //Créer des variables tableaux contenant les props de chacunes des catégories
    //tableau[], objet du tableau{}+',' entre chaque élément et une ',' après les éléments
    AfficherCategorie() {
        const tabSuspense = [
            {
                keys: "suspence0",
                src: require("../../img/Suspense/lesinvincibles.jpg"),
                alt: "Les invincibles",
                title: "Les invincibles"
            },
            {
                keys: "suspence1",
                src: require("../../img/Suspense/19-2.jpg"),
                alt: "19-2",
                title: "19-2"
            },
            {
                keys: "suspence2",
                src: require("../../img/Suspense/district31.jpg"),
                alt: "district31",
                title: "district31"
            },
            {
                keys: "suspence3",
                src: require("../../img/Suspense/fugueuse.jpg"),
                alt: "fugueuse",
                title: "fugueuse"
            },
            {
                keys: "suspence4",
                src: require("../../img/Suspense/serienoire.jpg"),
                alt: "serienoire",
                title:"serienoire"
            },
            {
                keys: "suspence5",
                src: require("../../img/Suspense/unite9.jpg"),
                alt: "unite9",
                title:"unite9"
            }
        ];
        const tabHumour = [
            {
                keys: "humour0",
                src: require("../../img/Humour/lanceEtCompte.jpg"),
                alt: "Lance et compte",
                title: "Lance et compte"
            },
            {
                keys: "humour1",
                src: require("../../img/Humour/lapetitevie.jpg"),
                alt: "La petite vie",
                title: "La petite vie"
            },
            {
                keys: "humour2",
                src: require("../../img/Humour/lesbeauxmalaises.jpg"),
                alt: "Les beaux malaises",
                title: "Les beaux malaises"
            },
            {
                keys: "humour3",
                src: require("../../img/Humour/lesbougon.jpg"),
                alt: "Les bougons",
                title: "Les bougons"
            },
            {
                keys: "humour4",
                src: require("../../img/Humour/lesboys.jpg"),
                alt: "Les boys",
                title:"Les boys"
            },
            {
                keys: "humour5",
                src: require("../../img/Humour/minuitlesoir.jpg"),
                alt: "Minuit le soir",
                title:"Minuit le soir"
            }
        ];
        const tabSeriesAmericaines = [
            {
                keys: "seriesAmericaines0",
                src: require("../../img/Series americaines/betterCallSaul.jpg"),
                alt: "Better call Saul",
                title: "Better call Saul"
            },
            {
                keys: "seriesAmericaines1",
                src: require("../../img/Series americaines/breakingbad.jpg"),
                alt: "Breaking bad",
                title: "Breaking bad"
            },
            {
                keys: "seriesAmericaines2",
                src: require("../../img/Series americaines/dexter.jpg"),
                alt: "Dexter",
                title: "Dexter"
            },
            {
                keys: "seriesAmericaines3",
                src: require("../../img/Series americaines/got.jpg"),
                alt: "Got",
                title: "Got"
            },
            {
                keys: "seriesAmericaines4",
                src: require("../../img/Series americaines/mandalorian.jpg"),
                alt: "Mandalorian",
                title:"Mandalorian"
            },
            {
                keys: "seriesAmericaines5",
                src: require("../../img/Series americaines/vikings.jpg"),
                alt: "Vikings",
                title:"Vikings"
            }
        ];
        return (
            <Row>
                {this.props.categorie === "Suspense" &&
                    tabSuspense.map((element, i)=><TvShow
                    keys={"suspense" + i}
                    src={element.src}
                    alt={element.alt}
                    title={element.title}
                />)
                }
                {this.props.categorie === "Humour" &&
                        tabHumour.map((element, i)=><TvShow
                        keys={"humour" + i}
                        src={element.src}
                        alt={element.alt}
                        title={element.title}
                         />)
                }
                {this.props.categorie === "Séries américaines" &&
                         tabSeriesAmericaines.map((element, i)=><TvShow 
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
Categorie.defaultProps = { categorie: "Suspense" };
//Props categorie par défaut, placer-le en dehors de la class
//Les 3 props src, alt et title sont ajoutés à chaque TvShow
//Ajouter un if selon la categorie dans la fonction AfficherCategorie(), 
//ajouter un outer element regroupant les composants Tvshow
//Au lieu des étapes précédentes: Des variables-tableaux contenant les props sont envoyé à 
//la composante grâce à un nomDuTableau.map