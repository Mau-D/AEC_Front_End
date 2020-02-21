//Créez une classe JoueurHockey.
// nom
// nbButs
// nbPasses
//
// Instanciez :
// Sydney Crosy 454 buts 787 passes
// Mario Lemieux 690 buts 1033 passes
// Jaromir Jagr 766 buts 1155 passes
//
// Créez une méthode nommée Total qui retourne le nombre de points (buts + passes)
//
// Créez une classe Equipe qui contient 3 joueurs
//
// Instanciez votre équipe avec vos 3 joueurs
//
// Créez une méthode qui s’appelle AfficherAlignement() qui affiche tous les joueurs d’une équipe.
//
// Créez une méthode qui s’appelle AfficherPointsTotaux() qui affiche le total de points de 3 joueurs de l’équipe.

class JoueurHockey{//Le nom du class commence toujours avec une majuscule

    constructor(nom,nbButs,nbPasses) {
        this.nom = nom;
        this.nbButs = nbButs;
        this.nbPasses = nbPasses;
    }
    Total(){//La méthode de la class commence toujours avec une majuscule
       return this.nbButs + this.nbPasses;
    }

}

let sydneyCrosby = new JoueurHockey("Sydney Crosby",454, 787);
let marioLemieux = new JoueurHockey("Mario Lemieux",690, 1033);
let jaromirjagr = new JoueurHockey("Jaromir Jagr",766, 1155);
document.write(sydneyCrosby.Total() + "points<br>");
class Equipe{
    constructor(nom, joueur1, joueur2, joueur3){
        this.nom = nom;
        this.joueur1 = joueur1;
        this.joueur2 = joueur2;
        this.joueur3 = joueur3;

    }
    AfficherAlignement(){
        return (this.joueur1.nom + ", " + this.joueur2.nom + " et " + this.joueur3.nom);
    }
    AfficherPointsTotaux(){
        return this.joueur1.Total() + this.joueur2.Total() + this.joueur3.Total();
    }

}
let pingouins = new Equipe("Pingouins", sydneyCrosby, marioLemieux, jaromirjagr);
let nomJoueurAlignement = pingouins.AfficherAlignement();
let pointsTotauxAlignement1 = pingouins.AfficherPointsTotaux();


document.write("L'alignement des " + pingouins.nom + " comprend " + nomJoueurAlignement);
document.write("<br>L'alignement des " + pingouins.nom + " a obtenu " + pointsTotauxAlignement1 + " points.");
