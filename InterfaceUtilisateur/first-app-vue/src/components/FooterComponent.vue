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


</style>
