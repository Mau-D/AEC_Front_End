//Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur

var fond; //Couleur de fond background
var text; //Couleur du texte color

var message; //Texte affiché

//lecture des variables
fond = prompt("Choisir une couleur de fond: bleu rouge ou vert");
text = prompt("Chosir une couleur de texte: noir blanc ou gris");
message = prompt("Écrire le message que vous voulez afficher.");

if (fond === "bleu"){
    if(text === "noir") {
        console.log("%c" + message, "background: blue; color: black");
    }
    else if (text === "blanc"){
        console.log("%c" + message, "background: blue; color: white");
    }
    else if (text === "gris"){
        console.log("%c" + message, "background: blue; color: grey");
    }
    else{
        console.log("Vous n'avez pas entré correctement la couleur");
    }
}
else if (fond === "rouge"){
    if(text === "noir") {
        console.log("%c" + message, "background: red; color: black");
    }
    else if (text === "blanc"){
        console.log("%c" + message, "background: red; color: white");
    }
    else if (text === "gris"){
        console.log("%c" + message, "background: red; color: grey");
    }
    else{
        console.log("Vous n'avez pas entré correctement la couleur");
    }
}
else if (fond === "vert"){
    if(text === "noir") {
        console.log("%c" + message, "background: green; color: black");
    }
    else if (text === "blanc"){
        console.log("%c" + message, "background: green; color: white");
    }
    else if (text === "gris"){
        console.log("%c" + message, "background: green; color: grey");
    }
    else{
        console.log("Vous n'avez pas entré correctement la couleur");
    }
}
else{
    console.log("Vous n'avez pas entré correctement la couleur");
}
