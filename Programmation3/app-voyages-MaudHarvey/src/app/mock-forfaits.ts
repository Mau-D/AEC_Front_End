//Tableau Mock pour les différents forfaits
//importer l'interface de l'objet
import {Forfait} from './forfait';
export const FORFAITS: Forfait[] = [
    { 
        id: '1',
        destination: 'Cuba',
        villeDeDepart: 'Montréal',
        hotel: {
            nomDeLHotel:'Dos Amigos',
            coordonnees: '5 rue de la plage',
            nombresDEtoiles: 3,
            nombreDeChambres: 2,
            caracteristiques: ['plage','allo'],

        },
        dateDeDepart:  new Date(2020, 11, 1),
        dateDeRetour: new Date(2020, 11, 14),
        prix: 2000,
        forfaitVedette: true,
    },
    { 
         id: '2',
        destination: 'Islande',
        villeDeDepart: 'Québec',
        hotel: {
            nomDeLHotel:'Falljraven',
            coordonnees: '5 rue de la plage',
            nombresDEtoiles: 5,
            nombreDeChambres: 2,
            caracteristiques: ['plage','allo'],
        },
        dateDeDepart: new Date(2020, 11, 14),
        dateDeRetour: new Date(2020, 11, 28),
        prix: 2000,
        forfaitVedette: false,
    },
    { 
         id: '3',
        destination: 'Paris',
        villeDeDepart: 'Toronto',
        hotel: {
            nomDeLHotel: 'Les Champs Élysées',
            coordonnees: '5 rue de la plage',
            nombresDEtoiles: 4,
            nombreDeChambres: 2,
            caracteristiques: ['plage','allo'],
        },
        dateDeDepart: new Date(2020, 12, 1),
        dateDeRetour: new Date(2020, 12, 14),
        prix: 2000,
        forfaitVedette: true,
        rabais: 999,
    } 

]