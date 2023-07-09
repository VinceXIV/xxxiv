import MainPage from './pages/MainPage.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'
import PageNotFound from './pages/404.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/main', component: MainPage },
  { path: '/home', component: MainPage },
  { path: '/register', component: RegisterPage},
  { path: '/', component: MainPage },
  { path: '/*', component: PageNotFound }
]

export default routes