<template>
  <div id="app">
    <accueil></accueil>    
    <contact></contact>    
    <inscription></inscription>    
  </div>
</template>

<script>
  import accueil from './components/Accueil.vue'
  import contact from './components/Contact.vue'
  import inscription from './components/Inscription.vue'



  export default {
    name: 'App',
    components: {
            accueil,
            contact,
            inscription
    }
  }
</script>

<style>

</style>
