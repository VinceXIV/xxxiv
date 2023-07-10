<template>
    <form @submit.prevent="handleBtnClick">
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

        <div class="form-btns">
            <button v-for="btn in buttons" :key="`btn-${btn.id}`"
                class="btn"
                :class="btn.visibility"
                @click="(e)=>handleBtnClick(btn.action, e)">
                {{ btn.action }}
            </button>
        </div>
    </form>
</template>

<script>
export default({
    name: 'CourseForm',

    props: {
        handleFormBtnClick: Function,
        initialFormData: Object,
        buttons: Array
    },

    data(){
        return {
            formData: this.initialFormData || 
                {
                    course_name: '',
                    course_teacher_name: '',
                    course_total_hours: ''
                }
        }
    },

    methods: {
        handleBtnClick: function(action, e){
            e.preventDefault()

            this.handleFormBtnClick(this.formData, action)

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

.form-btns {
    display: flex;
    flex-direction: row;
    gap: 1vw;
}

.btn.hidden {
    visibility: hidden;
    background-color: brown;
}
</style>