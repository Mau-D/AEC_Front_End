//Composant Vue , l'affichage du courriel et du numéro de téléphone des utilisateurs

Vue.component("details-contact", {
  props: ["telephone", "courriel"],
  template: "<div><h3>{{telephone}}</h3><h3> {{ courriel }}</h3></div>",
});
