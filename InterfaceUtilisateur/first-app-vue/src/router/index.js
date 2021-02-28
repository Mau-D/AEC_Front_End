import Vue from "vue";
import VueRouter from "vue-router";
import accueil from "../views/Accueil.vue";
import contact from "../views/Contact.vue";
import inscription from "../views/Inscription.vue";
import login from "../views/Login.vue";
import logged from "../views/Logged.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "accueil",
    component: accueil,
  },
  {
    path: "/contact",
    name: "contact",
    component: contact,
  },
  {
    path: "/inscription",
    name: "inscription",
    component: inscription,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/logged",
    name: "logged",
    component: logged,
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/AEC_Front_End/InterfaceUtilisateur/first-app-vue/dist",
  routes,
});

export default router;
