<template>
  <div>

      <img   
      @click="hasHistory() 
      ? $router.go(-1) 
      : $router.push('/')" 
      class="my-5 btn btn-outline-success backArrow" src="../assets/backArrow.svg" alt="">

      <div class="mainScreen">
        <nav>

          <h2 @click="this.$router.push('/prf_dashboard')" style="cursor: pointer;" >upCloud.</h2>
          
          <ul>
              
              <li>
                <router-link to="/prf_dashboard" inactive-class="inactive">
                  <img class="liImg" src="../assets/dashboardICon.svg" alt=""> Dashboard
                </router-link>
              </li>
              <li>
                <router-link to="/prf_eCourses" inactive-class="inactive">
                  <img class="liImg" src="../assets/myEcourses.svg" alt="">    My eCourses
                </router-link>
              </li>
            
              <li>
                <router-link to="/prf_calendar" inactive-class="inactive">
                  <img class="liImg" src="../assets/calendarIcon.svg" alt="">  My Students
                </router-link>
              </li>
            
              <li>
                <router-link to="/prf_profile" inactive-class="inactive">
                  <img class="liImg" src="../assets/myAccIcon.svg" alt="">     Profile
                </router-link>
              </li>
              
          </ul>

          <div class="gLine"></div>


        </nav>

        <div class="views">
          <router-view />
        </div>


      </div>

  </div>
</template>

<script>

export default {
    methods: {
        hasHistory () { return window.history.length > 2 }
    },
    created() {

    //Session storage
    let ses_email = sessionStorage.getItem('email')
    let ses_id = sessionStorage.getItem('id_osobe')
    let ses_uloga = sessionStorage.getItem('uloga')
    let ses_uloga_id = sessionStorage.getItem('id_uloga')
    console.log("\nSession storage:\n" + ses_email + ", " + ses_id + ", " + ses_uloga + ", " + ses_uloga_id)

    if(ses_email!=null || ses_id!=null || ses_uloga!=null || ses_uloga_id!=null){
      //Ostani na dashboardu
      console.log("Dopušten pristup - profesor")

    } else {
      //Otiđi se prijavit
      window.location.href = 'http://localhost:8080/wp'
      console.log("Nedopušten pristup")
    }
  },
}

</script>


<style scoped>

.mainScreen{
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  height: 100%;
  width: 100%;
}

nav{
  position: relative;
  width: 267px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 80px;
}

h2{
  font-family: var(--font_Montserrat);
  font-style: normal;
  font-weight: 500;
  font-size: 35px;
  background: linear-gradient(180deg, #C850C0 18.78%, #C850C0 18.79%, #4158D0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 65px;
}
li{
  width: 269px;
  height: 57px;

  font-family: var(--font_Poppins);
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 27px;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin: 14px 0px;

  text-decoration: none;    
  opacity: 1;
  border-radius: 10px;

  cursor: pointer;
}

.router-link-active{
  background: linear-gradient(92.72deg, #C850C0 0%, #4158D0 100%);
}

.inactive{
  opacity: 0.8;
}

a{
  text-decoration: none;
  padding: 15px 0px 15px 26px;
  border-radius: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  opacity: 1;
}
.liImg{
  padding-right: 26px;
}
.gLine{
  margin: 40px 0px;
  width: 100%;
  opacity: 0.2;
  border-top: 1px solid #FFFFFF;
}
.quickCourse{
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 15px;
}

.qcName{
  margin-left: 10px;
  font-size: 16px;

  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.qcName:hover{
  padding-bottom: 1px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  width: fit-content;
  cursor: pointer;
}
.backArrow{
  position: absolute;
  margin: 40px 40px;
  transform: scale(0.7);
}
.backArrow:hover{
  transform: scale(0.6);
}

.plainBox{
  width: 331px;
  height: 603px;
  background-color: var(--light_black);
  margin: 80px;
  margin-bottom: 0px; 
}

.views{
  margin-top: 75px;
}

</style>

<style>
:root{
    --bg: #0A0A0A;
    --white: #FFFFFF;
    --black: #000000;
    --main_purple: #C850C0;
    --main_blue: #4158D0;
    --main_yellow: #F6D742;
    --light_black: #111111;
    --upload_light_black: #1F1F1F;

    --font_Poppins: 'Poppins', sans-serif;
    --font_Montserrat: 'Montserrat', sans-serif;
}

/* width */
::-webkit-scrollbar {
    width: 10px;
  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--bg);
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #f1f1f1;
    border-radius: 5px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font_Poppins);
    transition: all 0.1s ease-in-out;
    color: var(--white);
}
body {
    background-color: var(--bg);
}
</style>