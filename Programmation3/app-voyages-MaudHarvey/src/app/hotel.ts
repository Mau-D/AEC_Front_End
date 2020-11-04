//Interface Hotel
//Importer l'interface pour l'objet CaracteristiquesHotel

export interface Hotel {
    nomDeLHotel: string;
    Coordonnées: string;
    nombresDEtoiles: number;
    nombreDeChambres: number;
    caracteristiques: Array<string>;
}
