//Composant Vue , affichage d'un formulaire sur les vélos

Vue.component("composant-velo", {
  data: function () {
    return {
      input: { type: "", taille: 0, frein: "", roue: 0 },
      soumettre: false,
    };
  },

  template: `<div>
        <h3>Je suis le composant Vélo</h3>
        <form>
            <label for="type">Type de vélo:</label><br>
            <input v-model="input.type" type="text" id="type" name="type"><br>
            <label for="taille">Taille du vélo:</label><br>
            <input v-model="input.taille" type="text" id="taille" name="taille"><br>
            <label for="frein">Type de frein:</label><br>
            <input v-model="input.frein" type="text" id="frein" name="frein"><br>
            <label for="roue">Épaisseur des roues:</label><br>
            <input v-model="input.roue" type="text" id="roue" name="roue"><br>
            <input v-on:click.prevent="submit()" type="submit" value="Valider">
        </form>
        <div v-show="soumettre" >
            <h1>Caractéristiques du vélo</h1>
            <p>Le vélo est de type {{input.type}}</p>
            <p>de taille {{input.taille}}</p>
            <p>modèle de frien:  {{input.frein}}</p>
            <p>Épaisseur des roues {{input.roue}}</p>
        </div>
    </div> `,
  methods: {
    submit: function () {
      this.soumettre = true;
    },
  },
});
