<template>
    <div class="page main-page">        
        <div class="container">
            <h1 v-if="activeCourseEditState" class="title">Edit Course</h1>
            <CourseForm v-if="activeCourseEditState"
                class="form-modal"
                :initialFormData="activeCourse"
                :key="`edit-course${activeCourse.id}`"/>
            <CourseTable :courses="courses" :handleCourseTableBtnClick="handleCourseTableBtnClick"/>
            <button class="btn register-btn" @click="navigate('/register')">Register A New Course</button>
        </div>
    </div>
</template>

<script>
import CourseTable from '@/components/CourseTable.vue';
import CourseForm from '@/components/CourseForm.vue';

export default({
    name: 'MainPage',

    components: {
        CourseTable,
        CourseForm
    },

    props: {
        courses: Array,
        updateCourses: Function,
        loggedIn: Boolean,
        navigate: Function,
        editCourse: Function,
        deleteCourse: Function
    },

    data(){
        return {
            activeCourseEditState: false,
            activeCourse: {}
        }
    },

    created: function(){
        if(!this.loggedIn){
            this.navigate('/login')
        }
    },

    methods: {
        handleCourseTableBtnClick: function(course, action){
            if(action === 'edit'){
                this.activeCourse = course
                this.activeCourseEditState = true
            }
        }
    }
})
</script>

<style scoped>
.main-page .container {
    display: flex;
    gap: 1.5vw;
}

.main-page .btn {
    width: 100%;
}

.register-btn {
    background-color: rgb(34, 124, 34);
}
</style>