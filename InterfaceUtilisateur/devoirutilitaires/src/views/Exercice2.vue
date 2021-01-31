<!--Exercice 2, Utilitaire dans votre application VueJS-->
<!--Créer une directive qui permet d'afficher un modal avec le contenu qui sera passer en paramètre à la directive-->
<!--La directive est placé dans le fichier main.js (globale)-->

<template>
  <div>
    <h1>Exercice 2, Ouvrir un modal avec une directive</h1>
      <component-modal></component-modal>
  </div>
</template>

<script>
import ComponentModal from '../components/ComponentModal.vue'



export default {
  components: { ComponentModal},
  name: 'exercice2',
  
}
</script>
<style scoped>
  div{
    text-align: center;  
    }
</style>