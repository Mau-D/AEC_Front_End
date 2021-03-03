import { Hotel } from './hotel';

//Interface Forfait, pour la propriété hotel utiliser l'interface Hotel
//Importer l'interface Hotel

export interface Forfait {
    _id: string,
    destination: string,
    villeDepart: string,
    hotel: Hotel,
    dateDepartD: Date;
    dateRetourD: Date,
    prix: number,
    rabais: number,
    vedette: boolean,
    image:string,
    da: string
   
}
