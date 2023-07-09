<template>
    <MainPage v-if="page == 'Main'" :courses="courses" :updateCourses="updateCourses"/>
    <RegisterPage v-else-if="page == 'Register'" :courses="courses" :updateCourses="updateCourses"/>

    <LoginPage v-else-if="page == 'Login'"
        :online="online"
        :token="token"
        :updateRoute="updateRoute"
        :setUserLoggedIn="setUserLoggedIn"
    />

    <PageNotFound v-else />
</template>

<script>
import MainPage from './pages/MainPage.vue';
import LoginPage from './pages/LoginPage.vue';
import RegisterPage from './pages/RegisterPage.vue';
import PageNotFound from './pages/404.vue'
import routes from './routes';
import { apiHost } from './data/variables';


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
            courses: [],
            currentRoute: window.location.pathname,
            online: navigator.onLine,
            token: this.getToken() // If the token exists, we will consider the person as logged in
        }
    },

    computed: {
        page: function() {
            return routes[this.currentRoute]
        }
    },

    mounted: function(){
        window.addEventListener('popstate', () => {
             this.updateRoute(window.location.pathname)
        })

        window.addEventListener('online', () => {
            this.online = true
        })

        window.addEventListener('offline', () => {
            this.online = false
        })
    },

    methods: {
        updateCourses: function(targetCourse, method){
            if(method === 'add'){
                this.courses.push(targetCourse)
            }else if (method === 'remove'){
                this.courses = this.courses.filter(course => course.id !== targetCourse.id)
            }else if (method === 'update'){
                this.courses = this.courses.map(course => {
                    if(course.id === targetCourse.id){
                        return targetCourse
                    }else {
                        return course
                    }
                })
            }
        },

        updateRoute(newRoute){
            console.log(newRoute)
            // window.location.pathname = newRoute
            // this.currentRoute = newRoute
        },

        setUserLoggedIn: async function(token){
            this.token = token

            const res = await fetch(`${apiHost}/courses`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

            if(res.ok){
                const courses = await res.json().then(data => data)

                this.courses = courses
                this.updateRoute('/main')
                localStorage.setItem('data', JSON.stringify({token: token, courses: courses}));
            }else {
                res.json().then(error => console.warn(error))
            }
        },

        getToken: function(){
            const data = localStorage.getItem('data')

            if(data){
                return JSON.parse(data)['token']
            }else {
                return null
            }
        }
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
    gap: 1.5vw;
    width: max(40vw, 40rem);
}

.title {
    font-size: 1.3rem;
    text-align: center;
}

.subtitle {
    font-size: 1rem;
}


/* RESPONSIVENESS */

@media screen and (max-width: 50rem){
    .page .container {
        width: 80vw;
        min-width: none;
    }

    :root {
        font-size: 2.1vw;
    }
}

</style>