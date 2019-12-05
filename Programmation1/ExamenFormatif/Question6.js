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
//     Il faut ensuite ajouter 20$ pour le filament 3D.
//     Il faut ajouter 15$ pour la batterie USB.
//     RasPiBot aimerait que votre programme affiche
// un résumé de l’achat
// ex: “Robot avec Raspberry Pi Zero, 10 moteurs, pas de caméra, pas de matrice de LEDS.”
// le prix
// le prix avec la livraison de 15%.

var controleur; //Contrôleur RasBerry Pi ou RasBerry Pi Zero
var moteur; //Nombre de moteur
var camera; //Avec ou sans camera
var led; //Avec ou sans matrice de leds pour les yeux

var prix = 35; //Sous-total selon les options
//Prix fixe 20$ pour le filament et 15$ batterie = 35S
var livraison;    //Coût de livraison 15% du sous-total
var total; //Prix final avec la livraison
var description;


//Lecture des options 
controleur = prompt("Choisir votre contrôleur P: RasBerry Pi ou Z : RasBerry Pi Zero");
moteur = Number(prompt("Indiquer le nombre de moteur entre 2 et 24."));
camera = prompt(" Voulez-vous ajouter une camera usb: OUI ou NON");
led = prompt(" Voulez-vous ajouter une matrice LEDS pour les yeux: OUI ou NON");
if(moteur >= 2 && moteur <= 24) {
    prix = prix + (moteur * 5);//moteur = 5$
    if (controleur.toUpperCase() === "P") { //Controleur Pi (55$)
        if (camera.toUpperCase() === "OUI") { //Ajouter 35$
            prix = prix + 35;
            if (led.toUpperCase() === "OUI") {  //Ajouter 10$
                prix = prix + 10;
                description = " Robot avec Contrôleur RasBerry Pi, avec camera, avec matrice LEDS et "
            } else if (led.toUpperCase() === "NON") {
                description = " Robot avec Contrôleur RasBerry Pi, avec camera, sans matrice LEDS et "
            } else {
                document.write("Erreur! Entrez OUI ou NON pour la matrice LEDS");
            }
        } else if (camera.toUpperCase() === "NON") {
            if (led.toUpperCase() === "OUI") {//Ajouter 10$
                prix = prix + 10;
                description = " Robot avec Contrôleur RasBerry Pi, sans camera, avec matrice LEDS et "

            } else if (led.toUpperCase() === "NON") {
                prix = prix + 0;
                description = " Robot avec Contrôleur RasBerry Pi, sans camera, sans matrice LEDS et "


            } else {
                document.write("Erreur! Entrez OUI ou NON pour la matrice LEDS");
            }
        } else {
            document.write("Erreur! Entrez OUI ou NON pour la caméra USB");
        }
    } else if (controleur.toUpperCase() === "Z") { //Contrôleur Pi Zéro 15$
        if (camera.toUpperCase() === "OUI") { //Ajouter 35$
            prix = prix + 35;
            if (led.toUpperCase() === "OUI") {  //Ajouter 10$
                prix = prix + 10;
                description = " Robot avec Contrôleur RasBerry Pi Zero, avec camera, avec matrice LEDS et "

            } else if (led.toUpperCase() === "NON") {

                description = " Robot avec Contrôleur RasBerry Pi Zéro, avec camera, sans matrice LEDS et "


            } else {
                document.write("Erreur! Entrez OUI ou NON pour la matrice LEDS");
            }
        } else if (camera.toUpperCase() === "NON") {
            if (led.toUpperCase() === "OUI") {//Ajouter 10$
                prix = prix + 10;
                description = " Robot avec Contrôleur RasBerry Pi Zéro, sans camera, avec matrice LEDS et "

            } else if (led.toUpperCase() === "NON") {
                description = " Robot avec Contrôleur RasBerry Pi Zéro, sans camera, sans matrice LEDS et "

            }
            else {
                document.write("Erreur! Entrez OUI ou NON pour la matrice LEDS");
            }
        }
        else {
            document.write("Erreur! Entrez OUI ou NON pour la caméra USB");
        }

    }
    else {
        document.write("Erreur dans le choix de contrôleur utiliser P ou Z");
    }

}

else{
    document.write("Erreur dans le nombre de moteurs choisir un nombre entre 2 et 24.  ");
}
//Calcul de la livraison
livraison = prix * 0.15;
total = prix + livraison;
document.write( description + moteur + " moteurs. Le coût est de " + prix + "$ + la livraison ( " + livraison + ") = " + total + " $.");