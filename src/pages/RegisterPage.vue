<template>
    <div class="page register-page">
        <div class="container">
            <h1 class="title">Register Course</h1>
            <CourseForm :handleFormBtnClick="handleClick" :buttons="buttons" :actionCompletedStage="actionCompletedStage"/>
        </div>
    </div>
</template>

<script>
import CourseForm from '@/components/CourseForm.vue';

export default({
    name: 'RegisterPage',

    components: {
        CourseForm,
    },

    props: {
        loggedIn: Boolean,
        navigate: Function,
        handleFormBtnClick: Function,
        actionCompletedStage: Object
    },

    data(){
        return {
            buttons: [
                {id: 1, name: 'register', action: 'Register', display: ''},
                {id: 2, name: 'View Registered Courses', action: 'go-to-main', display: ''}
            ]
        }
    },

    methods: {
        handleClick: function(course, action, e){
            e.preventDefault()

            if(action === 'go-to-main'){
                this.navigate('/main')
            }else{
                this.handleFormBtnClick(course, action, e)
            }
        }
    },

    created: function(){
        if(!this.loggedIn){
            this.navigate('/login')
        }
    }
})
</script>

<style scoped>
.register-page .btn {
    justify-self: left;
}
</style>