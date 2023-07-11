<template>
    <div>
        <NavBar :logout="logout"
            :loggedIn="loggedIn"
            :navigate="navigate"
            :lastScroll="lastScroll"
            :updateLastScroll="updateLastScroll"
            :currentPath="currentPath"/>

        <router-view
            :online="online"
            :login="login"
            :signup="signup"
            :loggedIn="loggedIn"
            :courses="courses"
            :navigate="navigate"
            :handleFormBtnClick="handleFormBtnClick"
            :actionCompletedStage="actionCompletedStage"
            :activeCourseEditState="activeCourseEditState"
            :activeCourse="activeCourse"
            :setActiveCourseEditState="setActiveCourseEditState"
            :setActiveCourse="setActiveCourse"
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
            courses: this.getFromLocalStorage('courses', []),
            currentPath: window.location.pathname,
            online: navigator.onLine,
            token: this.getFromLocalStorage('token', ''),
            lastScroll: 0,
            activeCourseEditState: false,
            activeCourse: {},
            actionCompletedStage: {
                action: '',
                started: false,
                doing: false,
                completed: false
            }
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
        updateLastScroll: function(newScroll){
            this.lastScroll = newScroll
        },

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

                        this.updateLocalStorage('token', data.token)

                        this.loadCourses(data.token)
                    })
                }else{
                    res.json().then(error => {
                        console.warn(error)
                    })
                }
            })           
        },

        signup: function(signupData){
            fetch(`${apiHost}/signup`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'text/plain'
                },
                body: JSON.stringify(signupData)
            }).then(res => {
                if(res.ok){
                    res.json().then(data =>{
                        this.$router.push('/home')

                        this.updateLocalStorage('token', data.token)

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
                this.currentPath = path
            }           
        },

        handleFormBtnClick: function(formData, action, e){
            e.preventDefault()

            let actionName
            if(action === 'Register'){
                actionName = 'registered'
            }else if(action === 'Remove'){
                actionName = 'removed'
            }else if(action === 'edit'){
                actionName === 'edited'
            }

            this.actionCompletedStage = {...this.actionCompletedStage, action: actionName, started: true}

            if(action.toLowerCase() === 'register'){
                this.registerCourse(formData)
            }else if(action.toLowerCase() === 'edit' && formData.id){
                this.editCourse(formData)
            }else if(action.toLowerCase() === 'remove' && formData.id){
                this.removeCourse(formData.id)
            }else if(action.toLowerCase() === 'cancel'){
                this.setActiveCourseEditState(false)
            }
        },

        registerCourse: async function(formData){
            const res = await fetch(`${apiHost}/courses`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${this.getFromLocalStorage('token')}`
                    },
                    body: JSON.stringify(formData)
                })

            this.actionCompletedStage = {...this.actionCompletedStage, doing: true}

            if(res.ok){
                const newCourse = await res.json().then(data => data)
                this.updateCourses(newCourse, 'add')

                this.actionCompletedStage = {...this.actionCompletedStage, completed: true}
                setTimeout(()=>{
                    this.actionCompletedStage = {
                        started: false,
                        doing: false,
                        completed: false
                    }
                }, 3000)       
            }else{
                res.json().then(error => console.warn(error))
            }
        },

        editCourse: async function(formData){
            const res = await fetch(`${apiHost}/courses/${formData.id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${this.getFromLocalStorage('token')}`
                    },
                    body: JSON.stringify(formData)
                })

            this.actionCompletedStage = {...this.actionCompletedStage, doing: true}

            if(res.ok){
                const newCourse = await res.json().then(data => data)
                this.updateCourses(newCourse, 'edit')

                this.actionCompletedStage = {...this.actionCompletedStage, completed: true}
                setTimeout(()=>{
                    this.actionCompletedStage = {
                        started: false,
                        doing: false,
                        completed: false
                    }
                }, 3000)
            }else{
                res.json().then(error => console.warn(error))
            }
        },

        removeCourse: async function(courseId){
            const res = await fetch(`${apiHost}/courses/${courseId}`, {
                    method: 'DELETE',
                    headers: {
                        'Accept': 'application/json',
                        'Authorization': `Bearer ${this.getFromLocalStorage('token')}`
                    }
                })
            
            this.actionCompletedStage = {...this.actionCompletedStage, doing: true}

            if(res.ok){
                this.updateCourses({id: courseId}, 'remove')

                this.actionCompletedStage = {...this.actionCompletedStage, completed: true}
                setTimeout(()=>{
                    this.actionCompletedStage = {
                        started: false,
                        doing: false,
                        completed: false
                    }
                }, 3000)
            }else{
                res.json().then(error => console.warn(error))
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

            this.updateLocalStorage('courses', this.courses)
        },

        loadCourses: async function(token){
            const res = await fetch(`${apiHost}/courses`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                })

            if(res.ok){
                const courses = await res.json().then(data => data)
                this.updateLocalStorage('courses', courses)
                this.navigate('/home')
            }else {
                res.json().then(error => console.warn(error))
            }
        },

        updateLocalStorage: function(key, value){
            this[key] = value
            const currentData = JSON.parse(localStorage.getItem('data') || null) || {}
            localStorage.setItem('data', JSON.stringify({...currentData, [key]: value}))
        },

        getFromLocalStorage: function(key, defaultVal){
            const data = localStorage.getItem('data') || null

            if(data){
                return JSON.parse(data)[key]
            }else {
                return defaultVal
            }
        },

        setActiveCourseEditState: function(bool){
            this.activeCourseEditState = !!bool
        },

        setActiveCourse(course){
            this.activeCourse = course
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
    min-height: 100vh;
    padding-top: 15vh;
    display: grid;
    place-items: center;
}

.container {
    /* background-color: green; */
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

ul li {
    list-style: none;
}


/* RESPONSIVENESS */

@media screen and (max-width: 50rem){
    .page .container {
        width: 80vw;
        min-width: none;
    }

    :root {
        font-size: clamp(10px, 2.1vw, 25px);
    }
}

</style>