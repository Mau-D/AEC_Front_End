

<template>
  <div id="app">
    <exercice1></exercice1>
  </div>
</template>

<script>
import exercice1 from './views/Exercice1.vue'

export default {
  name: 'App',
  components: {
    exercice1
    
  }
}
</script>

<style>
/*Classe appliquée grâce à une méthode dans le mixin */
  .classRouge{
    color: red;
  }
</style>
