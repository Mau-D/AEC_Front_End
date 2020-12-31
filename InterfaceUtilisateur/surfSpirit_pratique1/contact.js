//contact.js
//Composant contact, formulaire
//Maud Harvey
//30 décembre 2020

Vue.component("contact", {
  data: function () {
    return {
      sujets: [
        "Achat de planche",
        "Conseils techniques",
        "Cours d'initiation",
        "Cours de yoga sur planche",
        "Autres",
      ],
      courriel: "",
      sujet: "",
    };
  },
  props: {
    courrielprop: {
      type: String,
      //ajouter un validator qui valide si le props titre comprend seulement des caractères
      validator: function (inputValue) {
        return /^[a-z]@[a-z].[a-z]/.exec(inputValue);
      },
    },
  },

  //Rendu de deux boutons et du nombre de clic
  template: `<div class="container">
  
            <form class="p-5">
                <div class="form-group">
                    <label for="courriel">Courriel</label>
                    <input  v-model="courriel" required type="text" class="form-control" id="courriel" aria-describedby="emailHelp"
                        placeholder="">
                    <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
                </div>
                
                <div class="form-group">
                    <label for="confirmcourriel">Confirmation du courriel</label>
                    <input required type="email" class="form-control" id="confirmcourriel" 
                        placeholder="Confirmer votre courriel">
                </div>
                <div class="form-group">
                    <label for="motDePasse">Mot de passe</label>
                    <input required type="password" class="form-control" id="motDePasse" placeholder="Mot de passe" aria-describedby="passwordHelp">
                    <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
                </div>
                <div  class="form-group">
                    <label class="my-1 mr-2" for="subjects">Sujets</label>
                    <select required v-bind:value="sujet" class="custom-select my-1 mr-sm-2" id="subjects" >
                        <option value="" disabled selected>Choisir un sujet</option>    
                        <option v-for = "sujet in sujets" >{{sujet}}</option>
                    </select>
                </div>
                <div  class="form-group">
                    <label for="question">Écrire votre question</label>
                    <textarea required class="form-control" id="question" rows="3"></textarea>
                </div>
                
                <button type="submit" class="btn btn-primary mt-5">Soumettre</button>
            </form>
    </div>`,
});
