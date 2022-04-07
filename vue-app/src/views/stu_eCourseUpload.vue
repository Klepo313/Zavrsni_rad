<template>
    <div id="app">
        <div class="upperInfo">
            <div>
                <h1 ref="hd1">Digitalna logika</h1>
                <h4>ELEKTROTEHNIČKA ŠKOLA SPLIT - 4.e</h4>
            </div>
            <LogoutBtn />
        </div>
        <div class="content">
            <div class="mainTitle">
                <h2>Ponavljanje utvrđenog gradiva · lv1</h2>
            </div>
            <div>
                <span class="sTitle">Due</span>
                <p class="sPrghf">28.01.2022. 12:00 PM</p>
            </div>
            <div>
                <span class="sTitle">Assignment description</span>
                <p class="sPrghf">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non auctor 
                    massa, in ultricies arcu. In eleifend, tortor sit amet egestas laoreet, nisl neque 
                    viverra diam, nec consectetur tortor mauris id elit.
                </p>
            </div>
            <div>
                <span class="sTitle">Assignment files</span>
                <div class="upload-container">
                    <AttachedFile />
                    <AttachedFile />
                </div>
            </div>
            <div>
                <div class="myWorkContainer">
                    <span class="sTitle">My uploaded work</span>
                    <div class="edit">
                        <img src="../assets/editIcon.svg" alt="editIcon">
                        <span>Edit</span>
                    </div>
                </div>
                <div class="component">
                    <UploadedCourse id="uploadedcourse" />
                </div>
            </div>
            <button id="btnAddAttch" type="button">
                <img src="../assets/plusIcon.svg" alt="plusIcon"> Add work
            </button>
        </div>

        <div class="pop-up">
            <div class="divara">
                <section class="sec1">
                    <div class="uploadPlaces">
                        <div class="mainTitle">
                            <h2 class="h2PopUp">Upload device</h2>
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
                                <img src="../assets/thispcIcon.svg" alt="ThisDevice"> This device
                            </button>

                        </div>
                    </div>
                    <button type="button" class="btnBack">Back</button>
                </section>
                <div class="fakeSection">
                    <section class="sec2">
                        <div class="mainTitle">
                            <h2 class="h2PopUp">Drag 'n' drop area</h2>
                        </div>
                        <div class="dndArea">
                            
                        </div>
                        <input class="inpUpload" type="file">
                    </section>
                    <section class="sec3">
                        <div class="mainTitle">
                            <h2 class="h2PopUp">Attached files</h2>
                        </div>
                        <div class="attachedFiles">
                            <UploadedCourse class="upldcourse" />
                            <UploadedCourse class="upldcourse" />
                        </div>
                        <button id="btnSubmit">
                            <img src="../assets/uploadIcon.svg" alt="">
                            Submit changes
                        </button>
                    </section>
                </div>
                
            </div>
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
    }
}
</script>

<style scoped>

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
/* #uploadedcourse:last-child{
    margin-bottom: 0px;
} */
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

    display: flex;
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

</style>