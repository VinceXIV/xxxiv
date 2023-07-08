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

<style>
* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0, 0, 0, 0.8);

    box-sizing: border-box;
    margin: 0;
    border: 0;
}

@media screen and (max-width: 40rem){
    :root {
        font-size: 2.6vw;
    }
}
</style>