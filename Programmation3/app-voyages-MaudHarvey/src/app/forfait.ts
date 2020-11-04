import { Hotel } from './hotel';

//Interface Forfait, pour la propriété hotel utiliser l'interface Hotel
//Importer l'interface Hotel

export interface Forfait {
    id: string,
    destination: string,
    villeDeDepart: string,
    hotel: Hotel,
    dateDeDepart: string,
    dateDeRetour: string,
}
