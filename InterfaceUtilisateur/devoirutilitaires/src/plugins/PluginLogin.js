import Vue from "vue";

export default {
  install() {
    Vue.directive("loginform", {
      bind(el) {
        el.innerHTML = `<form class="p-5"  novalidate=true>               
          <div class="form-group">
              <label for="courriel">Courriel</label>
              <input type="email" class="form-control" id="courriel" name="courriel" aria-describedby="email">
              <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
          </div>
          <div class="form-group">
              <label for="motDePasse">Mot de passe</label>
              <input type="password" class="form-control" id="motDePasse" aria-describedby="passwordHelp">
              <small id="passwordHelp" class="form-text text-muted">Ne partager pas votre mot de passe</small>
          </div>
          <button type="submit" class="btn btn-primary mt-5">Connexion</button>
        </form>`;

        console.log("hello");
      },
    });
  },
};
