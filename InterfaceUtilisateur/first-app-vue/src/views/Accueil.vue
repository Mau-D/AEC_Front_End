<!--Accueil.vue
Composant accueil, page principale
Maud Harvey
26 janvier 2021-->
<template>
  <div id="accueil" class="container-fluid">
    <div class="row">
      <div class="col-sm-6">
          <img class="img-fluid ombre z1g mx-1 mx-sm-5 my-5 w-75" src="../assets/img/accueil-image.jpg"  alt="surf">                                       
          <div id="textSlogan" class="text-light z2g text-center pt-3">
              <h1>SURF = mon mode de vie</h1>
          </div>
      </div>
      <div class="offset-sm-1 col-sm-5">
      <!-- Texte de bienvenue -->
          <div class="z1d text-justify p-1 mx-1 mx-sm-5 my-5 w-75 p-5">
              <h1 class="text-center">Surf Spirit</h1>
              <p> Notre mission, vous faire connaître la liberté que nous offre les flots de l'eau.
                  La sensation des vagues qui battent au même rythme de votre coeur.
                  Chacun pour trouver une planche représentant ces pensées et sera le véhicule idéal vers des moments de sérénité.
                  Consulter nos produits selon vos expériences et vos attentes.
                  Nous sommes là pour vous guider dans votre choix.
                  D'autres services sont offerts comme de l'initiation ou de la location pour vous initier à ce mode de vie.
              </p>
          </div>                    
          <img class="img-fluid ombre pt-3 z2d transparency" src="../assets/img/accueil-wave.jpg"  alt="vague">                   
      </div> 
    </div>
    
    <div class="row" id="logo">   
      <col class=" col-sm-12">
            <img @click="update(true)" class="img-fluid mx-auto" src="../assets/img/logo-surf.png" title="Cliquez" alt="surf">                        
      <col> 
       
    </div>
    <div class="row">
        <div class="offset-sm-3 col-sm-6 text-center">
            <h1>Nos points forts</h1>
            <ul>
                <li>Grand choix d'inventaire</li>
                <li>Service personnalisé</li>
                <li>Tester nos produits</li>
                <li>Tester nos produits</li>
            </ul>
        </div>  
    </div>
  
     <apropos 
      v-if="showModal" 
      @update-show-modal="update" 
     >
    </apropos>
   
  </div>

   
  
</template>

<script>
  import apropos from '../components/APropos'

  export default {
    name: 'accueil',
    data: function () {
            return {
                showModal: false,
                textAPropos: false
            }
          },
    methods: {
        //Fonction qui associé à l'événement personnalisé du composant-enfant
        update(showModal) {
            this.showModal = showModal;
        }
    },  
   components: { apropos },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  /*****Page d'accueil*****/
  #textSlogan {
    background-color: rgba(201, 76, 76, 0.3);
  }
  /*Position image vs texte*/
  .z1g {
    left: 0;
    top: 0;
    z-index: 1;
  }
  .z2g {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
    height: 30%;
    width: 75%;
  }
  .z1d {
    position: absolute;
    right: 0;
    top: 0;
    z-index: 1;
  }
  .z2d {
    position: absolute;
    left: 0;
    bottom: -30%;
    z-index: 2;
    height: 100%;
    width: 75%;
  }
  .transparency {
    opacity: 0.4;
  }
  #logo{
    height: 20vh;
  }
  #logo div{
    height: 20vh;
  }
  #logo img{
    height: 100%;
  }
  #logo img:hover{
    height: 120%;
  }
 /*Enlever les points de la liste */
 ul{
   list-style-type: none;
 }

</style>
