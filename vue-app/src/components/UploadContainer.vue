<template>
    <div class="app" @click="goToHome()">
        <div class="short-container">
            <span class="abbr">LV1</span>
        </div>
        <div class="long-container">
            <h2>Ponavljanje utvrđenog gradiva</h2>
            <h3>Due 28.01.2022. 12:00</h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "UploadContainer",
    methods:{
        goToHome(){
            this.$router.push('/eCourses/4/Ponavljanje'); 
        }
    }
}
</script>

<style scoped>
    .app{
        background-color: var(--light_black);
        width: 100%; height: auto;
        border-radius: 10px;    

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }
    .short-container{
        border-right: 2px solid var(--main_yellow);
        padding: 20px 30px;
    }
    .long-container{
        padding-left: 30px;

        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: flex-start;
    }
    .abbr{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 52px;
        text-transform: uppercase;
    }
    h2, h3{
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        line-height: 30px;
    }
    h2{
        font-size: 17px;
        text-transform: uppercase;
    }
    h3{
        font-size: 15px;
        opacity: 0.6;
    }
    
</style>