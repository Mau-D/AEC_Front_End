//Créez un programme permettant de changer la couleur du texte de la console.
// Offrez trois choix de couleurs de fond et de texte à l'utilisateur
// Affichez une ligne de texte de la couleur de fond et de texte choisis par l'utilisateur


//!!!!Erreur le texte doit être affiché dans la console

var fond; //couleur du fond
var text; //couleur du texte
var string = "Voici du texte"; //texte à afficher

//Lire la couleur de fond et de texte

fond = prompt("Choisir une couleur de fond: (B) pour bleu, (R) pour rouge et (V) pour vert");
text = prompt("Choisir une couleur de fond: (N) pour noir, (B) pour blanc et (T) pour turquoise");

if(fond.toUpperCase() === "B"){ //Fond Bleu
    if(text.toUpperCase() === "N"){ //texte noir
        document.write("<h1 class= BN>" + string + "</h1>");
    }
    else if (text.toUpperCase() === "B"){ //texte blanc
        document.write("<h1 class= BB>" + string + "</h1>");
    }
    else if (text.toUpperCase() === "T"){   ////texte turquoise
        document.write("<h1 class= BT>" + string + "</h1>");
    }
    else{
        document.write("Erreur! entrée incorrect!");
    }
}

else if(fond.toUpperCase() === "R"){ //Fond rouge
    if(text.toUpperCase() === "N"){ //texte noir
        document.write("<h1 class= RN>" + string + "</h1>");
    }
    else if (text.toUpperCase() === "B"){ //texte blanc
        document.write("<h1 class= RB>" + string + "</h1>");
    }
    else if (text.toUpperCase() === "T"){   ////texte turquoise
        document.write("<h1 class= RT>" + string + "</h1>");
    }
    else{
        document.write("Erreur! entrée incorrect!");
    }
}

else if(fond.toUpperCase() === "V"){ //Fond vert
    if(text.toUpperCase() === "N"){ //texte noir
        document.write("<h1 class= VN>" + string + "</h1>");
    }
    else if (text.toUpperCase() === "B"){ //texte blanc
        document.write("<h1 class= VB>" + string + "</h1>");
    }
    else if (text.toUpperCase() === "T"){   ////texte turquoise
        document.write("<h1 class= VT>" + string + "</h1>");
    }
    else{
        document.write("Erreur! entrée incorrect!");
    }
}
else{
    document.write("Erreur! entrée incorrect!");
}

