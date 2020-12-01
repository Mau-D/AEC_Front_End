//Fichier avec l'instance de vue js
//Maud Harvey
//24 novembre 2020
//Nouvelle instance Vue, seulement une instance pour toute l'application(vm)
var vm = new Vue({
  el: "#app",
  data: {
    titre: "Exercice 1 d'introduction à Vue.js",
    lastName: "Harvey",
    firstName: "Maud",
    message: "Salut!",
    displayed: true,
    d: new Date(),
    checked: false,
    temperature: 0,
    picked: "",
    checkshow: false,
    title: "title initial",

    todo: [
      "Étudier VueJs",
      "Faire mon devoir",
      "Étudier Angular",
      "Terminer mon examen",
    ],
    completed: false,
  },
  methods: {
    //Méthode pour afficher le message de bienvenue
    bienvenue: function () {
      return (
        "Allo!!! Je suis " +
        this.firstName +
        " " +
        this.lastName +
        ", je vous souhaite la bienvenue dans " +
        this.titre +
        " !!!"
      );
    },
    //methode pour l'année en cours
    anneeEnCours: function () {
      let annee = this.d.getFullYear();
      return annee;
    },
    //methode pour changer le titre
    changeTitle: function () {
      this.title = "title modifié";
      return this.title;
    },
  },
  computed: {
    //propriété combiné pour convertir les degrés Celsius en Fahrenheit
    //Modifie la propriété affichage à partir de la propriété temperature entrée dans le champ input
    //Retourner le résultat du calcul
    convertirDegre: function () {
      if (this.checked) {
        this.affichage = this.temperature * 1.8 + 32;
        return this.affichage;
      }
    },
  },
});
