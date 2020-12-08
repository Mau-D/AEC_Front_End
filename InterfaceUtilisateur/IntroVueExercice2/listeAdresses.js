//Composant Vue , affichage d'une liste d'adresse

Vue.component("liste-adresses", {
  props: ["adresses"],
  template: "<li>{{adresses}}</li>",
});
