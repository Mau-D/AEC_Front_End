//Exercice sur les évènements de la souris
let positionflash = 100;
let largeurEcran =  screen.width - 200; //connaître la largeur de l'écran -200(position de départ + largeur de l'image)
console.log(largeurEcran);
//Déplacer vers la gauche
$("#boutonGauche" ).click(function() {
    if(positionflash > 100) {
        positionflash -= 100;
        $('#flashID').css("left", positionflash);
    }
});
//Correction
//$("#boutonGauche").click(function() {
//     gauche -=10;
//
//     //$('#imgFlash').css("left",gauche+"px");
//     $( "#imgFlash" ).animate({ "left": "-=50px" }, "slow" );
// });
//Déplacer vers la droite
$( "#boutonDroite" ).click(function() {
    if(positionflash < largeurEcran ) {
        positionflash += 100;
        $('#flashID').css("left", positionflash);
        console.log(positionflash);
    }
});
//Correction
//$("#boutonDroite").click(function() {
//     gauche += 10;
//     //$('#imgFlash').css("left",gauche+"px");}
//     $("#imgFlash").animate({"left": "+=50px"}, "slow");
// });

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
//Correction
//$("#boutonChangerImage").click(function() {
//     var imageFlashSRC = $('#flashID').attr("src");
//     if(imageFlashSRC === "flash.jpg"){
//         $('#flashID').attr("src","flash2.jpg");
//     }
//     else{
//         $('#flashID').attr("src","flash.jpg");
//     }
// });
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
let titre =false;
    $("#boutonAjouterTitre").click(function () {
        if (!titre) {
            $("#flashID").before("<h1>Justice League</h1>");
            $("h1").addClass("text-white");
            titre = true; //Pour afficher le titre une seule fois
        }
    });

//Dupliquer
let compteurClone = 0;
$( "#boutonDupliquer" ).click(function() {
    $( "#flashID" ).clone().appendTo( "#clonage" );
    compteurClone++;//Compter le nombre de clones
});
//Correction
//$("#boutonDupliquer").click(function() {
//     nbFlash++;
//     $('#imgFlash').append('<img id="flashID'+nbFlash+'" class="flashClass" src="flash.jpg" width="200px"/>');
//
// });
//Enlever une image
$("#boutonRalentir").click(function () {
    if (compteurClone > 0) {//Pour garder l'image de Flash
        $("#flashID").remove();
        compteurClone--;
    }
});
//Correction
//$("#boutonRalentir").click(function() {
//     $('#flashID'+nbFlash).remove();
//     nbFlash--;
// });

//Téléportation
let teleportation = false;
$( "#boutonTeleport" ).click(function() {
    if(!teleportation) {
        teleportation = true;
        $('#flashID').hide();
        $('.centralCity').append('<img src="img/Flash1.png" id="flashTeleporte" width="200px"/>');
    }
    else{
        teleportation = false;
        $('#flashTeleporte').remove();//Utiliser remove après un append
        $('#flashID').show();
    }
});
//Correction
//$("#boutonTeleport").click(function() {
//     if($("#flashID").is(":visible")){
//         $("#flashID").hide();
//
//         $("#flashIDBas").show();
//     }
//     else{
//         $("#flashID").show();
//
//         $("#flashIDBas").hide();
//     }
// });

//Vitesse suprême
let monTimer;
let vitesseSupreme = false;
$("#boutonVitesseSupreme").click(function() {
    if(!vitesseSupreme){
     monTimer = setInterval(function () {
         $("#flashID").toggle()}, 500);//toggle bascule entre hide et show avec l'intervalle donné
     vitesseSupreme = true;
    }
});

//Arrêter la vitesse suprême
$("#boutonFinVitesseSupreme").click(function() {
    clearInterval(monTimer);
    vitesseSupreme = false;
    $("#flashID").show();//Pour afficher Flash si l'arrêt a été fait lorsqu'il n'est pas visible
});

//Nuke
$( "#boutonNuke" ).click(function() {
    //Ajouter et enlever une classe
    $(".centralCity").addClass('explosion').removeClass('centralCity');
    $(".boom").hide("slow");
});
//bouton perso1, changer l'opacité
let camo = false;
$( "#boutonPerso1" ).click(function() {
    if(!camo) {
        $("#flashID").fadeTo("slow", 0.33);
        camo = true;
    }
    else{
        $("#flashID").fadeTo("slow", 1);
        camo = false;
    }
});
//bouton perso2, changer la grandeur de l'image à chaque clic de souris et retour normal avec un double-clic
let grandeurImage = 200;
$("#boutonPerso2").click(function() {
     grandeurImage +=100;
    $("#flashID").attr( "width", grandeurImage );
});
$("#boutonPerso2").dblclick(function() {
    grandeurImage = 200;
    $("#flashID").attr( "width", 200);
});

