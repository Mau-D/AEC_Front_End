//Interface Hotel
//Les caractéristiques de l'hôtel sont de type string placés dans un tableau Array<string>

export interface Hotel {
    nom: string;
    coordonnees: string;
    nombreEtoiles: number;
    nombreChambres: number;
    caracteristiques: Array<string>;
}
