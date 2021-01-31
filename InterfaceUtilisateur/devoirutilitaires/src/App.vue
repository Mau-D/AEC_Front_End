

<template>
  <div id="app">
    <exercice1></exercice1>
    <exercice2></exercice2>
  </div>
</template>

<script>
import exercice1 from './views/Exercice1.vue'
import exercice2 from './views/Exercice2.vue'


export default {
  name: 'App',
  components: {
    exercice1,
    exercice2
    
  }
}
</script>

<style>
/*Classe appliquée grâce à une méthode dans le mixin */
  .classRouge{
    color: red;
  }
</style>
