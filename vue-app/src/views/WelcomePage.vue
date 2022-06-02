
<template>
    <div>
        
        <div id="nav">
      
          <div class="nav-left">
            <router-link to="/wp"> <a href="#main1">Naslovnica</a> </router-link>
            <router-link to="/wp"> <a href="#main2">O aplikaciji</a> </router-link>
            <router-link to="/wp"> <a href="#main3">Pronađi svoj kolegij</a> </router-link>
            <router-link to="/wp"> <a href="#footer">Kontakt</a> </router-link>
            <router-link to="/login">
              <button class="loginBtn" type="button">Prijava</button>
            </router-link>
          </div>
      
          <div class="nav-right">
            <router-link to="/wp"><img src="../assets/myAccIcon.svg" alt="acc"></router-link>
          </div>
          
        </div>
      
        <div class="home">
          <main id="main1">
            <div class="main-left">
              <h1>upCloud.</h1>
              <div class="upDoc">
                <div></div> Prenesi svoje dokumente!
              </div>
              <p class="paragraph">
                UpCloud je web aplikacija koja omogućuje učenicima 
                postavljanje izvješća i ostalih radova prema zadanom zadatku. 
                Pritisnite gumb “Započnimo” za dalje.
              </p>
              <button id="btnGetStarted" type="button" onclick="window.location.href='http://localhost:8080/login';">Započnimo!</button>
            </div>
            <div class="main-right">
              <img src="../assets/uploadmainImg.svg" alt="imgup">
            </div>
          </main>
      
          <main class="main2" id="main2">
            <div class="main2-left">
              <div>
                <h2>Što je upCloud?</h2>
                <div class="undiv"></div>
              </div>
              <p class="paragraph2">
                UpCloud je web aplikacija koja omogućuje učenicima 
                postavljanje izvješća i ostalih radova prema zadanom 
                zadatku, pri čemu nastavnici mogu pratiti aktivnosti 
                učenika te ispunjenost zadatka. 
                Aplikacija radi na principu da se učenik pridruži 
                kolegiju kojeg administrira jedan od njegovih 
                nastavnika te nakon  toga prenese svoj rad ili neki 
                drugi dokument na mjesto predviđeno za to.
              </p>
            </div>
            <div class="main2-right">
              <img src="../assets/aboutImg.svg" alt="imgfolder">
            </div>
          </main>
      
          <!-- <main class="main3" id="main3">
            <div class="main3-left">
              <div>
                <h2>Search for your eCourse.</h2>
                <div class="undiv"></div>
                <input id="searchInput" type="text" placeholder="Search School, eCourse, etc.">
                <img class="icons" src="../assets/searchIcon.svg" alt="search">
              </div>
              <div class="">
                No data found...
              </div>
            </div>
          </main> -->
      
          <footer id="footer">
            <img src="../assets/footerImg.svg" alt="" class="footerImg">
            <div class="nav-left">
              <router-link to="/wp">Naslovnica</router-link>
              <router-link to="/wp">O aplikaciji</router-link>
              <router-link to="/wp">Pronađi svoj kolegij</router-link>
              <router-link to="/wp">Kontakt</router-link>
              <router-link to="/login">
                <button class="loginBtn" type="button">Prijava</button>
              </router-link>
            </div>
            <div class="copyright">
              &#169; 2022 Split, Hrvatska, Inc. Sva prava pridržana
            </div>
          </footer>
      
        </div>
    </div>
</template>


<script>
export default {
    name: "WelcomePage"
}
</script>


<style scoped>
    
        .home{
          width: 100%;
      
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: space-between;
        }
        main{
          padding: 0px 200px;
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        .main3{
          height: 100%;
          padding-bottom: 250px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: flex-start;
        }
        .main-left{
          height: 480px;
        }
        .main-left, .main2-left{
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
        }
        h1{
          font-family: Montserrat;
          font-style: normal;
          font-weight: 500;
          font-size: 120px;
          line-height: 146px;
      
          background: linear-gradient(180deg, #C850C0 18.78%, #C850C0 18.79%, #4158D0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .upDoc{
          color: var(--main_yellow);
          font-weight: 600;
          font-size: 20px;
          line-height: 37px;
      
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
        }
        .upDoc > div, .undiv {
          width: 50px;
          border-top: 3px solid #F6D742;
          margin-right: 40px;
        }
        .paragraph, .paragraph2{
          width: 538px;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 30px;
          color: var(--white);
          opacity: 0.85;
        }
        #btnGetStarted{
          font-size: 16px;
          color: var(--white);
          padding: 19px 43px;
          border: none;
          filter: drop-shadow(-7px -5px 0px rgba(200, 80, 192, 0.6));
          background: linear-gradient(270deg, #4158D0 -26.38%, #C850C0 100%);
          border-radius: 0px 10px 10px 10px;
        }
        #btnGetStarted:hover{
          cursor: pointer;
          margin-left: 20px;
        }
      
        /*************/
      
        .main2{
          background-image: url("../assets/Rectangle 18.svg");
          background-repeat: no-repeat;
          background-position: center;
          padding: 0px 200px;
          width: 100%;
        }
        h2{
          margin-left: 30px;
          font-style: normal;
          font-weight: 600;
          font-size: 35px;
          line-height: 67px;
        }
        .undiv{
          width: 100px;
        }
        .paragraph2{
          margin-top: 45px;
          font-size: 16px;
        }
        .main2-right img{
          width: 550px;
          height: 432px;
        }
      
        /******************/
      
        #searchInput{
          margin-top: 35px;
          width: 720px;
          padding: 20px 40px;
          background: none;
          outline: none;
          border: 2px solid var(--main_purple);
          border-radius: 10px 10px 10px 10px;
      
          font-style: normal;
          font-weight: normal;
          font-size: 20px;
          line-height: 160%;
      
          color: #FFFFFF;
          text-align: left;
        }
        .icons{
          position: absolute;
          margin-left: -60px;
          margin-top: 60px; 
          cursor: pointer;
        }
        .icons:hover{
          opacity: 0.9;
          transform: scale(0.9)
        }
      
        /*****************/
        
        footer {
          background-color: var(--light_black);
          width: 100%;
          height: 338px;
      
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
        }
        .copyright{
          opacity: 0.3;
        }
      
        #myBtn {
            display: none;
            position: fixed;
            bottom: 20px;
            right: 30px;
            z-index: 99;
            font-size: 15px;
            border: none;
            outline: none;
            background-color: var(--main_purple);
            color: white;
            cursor: pointer;
            padding: 10px;
            border-radius: 4px;
        }

        #myBtn:hover {
            opacity: 0.8;
        }

      </style>
      
      <style scoped>
      
        #nav {
          position: absolute;
          width: 100%;
          padding: 60px 200px;
      
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: center;
        }
        #nav > div {
          color: white;
        }
        .nav-left {
          width: 880px;
      
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        a {
          color: var(--white);
          text-decoration: none;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 27px;
        }
        a:hover{
          text-decoration: 1.5px solid underline;
          margin-top: -5px;
          cursor: pointer;
        }
        .loginBtn{
          color: var(--white);
          font-size: 16px;
          border-radius: 10px;
          padding: 15px 52px;
          background: linear-gradient(270deg, var(--main_blue) -26.38%, var(--main_purple) 100%);
          border: none;
          outline: none;
        }
        .loginBtn:hover{
          cursor: pointer;
          opacity: 0.9;
          margin-top: 5px;
          transform: scale(0.95);
        }
        a{
          text-decoration: none;
          outline: none;
        }
      
      </style>