//login.js
//Composant login, Connexion d'un utilisateur déjà enregistré
//Maud Harvey
//1er janvier 2021

Vue.component("login", {
  data: function () {
    return {
      erreurs: [],
      courriel: null,
      motDePasse: null,
    };
  },
  methods: {
    //Fonction pour vérifier les champs requis
    checkForm: function (e) {
      //Vider le tableau des erreurs
      this.erreurs = [];
      //Si il n'y a aucune erreur l'attribut submit du formulaire est vrai
      if (this.courriel && this.motDePasse) {
        return true;
      }
      if (!this.courriel) {
        this.erreurs.push("Votre courriel est requis");
      }
      if (!this.motDePasse) {
        this.erreurs.push("Votre mot de passe est requis");
      }

      //Empêche de rafraîchir la page lors du submit
      e.preventDefault();
    },
  },

  //Rendu d'un formulaire de contact
  template: `
  <div class="container">
            <h1>Connexion</h1>
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
                    <label for="motDePasse">Mot de passe</label>
                    <input v-model="motDePasse" required type="password" class="form-control" id="motDePasse" aria-describedby="passwordHelp">
                    <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
                </div>
                <button type="submit" class="btn btn-primary mt-5">Connexion</button>
            </form>
    </div>`,
});
