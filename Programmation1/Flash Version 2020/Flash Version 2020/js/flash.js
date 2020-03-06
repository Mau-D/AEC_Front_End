//Exercice sur les évènements de la souris
let positionflash = 100;

//Déplacer vers la gauche
$( "#boutonGauche" ).click(function() {
    positionflash += 100;
    $('#flashID').css("left" , positionflash);
});
//Déplacer vers la droite
$( "#boutonDroite" ).click(function() {
    positionflash -= 100;
    $('#flashID').css("left" , positionflash);
});
//Changer l'image
let image = "flash1";
$( "#boutonChangerImage" ).click(function() {
    if(image === "flash1") {
        $('#flashID').attr("src", "img/Flash2.png");
        image= "flash2";
    }
    else {
        $('#flashID').attr("src", "img/Flash1.png");
        image = "flash1";
    }
});
//Enlever ou faire disparaître l'image
$( "#boutonEnleverImage" ).click(function() {
    $('#flashID').hide("slow");
});
//Faire apparaître l'image
$( "#boutonAjouterImage" ).click(function() {
    $('#flashID').show(2000);
});
//Ajouter l'attribut alt
$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr("alt", "photo de Flash");
});
//Ajouter un titre h1 avant la photo
$( "#boutonAjouterTitre" ).click(function() {
    $( "#flashID" ).before( "<h1>Justice League</h1>");
    $( "h1" ).addClass( "text-white" );
});
//Dupliquer
$( "#boutonDupliquer" ).click(function() {
    $( "#flashID" ).clone().appendTo( "#clonage" );
});
//Enlever une image
$( "#boutonRalentir" ).click(function() {
    $( "#flashID" ).remove();
});
//Téléportation
let teleportation = "false";
$( "#boutonTeleport" ).click(function() {
    if(teleportation === "false") {
        teleportation = "true";
        $('#flashID').hide();
        $('.centralCity').append('<img src="img/Flash1.png" id="flashTeleporte" width="200px"/>');
    }
    else{
        teleportation = "false";
        $('#flashTeleporte').remove();//Utiliser remove après un append
        $('#flashID').show();
    }
});
//Vitesse suprême


let monTimer;
let vitesseSupreme = false;
$( "#boutonVitesseSupreme" ).click(function() {
    if(!vitesseSupreme){
     monTimer = setInterval(function () {
         $("#flashID").toggle()}, 500);
     vitesseSupreme = true;
}
});

//Arrêter la vitesse suprême
$( "#boutonFinVitesseSupreme" ).click(function() {
    clearInterval(monTimer);
    vitesseSupreme = false;
    $("#flashID").show();
});

//Nuke
$( "#boutonNuke" ).click(function() {
    //Ajouter et enlever une classe
    $(".centralCity").addClass('explosion').removeClass('centralCity');
    $(".boom").hide("slow");
});
//bouton perso1, changer l'opacité
$( "#boutonPerso1" ).click(function() {
    $("#flashID").fadeTo( "slow", 0.33 );
});
//bouton perso2, changer la grandeur de l'image à chaque clic
let grandeurImage = 200;
$( "#boutonPerso2" ).click(function() {
     grandeurImage +=100;
    $("#flashID").attr( "width", grandeurImage );
});


