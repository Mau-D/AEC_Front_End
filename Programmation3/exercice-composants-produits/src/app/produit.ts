//Définition explicite d'une interface
//Définir le nom des propriétés et leurs types
//Le mot-clé export est essentiel dans le contexte d'utilisation des interfaces dans Angular
export interface Produit {
    id: string,
    nom: string,
    description: string,
    prix: number,
    image: string,
    qteStock: number
}
