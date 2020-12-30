//contact.js
//Composant contact, formulaire
//Maud Harvey
//30 décembre 2020

Vue.component("contact", {
  //Le data est sous forme de function pour qu'elle soit indépendante à chaque appelle du composant
  data: function () {
    return {
      countUP: 0,
      countDW: 0,
    };
  },
  //Rendu de deux boutons et du nombre de clic
  template:
    '<div><button v-on:click="countUP++">thumb UP{{ countUP }}</button><button v-on:click="countDW++">thumbDown{{ countDW }} </button></div>',
});
