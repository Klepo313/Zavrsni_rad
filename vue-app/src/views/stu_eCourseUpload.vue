<template>
    <div id="app">
        <div class="upperInfo">
            <div>
                <h1 ref="hd1"></h1>
                <h4 ref="subh">ELEKTROTEHNIČKA ŠKOLA SPLIT - 4.e</h4>
            </div>
            <LogoutBtn />
        </div>
        <div class="content">
            <div class="mainTitle">
                <h2 ref="header"></h2>
            </div>
            <div>
                <span class="sTitle">Predati do:</span>
                <p class="sPrghf" ref="due"></p>
            </div>
            <div>
                <span class="sTitle">Opis vježbe</span>
                <p class="sPrghf" ref="description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non auctor 
                    massa, in ultricies arcu. In eleifend, tortor sit amet egestas laoreet, nisl neque 
                    viverra diam, nec consectetur tortor mauris id elit.
                </p>
            </div>
            <div>
                <span class="sTitle">Prikvačeni dokumenti</span>
                <div class="upload-container">
                    <AttachedFile class="slideInLeft"
                        v-for="course in attcCourses"
                        :key="course.id"
                        :header="course.title"
                        :blob_url="course.blob_url"
                        :image="course.image"
                    />
                </div>
            </div>
            <div>
                <div class="myWorkContainer">
                    <span class="sTitle">Preneseni dokumenti</span>
                    <div class="edit" @click="openPopup">
                        <img src="../assets/editIcon.svg" alt="editIcon">
                        <span>Uredi</span>
                    </div>
                </div>
                <!--    :image="updc.image"  -->
                <div class="component">
                    <UploadedCourse id="uploadedcourse" class="slideInLeft"
                        v-for="updc in upldCourses"
                        :key="updc.id"
                        :title="updc.title"
                        :blob_url="updc.blob_url"
                        :image="updc.image"
                    />
                </div>
            </div>
            <button id="btnAddAttch" type="button" @click="openPopup">
                <img src="../assets/plusIcon.svg" alt="plusIcon"> Dodaj rad
            </button>
            <div ref="upDiv" class="upDiv">
                <!-- <a ref="download_btn" href="" download>Download me</a> -->
            </div>
        </div>

        <div class="pop-up" ref="popup">
            <div class="divara">
                <section class="sec1">
                    <div class="uploadPlaces">
                        <div class="mainTitle">
                            <h2 class="h2PopUp">Upload mjesto</h2>
                        </div>
                        <div class="uploadDevices">
                            <button class="btnUpDevice">
                                <img src="../assets/gdriveIcon.svg" alt="GoogleDrive"> Google Drive
                            </button>
                            <button class="btnUpDevice">
                                <img src="../assets/dropboxIcon.svg" alt="DropBox"> DropBox
                            </button>
                            <button class="btnUpDevice">
                                <img src="../assets/onedriveIcon.svg" alt="OneDrive"> OneDrive
                            </button>

                            <div class="strLine"></div>

                            <button class="btnUpDevice">
                                <img src="../assets/thispcIcon.svg" alt="ThisDevice"> Ovaj uređaj
                            </button>
                        </div>
                    </div>
                    <button type="button" class="btnBack" @click="closePopup">Zatvori</button>
                </section>
                <div class="fakeSection">
                    <section class="sec2">
                        <div class="mainTitle">
                            <h2 class="h2PopUp">Drag 'n' drop</h2>
                        </div>
                        <div class="dndArea">
                            <span>Drag and drop</span> 
                        </div>
                        <input ref="file_upload" class="inpUpload" type="file" multiple="true" @change="changeFile" >
                    </section>
                    <section class="sec3">
                        <div class="mainTitle">
                            <h2 class="h2PopUp">Preneseni dokumenti</h2>
                        </div>
                        <div class="attachedFiles slideInLeft">
                            <UploadedCourse id="uploadedcourse" class="slideInLeft"
                                v-for="updc in upldCourses"
                                :key="updc.id"
                                :title="updc.title"
                                :blob_url="updc.blob_url"
                                :image="updc.image"
                            />
                        </div>
                        <button id="btnSubmit" ref="btnSubmit">
                            <img class="uploadIcon" src="../assets/uploadIcon.svg" alt="uploadIcon">
                            Spremi promjene
                        </button>
                    </section>
                </div>
                
            </div>
        </div>

        <div class="upload-pop" ref="upload_pop">
            <span>Uspješno preneseno!</span>
        </div>

    </div>
</template>

<script>

import LogoutBtn from '../components/LogoutBtn.vue'
import AttachedFile from '../components/AttachedFile.vue'
import UploadedCourse from '../components/UploadedCourse.vue'

export default {
    components: {
        LogoutBtn,
        AttachedFile, 
        UploadedCourse
    },
    // computed: {
    //     extIcon() {
    //         return {
    //             ...this.upldCourses,
    //             icon: this.upldCourses.image && require(`../assets/extIcons/${this.upldCourses.image }`)
    //         }
    //     }
    // },
    data(){
        return {
            attcCourses: {},
            upldCourses: {}
        }
    },
    methods: {
        openPopup(){
            this.$refs.popup.style.display = "flex";
        },
        closePopup(){
            this.$refs.popup.style.display = "none";
        }
    },
    mounted(){

        let ses_uloga_id = sessionStorage.getItem('id_uloga')
        let ses_id = sessionStorage.getItem('id_osobe')
        let upload_id = sessionStorage.getItem('upload_id')
                
        const header = this.$refs.header
        const due = this.$refs.due
        const description = this.$refs.description

        header.innerHTML = sessionStorage.getItem('dok_naziv')
        due.innerHTML = sessionStorage.getItem('dok_due')
        description.innerHTML = sessionStorage.getItem('dok_opis')

        function showExtIcons(extension) {

            let image_ext_icon

            switch(extension){
                default:
                    image_ext_icon = "undefined.svg"
                    break;
                case "docx":
                    image_ext_icon = "docx.svg";
                    break;
                case "html":
                    image_ext_icon = "html.svg";
                    break;
                case "png"||"jpg"||"jpeg"||"gif"||"bmp":
                    image_ext_icon = "img.svg";
                    break;
                case "pdf":
                    image_ext_icon = "pdf.svg";
                    break;
                case "pptx":
                    image_ext_icon = "pptx.svg";
                    break;
                case "sql":
                    image_ext_icon = "sql.svg";
                    break;
                case "zip":
                    image_ext_icon = "zip.svg"
                    break;
                case "txt":
                    image_ext_icon = "txt.svg"
                    break;
                case "exe":
                    image_ext_icon = "exe.svg"
                    break;
            }

            return image_ext_icon
        }
   
        function removeExtension(filename) {
            return filename.substring(0, filename.lastIndexOf('.')) || filename;
        }

        fetch("http://localhost:3000/userDetails/" + ses_uloga_id)
        .then(response => {
            response.json().then(parsedJson => {
                let eCourse_title = sessionStorage.getItem('eCourse_title')
                this.$refs.hd1.innerHTML = eCourse_title
                this.$refs.subh.innerHTML = parsedJson[0].npr_naziv 
                + " - " + parsedJson[0].odj_naziv
            })
        })

        /*******************************/
        /* ATTACHED FILES */
        /*******************************/

        fetch("http://localhost:3000/attchedData/" + upload_id)
        .then(response => {
            response.json().then(parsedJson => {

                console.log("SVE DATOTEKE:", parsedJson)

                for(let i = 0; i < parsedJson.length ; i++){

                    let dat_id = parsedJson[i].dat_id
                    let dat_title = parsedJson[i].dat_naziv
                    let dat_base64 = parsedJson[i].dat_base64
                    let dat_mimetype = parsedJson[i].dat_mimetype
                    let fileExt = dat_title.split('.').pop();
                    
                    //console.log(fileExt)

                    let byteCharacters = atob(dat_base64);
                    let byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    let byteArray = new Uint8Array(byteNumbers);
                    let blobURL = URL.createObjectURL(new Blob([byteArray] , {type: `${dat_mimetype}`}));

                    let image_ext_icon = showExtIcons(fileExt)
                    
                    //console.log("IMAGE EXT ICON: " + image_ext_icon)
                
                    this.attcCourses[i] = {
                        id: dat_id,
                        title: dat_title,
                        blob_url: blobURL,
                        image: image_ext_icon
                    }     
                }

            }) 
        })

        /*******************************/
        /* MY UPLOADS */
        /*******************************/

        fetch("http://localhost:3000/myWork/" + ses_id + '/' + upload_id)
        .then(response => {
            response.json().then(parsedJson => {
                console.log("MY WORK:", parsedJson)

                for(let i = 0; i < parsedJson.length ; i++){

                    let dat_id = parsedJson[i].dat_id
                    let dat_title = parsedJson[i].dat_naziv
                    let dat_base64 = parsedJson[i].dat_base64
                    let dat_mimetype = parsedJson[i].dat_mimetype
                    let fileExt = dat_title.split('.').pop();

                    let byteCharacters = atob(dat_base64);
                    let byteNumbers = new Array(byteCharacters.length);
                    for (let i = 0; i < byteCharacters.length; i++) {
                        byteNumbers[i] = byteCharacters.charCodeAt(i);
                    }
                    let byteArray = new Uint8Array(byteNumbers);
                    let blobURL = URL.createObjectURL(new Blob([byteArray] , {type: `${dat_mimetype}`}));

                    //let image_ext_icon = showExtIcons(fileExt)
                    
                    //console.log("IMAGE EXT ICON: " + image_ext_icon)
                
                    this.upldCourses[i] = {
                        id: dat_id,
                        title: dat_title,
                        blob_url: blobURL,
                        image: fileExt
                    }     
                }
            })
        })

        /*******************************/
        /* FILE UPLOAD */
        /*******************************/

        var file_input = this.$refs.file_upload
        var base64String
        let mimeType

        function changeFile() {
            for(let i = 0; i < file_input.files.length; i++) {
                var reader = new FileReader();
                reader.onloadend = () => {

                    let full_base64 = reader.result
                    mimeType = full_base64.match(/[^:]\w+\/[\w-+\d.]+(?=;|,)/);

                    base64String = reader.result
                        .replace('data:', '')
                        .replace(/^.+,/, '');

                    console.log("SIZE: " + base64String.length 
                                + "\nMIME_TYPE: " + mimeType)
                }
                reader.readAsDataURL(file_input.files[i]);
            }
        } file_input.addEventListener('change', changeFile);
        
        this.$refs.btnSubmit.addEventListener("click", () => {

            let dat_title = file_input.files[0].name;
            let fileExt = dat_title.split('.').pop();
            console.log(fileExt)

            let dat_fileName = removeExtension(dat_title)
            console.log(dat_fileName);

            let data = {
                "upload_id": upload_id,
                "osa_id": ses_id,
                "name": dat_title,
                "dat_file": dat_fileName,
                "ext": fileExt,
                "mimeType": mimeType,
                "base64": base64String
            }

            let upload_pop = this.$refs.upload_pop
            function timeout(){
                setTimeout(()=>{
                    upload_pop.style.display = "none"
                }, 2000)
            }

            fetch("http://localhost:3000/blobFile", {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            .then(response => {
                response.json().then(parsedJson => {
                   console.log(parsedJson);
                    if(parsedJson.status === "successful"){
                        upload_pop.style.display = "flex"
                        upload_pop.style.backgroundColor = "green"
                        timeout();
                    } else {
                        upload_pop.style.display = "flex"
                        upload_pop.style.backgroundColor = "red"
                        timeout();
                    }
                }) 
            })



        })

    }
    
}

</script>

<style scoped>

@keyframes slidein {
  from {
    bottom: -100px;
  }

  to {
    bottom: 30px;
  }
}

@keyframes slideout {
  from {
    bottom: 30px;
  }

  to {
    bottom: -100px;
  }  
}

@keyframes slideInLeft {
  /* 0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  } */
    0% { 
        opacity: 0;
        transform: translateY(-60%);
    }
    100% { 
        opacity: 1; 
        transform: translateY(0);
    } 
}
.slideInLeft{
  animation: 1s ease-out 0s 1 slideInLeft;
}

#app{
    width: 50vw;
}
h1, h4{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
}
h1{
    font-size: 35px;
    line-height: 50px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #FFFFFF;
}
h4{
    font-size: 16px;
    line-height: 25px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: var(--main_yellow);
}
h2{
    font-weight: 600;
    font-size: 23px;
    line-height: 42px;
    margin-left: 22px;
    text-transform: uppercase;
}
button{
    border: none;
    background: none;
    outline: none;
}
.upload-pop{
    position: absolute;
    bottom: 30px;
    left: 50%;
    right: 50%;

    width: 200px;
    height: 50px;

    border-radius: 10px;
    background-color: green;
    color: white;
    font-size: 16px;
    cursor: default;

    display: none;
    align-items: center;
    justify-content: center;

    animation-duration: 2s;
    animation-name: slidein;
}
.upDiv{
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}
.a_hover{
    opacity: 0.8;
}
.upperInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.content {
    margin-top: 40px;
}
.sTitle{
    font-weight: 200;
    font-size: 17px;
    line-height: 30px;
}
.sPrghf{
    font-weight: 300;
    font-size: 15px;
    line-height: 27px;
    opacity: 0.6;
}
.content > div{
    margin-bottom: 10px;    
}
.content > div:first-child{
    margin-bottom: 30px;
    border-left: 6px solid var(--main_yellow);
}
.content > div:nth-child(5){
    margin-top: 15px;
}
.sPrghf:nth-child(2){
    width: 638px;
}
.upload-container, .component{
    margin-top: 10px;
}
.component{
    background-color: var(--upload_light_black);
    padding: 15px 25px;
    border-radius: 5px;
}
#uploadedcourse{
    margin-bottom: 15px;
}
#uploadedcourse:last-child{
    margin-bottom: 0px;
} 
.myWorkContainer{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.edit{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    opacity: 0.8;
}
.edit:hover{
    opacity: 0.6;
    cursor: pointer;
}
.edit > span {
    padding-left: 10px;
}
#btnAddAttch{
    margin-top: 20px;
    color: var(--main_yellow);
    text-align: center;
    background: none;
    outline: none;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
}
#btnAddAttch:hover{
    opacity: 0.8;
    cursor: pointer;
}
#btnAddAttch > img {
    width: 15px;
    margin-right: 10px;
}


/* POP-UP  */ 

.pop-up{
    background-color: rgb(0, 0, 0, 0.9);
    position: absolute;
    top: 0; left: 0;
    width: 100%;
    height: 100vh;

    display: none;
    align-items: center;
    justify-content: center;
}
.divara{
    width: 60%;
    height: 95%;
    min-width: 900px;
    border-radius: 10px;
    background-color: var(--light_black);
    padding: 45px;

    display: flex;
}
/* section {
    outline: 1px solid red;
} */
.sec1{
    height: 100%;
    width: 40%;
    border-right: 1px solid var(--upload_light_black);;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.fakeSection{
    margin-left: 45px;
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.sec2, .sec3{
    width: 100%;
    height: 100%;
}
.sec3{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
}
.sec2{
    height: 70%;
}
.mainTitle{
    border-left: 6px solid var(--main_yellow);
    padding-left: 10px;
}
.h2PopUp{
    font-weight: 500;
    font-size: 20px;
    line-height: 30px;
    text-transform: none;
    margin-left: 0px;
}
.uploadDevices{
    margin-top: 40px;
    height: 240px;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.uploadPlaces{
    width: 100%;
}
.btnUpDevice{
    background: none;
    outline: none;
    border: none;

    font-size: 16px;
    font-weight: 500;

    display: flex;
    align-items: center;
    justify-content: center;

    filter: grayscale(1);
}
.btnUpDevice:last-child{
    filter: grayscale(0);
}
.btnUpDevice:hover{
    cursor: pointer;
    filter: grayscale(0);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.btnUpDevice > img{
    margin-right: 15px;
}
.strLine{
    border-top: 1px solid var(--upload_light_black);
    width: 90%;
}
.btnBack{
    background: none;
    outline: none;
    border: none;
}
.dndArea{
    margin-top: 30px;
    height: 147px;
    width: 680px;
    border-radius: 20px;
    background: var(--upload_light_black);
}
.inpUpload{
    margin-top: 20px;
}
.attachedFiles{
    margin-top: 30px;
    max-height: 100%;
    width: 100%;
}
.upldcourse{
    background: var(--upload_light_black);
    padding: 11px 18px;
    border-radius: 5px;
    margin-bottom: 10px;
}
#btnSubmit{
    background: linear-gradient(92.72deg, #C850C0 0%, #4158D0 100%);
    border-radius: 10px;
    font-weight: 300;
    font-size: 16px;
    line-height: 24px;

    padding: 18px 22px;
    margin-top: auto;
    margin-left: auto
}
#btnSubmit > img {
    margin-right: 15px;
}
#btnSubmit:hover{
    cursor: pointer;
    opacity: 0.8;
}
.btnBack:hover{
    cursor: pointer;
    opacity: 0.9;
}
.dndArea{
    display: flex;
    align-items: center;
    justify-content: center;
}
.dndArea > span {
    color: rgb(138, 138, 138);
    cursor: default;
}

</style>