<template>
    <div>
        <div class="upperInfo">
            <div>
                <h1 ref="hd1">Dashboard</h1>
                <h4>student</h4>
            </div>
            <LogoutBtn />
        </div>
        <div class="searchContainer">
            <label for="">Search for eCourses</label>
            <input id="searchInput" type="text" placeholder="Search School, eCourse, etc.">
            <img class="icons" src="../assets/searchIcon.svg" alt="search">
        </div>
        <div class="courseContainer">
            <label for="">Last visited eCourses</label>
            <div class="course-content-cc">
                <eCourse 
                    v-for="course in eCourses"
                    :key="course.id"
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
        LogoutBtn,
    },
    data() {
        return {
            eCourses: {}
        }
    },
    created(){
        
        let ses_uloga_id = sessionStorage.getItem('id_uloga')
        let url = "http://localhost:3000/eCourses/" + ses_uloga_id

        fetch(url)
           .then(response => {
                response.json().then(parsedJson => {

                    console.log(parsedJson)

                    for(let i = 0; i < parsedJson.length ; i++){
                        console.log(parsedJson[i].nap_id + ", " + parsedJson[i].osa_ime_p + ' ' + parsedJson[i].osa_prezime_p + ", " + parsedJson[i].nap_naziv)
                        
                        this.eCourses[i] = {
                            id: parsedJson[i].nap_id,
                            name: parsedJson[i].osa_ime_p + ' ' + parsedJson[i].osa_prezime_p,
                            admin: parsedJson[i].nap_naziv
                        }
                        
                    }
                    
                }) 
            })
    }
    
    
    
}

</script>

<style scoped>

h1, h4{
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
}
h1{
    font-size: 35px;
    line-height: 50px;
    letter-spacing: 0.02em;
    color: white;
}
h4{
    font-size: 16px;
    line-height: 25px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    color: var(--main_yellow);
}
.searchContainer, .courseContainer{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
}
.course-content-cc{
    height: 90vh;
    overflow-y: scroll;
    /*outline: 1px solid red;*/
}

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


label{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    margin-bottom: 15px;
}
#searchInput{
    width: 720px;
    padding: 15px 58px;
    background: none;
    outline: none;
    border: 2px solid var(--main_blue);
    border-radius: 10px 10px 10px 10px;
    
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
    
    color: #FFFFFF;
    text-align: left;
}
#searchInput:focus{
    background: var(--upload_light_black);
}
.icons{
    position: absolute;
    cursor: pointer;
    margin-top: 55px;
    margin-left: 20px;
}
.icons:hover{
    opacity: 0.9;
    transform: scale(0.9)
}

</style>

<style>
.upperInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
</style>