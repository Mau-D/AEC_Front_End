// Vous devez compléter un programme qui permet de calculer la facture pour l’achat d’un robot imprimable en 3 dimensions.
//     L’usager doit sélectionner le contrôleur
// 55$ pour un RaspBerry Pi
// 15$ pour un Raspberry Pi Zero
// L’usager doit décider du nombre de moteurs entre 2 et 24.
// Un moteur coûte 5$
// L’usager décide s’il veut une caméra USB ou non
// La caméra coûte 35$
// L’usager décide s’il veut une matrice de LEDS pour les yeux
// La matrice coûte 10$ pour les deux yeux.
//  Il faut ensuite ajouter 20$ pour le filament 3D.
//  Il faut ajouter 15$ pour la batterie USB.
//     RasPiBot aimerait que votre programme affiche
// un résumé de l’achat
// ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
// le prix
// le prix avec la livraison de 15%.

var controleur; //Pi ou zero Pi = 35$ et zero = 15$
var moteur; //entre 2 et 24 5$/chacun
var cameraUSB; //oui ou non 35$
var matriceLED; //oui ou non 10$
var description;

var prix = 35; //Frais fixe 20$ pour le filament et 15$ pour la batterie
var livraison; //15% du prix
var prixTotal; //Prix + livraison


//Lecture des demandes du client
controleur = prompt("Choisir le contrôleur: PI ou ZERO");
moteur = prompt("Précisez le nombre de moteurs: entre 2 et 24");
cameraUSB = prompt("Désirez-vous une camera USB: OUI ou NON");
matriceLED = prompt("Désirez-vous une matrice LED pour les yeux: OUI ou NON");

//Pour le choix de contrôleur
if(controleur.toUpperCase() === "PI"){
    description = "Rasberry Pi";
    prix += 55;
}
else if (controleur.toUpperCase() === "ZERO"){
    description = "Rasberry Pi Zero";
    prix += 15;
}
else{
    alert("Erreur dans le choix du contrôleur");
}

//Pour les moteur
if(moteur >=2 && moteur <=24){
prix += 5 * moteur;
}
else{
    alert("Erreur dans la quantité de moteur");
}
//Pour la camera USB
if(cameraUSB.toUpperCase() === "OUI"){
    prix += 35;
    description += ", avec camera USB";
}
else if (cameraUSB.toUpperCase() === "NON"){
    description += ", sans camera USB";
}
else{
    alert("Erreur dans l'option de camera USB");
}

//Pour la matrice LED
if(matriceLED.toUpperCase() === "OUI"){
    prix += 10;
    description += ", avec matrice LED";
}
else if (matriceLED.toUpperCase() === "NON"){
    description += ", sans matrice LED";
}
else{
    alert("Erreur dans l'option de la matrice LED");
}

//Calcul de la livraison
livraison = prix * 0.15;
prixTotal = prix + livraison;
document.write("Le robot a un contrôleur " + description + " et possède " + moteur + " moteurs.");
document.write(" Le prix = " + prix + " + la livraison 15% = " + prixTotal + "$");