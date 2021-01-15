const Accueil = { template: "<div>Composant Accueil</div>" };
const ListeArticle = { template: "<div>Composant Liste des articles</div>" };
const PlanSite = { template: "<div>Composant Plan du site</div>" };
const APropos = { template: "<div>Composant À propos</div>" };
const Categorie = {
  template: ` 
            <div>
                Composant Categorie : {{$route.params.id}}
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
    { path: "/categorie/:id", component: Categorie },
  ],
});

const app = new Vue({
  router,
}).$mount("#app");
