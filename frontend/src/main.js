import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./pages/Home.vue";
import About from "./pages/About.vue";
import App from "./App.vue";
import Beufy from "buefy";
import "buefy/dist/buefy.css";

Vue.config.productionTip = false;
Vue.use(Beufy);
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home - TitoCodes",
      metaTags: [
        {
          name: "description",
          content: "The home page of TitoCodes.",
        },
        {
          property: "og:description",
          content: "The home page of TitoCodes.",
        },
      ],
    },
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "About - TitoCodes",
      metaTags: [
        {
          name: "description",
          content: "The about page of TitoCodes.",
        },
        {
          property: "og:description",
          content: "The about page of TitoCodes.",
        },
      ],
    },
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
