<template>
    <div class="page main-page">
        <div class="container">
            <CourseTable :courses="courses" :updateCourses="updateCourses"/>
            <button class="btn" @click="goToPage('register')">Register Course</button>
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
        updateCourses: Function
    },

    methods: {
        goToPage: function(newPage){
            console.log(newPage)
        }
    }
})
</script>

<style>
.main-page .container {
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
}
</style>