import Vue from "vue";
import App from "./App.vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Import Bootstrap an BootstrapVue CSS files (order is important)
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import SkeletonCards from "vue-ultimate-skeleton-cards";
Vue.use(SkeletonCards);

//PLugin pour le login
import loginform from "./plugins/PluginLogin";
Vue.use(loginform);
//Dans ce devoir je n'ai pas utilisé le BootstrapVue
// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");

//Directive peut être aussi dans un seul composant, ici elle est globale
//Directive utilisée pour l'exercice 2
//Fonctionne pas au rafraîchissement
// Vue.directive("directiveshowmodal", function(el, binding, vnode) {
//   el.addEventListener("click", () => {
//     vnode.context.$refs["modal"].style.display = "block";
//     vnode.context.$refs["modal"].style.background = "green";
//     vnode.context.$refs["texte"].innerHTML = binding.value;
//   });
// });

// Vue.directive("directivehidemodal", function(el, binding, vnode) {
//   el.addEventListener("click", () => {
//     vnode.context.$refs["modal"].style.display = "none";
//     vnode.context.$refs["fermeture"].innerHTML = binding.value;
//   });
// });
