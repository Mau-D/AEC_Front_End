

<template>
  <div id="app">
    <exercice-1></exercice-1>
    <exercice-2></exercice-2>
   
    <exercice3></exercice3>

  </div>
</template>

<script>
import exercice1 from './views/Exercice1.vue'
import exercice2 from './views/Exercice2.vue'
import exercice3 from './views/Exercice3.vue'


export default {
  name: 'App',
  components: {
    exercice1,
    exercice2,
    exercice3
  }
}
</script>

<style>
/*Classe appliquée grâce à une méthode dans le mixin */
  .classRouge{
    color: red;
  }
</style>
