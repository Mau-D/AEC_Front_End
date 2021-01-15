//Com
const Accueil = { template: "<div>Composant Accueil</div>" };
const ListeArticle = { template: "<div>Composant Liste des articles</div>" };
const PlanSite = { template: "<div>Composant Plan du site</div>" };
const APropos = { template: "<div>Composant À propos</div>" };
//Composant pour séparer les différents types d'article
//Ajouter un router-view, car il a un composant enfant

const Categorie = {
  data: function () {
    return {
      articlesMeuble: ["Table", "Bureau", "Chaise", "Commode"],
      articlesElectro: ["Refrigérateur", "Poêle", "Laveuse", "Sécheuse"],
      articlesJouets: ["Casse-tête", "Poupée", "Toutou", "Jeu de société"],
      articlesVetements: ["Pantalon", "Chandail", "Tuque", "Bas"],
    };
  },
  template: ` 
            <div>
                Composant Categorie : {{$route.params.id}}
                <router-link v-if="$route.params.id === 'meubles'" v-for="item in articlesMeuble":to="{path: '/categorie/meubles/article/' + item}" >{{item}}</router-link>
                <router-link v-if="$route.params.id === 'electromenagers'" v-for="item in articlesElectro":to="{path: '/categorie/electromenagers/article/' + item}" >{{item}}</router-link>
                <router-link v-if="$route.params.id === 'jouets'" v-for="item in articlesJouets":to="{path: '/categorie/jouets/article/' + item}" >{{item}}</router-link>
                <router-link v-if="$route.params.id === 'vetements'" v-for="item in articlesVetements":to="{path: '/categorie/vetements/article/' + item}" >{{item}}</router-link>
                <router-view></router-view>
            </div>
    	    `,
};
//Composant pour afficher l'article que l'on souhaite consulter
const Article = {
  template: ` 
            <div>
                Composant Article: {{ $route.params.article}}
            </div>
    	    `,
};
const router = new VueRouter({
  routes: [
    { path: "/accueil", component: Accueil },
    { path: "/listearticle", component: ListeArticle },
    { path: "/plansite", component: PlanSite },
    { path: "/apropos", component: APropos },

    // Les segments dynamiques commencent avec la ponctuation deux-points
    {
      path: "/categorie/:id",
      component: Categorie,
      children: [{ path: "article/:article", component: Article }],
    },
  ],
});

const app = new Vue({
  router,
}).$mount("#app");
