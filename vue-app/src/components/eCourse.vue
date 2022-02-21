<template>
    <div>
        <div class="eCourse">
            <img src="../assets/image5.png" alt="">
            <div class="eCourseDetails">
                <p class="courseName"> {{ name }} </p>
                <p class="courseAdmin"> {{ admin }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    props: ['name', 'admin']
}
</script>

<style scoped>

.eCourse{
    /* background-color: var(--light_black); */
    width: 980px;
    height: 80px;
    border-radius: 15px;

    display: flex;
    align-items: center;
}
.eCourse:hover{
    background-color: var(--light_black);
    padding-left: 15px;
    cursor: pointer;
}
.eCourse > img{
    height: 80%;
    border-radius: 5px;
    /* margin-left: 15px; */
}
.eCourseDetails{
    margin-left: 15px;
}
.courseName, .courseAdmin{
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 160%;
}
.courseAdmin{
    font-size: 16px;
    opacity: 0.8;
    font-weight: 400;
}

</style>
