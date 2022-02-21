<template>
  <div>

      <img   
      @click="hasHistory() 
      ? $router.go(-1) 
      : $router.push('/')" 
      class="my-5 btn btn-outline-success backArrow" src="./assets/backArrow.svg" alt="">

      <div class="mainScreen">
        <nav>

          <h2>upCloud.</h2>
          
          <ul>
              
              <li>
                <router-link to="/" inactive-class="inactive">
                  <img class="liImg" src="./assets/dashboardICon.svg" alt=""> Dashboard
                </router-link>
              </li>
              <li>
                <router-link to="/eCourses" inactive-class="inactive">
                  <img class="liImg" src="./assets/myEcourses.svg" alt="">    My eCourses
                </router-link>
              </li>
            
              <li>
                <router-link to="/calendar" inactive-class="inactive">
                  <img class="liImg" src="./assets/calendarIcon.svg" alt="">  Calendar
                </router-link>
              </li>
            
              <li>
                <router-link to="/profile" inactive-class="inactive">
                  <img class="liImg" src="./assets/myAccIcon.svg" alt="">     Profile
                </router-link>
              </li>
              
          </ul>

          <div class="gLine"></div>

          <div class="quickCourse">
              <img src="./assets/image3.png" alt="">
              <p class="qcName">Napredno i objektno programiranje</p>
          </div>
          <div class="quickCourse">
              <img src="./assets/image4.png" alt="">
              <p class="qcName">Digitalna logika</p>
          </div>

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
    }
}

</script>


<style scoped>

.mainScreen{
  display: flex;
  flex-direction: row;

  height: 100%;
  width: 100%;
}

nav{
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
  font-weight: 100;
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