<template>
    <section>
        <div class="container">
            <h1>Laboratorijske vježbe</h1>
        </div>
        <div class="upload">
            <UploadContainer
                v-for="upload in uploads"
                :key="upload.id"
                :id="upload.id"
                :abbr="upload.abbr"
                :title="upload.title"
                :due="upload.due"
                />
            
        </div>
    </section>
</template>

<script>

import UploadContainer from '../components/UploadContainer.vue'

export default {
    data(){
        return {
            uploads: {}
        }
    },
    components: {
        UploadContainer
    },
    created() {

        let ses_uloga_id = sessionStorage.getItem('id_uloga')
        let eCourse_id = sessionStorage.getItem('eCourse_id')
        let url = "http://localhost:3000/eCourses/"+ ses_uloga_id + "/" + eCourse_id

        fetch(url)
           .then(response => {
                response.json().then(parsedJson => {

                    //console.log(parsedJson)

                    sessionStorage.setItem('dok_id', parsedJson[0].dok_id)                   
                    sessionStorage.setItem('vrd_sif', parsedJson[0].vrd_sif)
                    sessionStorage.setItem('dok_naziv', parsedJson[0].dok_naziv)
                    sessionStorage.setItem('dok_opis', parsedJson[0].dok_opis)
                    sessionStorage.setItem('dok_due', parsedJson[0].dok_datdo + " " + parsedJson[0].dok_vrido)

                    for(let i = 0; i < parsedJson.length ; i++){
                        //console.log(parsedJson[i].dok_id + ", "+ parsedJson[i].vrd_sif + ", " + parsedJson[i].dok_naziv + ',\n ' + parsedJson[i].dok_datdo + " " + parsedJson[i].dok_vrido)
                     
                        this.uploads[i] = {
                             id: parsedJson[i].dok_id,
                             abbr: parsedJson[i].vrd_sif,
                             title: parsedJson[i].dok_naziv,
                             due: parsedJson[i].dok_datdo + " " + parsedJson[i].dok_vrido
                        }
                        
                    }
                    
                }) 
            })
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


</style>