//TranslateMixin.js, mixins
//Mixin pour traduire les libéllés du composant contact
const TRANSLATIONS = {
  en: {
    email: "E-mail",
    password: "Password",
  },
  fr: {
    email: "Courriel",
    password: "Mot de passe",
  },
};
export const TranslateMixin = {
  data() {
    return {
      languages: ["en", "fr"],
      languageChoosen: "fr",
    };
  },
  methods: {
    toggleLanguage: function(e) {
      this.languageChoosen = e;
      console.log("method " + this.languageChoosen);
    },
  },
  filters: {
    //On pourrait ajouter une validation avec un if pour vérifier que l'élément value est bien une date
    languageFilter: function(value, lang) {
      let label = "";
      if (lang === "fr") {
        if (value === "email") {
          label = "";
          console.log("filtrefr" + label);
          return TRANSLATIONS.fr.email;
        }
        if (value === "password") {
          label = TRANSLATIONS.fr.password;
          console.log("filtrefr" + label);
          return label;
        }
      }
      if (lang === "en") {
        if (value === "email") {
          label = "";
          console.log("filtreen" + label);
          return TRANSLATIONS.en.email;
        }
        if (value === "password") {
          label = TRANSLATIONS.en.password;
          console.log("filtreen" + label);
          return label;
        }
      }
    },
  },
};
