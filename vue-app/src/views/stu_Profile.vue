<template>
    <div>
        <div class="upperInfo">
            <div>   
                <h1>Profile</h1>
                <h4>student</h4>
            </div>
            <LogoutBtn />
        </div>
        <div class="courseContainer">
            <div class="grid-item">
                Name
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="name" readonly>
            </div>
            <div class="grid-item">
                Surname
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="surname" readonly>
            </div>
            <div class="grid-item">
                Email adress
            </div>
            <div class="grid-item">
                <input class="grid-input" type="email" ref="email" readonly>
            </div>
            <div class="grid-item">
                School
            </div>
            <div class="grid-item">
                <input class="grid-input " type="text" ref="school" readonly>
            </div>
            <div class="grid-item school">
                School direction
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="direction" readonly>
            </div>
            <div class="grid-item school">
                Class
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="class" readonly>
            </div>
            <div class="grid-item">
                School year
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="enrollment" readonly>
            </div>
            <div class="grid-item">
                Attending eCourses
            </div>
        </div>

        <eCourse 
            v-for="post in posts"
            :key="post.id"
            :name="post.name"
            :admin="post.admin"
        />

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
    //don ucenike, koji je on odjeljenje, id odjeljenja u view
    data() {
        return {
            posts: [
                { id: 1, name: "Predmet br. 1", admin: 'Profesor 1' },
                { id: 2, name: "Predmet br. 2", admin: 'Profesor 2' },
                { id: 3, name: "Predmet br. 3", admin: 'Profesor 3' }
            ]
        }
    },
    mounted(){

        let ses_uloga_id = sessionStorage.getItem('id_uloga')
        let url = "http://localhost:3000/userDetails/" + ses_uloga_id

        fetch(url)
        .then(response => {
            response.json().then(parsedJson => {
                console.log(parsedJson)
              
                const inpName = this.$refs.name;
                const inpSurname = this.$refs.surname;
                const inpEmail = this.$refs.email;
                const inpSchool = this.$refs.school;
                const inpDirections = this.$refs.direction;
                const inpClass = this.$refs.class;
                const inpYear = this.$refs.enrollment;

                inpName.value = parsedJson[0].osa_ime
                inpSurname.value = parsedJson[0].osa_prezime
                inpEmail.value = parsedJson[0].osa_email
                inpSchool.value = parsedJson[0].org_naziv
                inpDirections.value = parsedJson[0].npr_naziv
                inpClass.value = parsedJson[0].odj_naziv
                inpYear.value = parsedJson[0].skg_sif

            })
        })
        .catch(error => console.log(error))
    }
    
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
.courseContainer{
    margin-top: 40px;
    margin-bottom: 15px;

    display: grid;
    grid-template-rows: repeat(7, 38px);
    grid-template-columns: repeat(1, 260px) repeat(1, 686px);
    grid-row-gap: 20px;
}
.grid-item{
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.grid-input{
    width: 686px;
    height: 100%;
    background: rgb(26, 26, 26, 0.5);
    opacity: 1;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-sizing: border-box;
    border-radius: 5px; 

    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 160%;
   
    color: rgb(255, 255, 255, 1);

    padding-left: 18px;
}
.grid-input:hover, .grid-input:focus{
    outline: none;
    cursor: default;
}
.school{
    padding-left: 20px;
    border-left: 3px solid var(--main_yellow);
}

</style>