const Accueil = { template: "<div>Composant Accueil</div>" };
const ListeArticle = { template: "<div>Composant Liste des articles</div>" };
const PlanSite = { template: "<div>Composant Plan du site</div>" };
const APropos = { template: "<div>Composant À propos</div>" };
//Chaque route doit correspondre à un composant. Le « composant » peut
// soit être un véritable composant créé via `Vue.extend()`, ou juste un
// objet d'options.
const router = new VueRouter({
  routes: [
    { path: "/accueil", component: Accueil },
    { path: "/listearticle", component: ListeArticle },
    { path: "/plansite", component: PlanSite },
    { path: "/apropos", component: APropos },
  ],
});

const app = new Vue({
  router,
}).$mount("#app");
