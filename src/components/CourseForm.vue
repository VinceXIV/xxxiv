<template>
    <form>
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
    name: 'CourseForm'
})
</script>