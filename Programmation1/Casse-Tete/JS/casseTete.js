//CasseTete.js
//Maud Harvey
//19 mars 2020 ***

//Créer une variable globale booléenne qui se nomme premierClique qui vaut true au démarrage.
//Pour distonguer le premier clique du deuxième sur le casse-tête

var $premierClique = true;
var $idImage = "";
var $srcImage = "";
var compteur = 0;
//correction
//let premierClick = true;
// let idImage1;
// let idImage2;
// let srcImage1;
// let srcImage2;

//Lorsque la souris passe par dessus une pièce, le curseur doit devenir un pointeur
$('.img-fluid').css('cursor','pointer');


//Créer une fonction Victoire
//correction
//function Victoire(){
//     let victoire =true;
//     for(let i=1; i<=9; i++){
//         if ($("#image" + i).attr("src") === "images/"+i+".jpg"){
//             victoire = true;
//         }
//         else{
//             victoire = false;
//             break;
//         }
//     }
// }
function Victoire() {
    var compteur = 0;
    var victoire = false;
    var imgfluidID = '';
    var imgfluidSRC = '';
   for(var i=1; i<10; i++){
       imgfluidID = '#image' + i + '';
       imgfluidSRC = 'images/' + i + '.jpg';
       if ($(imgfluidID).attr('src') === imgfluidSRC){
           compteur++;
       }
   }
if(compteur === 9){//Créer une nouvelle division au-dessus du casse-tête, lors du victoire
    victoire = true;
    $('.container').prepend("<div class='row text-center' id='haut'><div class='offset-3 col-6'><img class='img-fluid' id='winner' src='images/winner.jpg' alt='winner'/></div></div>");
    $('#winner').css('height','25vh').css('width', '50%');
}
else {
    victoire = false;
}
return victoire;
}
//Lors d'un premier clique , l'image en question doit disparaître
//correction
//$('.img-fluid').click(function() {
//    if(premierClick){
//        idImage1 = $(this).attr("id");
//        srcImage1 = $(this).attr("src");
//        premierClick = false;
//    }
//    else{
//        idImage2 = $(this).attr("id");
//        srcImage2 = $(this).attr("src");
//
//        $("#" + idImage1).attr("src",srcImage2);
//        $("#" + idImage2).attr("src",srcImage1);
//        premierClick = true;
//        Victoire();
//    }
//
// });


$(".img-fluid").click(function () {
    console.log($premierClique);
    if ($premierClique){ //premier clique
        $(this).hide();
        $idImage = $(this).attr('id');
                                        //$('#'+id_object+'').remove();  Syntaxe pour appeler une variable
        $idImage = '#' + $idImage + '';
        $srcImage = $(this).attr('src');
        $premierClique = false;
    }
    //Lors du second clique on échange les src
    //Après le second clique, vérifiez toujours s'il s'agit d'une victoire en appelant la fonction
    else {  //deuxième clique
        $($idImage).attr('src',$(this).attr('src'));
        $($idImage).toggle();
        $(this).attr("src",$srcImage);
        console.log(this);
        $premierClique = true;
        compteur++;
        if (Victoire()){
            //Bonus compteur de coups
            $('#haut').append('<div class="col-3 my-auto"><p id="pts"></p></div>');
            $('#pts').html('Réussi en ' + compteur + ' coups!');
        }
    }
});
$("#boutonRecommencer").click(function () {
    $('#image1').attr('src', 'images/4.jpg');
    $('#image2').attr('src', 'images/9.jpg');
    $('#image3').attr('src', 'images/5.jpg');
    $('#image4').attr('src', 'images/3.jpg');
    $('#image5').attr('src', 'images/7.jpg');
    $('#image6').attr('src', 'images/6.jpg');
    $('#image7').attr('src', 'images/1.jpg');
    $('#image8').attr('src', 'images/2.jpg');
    $('#image9').attr('src', 'images/8.jpg');
    compteur = 0;
    $('#haut').remove();
});
$("#boutonTricher").click(function () {
    $('#image1').attr('src', 'images/1.jpg');
    $('#image2').attr('src', 'images/2.jpg');
    $('#image3').attr('src', 'images/3.jpg');
    $('#image4').attr('src', 'images/4.jpg');
    $('#image5').attr('src', 'images/5.jpg');
    $('#image6').attr('src', 'images/6.jpg');
    $('#image7').attr('src', 'images/7.jpg');
    $('#image8').attr('src', 'images/8.jpg');
    $('#image9').attr('src', 'images/9.jpg');
    Victoire();
    compteur = 0;
});