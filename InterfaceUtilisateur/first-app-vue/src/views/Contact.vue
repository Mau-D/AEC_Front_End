<!--Contact.vue
Composant contact, formulaire
Maud Harvey
24 janvier 2021-->
<template>
 
    <div id="pageContact" class="container-fluid">      
        <!-- Dropdown pour le choix de la langue -->
    <div class="dropdown">
      <button class="dropbtn">{{languageChoosen}}</button>
      <div class="dropdown-content">
        <a @click="toggleLanguage(language)" v-for="language in languages" :key="language">{{language}}</a>
      </div>
    </div>     
          <div v-if="erreurs.length">
            <b>Corriger les erreurs suivantes:</b>
            <ul>
              <li v-for="erreur in erreurs" :key="erreur">
                {{erreur}}
              </li>
            </ul>
          </div>
          
          <fieldset>
            <legend class="w-auto px-2"><h1>Demande d'informations</h1></legend>
            <form id="formContact" class="p-5" v-on:submit="checkForm" novalidate=true>       
                <div class="form-group">
                    <label for="courriel" >{{ email | languageFilter(languageChoosen)}}</label>
                    <input v-model="courriel" required type="email" class="form-control" id="courriel" name="courriel" aria-describedby="email">
                    <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
                </div>
                <div class="form-group">
                    <label for="confirmcourriel">Confirmation du courriel</label>
                    <input v-model="confirmCourriel" required type="email" class="form-control" id="confirmcourriel" 
                        placeholder="Entrer votre courriel de nouveau">
                </div>
                <div class="form-group">
                    <label for="motDePasse" >{{ "password" | languageFilter(languageChoosen)}}</label>
                    <input v-model="motDePasse" required type="password" class="form-control" id="motDePasse" aria-describedby="passwordHelp">
                    <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
                </div>
                <div  class="form-group">
                    <label class="my-1 mr-2" for="subjects">Sujet</label>
                    <select required v-model="sujetChoisi" class="custom-select my-1 mr-sm-2" id="subjects">  
                        <option v-for="sujet in sujets" :key="sujet">{{sujet}}</option>
                    </select>                               
                </div>
                <div  class="form-group">
                    <label for="question">Écrire votre question</label>
                    <textarea v-model="question" required class="form-control" id="question" rows="3"></textarea>
                </div>                
                <button type="submit" class="btn btn-primary mt-5 mb-5">Soumettre</button>             
            </form>
          </fieldset>
    </div>
</template>

<script>
    import {TranslateMixin} from "../mixins/TranslateMixin"
   
  export default {
    name: 'contact',
    mixins:[TranslateMixin],
   
    data: function () {
        return {
       
        erreurs: [],
        email:"email",
        password:"",
       
        sujets: [
            "Achat de planche",
            "Conseils techniques",
            "Cours d'initiation",
            "Cours de yoga sur planche",
            "Autres",
        ],
        label:"",
        courriel: null,
        confirmCourriel: null,
        motDePasse: null,
        sujetChoisi: null,
        question: null,
        
    };
  },
  methods: {
    //Fonction pour vérifier les champs requis et le pattern du email
        checkForm: function (e) {
        //Vider le tableau des erreurs
        this.erreurs = [];
        if (!this.courriel) {
            this.erreurs.push("Un courriel est requis");
            //Si la fonction retourne faux ajouter un message d'erreur
        } else if (!this.checkEmail(this.courriel)) {
            this.erreurs.push("Un courriel valide est requis");
        }
        if (!this.confirmCourriel) {
            this.erreurs.push("Vous devez confirmer votre courriel");
        } else if (this.conrriel != this.courriel) {
            this.erreurs.push("Les deux courriels ne sont pas identiques");
        }
        if (!this.motDePasse) {
            this.erreurs.push("Un mot de passe est requis");
        }
        if (!this.sujetChoisi) {
            this.erreurs.push("Un sujet est requis");
        }
        if (!this.question) {
            this.erreurs.push("Une question est requise");
        }
        //Si il n'y a aucune erreur l'attribut submit du formulaire est vrai
        if (!this.erreurs.length) {
            return true;
        }
        //Empêche de rafraîchir la page lors du submit
        e.preventDefault();
        },
        //re.test retourne true si le pattern est suivi
        checkEmail: function (email) {
        var re = /[a-z]@[a-z].[a-z]/;
        return re.test(email);
        },
    },
   
  
  }
</script>

<style scoped>
    
    /*Centrer le formulaire*/
    #pageContact{
    background-image: url("../assets/img/accueil-wave.jpg");
    background-position: center;
    background-repeat: no-repeat;
    background-color: blue;
    background-size: cover;
    min-height: 100%;
    padding: 2%;
    }
    #formContact{
    width: 80%;
    margin: auto;
    }
    /*encadrement*/
    fieldset {
    font-size: 1.5rem;
    width: 90%;
    margin: auto;
    border: 1px dashed gray;
    border-radius: 15px;
    background-color: white;
    }
    legend {
    color: #008cba;
    }
    /*Bouton submit*/
    button {
    font-size: 1.5rem;
    float: right;
    background-color: #008cba;
    border: none;
    color: white;
    padding: 10px 20px;
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.2);
    }
    button:hover {
    background-color: #024257;
    }
    /*Pour le dropdown, choix de la langue */
/* Dropdown Button */
.dropbtn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #ddd;}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {display: block;}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {background-color: #3e8e41;}
</style>
