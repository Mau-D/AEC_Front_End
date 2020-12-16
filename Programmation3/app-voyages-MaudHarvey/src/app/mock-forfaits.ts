//Tableau Mock pour les différents forfaits
//Importer l'interface de l'objet

import {Forfait} from './forfait';
export const FORFAITS: Forfait[] = [
    { 
        id: '1',
        destination: 'Cuba',
        villeDeDepart: 'Montréal',
        hotel: {
            nomDeLHotel:'Dos Amigos',
            coordonnees: '5 rue de la plage, Varadero',
            nombresDEtoiles: 3,
            nombreDeChambres: 400,
            caracteristiques: ['plage','miniClub'],

        },
        dateDeDepart:  new Date("2021-01-01"),
        dateDeRetour: new Date("2021-01-15"),
        prix: 1909,
        forfaitVedette: true,
    },
    { 
         id: '2',
        destination: 'Islande',
        villeDeDepart: 'Québec',
        hotel: {
            nomDeLHotel:'Falljraven',
            coordonnees: '25 rue des lutins, Rekjavik',
            nombresDEtoiles: 4,
            nombreDeChambres: 100,
            caracteristiques: ['Miniclub', 'Près d\'un parc ou milieu naturel', 'Ascenseur', 'Mariage', 'Restaurants', 'Spa', 'Salle de réunion'],
        },
        dateDeDepart: new Date("2021-01-14"),
        dateDeRetour: new Date("2021-01-21"),
        prix: 3000,
        forfaitVedette: false,
    },
    { 
         id: '3',
        destination: 'Paris',
        villeDeDepart: 'Toronto',
        hotel: {
            nomDeLHotel: 'Les Champs Élysées',
            coordonnees: '534 rue de la Tour, Paris',
            nombresDEtoiles: 5,
            nombreDeChambres: 200,
            caracteristiques: ['Ascenseur', 'Mariage', 'Piscine', 'Restaurants', 'Salle de réunion'],
        },
        dateDeDepart: new Date("2021-02-03"),
        dateDeRetour: new Date("2021-02-17"),
        prix: 3000,
        forfaitVedette: false,
        rabais: 999,
    },
    { 
         id: '4',
        destination: 'Mexique',
        villeDeDepart: 'Québec',
        hotel: {
            nomDeLHotel: 'Viva Wyndham Maya',
            coordonnees: '34 route des Incas, Riviera Maya',
            nombresDEtoiles: 4,
            nombreDeChambres: 150,
            caracteristiques: ['Face à la plage', 'Miniclub', 'Près d\'un parc ou milieu naturel', 'Ascenseur', 'Mariage', 'Plage', 'Piscine', 'Restaurants',],
        },
        dateDeDepart: new Date("2021-03-02"),
        dateDeRetour: new Date("2021-03-12"),
        prix: 979,
        forfaitVedette: true,
        rabais: 50,
    },
    { 
         id: '5',
        destination: 'Jamaïque',
        villeDeDepart: 'Montréal',
        hotel: {
            nomDeLHotel: 'Coco La Palm Seaside Resort',
            coordonnees: '5 route du soleil, Negril',
            nombresDEtoiles: 3,
            nombreDeChambres: 55,
            caracteristiques: ['Face à la plage', 'Mariage', 'Plage', 'Piscine'],
        },
        dateDeDepart: new Date("2021-03-15"),
        dateDeRetour: new Date("2021-03-29"),
        prix: 2000,
        forfaitVedette: true,
        rabais: 999,
    },
    { 
         id: '6',
        destination: 'Cuba',
        villeDeDepart: 'Québec',
        hotel: {
            nomDeLHotel: 'La Casa',
            coordonnees: '15 route du cocotier, La Havane',
            nombresDEtoiles: 2,
            nombreDeChambres: 155,
            caracteristiques: ['Face à la plage', 'Plage', 'Piscine'],
        },
        dateDeDepart: new Date("2021-03-15"),
        dateDeRetour: new Date("2021-03-25"),
        prix: 1100,
        forfaitVedette: true,
        rabais: 99,
    },
    
]