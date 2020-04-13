import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Another from "../views/AnotherPage.vue";
import Projects from "../views/Projects.vue";
import Art from "../views/Art.vue";
import Contact from "../views/Contact.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/another",
    name: "Another",
    component: Another
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/art",
    name: "Art",
    component: Art
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
