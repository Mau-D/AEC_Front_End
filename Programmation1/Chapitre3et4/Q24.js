//Trouvez TOUS les nombres de Armstrong de moins de 1000
// On dénomme nombre de Armstrong un entier naturel qui est égal à la somme des cubes des chiffres qui le composent.
// Exemple : 153 = = 13 + 53 + 33 = 1 + 125 + 27, est un nombre de Armstrong.


var str = ""; //Chaîne de caractère
var longstring; //Longueur de la chaîne de carctère
var chiffre;    //Chacun des chiffre du nombre
var nb;         //Nombre
var cube;          //Résultat du cube
var armstrong =0;   // Stockage de la somme des cube



for(var i=0; i<=1000; i++){ //Nombre de 0 à 999
    str = i.toString();     //Convertir le nombre en chaîne de caractère
    longstring = str.length;    //Connaître le nombre de chiffre

    for(var j=0; j < longstring; j++){
        chiffre = str[j];           //Convertir le chiffre (string) en nombre
        nb = parseInt(chiffre); //convertir en nombre
        cube = nb * nb * nb;//cube de chacun des chiffres
        armstrong = armstrong + cube; //Faire la somme des cubes
    }
    if(i === armstrong){
        document.write(armstrong + "<br>");
    }
    armstrong = 0; //réinitialiser le nombre armstrong
}