import Vue from "vue";
import App from "./App.vue";
import MyPLugin from "./Plugins/MyPlugin";

Vue.use(MyPlugin);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
//Directive peut être aussi dans un seul composant, ici elle est globale

//export const MyMixin = {
//  created() {
//    console.log("Salut je suis un element mixin");
//  },
//};
