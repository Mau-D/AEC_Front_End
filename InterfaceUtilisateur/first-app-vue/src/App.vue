
<template>
  <div id="app">
  
    <div >
      <Header></Header>
    
      <router-view/>
   
      <footercomponent></footercomponent>
    </div>
  </div>
</template>
<script>
  import Header from "./components/Header.vue";
  import footercomponent from "./components/FooterComponent.vue";

  import {TranslateMixin} from "./mixins/TranslateMixin";

  export default {
    name: "App",
    
     
    mixins:[TranslateMixin],
    components: {
      Header,
      footercomponent
    },
    
  
 
  
  };

</script>
<style>

</style>
