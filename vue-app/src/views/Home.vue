<template>

  <div id="nav">

    <div class="nav-left">
      <router-link to="/">Home</router-link>
      <router-link to="/">About upCloud</router-link>
      <router-link to="/">Find your eCourse</router-link>
      <router-link to="/">Contact</router-link>
      <router-link to="/login">
        <button class="loginBtn" type="button">Login</button>
      </router-link>
    </div>
  <router-view />

    <div class="nav-right">
      <router-link to="/myAccount"><img src="../assets/accountIcon.svg" alt="acc"></router-link>
    </div>
    
  </div>

  <div class="home">
    <main>
      <div class="main-left">
        <h1>upCloud.</h1>
        <div class="upDoc">
          <div></div> Upload your documents!
        </div>
        <p class="paragraph">
          UpCloud is an online upload center made for students
          to deliver their work to their teachers. Create your account and let's get started.
          Press the button or scroll down for more.
        </p>
        <button id="btnGetStarted" type="button">Let's get started</button>
      </div>
      <div class="main-right">
        <img src="../assets/uploadmainImg.svg" alt="imgup">
      </div>
    </main>

    <main class="main2">
      <div class="main2-left">
        <div>
          <h2>What is upCloud?</h2>
          <div class="undiv"></div>
        </div>
        <p class="paragraph2">
          UpCloud is an online easy to use & super powerful web application made for students to 
          deliver their work to teachers. Teachers have full statistics among students. 
          UpCloud tracks every done & ongoing task -  when is done, sent and even if it’s plagiated. 
          As a student, you can preview all of your done and scheduled tasks, grades and your attending courses.
          As a teacher, you can make up to 2 courses and invite as many students as you want.
        </p>
      </div>
      <div class="main2-right">
        <img src="../assets/aboutImg.svg" alt="imgfolder">
      </div>
    </main>

    <main class="main3">
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
    </main>

    <footer>
      <img src="../assets/footerImg.svg" alt="" class="footerImg">
      <div class="nav-left">
        <router-link to="/">Home</router-link>
        <router-link to="/">About upCloud</router-link>
        <router-link to="/">Find your eCourse</router-link>
        <router-link to="/">Contact</router-link>
        <router-link to="/">
          <button class="loginBtn" type="button">Login</button>
        </router-link>
      </div>
      <div class="copyright">
        &#169; 2022 Split, Hrvatska, Inc. All rights reserved
      </div>
    </footer>

  </div>
</template>

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
    border-radius: 0px 10px 10px 10px;

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

</style>
