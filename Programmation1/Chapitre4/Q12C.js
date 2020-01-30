//On décide des réponses du tableau bonnesReponses
var bonnesReponses =[true,false,false,false,true,true,false,false,true,true];
var examenEtudiant = [];
var nbBonnesReponses = 0;

for(var i=0;i<bonnesReponses.length;i++){
    //Plutôt que de demander les réponses dans un prompt, je fais un tableau de valeurs aléatoires.
    examenEtudiant[i] = Boolean(Math.floor(Math.random()*2));
}

for(var j=0;j<bonnesReponses.length;j++){
    if(bonnesReponses[j] === examenEtudiant[j]){
        nbBonnesReponses++;
    }
}

document.write("L'étudiant a eu " + nbBonnesReponses + " bonnes réponses");
