//Composant Vue , affichage d'une valeur saisi en input
//Émettre un événement sais-text sur le input, la valeur inscrite dans le champ($event.target.value) payload pour passer les données au parent
Vue.component("affichage-saisi", {
  template: `<input v-on:input="$emit('saisi-text', $event.target.value)">`,
});
