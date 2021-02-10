<template>
  <div id="app">
    <div class="container mx-auto mt-5 linear-gradient">
      <h1 v-mydirectiverouge="'red'">Connexion</h1>
      <div v-if="erreurs.length">
          <b>Corriger les erreurs suivantes:</b>
          <ul>
              <li v-for="erreur in erreurs" :key="erreur">
              {{erreur}}
              </li>
          </ul>
      </div>
          
      <form class="p-5"  novalidate=true>               
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
    </div>
  </div>
</template>

<script>
import { MixinLogin } from '../mixinLogin'

export default {
  name: 'login',
  mixins:[MixinLogin],
  data: function () {
      return {
      erreurs: [],
      }
  },
  directives:{
    mydirectiverouge: function(el, binding) {
    el.style.background = binding.value;
    console.log("hello");
  }}
  
  
}
</script>
<style>

</style>
