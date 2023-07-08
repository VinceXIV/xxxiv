<template>
    <form @submit="handleCourseSubmit">
        <div class="form-item">
            <label for="course-name">Course name</label>
            <input name="course-name" placeholder="Enter course name"/>
        </div>

        <div class="form-item">
            <label for="teacher-name">Teacher name</label>
            <input name="teacher-name" placeholder="Enter teacher name"/>
        </div>

        <div class="form-item">
            <label for="hours">Total # of hours</label>
            <input name="hours" placeholder="Enter number of hours"/>
        </div>

        <input class="btn" type="submit" value="enter system">
    </form>
</template>

<script>
export default({
    name: 'CourseForm',

    props: {
        updateCourses: Function
    },

    methods: {
        handleCourseSubmit: function(e){
            e.preventDefault()
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