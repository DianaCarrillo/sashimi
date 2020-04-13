import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css"
import VueMq from 'vue-mq'

Vue.config.productionTip = false;

Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    mo: 768,
    de: Infinity,
  },
  defaultBreakpoint: "mo" // customize this for SSR
})

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
