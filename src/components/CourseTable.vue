<template>
    <div class="registered-courses">
        <div class="form-details">
            <h1 class="title">
                Available Courses
            </h1>

            <button class="btn register-btn" @click="navigate('/register')">
                Register A New Course
            </button>
        </div>

        <table ref="courseTable">
            <tr class="header">
                <th class="subtitle">Unique Code</th>
                <th class="subtitle">Course Name</th>
                <th class="subtitle">Teacher Name</th>
                <th class="subtitle">Total of Hours</th>
                <th class="subtitle">Select</th>
            </tr>

            <tr :id="`record-${course.id}`" class="record" v-for="course in courses" :key="course.id">
                <td>{{ course.id }}</td>
                <td>{{ course.course_name }}</td>
                <td>{{ course.course_teacher_name }}</td>
                <td>{{ course.course_total_hours }}</td>
                <td class="buttons">
                    <button class="btn"
                        @click="(e)=>handleCourseTableBtnClick(course, 'edit', e)">
                        Edit
                    </button>
                    <button class="btn"
                        @click="(e)=>handleCourseTableBtnClick(course, 'remove', e)">
                        Delete
                    </button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>

export default ({
    name: 'CourseTable',

    props: {
        courses: Array,
        handleCourseTableBtnClick: Function,
        navigate: Function
    },

    data(){
        return {
            activeCourse: null
        }
    }
})
</script>

<style>
.registered-courses {
    width: 100%;
    padding: 1.2vw;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.form-details {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.registered-courses table {
    width: 100%;
    border-collapse: collapse;
}

tr {
    border-top: 0.1rem solid #d4d4d4;
}

th, td {
    text-align: left;
    padding: 0.5vw;
    font-size: 1rem;
}
.register-page .container {
    width: max(40vw, 40rem);
}

.record .btn {
    width: 5rem;
    min-width: max-content;
}

.record.active {
    background-color: #d4d4d4;
}

td {
    height: 100%;
}

.record .buttons {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    margin-top: auto;
}

.register-btn {
    background-color: rgb(34, 124, 34);
}
</style>