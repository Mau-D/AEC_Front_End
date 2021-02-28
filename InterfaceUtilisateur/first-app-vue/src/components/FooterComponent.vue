<!--Footer.vue,components / pied de page-->
<!--Maud Harvey, 11 février 2021-->
<template>
  <div><h1 v-footerdirective="new Intl.DateTimeFormat('fr-Ca', { dateStyle: 'full'}).format()">Je suis le footer</h1></div>
</template>

<script>
import footerdirective from '../directives/FooterDirective'
export default {
  name: 'footercomponent',
  directives:footerdirective
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
div{
  
  text-align: center;
  background-color: #D0E0F0;
  height: 10vh;
  width: 100%;
}
h1{
  font-size: 1rem;
  margin-top: 3vh;
}

</style>
