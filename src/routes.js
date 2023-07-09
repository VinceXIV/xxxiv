import MainPage from './pages/MainPage.vue'
import LoginPage from './pages/LoginPage.vue'
import RegisterPage from './pages/RegisterPage.vue'

const routes = [
  { path: '/login', component: LoginPage },
  { path: '/main', component: MainPage },
  { path: '/home', component: MainPage },
  { path: '/register', component: RegisterPage},
  { path: '/', component: MainPage },
]

export default routes