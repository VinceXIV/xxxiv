<template>
    <div class="page register-page">
        <div class="container">
            <h1 class="title">Register Course</h1>
            <CourseForm :handleFormBtnClick="registerCourse" :buttons="buttons"/>
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
        registerCourse: Function
    },

    data(){
        return {
            buttons: [
                {id: 1, action: 'Register', display: ''}
            ]
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