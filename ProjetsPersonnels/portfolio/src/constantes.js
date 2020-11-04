//Variables pour téléverser les photos d'intégration du site
export const IMAGES = {
  banniere: require("./img/banniere.jpg"),
  photo: require("./img/photo.jpg"),
  chemin: require("./img/chemin.jpg"),
  ordi: require("./img/ordi.jpg"),
  contact: require("./img/contact.jpg"),
};

//Variables pour téléverser les images des logos des langages
export const LOGOS = [
  {
    src:
      "https://cdn.uconnectlabs.com/wp-content/uploads/sites/25/2020/04/J.png",
    alt: "JavaScript",
    title: "JavaScript",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
    alt: "HTML5",
    title: "HTML5",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
    alt: "CSS3",
    title: "CSS3",
  },
  {
    src:
      "https://camo.githubusercontent.com/0e0adf58c74c6e74bb64ece5d0ef4620f4f46915/68747470733a2f2f76352e676574626f6f7473747261702e636f6d2f646f63732f352e302f6173736574732f6272616e642f626f6f7473747261702d6c6f676f2d736861646f772e706e67",
    alt: "Bootstrap",
    title: "Bootstrap",
  },
  {
    src: "https://miro.medium.com/max/600/1*LKaM6rFUCeB-O0oo0kowoQ.png",
    alt: "Sass",
    title: "Sass",
  },
  {
    src: "https://oauth.net/images/code/php.png",
    alt: "PHP",
    title: "PHP",
  },
  {
    src:
      "https://storage.googleapis.com/blog-images-backup/1*3SVfBkNZI2f-sspiq59xcw.png",
    alt: "React",
    title: "React",
  },
  {
    src:
      "https://images.ctfassets.net/bwx98rfv5w3w/1nbJ39oEEwP7qJkjinO3Vn/fb0e39ef38e73536a21689b3e6890c29/9_Angular_Typescript.png",
    alt: "Angular et TypeScript",
    title: "Angular et TypeScript",
  },
];
//Variables pour téléverser les détails des formations
export const FORMATIONS = [
  {
    id: 1,
    nomCours: "Techniques d'intégration des interfaces Web 1",
    nombreHeures: "60 heures",
    methodes: ["HTML5", "CSS3", "Bootstrap"],
  },
  {
    id: 2,
    nomCours: "Techniques de programmation Web 1",
    nombreHeures: "90 heures",
    methodes: ["JavaScript", "JQuery"],
  },
  {
    id: 3,
    nomCours: "Techniques d'intégration des interfaces Web 2",
    nombreHeures: "60 heures",
    methodes: [
      "Sass",
      "PWA",
      "Validation de formulaire côté client",
      "Plateforme de paiement",
      "Images vectorielles et canevas",
      "Filtres et tris de tableaux",
      "Librairies de graphiques Google",
      "Animations CSS et Javascript",
    ],
  },
  {
    id: 4,
    nomCours: "Infrastructure Web",
    nombreHeures: "60 heures",
    methodes: [
      "Bases de données relationnelles",
      "Langages PHP",
      "Utilisation de AMPPS et PhpMyAdmin",
      "Opérations CRUD, à l'aide de MySQLi",
      "Formulaires et contrôles liés aux données",
    ],
  },
  {
    id: 5,
    nomCours: "Techniques de programmation Web 2",
    nombreHeures: "90 heures",
    methodes: [
      "Librairie REACT",
      "Requête à une API Web",
      "React Router",
      "MockAPI",
      "Opérations CRUD",
      "Hooks",
      "PWA",
    ],
  },
];
