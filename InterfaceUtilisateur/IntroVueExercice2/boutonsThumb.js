//Composant Vue , comportant deux boutons, thumb up et down, le nombre de clic est affiché

Vue.component("boutons-thumb", {
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
