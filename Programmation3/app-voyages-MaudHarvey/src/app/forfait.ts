import { Hotel } from './hotel';

//Interface Forfait
export interface Forfait {
    id: string,
    destination: string,
    villeDeDepart: string,
    hotel: Hotel,
    dateDeDepart: string,
    dateDeRetour: string,
}
