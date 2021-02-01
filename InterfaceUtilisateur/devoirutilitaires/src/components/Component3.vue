<!--Exercice 3, Utilitaire dans votre application VueJS-->
<!--Ajout de pluggin de awesome-vue-->
<!--Premier PLugin-->
<template>
  <div>
   
  </div>
</template>

<script>
import Vue from "vue";
import Toast from "vue-easy-toast"; //Plugin toast

Vue.use(Toast);

Vue.toast('Can I have everybody`s attention?')
export default {
    name: 'composant3',
    
}
</script>
<style scoped>
  div{
    text-align: center;  
    }
</style>