import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Client } from '../Client/Client';
import { Recherche } from '../Recherche/Recherche';
import { Deconnexion } from '../Deconnexion/Deconnexion';
import { NouveauClient } from '../NouveauClient/NouveauClient';

//Variables pour téléverser les photos des clients
const photos = {
    photoClient1: require("../../img/client1.jpg"),
    photoClient2: require("../../img/client2.jpg"),
    photoClient3: require("../../img/client3.jpg"),
    photoClient4: require("../../img/client4.jpg"),
    photoClient5: require("../../img/client5.jpg"),
    photoClient6: require("../../img/client6.jpg"),
    photoClient7: require("../../img/client7.jpg"),
    photoClient8: require("../../img/client8.jpg"),
    photoClient9: require("../../img/client9.jpg"),
    photoClient10: require("../../img/client10.jpg"),
    photoClient11: require("../../img/client11.jpg"),
    photoClient12: require("../../img/client12.jpg")
};
//Variable-objet, avec toutes les informations des clients
let tabClients = [
    {
        photo: photos.photoClient1,
        nom: 'Maud Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1901 rue Lapointe'
    },
    {
        photo: photos.photoClient2,
        nom: 'Melody Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1902 rue Lapointe'
    },
    {
        photo: photos.photoClient3,
        nom: 'Magaly Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1903 rue Lapointe'
    },
    {
        photo: photos.photoClient4,
        nom: 'Caroline Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1904 rue Lapointe'
    },
    {
        photo: photos.photoClient5,
        nom: 'Sonia Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1905 rue Lapointe'
    },
    {
        photo: photos.photoClient6,
        nom: 'Mélanie Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1906 rue Lapointe'
    },
    {
        photo: photos.photoClient7,
        nom: 'Karine Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1907 rue Lapointe'
    },
    {
        photo: photos.photoClient8,
        nom: 'Kim Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1908 rue Lapointe'
    },
    {
        photo: photos.photoClient9,
        nom: 'Patricia Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1909 rue Lapointe'
    },
    {
        photo: photos.photoClient10,
        nom: 'Louise Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1910 rue Lapointe'
    },
    {
        photo: photos.photoClient11,
        nom: 'Audrey Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1911 rue Lapointe'
    },
    {
        photo: photos.photoClient12,
        nom: 'Cynthia Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: <a href="mailto:harveymaud@gmail.com">harveymaud@gmail.com </a>,
        tel: <a href="tel:+1-819-523-3737">(819) 523-3737</a>,
        adresse: '1912 rue Lapointe'
    },
];
//Component Bottin Clients, affiche tous les clients et gère l'affichage en cas de recherche et de la
//connexion à l'entré du mot de passe
//Le tableau des clients est inséré dans un état pour géré les nouveaux clients
export class BottinClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "", modeRecherche: false, modeInscription: false, bottin: tabClients };
        this.changeString = this.changeString.bind(this);
        this.modeRecherche = this.modeRecherche.bind(this);
        this.affichageRecherche = this.affichageRecherche.bind(this);
        this.retourBottin = this.retourBottin.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.enregistrement = this.enregistrement.bind(this);
    }
    //Méthode pour changer l'état du texte dans la recherche
    changeString(newString) {
        this.setState({ search: newString });
    }
    //Méthode pour changer l'état, pour l'affichage de la recherche
    modeRecherche(mode) {
        this.setState({ modeRecherche: mode });
    }
    //Méthode comportant une condition pour afficher les clients recherchés
    //Changer le tabClients par this.state.bottin
    affichageRecherche() {
        console.log('je fais une recherche')
        var strSearch = this.state.search.toLowerCase()//texte dans le input recherche
        return (
            <>
                {this.state.bottin.map((element, i) =>
                    (element.nom.toLowerCase().includes(strSearch)) ?

                        <Client
                            keys={"Client" + i}
                            photo={element.photo}
                            nom={element.nom}
                            profession={element.profession}
                            courriel={element.courriel}
                            tel={element.tel}
                            adresse={element.adresse}
                        />

                        : null)}

            </>
        );
    }
    //Méthode pour l'affichage de tous les clients
    //Changer le tabClients par this.state.bottin
    informationsClient() {
        return (
            <>
                {this.state.bottin.map((element, i) =>

                    <Client
                        keys={"Client" + i}
                        photo={element.photo}
                        nom={element.nom}
                        profession={element.profession}
                        courriel={element.courriel}
                        tel={element.tel}
                        adresse={element.adresse}
                    />

                )}
            </>
        );
    }
    //Méthode pour annuler la recherche, retourne à l'affichage de tous les clients
    retourBottin(etat) {
        this.setState({ modeRecherche: etat });

    }
    //Méthode pour ouvrir le formulaire d'inscription
    handleClick() {
        this.setState({ modeInscription: true });

    }
    //Méthode pour les valeurs du nouveau client arr.push(élément1, ..., élémentN)
    enregistrement(newCustomer) {
        //Modifier pour choisir la photo avec le nom du client
        var nomPhoto = require("../../img/client"+(newCustomer.photo)+".jpg");
        newCustomer.photo = nomPhoto;
        tabClients = this.state.bottin;
        this.setState({ bottin: tabClients.concat(newCustomer) });
        this.setState({ modeInscription: false });
       


    }
    //Retourne soit le mode recherche ou le mode bottin avec le lien pour inscription
    render() {
        console.log('recherche:' + this.state.modeRecherche)
        console.log('inscription:' + this.state.modeInscription)
        console.log('state' + this.state.bottin);

        if (this.state.modeRecherche) {
            return (

                <>

                    <Deconnexion onClick={this.retourBottin} />

                    <Row>
                        {this.affichageRecherche()}
                    </Row>

                </>
            )
        }
        else if (this.state.modeInscription) {

            return (
                <>

                    <NouveauClient onClick={this.enregistrement} />

                </>
            );

        }

        else {
            return (
                <>
                    <Row>
                        <Recherche onClick={this.changeString} recherche={this.modeRecherche} />
                        <Col xs={6}>
                            <h3>Inscription d'un nouveau client</h3>
                            <h5>Cliquez pour avoir accès au formulaire</h5>
                            <Button variant="primary" type="submit" onClick={this.handleClick} >
                                Inscription
                        </Button>
                        </Col>
                    </Row>
                    <Row className="mb-3">
                        {this.informationsClient()}
                    </Row>

                </>
            )
        }
    }
};

