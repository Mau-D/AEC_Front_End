//Comicon.js
//Maud Harvey
//18 mars 2020
//Sous les boutons radio, vous devez créer 3 divisions cachées, pour chacun des éléments.
// Les divisions deviendront visibles lorsque l’usager effectue son choix.(Starwars, Marvel ou DC)
//Correction: Utiliser le hide() et le show() pour les sections des personnages
//$(".starwars").hide();
//$(".marvel").hide();
//$(".dc").hide();

let $radios = $('input[name="inlineRadioOptions"]');
let imageChoisi = "";
let personnageChoisi = "";

$radios.change(function() {
    let radioValue = $("input[name='inlineRadioOptions']:checked").val();

    if(radioValue === "Starwars"){
        $(".starwars").removeClass("d-none");//.show()
        $(".marvel").addClass("d-none");//.hide()
        $(".dc").addClass("d-none");//.hide()
        imageChoisi = "img/yoda.png";
        personnageChoisi = "Yoda";
    }
    else if(radioValue === "Marvel"){
        $(".marvel").removeClass("d-none");//idem
        $(".starwars").addClass("d-none");
        $(".dc").addClass("d-none");
        imageChoisi = "img/spiderman.png";
        personnageChoisi = "Spiderman";
    }
    else if(radioValue === "DC"){
        $(".dc").removeClass("d-none");//idem
        $(".starwars").addClass("d-none");
        $(".marvel").addClass("d-none");
        imageChoisi = "img/batman.jpg";
        personnageChoisi = "Batman";
    }
});


//Sous le champ, dans la section <small>, écrire valide en vert si le nom d’usager est disponible,
// nom usager non disponible en rouge si le nom d’usager est SLAY ou Test.
$("#nom").keyup(function () {
    var valueNom = $(this).val();
    if (valueNom === "SLAY" || valueNom === "Test"){
        $("#disponible").text("nom d'usager non disponible").css("color", "red");
    }
    else{
        $("#disponible").text("le nom d'usager est disponible").css("color", "green");
    }
});

//Sous le champ mot de passe, écrire Faible en rouge si le nombre de caractères est inférieur à 6. Écrire Moyen en
// jaune si le nombre de caractères est supérieur ou égal à 6. Écrire Fort en vert si le mot de passe est supérieur à 9,
// contient au moins une majuscule et au moins un nombre.
$("#password").keyup(function () {
    let valuePassword = $(this).val();
    let majPresent = valuePassword.match(/[A-Z]/);
    let nombrePresent = valuePassword.match(/[0-9]/);

    if(valuePassword.length > 9 && majPresent !== null  && nombrePresent !== null ){
        $("#motDePasse").text("Fort").css("color", "green");
    }
    else if (valuePassword.length >= 6){
        $("#motDePasse").text("Moyen").css("color", "#ffc107");
    }
    else {
        $("#motDePasse").text("Faible").css("color", "red");
    }
});

//À droite du champ 2e mot de passe, indiquer si les deux mots de passe sont identiques ou non.

$("#passwordConfirm").blur(function () {
    let valuePassword = $("#password").val();
    let valueConfirmPassword = $(this).val();
    if(valueConfirmPassword === valuePassword){
        $(".textConfirm").append("Mots de passe identique");
    }
    else {
        $(".textConfirm").append("Les deux mots de passe ne sont pas identiques");
    }
});

//L’adresse de courriel doit contenir un @ et un .
// Utilisez type=”text” pour faire cela même si le type=”email” le fait pour vous.
$("#courriel").blur(function () {
    let addCourriel = $(this).val();
    let arobas = addCourriel.match(/[@]/);
    let dot = addCourriel.match(/[.]/);
    if(arobas == null || dot == null){
        $("#confirmCourriel").text("Le courriel n'est pas valide").css("color", "red");
    }
});


//Lorsque l’usager sélectionne un personnage, l’image de Yoda, Superman ou Batman doit changer pour l’image
// du personnage en question. Les images doivent se trouver au préalable sur votre site.
// Il n’y a pas de téléversement pour ce travail.

$( "#personnagesStarWars" ).change(function() {
    personnageChoisi = $("#personnagesStarWars option:selected").text();
    if(personnageChoisi === "Yoda"){
        $('#imageStarWars').attr("src", "img/yoda.png");
        imageChoisi = "img/yoda.png";
    }
    else if(personnageChoisi === "Obiwan"){
        $('#imageStarWars').attr("src", "img/obiwan.png");
        imageChoisi = "img/obiwan.png";
    }
    else if(personnageChoisi === "Darth Vader"){
        $('#imageStarWars').attr("src", "img/darthVader.png");
        imageChoisi = "img/darthVader.png";
    }

});
$( "#personnagesMarvel" ).change(function() {
    personnageChoisi = $("#personnagesMarvel option:selected").text();
    if(personnageChoisi === "Spiderman"){
        $('#imageMarvel').attr("src", "img/spiderman.png");
        imageChoisi = "img/spiderman.png";

    }
    else if(personnageChoisi === "Thor"){
        $('#imageMarvel').attr("src", "img/thor.png");
        imageChoisi = "img/thor.png";

    }
    else if(personnageChoisi === "Hulk"){
        $('#imageMarvel').attr("src", "img/hulk.png");
        imageChoisi = "img/hulk.png";
    }

});

$( "#personnagesDC" ).change(function() {
    personnageChoisi = $("#personnagesDC option:selected").text();
    if(personnageChoisi === "Batman"){
        $('#imageDC').attr("src", "img/batman.jpg");
        imageChoisi = "img/batman.jpg";
    }
    else if(personnageChoisi === "Superman"){
        $('#imageDC').attr("src", "img/superman.png");
        imageChoisi = "img/superman.png";

    }
    else if(personnageChoisi === "Flash"){
        $('#imageDC').attr("src", "img/Flash1.png");
        imageChoisi = "img/Flash1.png";
    }
    else if(personnageChoisi === "Arrow"){
        $('#imageDC').attr("src", "img/arrow.png");
        imageChoisi = "img/arrow.png";
    }

});

//Lorsque la validation est acceptée, il faut cacher tout le formulaire,
// faire afficher uniquement la photo du personnage et une bulle de dessin animé
// avec toutes les informations du questionnaire.

$("#envoyer").click(function () {
    console.log(personnageChoisi);
    console.log(imageChoisi);
    $(".siteEntier").hide("slow");
    $("#fin").removeClass("d-none"); //On peut utiliser le hide et le show, ajouter une commande hide au début du fichier
    $('#imageFin').attr("src", imageChoisi);
    $('.nomUsager').html($('#nom').val());
    $('.addcourriel').html($('#courriel').val());
    $('.personnage').html(personnageChoisi);
});