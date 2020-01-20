//Mettre dans un tableau les 10 bonnes réponses à un test objectif (vrai ou faux).
// Par la suite, faire la correction du test d’un étudiant en lisant ses 10 réponses et afficher sa note sur 10.

var tabCorrige = ["VRAI","VRAI","VRAI","VRAI","VRAI","VRAI","VRAI","VRAI","VRAI","VRAI"];
var test;
var bonnesReponses = 0;

for(var i=0; i<10; i++){
    test = prompt("Question no." + (i+1) + " VRAI OU FAUX").toUpperCase();
    console.log(test);
    if(test === tabCorrige[i]){
        bonnesReponses++;
    }
}
document.write("Résultat = " + bonnesReponses + "/10");