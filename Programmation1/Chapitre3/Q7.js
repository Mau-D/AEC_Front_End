//Demandez un mot à l’usager, bouclez tant que le mot n’est pas patate.
// Comptez et affichez le nombre de mots entrés avant le mot patate.

var motUsager = "";
var compteur = -1;

while(motUsager != "patate"){
    motUsager = prompt("Écrire un mot");
    compteur++;
    console.log(motUsager + compteur);
}
document.write("Il y a eu " + compteur + " mots avant le mot 'patate'.");