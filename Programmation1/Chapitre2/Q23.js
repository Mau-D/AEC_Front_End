//Le Service de la Qualité de l’Environnement possède trois listes de noms d’industries reconnues pour leur haut taux
// de pollution atmosphérique. L’indice de pollution atmosphérique dépend de plusieurs facteurs et il est calculé régulièrement.
// L'indice de pollution varie de 0 à 1. Une valeur comprise entre 0,04 et 0,31 est dite normale. Si sa valeur de
// l’indice dépasse 0,31 les industries de la liste A sont avisées de suspendre leurs activités jusqu’à ce que la
// valeur de l’indice redevienne normale. Si l’indice excède 0,40, on avise également la liste B et s’il excède 0,50,
// on avise aussi les industries de la liste C. Pour toutes les autres valeurs, écrire « Valeur impossible ».
// Faire le programme qui lit la valeur de l’indice de pollution atmosphérique et indique quelle liste devrait être affichée.

var pollution; // indice de pollution atmosphérique

//Lecture de l'indice de pollution

pollution = Number(prompt("Donnez l'indice de pollution atmosphérique"));

if(pollution >= 0.04){
    document.write("L'indice est de " + pollution + " et les listes suivantes des entreprises doivent être avisées: A");
        if(pollution > 0.31 ){
            document.write(" et B");
            if (pollution > 0.50){
                document.write(" et C");
            }
        }
}
else if (pollution < 0.04){
    document.write("Valeur normale");
}
else{
    document.write("Valeur impossible");
}