<template>
    <div class="registered-courses">
        <h1 class="title">Available Courses</h1>

        <table >
            <tr class="header">
                <th class="subtitle">Unique Code</th>
                <th class="subtitle">Course Name</th>
                <th class="subtitle">Teacher Name</th>
                <th class="subtitle">Total of Hours</th>
                <th class="subtitle">Select</th>
            </tr>

            <tr class="record" v-for="course in courses" :key="course.id">
                <td>{{ course.id }}</td>
                <td>{{ course.course_name }}</td>
                <td>{{ course.course_teacher_name }}</td>
                <td>{{ course.course_total_hours }}</td>
                <td class="buttons">
                    <button class="btn">Edit</button>
                    <button class="btn">Delete</button>
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
        updateCourses: Function
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
</style>