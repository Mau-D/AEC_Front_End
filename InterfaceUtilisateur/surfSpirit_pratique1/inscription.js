//contact.js
//Composant contact, formulaire
//Maud Harvey
//30 décembre 2020

Vue.component("inscription", {
  data: function () {
    return {
      villes: [
        "Jonquière",
        "Montréal",
        "Québec",
        "Trois-Rivières",
        "Victoriaville",
      ],
      ville: "",
    };
  },

  //Rendu de deux boutons et du nombre de clic
  template: `<div class="container">
            <h1>Inscription</h1>
            <form class="p-5">
                <div class="form-group">
                    <label for="nom">Nom</label>
                    <input required type="text" class="form-control" id="nom">
                </div>
                <div class="form-group">
                    <label for="prenom">Prénom</label>
                    <input required type="text" class="form-control" id="prenom">
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Courriel</label>
                    <input required type="text" class="form-control" id="courriel" aria-describedby="emailHelp"
                        placeholder="">
                    <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
                </div>
                
                <div class="form-group">
                    <label for="confirmInputEmail1">Confirmation du courriel</label>
                    <input required type="email" class="form-control" id="confirmInputEmail1" 
                        placeholder="Confirmer votre courriel">
                </div>
                <div class="form-group">
                    <label for="motDePAsse">Mot de passe</label>
                    <input required type="password" class="form-control" id="motDePasse" placeholder="Mot de passe">
                    <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
                </div>
                <div class="form-group">
                    <label for="confirmMotDePAsse">Mot de passe</label>
                    <input required type="password" class="form-control" id="confirmMotDePAsse" placeholder="Mot de passe">
                </div>
                <div class="form-group">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexe" id="homme" value="homme" checked>
                        <label class="form-check-label" for="homme">
                            Homme
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexe" id="femme" value="femme">
                        <label class="form-check-label" for="femme">
                            Femme
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="sexe" id="autre" value="autre">
                        <label class="form-check-label" for="autre">
                            Autre
                        </label>
                    </div>
                </div>
                <div class="form-group">
                    <label class="my-1 mr-2" for="villes">Ville</label>
                    <select required v-bind:value="ville" class="custom-select my-1 mr-sm-2" id="villes">
                        <option value="" disabled selected>Choisir une ville</option>
                        <option v-for="ville in villes">{{ville}}</option>
                    </select>
                </div>

                
                <button type="submit" class="btn btn-primary mt-5">Soumettre</button>
            </form>
    </div>`,
});
