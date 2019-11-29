//Lire un nombre entier au clavier et afficher le nom du mois correspondant. Si le nombre saisi ne correspond
//pas à un mois, affichez le message suivant : « Mois invalide ».

var mois;//Nombre correspondant au mois de l'année

//Lecture du nombre
mois = Number(prompt("Entrez le nombre correspondant au mois choisi."));

if( mois === 1){
    document.write("Le mois est janvier");
}
 else if( mois === 2){
    document.write("Le mois est février");
}
else if( mois === 3){
    document.write("Le mois est mars");
}
else if( mois === 4){
    document.write("Le mois est avril");
}
else if( mois === 5){
    document.write("Le mois est mai");
}
else if( mois === 6){
    document.write("Le mois est juin");
}
else if( mois === 7){
    document.write("Le mois est juillet");
}
else if( mois === 8){
    document.write("Le mois est août");
}
else if( mois === 9){
    document.write("Le mois est septembre");
}
else if( mois === 10){
    document.write("Le mois est octobre");
}
else if( mois === 11){
    document.write("Le mois est novembre");
}
else if( mois === 12){
    document.write("Le mois est décembre");
}
else{
    document.write("Mois invalide");
}