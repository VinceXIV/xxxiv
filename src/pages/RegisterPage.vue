<template>
    <div class="page register-page">
        <div class="container">
            <h1 class="title">Register Course</h1>
            <CourseForm :updateCourses="updateCourses" :handleFormSubmit="registerCourse"/>
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
        courses: Array,
        updateCourses: Function,
        loggedIn: Boolean,
        navigate: Function,
        registerCourse: Function
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