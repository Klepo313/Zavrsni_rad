<template>
    <div class="app" @click="goToHome()">
        <div class="short-container">
            <span class="abbr"> {{ abbr }} </span>
        </div>
        <div class="long-container">
            <h2> {{ title }} </h2>
            <h3> Predati do: {{ due }} </h3>
        </div>
    </div>
</template>

<script>
export default {
    name: "UploadContainer",
    props: [
        'id', 'abbr', 'title', 'due'
    ],
    methods:{
        goToHome(){
            let upload_id = this.id
            //let upload_title = this.title
            
            sessionStorage.setItem('upload_id', upload_id);
            //sessionStorage.setItem('upload_title', upload_title)

            let eCourse_id = sessionStorage.getItem('eCourse_id')

            this.$router.push('/eCourses/' + eCourse_id + '/' + upload_id); 
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
    .app{
        margin-bottom: 20px;
    }
    .app:hover{
        opacity: 0.7;
        cursor: pointer;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        /*
        width: 95%;
        outline: 2px solid var(--main_yellow);
        */
    }
    
</style>