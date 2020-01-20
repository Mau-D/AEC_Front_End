//Créez un tableau de 10 cellules qui contient une chaîne de caractères à deux valeurs (Pile ou Face).
// Vous décidez manuellement des valeurs qui seront dans le tableau (ce n’est pas random) et affichez ces valeurs
// à l’aide d’une boucle Pour.
var tabPileFace = [""];
var usager;

//Remplir le tableau
for(var i =0; i<10; i++){
    usager= prompt("Pile(P)  ou Face(F) ?").toUpperCase();
    if (usager === "P"){
        tabPileFace.push("Pile");
    }
    else if(usager.toUpperCase() === "F"){
        tabPileFace.push("Face");
    }
    else{
        i--
    }
    console.log(usager);
}
//Afficher le tableau
for(var j=0; j<tabPileFace.length; j++){
    document.write(tabPileFace[j] + "<br>");
}