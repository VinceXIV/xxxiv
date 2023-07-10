<template>
    <div class="page main-page">        
        <div class="container">
            <h1 v-if="activeCourseEditState" class="title">Edit Course</h1>
            <CourseForm v-if="activeCourseEditState"
                :buttons="buttons"
                class="form-modal"
                :initialFormData="activeCourse"
                :key="`edit-course${activeCourse.id}`"
            />
            <CourseTable :courses="courses" :navigate="navigate" />
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
        loggedIn: Boolean,
        navigate: Function,
    },

    data(){
        return {
            activeCourseEditState: false,
            activeCourse: {},
            buttons: [
                {id: 1, action: 'Register', visibility: 'hidden'},
                {id: 2, action: 'Edit', visibility: ''},
                {id: 3, action: 'Remove', visibility: ''},
                {id: 4, action: 'Cancel', visibility: ''},
            ]
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
        },

        toggleActiveEditState: function(){
            this.activeCourseEditState = !this.activeCourseEditState
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
</style>