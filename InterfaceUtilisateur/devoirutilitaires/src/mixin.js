//Mixin utiliser dans l'exercice 1
//Trois datas seront récupérés par deux composants et une méthode qui changera la classe du titre 1, en rouge

export const Mixin = {
  data() {
    return {
      message1: "Je suis le premier data du mixin",
      message2: "Je suis le deuxième data du mixin",
      nomClass: "",
    };
  },
  methods: {
    changeClass(nom) {
      return (this.nomClass = nom);
    },
  },
};
