<template>
    <div class="page register-page">
        <div class="container">
            <h1 class="title">Register Course</h1>
            <CourseForm :updateCourses="updateCourses" />
            <CourseTable :courses="courses" :updateCourses="updateCourses"/>
            <button class="btn" @click="navigate('/home')">See More Courses</button>
        </div>
    </div>
</template>

<script>
import CourseForm from '@/components/CourseForm.vue';
import CourseTable from '@/components/CourseTable.vue';

export default({
    name: 'RegisterPage',

    components: {
        CourseForm,
        CourseTable
    },

    props: {
        courses: Array,
        updateCourses: Function,
        loggedIn: Boolean,
        navigate: Function
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