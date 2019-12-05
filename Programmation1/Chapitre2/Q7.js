//  Lire un nombre au clavier. Afficher la catégorie (Positif, Négatif ou Zéro à l’écran)

var nb; //Nombre demandé


//Lecture du nombre

nb = Number(prompt("Quelle est le nombre?"));
//Afficher la catégorie du nombre

//Positif
if (nb > 0){
    document.write("POSITIF");
}
//Négatif
else if(nb < 0){
    document.write("NÉGATIF");
}
//Zéro
else if ( nb === 0){
    document.write("ZÉRO");
}
else{
    alert("Erreur! Veuillez entrer un nombre.")
}