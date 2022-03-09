<template>
    <div>
        <div class="upperInfo">
            <div>
                <h1 ref="hd1">Hi, </h1>
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
            <eCourse 
                v-for="post in posts"
                :key="post.id"
                :name="post.name"
                :admin="post.admin"
            />
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
            posts: [
                { id: 1, name: "Predmet br. 1", admin: 'Profesor 1' },
                { id: 2, name: "Predmet br. 2", admin: 'Profesor 2' },
                { id: 3, name: "Predmet br. 3", admin: 'Profesor 3' }
            ],
            
        }
    },
    created() {
        let ses_email = sessionStorage.getItem('email')
        let ses_id = sessionStorage.getItem('id_osobe')
        let ses_uloga = sessionStorage.getItem('uloga')
        console.log("\nSession storage:\n" + ses_email + ", " + ses_id + ", " + ses_uloga)

        if(ses_email!=null || ses_id!=null || ses_uloga!=null){
            //Ostani na dashboardu
            console.log("Dopušten pristup")

            let url = "http://localhost:3000/userDetails/" + ses_id

            fetch(url)
           .then(response => {
                response.json().then(parsedJson => {
                    console.log(parsedJson)

                    let ucn_ime = parsedJson.osa_ime
                    console.log(ucn_ime)

                })
            })
            .catch(error => console.log(error))

        } else {
            //Otiđi se prijavit
            window.location.href = 'http://localhost:8080/login'
            console.log("Nedopušten pristup")
        }
    },
    
    
    
}

</script>

<style scoped>

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
.searchContainer, .courseContainer{
    margin-top: 40px;

    display: flex;
    flex-direction: column;
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