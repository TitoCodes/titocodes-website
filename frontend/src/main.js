import Vue from 'vue'
import Buefy from 'buefy'
import VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Project from './pages/Project.vue'
import Privacy from './pages/Privacy.vue'
import Resume from './pages/Resume.vue'
import App from './App.vue'
import Meta from 'vue-meta'
import VueGtag from 'vue-gtag'
import './scss/global.scss'

Vue.config.productionTip = false
Vue.prototype.$website_name = 'TitoCodes'
Vue.prototype.$website_address = 'https://www.titocodes.com'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
})
Vue.use(VueRouter)
Vue.use(Meta)

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/projects',
    component: Project,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/privacy-policy',
    component: Privacy,
  },
  {
    path: '/resume',
    component: Resume,
  }
]

const router = new VueRouter({
  routes,
})

Vue.use(VueGtag, {
  config: {
    id: 'UA-176067766-1',
    params: {
      send_page_view: process.env.NODE_ENV === 'production',
    },
  },
})

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
