<template>
    <div class="page register-page">
        <div class="container">
            <h1 class="title">Register Course</h1>
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

            <div class="registered-courses">
                <table >
                    <tr class="header">
                        <th>Unique Code</th>
                        <th>Course Name</th>
                        <th>Teacher Name</th>
                        <th>Total of Hours</th>
                        <th>Select</th>
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
        </div>
    </div>
</template>

<script>
export default({
    name: 'RegisterPage',

    props: {
        courses: Array
    }
})
</script>

<style scoped>
.register-page .container {
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
}

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

@media screen and (max-width: 50rem){
    .register-page .container {
        width: 80vw;
        min-width: none;
    }
}
</style>