<template>
    <div class="page main-page">
        <div class="container">
            <CourseTable :courses="courses" />
        </div>
    </div>
</template>

<script>
import CourseTable from '@/components/CourseTable.vue';

export default({
    name: 'MainPage',

    components: {
        CourseTable
    },

    props: {
        courses: Array
    }
})
</script>

<style>
.main-page .container {
    display: flex;
    flex-direction: column;
    gap: 1.5vw;
}
</style>