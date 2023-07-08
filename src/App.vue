<template>
    <MainPage v-if="page == 'Main'" />
    <LoginPage v-else-if="page == 'Login'" />
    <RegisterPage v-else-if="page == 'Register'" />
    <PageNotFound v-else />
</template>

<script>
import MainPage from './pages/MainPage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import PageNotFound from './pages/404.vue'
import routes from './routes';

export default({
    name: 'App',

    components: {
        MainPage,
        LoginPage,
        RegisterPage,
        PageNotFound
    },

    data() {
        return {
            currentRoute: window.location.pathname
        }
    },

    computed: {
        page: function() {
            console.log('what', routes[this.currentRoute])
            return routes[this.currentRoute]
        }
    },

    mounted: function(){
        return window.addEventListener('popstate', () => {
            this.currentRoute = window.location.pathname
        })
    }
})
</script>