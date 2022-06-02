<template>
    <div>
        <div class="upperInfo">
            <div>   
                <h1>Profil</h1>
                <h4>učenik</h4>
            </div>
            <LogoutBtn />
        </div>
        <div class="courseContainer">
            <div class="grid-item">
                Ime
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="name" readonly>
            </div>
            <div class="grid-item">
                Prezime
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="surname" readonly>
            </div>
            <div class="grid-item">
                Email adresa
            </div>
            <div class="grid-item">
                <input class="grid-input" type="email" ref="email" readonly>
            </div>
            <div class="grid-item">
                Škola
            </div>
            <div class="grid-item">
                <input class="grid-input " type="text" ref="school" readonly>
            </div>
            <div class="grid-item school">
                Usmjerenje
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="direction" readonly>
            </div>
            <div class="grid-item school">
                Razred
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="class" readonly>
            </div>
            <div class="grid-item">
                Školska godina
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" ref="enrollment" readonly>
            </div>
            <div class="grid-item">
                Radni kolegiji
            </div>
        </div>

        <div class="course-content-cc">
            <eCourse 
                v-for="course in eCourses"
                :key="course.id"
                :naziv="course.name"
                :prof="course.admin"
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
        LogoutBtn
    },
    //don ucenike, koji je on odjeljenje, id odjeljenja u view
    data() {
        return {
            eCourses: {}
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

        let url1 = "http://localhost:3000/eCourses/" + ses_uloga_id

        fetch(url1)
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
.course-content-cc{
    height: 90vh;
    overflow-y: scroll;
    /*outline: 1px solid red;*/
}

</style>