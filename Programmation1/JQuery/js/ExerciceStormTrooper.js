//Exercice1 JQuery, StormTrooper

//Attr
//Ajoutez le title suivant à l’image de stormtrooper dont le id est stormBlanc “Pas facile la vie de Stormtrooper”.
$('#stormBlanc').attr("title" , "Pas facile la vie de Stormtrooper");
//À la même image, ajoutez l’attribut alt pour “image d’un stormtrooper blanc”.
$('#stormBlanc').attr("alt" , "image d’un stormtrooper blanc");
//Changez cette image pour nouveauStorm.jpeg
$('#stormBlanc').attr("src" , "images/nouveauStorm.jpeg");
//À la ligne 79, changez le font-awesome (sa classe) pour "fas fa-fighter-jet"
$('#fontAChanger').attr("class" , "fas fa-fighter-jet");

//css
//Changez le dimension du texte .row4 h1 pour 4rem.
$('.row4 h1').css("font-size" , "4rem");
//Changez l’opacité de la classe orange pour .8.
$('.orange').css("opacity" , ".8");
//Changez la couleur de fond de la classe fondNoir pour un gris foncé.
$('.fondNoir').css("background-color" , "#A9A9A9");
//Changez la couleur de fond de la classe fondBlanc pour un gris pâle.
$('.fondBlanc').css("background-color" , "#D3D3D3");

//html et hide()
//Changez le titre Starwars Stormtrooper pour “Vive les Stormtroopers”
$('#changeLeTitre').html("Vive les Stormtroopers");
//Changez tout le texte sous Darth Vader pour  uniquement “Père de Luke Skywalker”
$('#changeLeTexte').html("Père de Luke Skywalker");
//Cacher  une section de votre choix.
$('#cacher').hide();