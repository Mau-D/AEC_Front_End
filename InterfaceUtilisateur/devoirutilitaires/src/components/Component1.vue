<!--Exercice 1, Utilitaire dans votre application VueJS-->
<!--On déclarera deux composants qui utilisent un mixin-->
<!--Premier composant-->
<template>
  <div>
    <h1  @mouseover="changeClass('classRouge')"  @mouseleave="changeClass(null)" :class="nomClass">Composant 1</h1>
    <h2>{{message1}}</h2>
    <h2>{{message2}}</h2>
  </div>
</template>

<script>
import { Mixin } from '../mixin'

export default {
    mixins: [Mixin],
    name: 'composant1',
    
}
</script>
<style scoped>
  div{
    text-align: center;  
    }
</style>