<template>
    <div class="registered-courses">
        <h1 class="title">Available Courses</h1>

        <table ref="courseTable">
            <tr class="header">
                <th class="subtitle">Unique Code</th>
                <th class="subtitle">Course Name</th>
                <th class="subtitle">Teacher Name</th>
                <th class="subtitle">Total of Hours</th>
                <th class="subtitle">Select</th>
            </tr>

            <tr :id="`record-${course.id}`"
                class="record"
                v-for="course in courses"
                :key="course.id" @click="makeActive(course)">

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
                        @click="(e)=>handleCourseTableBtnClick(course, 'delete', e)">
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
        updateCourses: Function,
        handleCourseTableBtnClick: Function
    },

    data(){
        return {
            activeCourse: null
        }
    },

    methods: {
        makeActive: function(course){
            const allRecords = this.$refs.courseTable.querySelectorAll('.record')
            allRecords.forEach(record => record.classList.remove('active'))
            
            this.activeCourse = course
            this.$refs.courseTable.querySelector(`#record-${course.id}`)?.classList.add('active')
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
</style>