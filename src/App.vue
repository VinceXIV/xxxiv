<template>
    <div>
        <NavBar :logout="logout" :loggedIn="loggedIn" :navigate="navigate"/>

        <router-view
            :online="online"
            :login="login"
            :loggedIn="loggedIn"
            :courses="courses"
            :updateCourses="updateCourses"
            :navigate="navigate"
        ></router-view>
    </div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import { apiHost } from './data/variables';


export default({
    name: 'App',

    components: {
        NavBar
    },

    data() {
        return {
            courses: this.getCourses(),
            currentRoute: window.location.pathname,
            online: navigator.onLine,
            token: this.getToken()
        }
    },

    computed: {
        loggedIn: function(){
            return !!this.token
        }
    },

    mounted: function(){
        window.addEventListener('popstate', () => {
            this.$router.push(window.location.url)
        })

        window.addEventListener('online', () => {
            this.online = true
        })

        window.addEventListener('offline', () => {
            this.online = false
        })
    },

    methods: {
        logout: function(){
            this.token = null
            this.courses = []
            localStorage.clear()

            this.$router.push('/login')
        },

        login: function(email, password){
            fetch(`${apiHost}/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'
                },
                body: JSON.stringify({email: email, password: password})
            }).then(res => {
                if(res.ok){
                    res.json().then(data =>{
                        this.$router.push('/home')

                        this.token = data.token
                        this.updateLocalStorage({token: data.token})

                        this.loadCourses(data.token)
                    })
                }else{
                    res.json().then(error => {
                        console.warn(error)
                    })
                }
            })           
        },

        navigate: function(path){
            // path expected is in the form: '/home', '/login', etc

            // If we are currently not in the log in page
            if(this.$router.history.current.path !== path){
                this.$router.push(path)
            }           
        },

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

        loadCourses: async function(token){
            const res = await fetch(`${apiHost}/courses`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

            if(res.ok){
                this.navigate('/main')
                this.courses = await res.json().then(data => data)

                this.updateLocalStorage({courses: this.courses})
            }else {
                res.json().then(error => console.warn(error))
            }
        },

        updateLocalStorage: function(keyValue){
            const currentData = JSON.parse(localStorage.getItem('data') || null) || {}

            localStorage.setItem('data', JSON.stringify({...currentData, ...keyValue}))
        },

        getToken: function(){
            const data = localStorage.getItem('data')

            if(data){
                return JSON.parse(data)['token']
            }else {
                return null
            }
        },

        getCourses: function(){
            const data = localStorage.getItem('data')

            if(data){
                return JSON.parse(data)['courses']
            }else {
                return []
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

    /* outline: solid 0.1rem red; */
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
    height: 80vh;
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