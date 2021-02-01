<!--Exercice 1, Utilitaire dans votre application VueJS-->
<!--On déclarera deux composants qui utilisent un mixin-->
<template id="ex1">
  <div>
    <h1>Exercice 1, Utilisation de mixin dans deux composants</h1>
    <component-1></component-1>
    <component-2></component-2>

  </div>
</template>

<script>
import Component1 from '../components/Component1.vue'
import Component2 from '../components/Component2.vue'


export default {
  components: { Component1, Component2 },
  name: 'exercice1',
}
</script>
<style scoped>
  div{
    text-align: center;  
    }
  #ex1{
    height: 100vh;
  }
</style>