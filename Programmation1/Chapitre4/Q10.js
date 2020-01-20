//Le collège offre 6 options aux étudiants. Ces options sont :
// INFORMATIQUE
// ADMINISTRATION
// HISTOIRE
// GÉNIE
// GEOGRAPHIE
// BUREAUTIQUE
// Mettre ces options dans un tableau, puis demander à un étudiant d’entrer un nom d’option.
// Vous lui répondez si OUI ou NON le collège offre cette option.
var tabOptions= ["INFORMATIQUE", "ADMINISTRATION","HISTOIRE", "GÉNIE", "GEOGRAPHIE","BUREAUTIQUE"];
var optionOfferte = false;


var optionDemandee = prompt("Quelle option souhaitez-vous?").toUpperCase();

for(var i=0; i< tabOptions.length;i++){
    if(tabOptions[i] === optionDemandee){
        optionOfferte = true;
    }

}
if (optionOfferte){ //Pas besoin de mettre === true
    document.write("OUI, le collège offre l'option " + optionDemandee);
}
else{
    document.write("NON, le collège n'offre pas l'option " + optionDemandee);
}
