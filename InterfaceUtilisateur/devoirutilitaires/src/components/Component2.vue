<!--Exercice 1, Utilitaire dans votre application VueJS-->
<!--On déclarera deux composants qui utilisent un mixin-->
<!--Deuxième composant-->
<template>
  <div>
    <h1  @mouseover="changeClass('classRouge')"  @mouseleave="changeClass(null)">Composant 2</h1>
    <h2 :class="nomClass">{{message1}}</h2>
    <h2 :class="nomClass">{{message2}}</h2>
  </div>
</template>

<script>
import { Mixin } from '../mixin'

export default {
    mixins: [Mixin],
    name: 'composant2',
}
</script>
<style scoped>
  div{
    text-align: center;  
    }
</style>