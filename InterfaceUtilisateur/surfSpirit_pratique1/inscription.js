//inscription.js
//Composant inscription, formulaire avec validation personnalisée
//Maud Harvey
//30 décembre 2020

Vue.component("inscription", {
  data: function () {
    return {
      erreurs: [],
      nom: null,
      prenom: null,
      courriel: null,
      confirmCourriel: null,
      motDePasse: null,
      confirmMotDePasse: null,
      sexe: null,
      villes: [
        "Jonquière",
        "Montréal",
        "Québec",
        "Trois-Rivières",
        "Victoriaville",
      ],
      villeChoisie: null,
    };
  },
  methods: {
    //Fonction pour vérifier les champs requis et le pattern du email
    checkForm: function (e) {
      //Vider le tableau des erreurs
      this.erreurs = [];
      if (!this.nom) {
        this.erreurs.push("Votre nom est requis");
      }
      if (!this.prenom) {
        this.erreurs.push("Votre prenom est requis");
      }
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
      if (!this.confirmMotDePasse) {
        this.erreurs.push("La confirmation du mot de passe est requis");
      } else if (this.confirmMotDePasse != this.motDePasse) {
        this.erreurs.push("Les deux mots de passe ne sont pas identiques");
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
  //Rendu du formulaire d'inscription
  template: `<div class="container">
            <h1>Inscription</h1>
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
                    <label for="nom">Nom</label>
                    <input v-model="nom" required type="text" class="form-control" id="nom" name="nom">
                </div>
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input v-model="prenom" required type="text" class="form-control" id="prenom" name="prenom">
                </div>
                <div class="form-group">
                    <label for="courriel">Courriel</label>
                    <input v-model="courriel" required type="text" class="form-control" id="courriel" name="courriel" aria-describedby="emailHelp">
                    <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
                </div>                
                <div class="form-group">
                    <label for="confirmEmail">Confirmation du courriel</label>
                    <input  v-model="confirmCourriel" required type="email" class="form-control" id="confirmEmail" name="confirmEmail"
                        placeholder="Entrer votre courriel de nouveau">
                </div>
                <div class="form-group">
                    <label for="motDePasse">Mot de passe</label>
                    <input v-model="motDePasse" required type="password" class="form-control" id="motDePasse" name="motDePasse" aria-describedby="passwordHelp">
                    <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
                </div>
                <div class="form-group">
                    <label for="confirmMotDePasse">Confirmer votre mot de passe</label>
                    <input v-model="confirmMotDePasse" required type="password" class="form-control" id="confirmMotDePasse" name="confirmMotDePasse" placeholder="Entrer votre mot de passe de nouveau">
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input v-model="sexe" class="form-check-input" type="radio" name="sexe" id="homme" value="homme" checked>
                        <label class="form-check-label" for="homme">
                            Homme
                        </label>
                    </div>
                    <div class="form-check">
                        <input v-model="sexe" class="form-check-input" type="radio" name="sexe" id="femme" value="femme">
                        <label class="form-check-label" for="femme">
                            Femme
                        </label>
                    </div>
                    <div class="form-check">
                        <input  v-model="sexe" class="form-check-input" type="radio" name="sexe" id="autre" value="autre">
                        <label class="form-check-label" for="autre">
                            Autre
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="villes">Ville</label>
                    <select  v-model="villeChoisie" required class="custom-select my-1 mr-sm-2" id="villes">
                        <option disabled selected>Choisir une ville</option>
                        <option v-for="ville in villes">{{ville}}</option>
                    </select>
                </div>                
                <button type="submit" class="btn btn-primary mt-5">Enregistrer</button>
            </form>
    </div>`,
});
