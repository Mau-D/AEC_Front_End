//Lire le code de sexe d’un individu (M ou F) et afficher le sexe de l’individu par le mot correspondant
// (Masculin ou Féminin). Traiter plusieurs codes de sexe jusqu’à temps que ce code soit autre chose que M ou F.
// De plus afficher le nombre de M qui ont été entrés ainsi que le nombre de F qui ont été entrés.

var sexe = "M";
var nombreM = 0;
var nombreF = 0;

while(sexe.toUpperCase() === "M" || sexe.toUpperCase() === "F"){
    sexe = prompt("Entrer votre sexe M pour masculin et F pour féminin");

    if(sexe.toUpperCase() === "F"){
        document.write("Féminin<br>");
        nombreF++;
    }
    else if(sexe.toUpperCase() === "M"){
        document.write("Masculin<br>");
        nombreM++;
    }
}
document.write("Le total de sexe masculin = " + nombreM);
document.write("<br>Le total de sexe féminin = " + nombreF);