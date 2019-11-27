//Lire un degré de température. Si la température est comprise entre -40 et -10 écrire « HAAAAAAAAA! Il fait froid».
// Sinon, écrire « Enfin une belle journée! ».


var temp; //température

//Lecture de la température
temp = Number(prompt("Quelle est la température?"));

//Température comprise entre -40 et -10
if(temp >= -40 && temp <= -10){
    document.write("HAAAAAAA! Il fait froid.");
}
else if(temp<=-40){
    document.write("Ce n'est pas humain!");
}
else{
    document.write("Enfin une belle journée!");

}