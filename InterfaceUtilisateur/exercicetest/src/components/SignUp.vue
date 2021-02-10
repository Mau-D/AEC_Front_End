<template>
  <div id="pageInscription" class="container-fluid">
        <div v-if="erreurs.length">
            <b>Corriger les erreurs suivantes:</b>
                <ul>
                <li v-for="erreur in erreurs" :key="erreur">
                {{erreur}}
                </li>
            </ul>
        </div>
        <fieldset>
        <legend class="w-auto px-2"><h1 v-mydirectivebleu="'blue'">Inscription</h1></legend>
        <form id="formInscription" class="p-5" novalidate=true>
            <div class="form-group">
                <label for="nom">Nom Complet</label>
                <input v-model="nomComplet" required type="text" class="form-control" id="nom" name="nom">
            </div>
            <div class="form-group">
                <label for="courriel">Courriel</label>
                <input v-model="courriel" required type="text" class="form-control" id="courriel" name="courriel" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted">Le courriel doit être valide</small>
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
            <button type="submit" class="btn btn-primary mt-5 mb-5">Enregistrer</button>
        </form>
        </fieldset>
    </div>
    
</template>

<script>
import { MixinLogin } from '../mixinLogin'
export default {
  name: 'signup',
  mixins:[MixinLogin],
   data: function () {
        return {
        erreurs: [],
        nomComplet: null,
        confirmMotDePasse: null,
        }
    
   },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
