<template>
    <div class="page main-page">
        <div class="container">
            <CourseTable :courses="courses" :updateCourses="updateCourses" :navigate="navigate"/>
            <button class="btn" @click="navigate('/register')">Register Course</button>
        </div>
    </div>
</template>

<script>
import CourseTable from '@/components/CourseTable.vue';

export default({
    name: 'MainPage',

    components: {
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
    },
})
</script>

<style>
.main-page .container {
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
}
</style>