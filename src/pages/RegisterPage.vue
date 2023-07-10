<template>
    <div class="page register-page">
        <div class="container">
            <h1 class="title">Register Course</h1>
            <CourseForm :handleFormBtnClick="handleClick" :buttons="buttons"/>
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
        handleFormBtnClick: Function
    },

    data(){
        return {
            buttons: [
                {id: 1, action: 'Register', display: ''},
                {id: 2, action: 'View Registered Courses', display: ''}
            ]
        }
    },

    methods: {
        handleClick: function(course, action, e){
            e.preventDefault()

            if(action === 'View Registered Courses'){
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