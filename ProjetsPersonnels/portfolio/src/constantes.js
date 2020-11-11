//Variables pour téléverser les photos d'intégration du site
export const IMAGES = {
  banniere: require("./img/banniere.jpg"),
  photo: require("./img/photo.jpg"),
  chemin: require("./img/chemin.jpg"),
  ordi: require("./img/ordi.jpg"),
  contact: require("./img/contact.jpg"),
  cv: require("./img/cv.jpg"),
  logo: require("./img/logo.jpg"),
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

//Variables pour téléverser les détails des projets
export const PROJETS = [
  {
    id: 1,
    techno: "Integration",
    titre: "Premier site",
    sousTitre: "Intégration d'un site en bootstrap responsive",
    description: "Évaluation finale du cours de techniques d'intégration Web 1",
    date: "Mars 2020",
    liengithub:
      "https://mau-d.github.io/AEC_Front_End/Integration1/ProjetFinal/",
    imagePrincipale: require("./img/Integration1_final.jpg"),
    carousel: [
      require("./img/Integration1_final_1.jpg"),
      require("./img/Integration1_final_2.jpg"),
      require("./img/Integration1_final_3.jpg"),
    ],
    detailsProjet:
      "Ce projet, en sujet libre, de trois pages contient 4 sections responsives en utilisant bootstrap, les medias queries et les polices inclusives (REM). Ce projet comprend plusieurs éléments, tel que des bannières, un formulaire, une section jumbotron, une card, un modal avec carousel et des sections en parallax.",
  },
  {
    id: 2,
    techno: "JQuery",
    titre: "Photociti",
    sousTitre: "Projet Programmation 1 en JQuery",
    description:
      "Évaluation finale du cours de techniques de programmation Web 1",
    date: "Mars 2020",
    liengithub:
      "https://mau-d.github.io/AEC_Front_End/Programmation1/ProjetFinalPhotociti/",
    imagePrincipale: require("./img/prog1_final.jpg"),
    carousel: [
      require("./img/prog1_final_1.jpg"),
      require("./img/prog1_final_2.jpg"),
      require("./img/prog1_final_3.jpg"),
    ],
    detailsProjet:
      "Ce projet reproduit le site <<http://www.photociti.ca/>> en utilisant JQuery, il comprend trois parties: le choix du mot, Le choix des lettres et le choix du fond. Pour le choix du mot, les erreurs de longueur, les accents et les caractères spéciaux sont gérés. Pour le choix des lettres, un carousel Bootstrap permet de changer l'image. Pour le choix du fond, l'usager sélectionne la couleur et l'étape 4 offre l'impression du cadre seulement.",
  },
  {
    id: 3,
    techno: "React",
    titre: "Spotify québécois",
    sousTitre: "Projet de Programmation 2",
    description: "Premier travail en REACT",
    date: "Juin 2020",
    liengithub:
      "https://mau-d.github.io/AEC_Front_End/Programmation2/spotifyTP1/build/",
    imagePrincipale: require("./img/prog2_tp1.jpg"),
    carousel: [
      require("./img/prog2_tp1_1.jpg"),
      require("./img/prog2_tp1_2.jpg"),
      require("./img/prog2_tp1_3.jpg"),
    ],
    detailsProjet:
      "Ce projet affiche un catalogue d'album, avec une page de connexion. Une barre de recherche sélectionne les albums par leur nom ou celui de l'artiste. Un clic sur l'album amène à la liste des chansons et celui sur une chanson à ses paroles.",
  },
  {
    id: 4,
    techno: "PHP",
    titre: "Gestionnaire de nouvelles",
    sousTitre: "Projet Infrastructure Web en PHP",
    description: "Évaluation finale du cours d'infrastructure Web 1 en PHP",
    date: "Septembre 2020",
    liengithub: "http://final.mau-d.com/",
    imagePrincipale: require("./img/infrastructure_final.jpg"),
    carousel: [
      require("./img/infrastructure_final_1.jpg"),
      require("./img/infrastructure_final_2.jpg"),
      require("./img/infrastructure_final_3.jpg"),
    ],
    detailsProjet:
      "Ce projet par la gestion de nouvelles démontre la capacité à manipuler une base de données avec le langage PHP. Les categories sont affichés dans le menu, les nouvelles récentes sont affichées sur la page d'accueil. Un affichage par catégorie est accessible par le menu et l'affichage d'une nouvelle détaillée par un lien. Les opérations CRUD sont diponibles par la connexion qui donne accès au menu d'administration. Des ajouts pour la sécurité sont ajoutés et le déploiement est effectué.",
  },

  {
    id: 5,
    techno: "React",
    titre: "La trotteuse",
    sousTitre: "Projet final Programmation 2 et Intégration 2",
    description:
      "Évaluation finale combinant intégration et programmation en REACT",
    date: "Septembre 2020",
    liengithub:
      "https://mau-d.github.io/AEC_Front_End/Programmation2/projetfinalreact/build/",
    imagePrincipale: require("./img/prog2_final.jpg"),
    carousel: [
      require("./img/prog2_final_1.jpg"),
      require("./img/prog2_final_2.jpg"),
      require("./img/prog2_final_3.jpg"),
    ],
    detailsProjet:
      "Ce projet, en sujet libre, est un site qui comporte les exigences d'une PWA. L'intégration est fait en SASS et comporte des animations de librairies JavaScript. Une API web est utilisé avec le service << cruccrud.com >>, car des formulaires d'ajout et d'édition sont accessibles par un bouton ou de lien sur les titres. Ce projet est programmé avec des composants utilisant soit des classes ou des hooks. À voir!!!, c'est mon meilleur travail...pour l'instant.",
  },
];
//Variables pour téléverser les autres projets
export const AUTRES = [
  {
    id: 1,
    techno: "PHP",
    image: require("./img/prog2_final.jpg"),
    titre: "Autre projet PHP",
    lien: "LienGithub",
  },
  {
    id: 2,
    techno: "JQuery",
    image: require("./img/prog2_final.jpg"),
    titre: "Autre projet JQuery",
    lien: "LienGithub",
  },
];
