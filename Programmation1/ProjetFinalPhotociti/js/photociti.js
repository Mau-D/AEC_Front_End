//photociti.js
//Projet final Programmation 1
//Maud Harvey
//26 mars 2020

//Effacer les étapes 2-4
$('#etape2').hide();
$('#etape3').hide();
$('#etape4').hide();
//Variables
let mot = "";
let tabMot = ["CS","M", "A", "U", "D", "H", "A", "R", "V", "E", "Y", "CS"];
let longueurCorrect = false;
let colonne = 'col-1';
let idImage = "";
let srcImage = "";
let saveChange = false;
let compteurEtape = 1;

//Carousel à pause lorsque survolé
     $('.carousel').carousel('pause');

//Créer une fonction pour gérer les erreurs de mot trop court ou trop long, entre 3 et 12 caractères
function longueurMot() {
    mot= $('#mot').val();
    if(mot.length < 3 || mot.length > 12){
        alert("Votre mot doit être entre 3 et 12 caractères.");
        longueurCorrect = false;
    }
    else{
        longueurCorrect = true;
    }
}
//Fonction pour gérer les accents
function accentMot(){
    //Faire un tableau avec les lettres du mot
    for(let i=0; i<mot.length;i++){
        tabMot[i] = mot[i].toUpperCase();
        if(tabMot[i] === "É" ||
            tabMot[i] === "È" ||
            tabMot[i] === "Ê" ||
            tabMot[i] === "Ë"){
            tabMot[i] = "E";
        }
        else if(tabMot[i] === "À"){
            tabMot[i] = "A";
        }
        else if(tabMot[i] === "Ù"){
            tabMot[i] = "U";
        }
        else if(tabMot[i] === "*"){ //caractères spéciaux
            tabMot[i] = "CS";
        }
    }
}

//Fonction pour placer les lettres du mot dans le cadre
function affichage() {
    //Largeur des colonnes selon le nombre de lettre et caractère
    if (tabMot.length === 3) {
        colonne = 'col-4';
    } else if (tabMot.length === 4) {
        colonne = 'col-3';
    } else if (tabMot.length === 5 || tabMot.length === 6) {
        colonne = 'col-2';
    } else {
        colonne = 'col-1';
    }
    //Mettre la bonne classe aux bonnes colonnes, afficher les colonnes
    //Placer les images des lettres dans le cadre
    for (let j= 1; j<= tabMot.length; j++) {
        $('#colonne' + j).addClass(colonne).removeClass('d-none');
        idImage = '#image' + j;
        srcImage = 'img/Letters/' + tabMot[j - 1] + '/' + tabMot[j - 1] + '1.jpg';
        $(idImage).attr('src', srcImage);
    }
}
//Fonction pour les images du caroussel
function carousselModal(lettre){
    for(let k=1; k<=5; k++){
        $('#item'+ k).attr('src', 'img/Letters/' + lettre + '/' + lettre + k + '.jpg');
    }
}

//Appeler les fonctions lors d'un clic ou d'un enter
$("#go").click(function () {
    //Effacer le tableau mot
    tabMot = [];
    longueurMot();
    if(longueurCorrect){
        accentMot();
        $('#mot').val(mot);
        //Cacher toutes les colonnes et enlever les classes col-
        for(let photo=1; photo<=12; photo++){
            $('#colonne' + photo).removeClass(colonne).addClass('d-none');
        }
        affichage();//Affichage du cadre
    }
    else {
        mot = "";
    }
});
$("input").on("keypress", function(event) {
    //Effacer le tableau mot
    tabMot = [];
    if (event.which === 13) {//Correspond au Enter
        longueurMot();
        if(longueurCorrect){
            accentMot();
            $('#mot').val(mot);
            //Cacher toutes les colonnes et enlever les classes col-
            for(let photo=1; photo<=12; photo++){
                $('#colonne' + photo).removeClass(colonne).addClass('d-none');
            }
            affichage();//Affichage du cadre
        }
        else {
            mot = "";
        }
    }
});
//Affichage du modal avec les choix de lettre
$('.bgCadre img').click(function () {
    srcImage = $(this).attr('src');
    idImage = '#' + $(this).attr('id');
    let lettre = srcImage[12];
    if(lettre === "C"){//Pour les caractères spéciaux
        if(srcImage[13] === "S"){
            lettre = "CS";
        }
    }
    carousselModal(lettre);
    $('#imagesModal').modal('show');
});
//Changement de lettre
$('.carousel-item img').click(function () {
    let srcNouvelleImage;
    $(idImage).hide('slow');
    srcNouvelleImage = $(this).attr('src');
    $(idImage).attr('src',srcNouvelleImage);
    $(idImage).show('slow');
});
//Sauvegarder
$('#save').on('click', function() {
        saveChange = true;
});
//Sans sauvegarder
$('#imagesModal').on('hidden.bs.modal', function () {
    if(!saveChange){
        $(idImage).hide('slow');
        $(idImage).attr('src',srcImage);
        $(idImage).show('slow');
    }
});
//Bouton étape suivante et étape précédente
$('.fa-arrow-right').click(function () {//étape suivante
        compteurEtape++;
        $('#etape1').hide();
        $('#etape2').hide();
        $('#etape3').hide();
        $('#etape4').hide();
        $('#etape' + compteurEtape).show();
});
$('.fa-arrow-left').click(function () {//étape précédente
        compteurEtape--;
        $('#etape1').hide();
        $('#etape2').hide();
        $('#etape3').hide();
        $('#etape4').hide();
        $('#etape' + compteurEtape).show();
});
//Changer le fond du cadre
$('#fondCouleur div').click(function () {
    srcImage = $(this).css('background-image').replace('url("', '').replace('")', '');
    $('.bgCadre').css('background-image', 'url("' + srcImage + '")');
    //Animation des rectangles
    $(this).animate({
        height: `toggle`
    });
    $(this).animate({
        height: `toggle`
    });
});
