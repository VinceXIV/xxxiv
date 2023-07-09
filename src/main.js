import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routes
})


const app = new Vue({
  router: router,
  render: h => h(App),
})


app.$mount('#app')