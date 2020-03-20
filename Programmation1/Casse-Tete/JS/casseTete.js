//CasseTete.js
//Maud Harvey
//19 mars 2020

//Créer une variable globale booléenne qui se nomme premierClique qui vaut true au démarrage.
//Pour distonguer le premier clique du deuxième sur le casse-tête

var $premierClique = true;

//Lorsque la souris passe par dessus une pièce, le curseur doit devenir un pointeur
$('.img-fluid').css('cursor','pointer');

//Lors d'un premier clique , l'image en question doit disparaître

$(".img-fluid").click(function () {
    var $idImage = "";
    var $srcImage = "";
    if ($premierClique === true){ //premier clique
        $(this).hide();
        $idImage = $(this).attr('id');
        $idImage = '#' + $idImage;
        $srcImage = $(this).attr('src');
        $premierClique = false;
        console.log($idImage);
        console.log($srcImage);
    }
    else {  //deuxième clique
        $(this).attr('src',$srcImage);
    }
});
