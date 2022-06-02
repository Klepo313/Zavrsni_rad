<template>
    <div>
        <div class="pop-up">
            <div class="frame">
                <img src="../assets/groupIcon.svg" alt="">
                <h3></h3>
                <input type="text">
                <button class="loginBtn">Join eCourse</button>
            </div>
        </div>
        <div class="upperInfo">
            <div>
                <h1 ref="header">Moji kolegiji</h1>
                <h4>učenik</h4>
            </div>
            <LogoutBtn />
        </div>
        <div class="courseContainer">
            <label for="">Svi radni kolegiji</label>
            <div class="course-content-cc">
                <!-- @click="getPropValues(this)" -->
                <eCourse 
                    v-for="course in eCourses"
                    :key="course.id"
                    :id="course.id"
                    :naziv="course.name"
                    :prof="course.admin"
                />
            </div>
        </div>
    </div>
</template>

<script>

import eCourse from "../components/eCourse.vue"
import LogoutBtn from "../components/LogoutBtn.vue"

export default {
    components: {
        eCourse,
        LogoutBtn
    },
    data() {
        return {
            eCourses: {}
        }
    },
    created() {
        let ses_uloga_id = sessionStorage.getItem('id_uloga')
        let url = "http://localhost:3000/eCourses/" + ses_uloga_id

        fetch(url)
           .then(response => {
                response.json().then(parsedJson => {

                    for(let i = 0; i < parsedJson.length ; i++){
                        console.log(parsedJson[i].prd_id + ", " + parsedJson[i].osa_ime_p + ' ' + parsedJson[i].osa_prezime_p + ", " + parsedJson[i].nap_naziv)
                        
                        this.eCourses[i] = {
                            id: parsedJson[i].prd_id,
                            name: parsedJson[i].nap_naziv,
                            admin: parsedJson[i].osa_ime_p + ' ' + parsedJson[i].osa_prezime_p
                        }
                        
                    }
                    
                }) 
            })
    }
}

</script>

<style scoped>

::-webkit-scrollbar {
    width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: var(--bg);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--light_black);
  border-radius: 5px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.pop-up{
    top: 0;
    left: 0;
    z-index: 99;
    background: rgba(0, 0, 0, 0.8);
    position: absolute;
    width: 100%;
    height: 100vh;
    display: none;
}
.frame{
    width: 436px;
    height: 436px;
    background: var(--light_black);
    border-radius: 20px;
}

.upperInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.upperInfo>div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
}
.upperInfo>div:nth-child(2):hover{
    cursor: pointer;
    transform: scale(0.97);
}
h1{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 35px;
    line-height: 50px;
    /* identical to box height */

    letter-spacing: 0.02em;

    color: #FFFFFF;
}
h4{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 25px;
    /* identical to box height */

    letter-spacing: 0.05em;
    text-transform: uppercase;

    color: var(--main_yellow);
}
span{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    color: #858585;
    margin-left: 12px;
}
.courseContainer{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
}
label{
    margin-bottom: 15px;
}
.course-content-cc{
    height: 90vh;
    overflow-y: scroll;
    /*outline: 1px solid red;*/
}


</style>