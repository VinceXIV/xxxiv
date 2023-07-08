<template>
    <MainPage v-if="page == 'Main'" />
    <LoginPage v-else-if="page == 'Login'" />
    <RegisterPage v-else-if="page == 'Register'" :courses="courses"/>
    <PageNotFound v-else />
</template>

<script>
import MainPage from './pages/MainPage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import PageNotFound from './pages/404.vue'
import routes from './routes';
import { courses } from './data/data'


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
            courses: courses,
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
:root {
    --outline-bold: solid 0.1rem rgb(212, 212, 212, 1);
    --outline-faint: solid 0.1rem rgb(212, 212, 212, 0.5);
    --btn-background-color: #0077be;
}

* {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: rgba(0, 0, 0, 0.7);

    box-sizing: border-box;
    margin: 0;
    border: 0;
}

/* STYLE CHILD COMPONENTS */
.btn {
    background-color: #0077be;
    color: white;
    width: max-content;
    padding: 0.6vw;
    border-radius: 0.3em;
    cursor: pointer;
}

.btn:hover {
    opacity: 0.8;
}

.page {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
}

.container {
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 1.3rem;
    text-align: center;
}

.page form {
    padding: 1.2vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

.page .form-item {
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    width: 100%;
    justify-content: left;
}

.form-item input {
    outline: var(--outline-faint);
    padding: 0.45vw;
}

/* RESPONSIVENESS */

@media screen and (max-width: 40rem){
    :root {
        font-size: 2.6vw;
    }
}
</style>