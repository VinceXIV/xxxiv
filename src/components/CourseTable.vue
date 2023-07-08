<template>
    <div class="registered-courses">
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
                <td>{{ course.teacher_name }}</td>
                <td>{{ course.total_hours }}</td>
                <td>
                    <button class="btn">Select</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default ({
    name: 'CourseTable',

    props: {
        courses: Array
    }
})
</script>

<style>
.registered-courses {
    width: 100%;
    padding: 1.2vw;
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
}
.register-page .container {
    width: max(40vw, 40rem);
}
</style>