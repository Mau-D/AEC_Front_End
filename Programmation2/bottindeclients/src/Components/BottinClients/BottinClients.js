import React from 'react';
import Row from 'react-bootstrap/Row';
import { Client } from '../Client/Client';
import { Recherche } from '../Recherche/Recherche';
import { Deconnexion } from '../Deconnexion/Deconnexion';


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
const tabClients = [
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
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1902 rue Lapointe'
    },
    {
        photo: photos.photoClient3,
        nom: 'Magaly Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1903 rue Lapointe'
    },
    {
        photo: photos.photoClient4,
        nom: 'Caroline Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1904 rue Lapointe'
    },
    {
        photo: photos.photoClient5,
        nom: 'Sonia Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1905 rue Lapointe'
    },
    {
        photo: photos.photoClient6,
        nom: 'Mélanie Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1906 rue Lapointe'
    },
    {
        photo: photos.photoClient7,
        nom: 'Karine Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1907 rue Lapointe'
    },
    {
        photo: photos.photoClient8,
        nom: 'Kim Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1908 rue Lapointe'
    },
    {
        photo: photos.photoClient9,
        nom: 'Patricia Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1909 rue Lapointe'
    },
    {
        photo: photos.photoClient10,
        nom: 'Louise Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1910 rue Lapointe'
    },
    {
        photo: photos.photoClient11,
        nom: 'Audrey Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1911 rue Lapointe'
    },
    {
        photo: photos.photoClient12,
        nom: 'Cynthia Harvey',
        profession: 'Technicienne en travaux pratiques',
        courriel: 'harveymaud@gmail.com',
        tel: '(819) 523-3737',
        adresse: '1912 rue Lapointe'
    },
];
export class BottinClients extends React.Component {
    constructor(props) {
        super(props);
        this.state = { search: "", modeRecherche: false };
        this.changeString = this.changeString.bind(this);
        this.modeRecherche = this.modeRecherche.bind(this);
        this.affichageRecherche = this.affichageRecherche.bind(this);
        this.retourBottin = this.retourBottin.bind(this);


    }
    changeString(newString) {
        this.setState({ search: newString });
    }
    modeRecherche(mode) {
        this.setState({ modeRecherche: mode });

    }
    affichageRecherche() {
        console.log('je fais une recherche')
        var strSearch = this.state.search.toLowerCase()
        return (
            <>
                {tabClients.map((element, i) =>
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

                        : console.log(i + 'pas dans la recherche'))}

            </>
        );
    }

    informationsClient() {
        return (
            <>
                {tabClients.map((element, i) =>

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
    retourBottin(etat) {
        this.setState({ modeRecherche: etat });
    }
    render() {
        console.log(this.state.modeRecherche)
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
        else {
            return (
                <>
                    <Recherche onClick={this.changeString} recherche={this.modeRecherche} />
                    <Row className="mb-3">
                        {this.informationsClient()}
                    </Row>
                </>
            )
        }
    }
};

