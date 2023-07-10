<template>
    <form @submit.prevent="handleSubmit">
        <div class="form-item">
            <label for="course-name">Course name</label>
            <input name="course-name" v-model="formData.course_name" placeholder="Enter course name"/>
        </div>

        <div class="form-item">
            <label for="teacher-name">Teacher name</label>
            <input name="teacher-name" v-model="formData.course_teacher_name" placeholder="Enter teacher name"/>
        </div>

        <div class="form-item">
            <label for="hours">Total # of hours</label>
            <input name="hours" v-model="formData.course_total_hours" placeholder="Enter number of hours"/>
        </div>

        <input class="btn" type="submit" value="enter system">
    </form>
</template>

<script>
export default({
    name: 'CourseForm',

    props: {
        handleFormSubmit: Function
    },

    data(){
        return {
            formData: {
                course_name: '',
                course_teacher_name: '',
                course_total_hours: ''
            }
        }
    },

    methods: {
        handleSubmit: function(){
            this.handleFormSubmit(this.formData)

            this.formData = {
                course_name: '',
                course_teacher_name: '',
                course_total_hours: ''
            }
        }
    }
})
</script>

<style scoped>
form {
    padding: 1.2vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

.form-item {
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    width: 100%;
    justify-content: left;
}

.form-item input {
    outline: var(--outline-faint);
    padding: 0.45vw;
}
</style>