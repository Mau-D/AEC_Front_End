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
            nombresDEtoiles: 5,
            nombreDeChambres: 2,
            caracteristiques: ['plage','allo'],

        },
        dateDeDepart: '1er novembre 2020',
        dateDeRetour: '14 nonvembre 2020',
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
        dateDeDepart: '14 novembre 2020',
        dateDeRetour: '28 novembre 2020',
    },
    { 
         id: '3',
        destination: 'Paris',
        villeDeDepart: 'Toronto',
        hotel: {
            nomDeLHotel: 'Les Champs Élysées',
            coordonnees: '5 rue de la plage',
            nombresDEtoiles: 5,
            nombreDeChambres: 2,
            caracteristiques: ['plage','allo'],
        },
        dateDeDepart: '1er Décembre 2020',
        dateDeRetour: '14 Décembre 2020',
    } 
]