//Interface Hotel
//Les caractéristiques de l'hôtel sont de type string placés dans un tableau Array<string>

export interface Hotel {
    nomDeLHotel: string;
    coordonnees: string;
    nombresDEtoiles: number;
    nombreDeChambres: number;
    caracteristiques: Array<string>;
}
