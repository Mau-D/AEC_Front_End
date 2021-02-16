//Directive pour le pied de page
import Vue from "vue";

Vue.directive("footerdirective", {
  bind(el, binding) {
    console.log("hello");
    el.innerHTML = `Copyright Maud Harvey,  ` + binding.value;
  },
});
