<template>
    <div>
        <div class="eCourse" @click="goToHome()">
            <img src="../assets/image5.png" alt="">
            <div class="eCourseDetails">
                <p class="courseName"> {{ naziv }} </p>
                <p class="courseAdmin"> {{ prof }} </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ['id', 'naziv', 'prof'],
  methods: {
    goToHome(){
        let eCourse_id = this.id
        console.log("ID: " + eCourse_id)
        sessionStorage.setItem('eCourse_id', eCourse_id);
        this.$router.push('/eCourses/' + eCourse_id); 
    },
    
  }
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
    margin-bottom: 2px;
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

#oneCourse{
    display: block;
    text-align: center;
    background-color: red;
}

span{
    font-size: 16px;
    opacity: 0.8;
    font-weight: 400;
}

</style>
