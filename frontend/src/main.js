import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import App from "./App.vue";
import Beufy from "buefy";
import Meta from 'vue-meta';
import VueGtag from "vue-gtag";
import "buefy/dist/buefy.css";

Vue.config.productionTip = false;
Vue.prototype.$website_name = 'TitoCodes';
Vue.prototype.$website_address = 'https://www.titocodes.com';

Vue.use(Beufy);
Vue.use(VueRouter);
Vue.use(Meta);

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
];

const router = new VueRouter({
  routes,
});

Vue.use(VueGtag, {
  config: {
    id: "UA-176067766-1",
    params: {
      send_page_view: process.env.NODE_ENV === "production",
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
