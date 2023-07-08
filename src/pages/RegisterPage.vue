<template>
    <div class="page register-page">
        <div class="container">
            <h1 class="title">Register Course</h1>
            <CourseForm />
            <CourseTable :courses="courses"/>
        </div>
    </div>
</template>

<script>
import CourseForm from '@/components/CourseForm.vue';
import CourseTable from '@/components/CourseTable.vue';

export default({
    name: 'RegisterPage',

    components: {
        CourseForm,
        CourseTable
    },

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

@media screen and (max-width: 50rem){
    .register-page .container {
        width: 80vw;
        min-width: none;
    }
}
</style>