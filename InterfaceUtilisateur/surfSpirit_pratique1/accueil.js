//Composant Vue , affichage d'une valeur saisi en input
//Émettre un événement sais-text sur le input, la valeur inscrite dans le champ($event.target.value) payload pour passer les données au parent
Vue.component("accueil", {
  template: `  
 
<div class="container-fluid  vh-100">
    <div class="row h-50">
        <div class="col-sm-6 vh-50">
            <img class="img-fluid ombre z1g mx-1 mx-sm-5 my-5 h-100 w-75" src="img/accueil-image.jpg"  alt="surf">                                       
            <div id="textSlogan" class="text-light z2g text-center pt-3">
                <h1>SURF = mon mode de vie</h1>
            </div>
        </div>
   
        <div class="offset-sm-1 col-sm-5 vh-50">
        <!-- Texte de bienvenue -->
            <div class="z1d text-justify p-1 mx-1 mx-sm-5 my-5 h-100 w-75 p-5">
                <h1 class="text-center">Surf Spirit</h1>
                <p> Notre mission, vous faire connaître la liberté que nous offre les flots de l'eau.
                    La sensation des vagues qui battent au même rythme de votre coeur.
                    Chacun pour trouver une planche représentant ces pensées et sera le véhicule idéal vers des moments de sérénité.
                    Consulter nos produits selon vos expériences et vos attentes.
                    Nous sommes là pour vous guider dans votre choix.
                    D'autres services sont offerts comme de l'initiation ou de la location pour vous initier à ce mode de vie.
                </p>
            </div>                    
            <img class="img-fluid ombre pt-3 z2d transparency" src="img/accueil-wave.jpg"  alt="vague">                   
        </div> 
    </div>
    <div class="row" id="logo">
        <div class="offset-sm-4 col-sm-4 h-100 text-center">

            <img @click="showModal = true" class="img-fluid h-100" src="img/logo-surf.png" title="Cliquez" alt="surf">
                   
        </div>
        <div class="col-sm-4">
                
        </div>
    </div>
    <div class="row">
        <div class="offset-sm-2 col-sm-8 ">
            <h1>Nos points forts</h1>
            <ul>
                <li>Grand choix d'inventaire</li>
                <li>Service personnalisée</li>
                <li>Tester nos produits</li>
                <li>Tester nos produits</li>
            </ul>
        </div>
                
    </div>

</div>`,
});
