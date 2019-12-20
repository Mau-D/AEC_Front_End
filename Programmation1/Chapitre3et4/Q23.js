//Créez un programme qui lit un nombre et affiche tous les chiffres de ce nombre séparément dans les deux sens.
// indice : lisez le nombre en string.
// var nb = “Shany”;
// nb[0] vaut la lettre S
// nb[2] vaut la lettre a

var nb;

nb = prompt("Écrire un nombre");
//nb.length renvoie un nombre équivalent au nombre de carctère dans le string
for(var i = 0; i < nb.length; i++){
    document.write(nb[i] + "<br>");
}
document.write("-----------<br>");

for (var j = nb.length-1; j >=0; j--){
    console.log(j);
    document.write(nb[j] + "<br>");
}