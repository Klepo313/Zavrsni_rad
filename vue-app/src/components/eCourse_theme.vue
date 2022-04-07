<template>
    <section>
        <div class="container">
            <h1>Laboratorijske vježbe</h1>
        </div>
        <div class="upload">
            <UploadContainer id="upload" />
            <UploadContainer id="upload" />
            <UploadContainer id="upload" />
            <UploadContainer id="upload" />
        </div>
    </section>
</template>

<script>

import UploadContainer from '../components/UploadContainer.vue'

export default {
    data(){
        return {
            themeType: 'U'
        }
    },
    components: {
        UploadContainer
    }
}
</script>

<style scoped>

section {
    margin-top: 46px;
    width: 50vw;
}
.container {
    padding-bottom: 8px;
    border-bottom: 2px solid rgb(255, 255, 255, 0.2);
}
h1{
    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 30px;
    line-height: 54px;

    color: #FFFFFF;

    opacity: 0.8;
}
.themeChild{
    margin-top: 30px;
}
.upload {
    margin-top: 25px;
}
#upload{
    margin-bottom: 20px;
}
#upload:hover{
    opacity: 0.7;
    cursor: pointer;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    /*
    width: 95%;
    outline: 2px solid var(--main_yellow);
    */
}

</style>