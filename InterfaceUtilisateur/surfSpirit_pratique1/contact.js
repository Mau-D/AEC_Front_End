//contact.js
//Composant contact, formulaire
//Maud Harvey
//30 décembre 2020

Vue.component("contact", {
  data: function () {
    return {
      erreurs: [],
      sujets: [
        "Achat de planche",
        "Conseils techniques",
        "Cours d'initiation",
        "Cours de yoga sur planche",
        "Autres",
      ],
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

  //Rendu d'un formulaire de contact
  template: `
  <div class="container">
            <h1>Demande d'informations</h1>
            <div v-if="erreurs.length">
                <b>Corriger les erreurs suivantes:</b>
                <ul>
                    <li v-for="erreur in erreurs">
                    {{erreur}}
                    </li>
                </ul>
            </div>
            <form class="p-5" v-on:submit="checkForm" novalidate=true>
                <div class="form-group">
                    <label for="courriel">Courriel</label>
                    <input v-model="courriel" required type="email" class="form-control" id="courriel" name="courriel" aria-describedby="email">
                    <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
                </div>
                <div class="form-group">
                    <label for="confirmcourriel">Confirmation du courriel</label>
                    <input v-model="confirmCourriel" required type="email" class="form-control" id="confirmcourriel" 
                        placeholder="Entrer votre courriel de nouveau">
                </div>
                <div class="form-group">
                    <label for="motDePasse">Mot de passe</label>
                    <input v-model="motDePasse" required type="password" class="form-control" id="motDePasse" aria-describedby="passwordHelp">
                    <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
                </div>
                <div  class="form-group">
                    <label class="my-1 mr-2" for="subjects">Sujets</label>
                    <select required v-model="sujetChoisi" class="custom-select my-1 mr-sm-2" id="subjects" >
                        <option disabled selected>Choisir un sujet</option>    
                        <option v-for = "sujet in sujets" >{{sujet}}</option>
                    </select>                               
                </div>
                <div  class="form-group">
                    <label for="question">Écrire votre question</label>
                    <textarea v-model="question" required class="form-control" id="question" rows="3"></textarea>
                </div>                
                <button type="submit" class="btn btn-primary mt-5">Soumettre</button>
            </form>
    </div>`,
});
