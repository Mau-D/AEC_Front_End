//Tableau Mock pour les différents forfaits
//Importer l'interface de l'objet

//**********Ce fichier n'est plus utilisé, car les données proviennent d'une API, conservé au besoin */

import {Forfait} from './forfait';
export const FORFAITS: Forfait[] = [
    { 
        _id: '1',
        destination: 'Cuba',
        villeDepart: 'Montréal',
        hotel: {
            nom:'Dos Amigos',
            coordonnees: '5 rue de la plage, Varadero',
            nombreEtoiles: 3,
            nombreChambres: 400,
            caracteristiques: ['plage','miniClub'],

        },
        dateDepartD:  new Date("2021-01-01"),
        dateRetourD: new Date("2021-01-15"),
        prix: 1909,
        rabais: 0,
        vedette: true,
        da:"1996416"
    },
    { 
        _id: '2',
        destination: 'Islande',
        villeDepart: 'Québec',
        hotel: {
            nom:'Falljraven',
            coordonnees: '25 rue des lutins, Rekjavik',
            nombreEtoiles: 4,
            nombreChambres: 100,
            caracteristiques: ['Miniclub', 'Près d\'un parc ou milieu naturel', 'Ascenseur', 'Mariage', 'Restaurants', 'Spa', 'Salle de réunion'],
        },
        dateDepartD: new Date("2021-01-14"),
        dateRetourD: new Date("2021-01-21"),
        prix: 3000,
        rabais: 0,
        vedette: false,
        da:"1996416"
    },
    { 
        _id: '3',
        destination: 'Paris',
        villeDepart: 'Toronto',
        hotel: {
            nom: 'Les Champs Élysées',
            coordonnees: '534 rue de la Tour, Paris',
            nombreEtoiles: 5,
            nombreChambres: 200,
            caracteristiques: ['Ascenseur', 'Mariage', 'Piscine', 'Restaurants', 'Salle de réunion'],
        },
        dateDepartD: new Date("2021-02-03"),
        dateRetourD: new Date("2021-02-17"),
        prix: 3000,
        rabais: 999,
        vedette: false,
        da:"1996416"
    },
    { 
        _id: '4',
        destination: 'Mexique',
        villeDepart: 'Québec',
        hotel: {
            nom: 'Viva Wyndham Maya',
            coordonnees: '34 route des Incas, Riviera Maya',
            nombreEtoiles: 4,
            nombreChambres: 150,
            caracteristiques: ['Face à la plage', 'Miniclub', 'Près d\'un parc ou milieu naturel', 'Ascenseur', 'Mariage', 'Plage', 'Piscine', 'Restaurants',],
        },
        dateDepartD: new Date("2021-03-02"),
        dateRetourD: new Date("2021-03-12"),
        prix: 979,
        rabais: 50,
        vedette: true,
        da:"1996416"

    },
    { 
        _id: '5',
        destination: 'Jamaïque',
        villeDepart: 'Montréal',
        hotel: {
            nom: 'Coco La Palm Seaside Resort',
            coordonnees: '5 route du soleil, Negril',
            nombreEtoiles: 3,
            nombreChambres: 55,
            caracteristiques: ['Face à la plage', 'Mariage', 'Plage', 'Piscine'],
        },
        dateDepartD: new Date("2021-03-15"),
        dateRetourD: new Date("2021-03-29"),
        prix: 2000,
        rabais: 999,
        vedette: true,
        da:"1996416"

    },
    { 
        _id: '6',
        destination: 'Cuba',
        villeDepart: 'Québec',
        hotel: {
            nom: 'La Casa',
            coordonnees: '15 route du cocotier, La Havane',
            nombreEtoiles: 2,
            nombreChambres: 155,
            caracteristiques: ['Face à la plage', 'Plage', 'Piscine'],
        },
        dateDepartD: new Date("2021-03-15"),
        dateRetourD: new Date("2021-03-25"),
        prix: 1100,
        rabais: 99,
        vedette: true,
        da:"1996416"
    },
    
]