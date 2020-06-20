//mars.js
//Par Maud Harvey
//Le 23 mai 2020

//Variables pour le canevas
var canvas = document.getElementById("myCanvas");
//Création d'un drawing object, variable qui nous permet de dessiner
var ctx = canvas.getContext("2d");
//Gradient Radial du orange vers le noir
var grd = ctx.createRadialGradient(150, 150, 20, 150, 150, 120);
grd.addColorStop(0, "orange");
grd.addColorStop(1, "black");

//Fond noir au canvas
ctx.rect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "black";
ctx.fill();

//Dessiner le cercle, planète Mars
ctx.beginPath();
ctx.arc(150, 150, 100, 0, 2*Math.PI);
ctx.fillStyle = grd;//Définit le style
ctx.fill();//Applique le style

//Zone de texte(Mars)
ctx.font = '40px Blippo, fantasy';
ctx.fillStyle = 'black';
ctx.fillText('MARS', 100, 160);


//Cercle pour les étoiles, boucle for x15
var positionX=0;
var positionY=0;
for(var i=0; i<15; i++){
    console.log(positionX, positionY);
    positionX = Math.floor(Math.random() * (299));
    positionY = Math.floor(Math.random() * (299));
    if(positionX >=50 && positionX <=250){
        if(positionY >=50 && positionY <=250) {
            i--;
        }
        else{
            ctx.beginPath();
            ctx.arc(positionX, positionY, 1, 0, 2*Math.PI);
            ctx.fillStyle = 'white';//Définit le style
            ctx.fill();//Applique le style
        }
    }
    else if(positionY >=50 && positionY <=250) {
        if (positionX >= 50 && positionX <=250) {
            i--;
        }
        else {
            ctx.beginPath();
            ctx.arc(positionX, positionY, 1, 0, 2*Math.PI);
            ctx.fillStyle = 'white';//Définit le style
            ctx.fill();//Applique le style
        }
    }
    else {
        ctx.beginPath();
        ctx.arc(positionX, positionY, 1, 0, 2*Math.PI);
        ctx.fillStyle = 'white';//Définit le style
        ctx.fill();//Applique le style
    }
}

//Code régional
$("#codeR").focusout(function () {
    var code = $('#codeR').val();
    if (code === "819" || code === "514" || code === "418"){
    }
    else{
       $('#codeValidation').removeClass('d-none');
        $('#codeR').val("");
    }
});


