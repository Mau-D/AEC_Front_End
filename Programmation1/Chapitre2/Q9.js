//Faire un programme qui lit un nom d’utilisateur et un mot de passe. Si le nom d’utilisateur est “admin” et
// le mot de passe “12345”, affichez le message suivant : « Bonjour [nom de l’utilisateur] ».
// Si les informations ne sont pas correctes, affichez le message suivant : « Votre nom d’utilisateur ou
// votre mot de passe est invalide ».

var nom; //Nom d'utilisateur
var password; //Mot de passe

//Lecture du nom d'utilisateur et du mot de passe

nom = prompt("Entrez votre nom d'utilisateur.");
password = prompt("Entrez votre mot de passe");

if (nom === "admin" && password === "12345" ){
        document.write("Bonjour " + nom );
}
else{
    document.write("Votre nom d'utilisateur ou votre mot de passe est invalide.");
}