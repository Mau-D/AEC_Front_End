<!--Exercice 3, Utilitaire dans votre application VueJS-->
<!--Ajouter les 3 plugins de votre choix dans la liste des plugins de awesome-vue-->
<template>
  <div>
    <h1>Exercice 3, Ajout de plugins</h1>
    <component-3></component-3>
    <component-4 >
      <div  style="position: relative; z-index: 9999; background-color: green;">
        <h1>Section en parallaxe</h1>
          <parallax>
            <img src="https://i1.wp.com/storage.googleapis.com/blog-images-backup/1*wFL3csJ96lQpY0IVT9SE3w.jpeg?ssl=1" alt="very cool bg">
          </parallax>
      </div>
      <div style="background-color: black; height: 100vh;"></div>
      <div>
         <h1>Section en parallaxe fixe</h1>
        <parallax :fixed="true">
          <img src="https://miro.medium.com/max/6416/1*7OCwu--TWqVluPMsZdzWKw.png" alt="very cool bg">
        </parallax>
      </div>
    </component-4>
    <component-5></component-5>
  </div>
</template>

<script>
import Component3 from '../components/Component3.vue'
import Component4 from '../components/Component4.vue'
import Parallax from 'vue-parallaxy'
import Component5 from '../components/Component5.vue'


export default {
  components: { Component3, Component4, Parallax, Component5},
  name: 'exercice3',
}
</script>
<style scoped>
  div{
    text-align: center;  
    }
  img{
    height: 2000px;
  }
</style>