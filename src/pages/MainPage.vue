<template>
    <div class="page main-page">        
        <div class="container">
            <h1 v-if="activeCourseEditState" class="title">Edit Course</h1>
            <CourseForm v-if="activeCourseEditState"
                :buttons="buttons"
                class="form-modal"
                :initialFormData="activeCourse"
                :handleFormBtnClick="handleFormBtnClick"
                :actionCompletedStage="actionCompletedStage"
                :key="`edit-course${activeCourse.id}`"
            />
            <CourseTable :courses="courses" :navigate="navigate" :handleCourseTableBtnClick="handleCourseTableBtnClick" />
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
        handleFormBtnClick: Function,
        actionCompletedStage: Object,
        activeCourseEditState: Boolean,
        activeCourse: Object,
        setActiveCourseEditState: Function,
        setActiveCourse: Function
    },

    data(){
        return {
            buttons: [
                {id: 1, name: 'Register', action: 'register', visibility: ''},
                {id: 2, name: 'Save', action: 'edit', visibility: ''},
                {id: 3, name: 'Remove', action: 'remove', visibility: ''},
                {id: 4, name: 'Cancel', action: 'cancel', visibility: ''},
            ]
        }
    },

    created: function(){
        if(!this.loggedIn){
            this.navigate('/login')
        }
    },

    methods: {
        handleCourseTableBtnClick: function(course, action, e){
            e.preventDefault()

            if(action === 'edit'){
                this.setActiveCourse(course)
                this.setActiveCourseEditState(true)
            }else if(action === 'register'){
                this.setActiveCourse({})
                this.setActiveCourseEditState(true)
            }else if(action === 'remove'){
                this.handleFormBtnClick(course, action, e)
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
</style>