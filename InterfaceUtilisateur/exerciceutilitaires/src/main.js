import Vue from "vue";
import App from "./App.vue";
import MyPlugin from "./Plugins/MyPlugin";
Vue.use(MyPlugin);
Vue.config.productionTip = false;
new Vue({
  render: (h) => h(App),
}).$mount("#app");
//Directive peut être aussi dans un seul composant, ici elle est globale

//Plugin
//MyPlugin.install = function(Vue) {
//  Vue.directive("mydirectiverouge", {
//    bind: function(el, binding) {
//      el.style.background = binding.value;
//     console.log("hello");
//   },
// });
//};
//export const MyMixin = {
//  created() {
//    console.log("Salut je suis un element mixin");
//  },
//};
