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
  {
    src:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png",
    alt: "VueJS et VueCLI",
    title: "VueJS + VueCLI",
  },
  {
    src: "https://miro.medium.com/max/1000/1*ilC2Aqp5sZd1wi0CopD1Hw.png",
    alt: "Flutter",
    title: "Flutter",
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
      "JSON",
    ],
  },
  {
    id: 6,
    nomCours: "Techniques de programmation Web 3",
    nombreHeures: "90 heures",
    methodes: [
      "Architecture MVC",
      "Langage TypeScript",
      "Composants Angular",
      "Directives Angular",
      "Programmation orienté-objet",
      "Angular Material, composants natifs",
      "Mock API",
      "Services et Http Client",
      "Initiation à Flutter",
    ],
  },
  {
    id: 7,
    nomCours: "Intégration d'interface utilisateur",
    nombreHeures: "60 heures",
    methodes: [
      "Notions de bases de VueJS",
      "VueCLI",
      "Propriétés, directives, filtres, etc.",
      "Vue-router",
      "Mixin, plugin, directive personnalisée",
      "Documentation de code",
      "Test unitaire",
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
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Integration1/ProjetFinal",
    lienWeb: "https://mau-d.github.io/AEC_Front_End/Integration1/ProjetFinal/",
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
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation1/ProjetFinalPhotociti",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Programmation1/ProjetFinalPhotociti/",
    imagePrincipale: require("./img/prog1_final.jpg"),
    carousel: [
      require("./img/prog1_final_1.jpg"),
      require("./img/prog1_final_2.jpg"),
      require("./img/prog1_final_3.jpg"),
    ],
    detailsProjet:
      "Ce projet reproduit le site ''http://www.photociti.ca/'' en utilisant JQuery, il comprend trois parties: le choix du mot, le choix des lettres et le choix du fond. Pour le choix du mot, les erreurs de longueur, les accents et les caractères spéciaux sont gérés. Pour le choix des lettres, un carousel Bootstrap permet de changer l'image. Pour le choix du fond, l'usager sélectionne la couleur et l'étape 4 offre l'impression du cadre seulement.",
  },
  {
    id: 3,
    techno: "rct",
    titre: "Spotify québécois",
    sousTitre: "Projet de Programmation 2",
    description: "Premier travail en REACT",
    date: "Juin 2020",
    liengithub:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation2/spotifyTP1",
    lienWeb:
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
    liengithub:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Infrastructure/infrastructure_web_projet_finalv2",
    lienWeb: "http://final.mau-d.com/",
    imagePrincipale: require("./img/infrastructure_final.jpg"),
    carousel: [
      require("./img/infrastructure_final_1.jpg"),
      require("./img/infrastructure_final_2.jpg"),
      require("./img/infrastructure_final_3.jpg"),
    ],
    detailsProjet:
      "Ce projet par la gestion de nouvelles démontre la capacité à manipuler une base de données avec le langage PHP. Les categories sont affichés dans le menu, les nouvelles récentes sont affichées sur la page d'accueil. L'affichage par catégorie des nouvelles est accessible par le menu et l'affichage d'une nouvelle détaillée par un lien. Les opérations CRUD sont diponibles par la connexion qui donne accès au menu d'administration. Des ajouts pour la sécurité sont ajoutés et le déploiement est effectué.",
  },

  {
    id: 5,
    techno: "rct",
    titre: "La trotteuse",
    sousTitre: "Projet final Programmation 2 et Intégration 2",
    description:
      "Évaluation finale combinant intégration et programmation en REACT",
    date: "Septembre 2020",
    liengithub:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation2/projetfinalreact",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Programmation2/projetfinalreact/build/",
    imagePrincipale: require("./img/prog2_final.jpg"),
    carousel: [
      require("./img/prog2_final_1.jpg"),
      require("./img/prog2_final_2.jpg"),
      require("./img/prog2_final_3.jpg"),
    ],
    detailsProjet:
      "Ce projet, en sujet libre, est un site qui comporte les exigences d'une PWA. L'intégration est fait en SASS et comporte des animations de librairies JavaScript. Une API web est utilisé avec le service ''https://crudcrud.com/'', car des formulaires d'ajout et d'édition sont accessibles par un bouton ou de lien sur les titres. Ce projet est programmé avec des composants utilisant soit des classes ou des hooks.",
  },
  {
    id: 6,
    techno: "vue",
    titre: "Évaluation",
    sousTitre: "Examen de technique d'interface utilisateur",
    description: "Évaluation pour les notions de base de VueJS",
    date: "Janvier 2021",
    liengithub: "https://github.com/Mau-D/1017examen2maudharvey",
    lienWeb: "https://mau-d.github.io/1017examen2maudharvey/dist/",
    imagePrincipale: require("./img/examenVue.jpg"),
    carousel: [
      require("./img/examenVue_1.jpg"),
      require("./img/examenVue_2.jpg"),
      require("./img/examenVue_3.jpg"),
    ],
    detailsProjet:
      "Évaluation pour l'initiation aux notions de base de VueJS. Celle-ci est une simple application conçu avec VueCLI, il y a l'utilisation de composantes et de vue-router pour la navigation. L'affichage du pied de page se fait avec une directive personnalisée et un filtre de traduction (fr/en) est appliqué pour afficher les libellés des champs du formulaire de contact.",
  },
  {
    id: 7,
    techno: "angular",
    titre: "Voyages Aventure",
    sousTitre: "Application pour la gestion de forfaits voyages",
    description: "Projet Angular TS",
    date: "Mars 2021",
    liengithub:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation3/app-voyages-MaudHarvey",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Programmation3/app-voyages-MaudHarvey/dist/",
    imagePrincipale: require("./img/angular.jpg"),
    carousel: [
      require("./img/angular_1.jpg"),
      require("./img/angular_2.jpg"),
      require("./img/angular_3.jpg"),
    ],
    detailsProjet:
      "Cette conception est une application Angular en lien avec des forfaits voyages. À la page d'accueil, on retrouve les forfaits vedettes sous forme de card suivi de tous les forfaits sous forme de liste. L'utilisateur peut trier les forfaits avec un formulaire de recherche qui se trouve à gauche dans un sidenav. Le nombre d'étoiles, la durée et l'application d'un rabais sont dynamiques. Un panneau d'administration est disponible affichant le tableau de tous les forfaits, l'utilisateur peut gérer les forfaits, pour ajouter, supprimer ou modifier un forfait. Dans cette page, deux liens affichent des graphiques affichant des statistiques de réservations provenant d'une autre API. Toutes les informations proviennent d'une API fournit par l'enseignant.",
  },
];
//Variables pour téléverser les autres projets
export const AUTRES = [
  {
    id: 1,
    techno: "Integration",
    image: require("./img/bootstrap.jpg"),
    titre: "Bootstrap Responsive",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Integration1/bootstrapResponsive",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Integration1/bootstrapResponsive/",
  },
  {
    id: 2,
    techno: "Integration",
    image: require("./img/parallaxe.jpg"),
    titre: "Parallaxe",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Integration1/exerciceParallaxe",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Integration1/exerciceParallaxe/",
  },
  {
    id: 3,
    techno: "JQuery",
    image: require("./img/casseTete.jpg"),
    titre: "Casse-tête",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation1/Casse-Tete",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Programmation1/Casse-Tete/casse-tete",
  },
  {
    id: 4,
    techno: "JQuery",
    image: require("./img/shawicon.jpg"),
    titre: "Personnages",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation1/Comicon%202019",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Programmation1/Comicon%202019/",
  },
  {
    id: 5,
    techno: "JQuery",
    image: require("./img/flash.jpg"),
    titre: "Flash",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation1/Flash%20Version%202020",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Programmation1/Flash%20Version%202020/Flash%20Version%202020/",
  },
  {
    id: 6,
    techno: "Integration",
    image: require("./img/mars.jpg"),
    titre: "Mission sur Mars",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Integration2/VivreSurMars_Examen1",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Integration2/VivreSurMars_Examen1/",
  },
  {
    id: 7,
    techno: "Integration",
    image: require("./img/zelda.jpg"),
    titre: "Zelda",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Integration2/Examen2ZeldaMaudHarvey",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Integration2/Examen2ZeldaMaudHarvey/Examen2ZeldaEnonce/",
  },
  {
    id: 8,
    techno: "rct",
    image: require("./img/bottin.jpg"),
    titre: "Bottin de clients",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/Programmation2/bottindeclients",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/Programmation2/bottindeclients/build/",
  },
  {
    id: 9,
    techno: "vue",
    image: require("./img/surfSpirit.jpg"),
    titre: "SurfSpirit",
    lien:
      "https://github.com/Mau-D/AEC_Front_End/tree/master/InterfaceUtilisateur/surfSpirit_pratique1",
    lienWeb:
      "https://mau-d.github.io/AEC_Front_End/InterfaceUtilisateur/first-app-vue/dist/",
  },
];
