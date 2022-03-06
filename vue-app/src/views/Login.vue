
<template>
    <div class="main">

        <img class="my-5 btn btn-outline-success backArrow" src="../assets/backArrow.svg" alt="" onclick="history.back()">

        <div class="left-conatiner">

            <h2>upCloud.</h2>
            <div class="loginDiv">
                
                    <h3>Login to upCloud</h3>
                <form @submit.prevent="onSubmit">
                    <div>
                        <img class="formIcons fic1" src="../assets/emailIcon.svg" alt="mail">
                        <input type="email" id="email" ref="email" class="formInput" autocomplete="off" placeholder="Email" required>
                    </div>
                    <div>
                        <img class="formIcons fic2" src="../assets/lockIcon.svg" alt="mail">
                        <input type="password" id="password" ref="password" class="formInput fi2" autocomplete="off" placeholder="Password" required>
                    </div>

                    <button v-on:click="user_login" class="loginBtn" type="submit"> Login </button>
                </form>
                    

                <!--onclick="window.location.href='http://localhost:8080/';"-->

            </div>

        </div>
        <div class="right-conatiner">
            <img src="../assets/loginImage.svg" alt="img">
        </div>
    </div>
</template>

<script>
export default {
    name: "login",
    methods: {
        user_login() {
            const inpEmail = this.$refs.email;
            const inpPassword = this.$refs.password;

            let url = "http://localhost:3000/login/" + inpEmail.value + "/" + inpPassword.value;

            fetch(url)
           .then(response => {
                response.json().then(parsedJson => {
                //const myJSONtxt = JSON.stringify(parsedJson); 

                    let login_status = parsedJson.status
                    
                    console.log(parsedJson)

                    if(login_status == "successful"){

                        console.log("Uspješna prijava!")

                        let osa_id = parsedJson.osa_id
                        let osa_email = parsedJson.osa_username
                        let osa_uloga

                        if(parsedJson.osa_ucenik!=null){
                            osa_uloga = "ucenik"
                        } else{
                            osa_uloga = "profesor"
                        }

                        sessionStorage.setItem('email', osa_email); 
                        sessionStorage.setItem('id_osobe', osa_id); 
                        sessionStorage.setItem('uloga', osa_uloga);

                        

                        //Redirect
                        window.location.href = 'http://localhost:8080'


                    } else{
                        console.log("Neuspješna prijava!")

                        inpEmail.style.border = "3px solid red"
                        inpPassword.style.border = "3px solid red"
                    }
                })
            })
            .catch(error => console.log(error))
        },
        onSubmit () {
            // Do something...
        }
    }
}
</script>


<style scoped>
    .main {
        height: 100vh;
        width: 100%;
        
        display: flex;
    }
    .main > div {
        height: 100%;
    
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
    .left-conatiner {
        width: 37.76vw;
    }
    h2{
        font-family: var(--font_Montserrat);
        font-style: normal;
        font-weight: 500;
        font-size: 50px;
        line-height: 146px;
    
        background: linear-gradient(180deg, #C850C0 18.78%, #C850C0 18.79%, #4158D0 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin: -200px 0px 50px 0px;
    }
    
    h3{
        font-family: var(--font_Poppins);
        font-style: normal;
        font-weight: 400;
        font-size: 25px;
        line-height: 160%;
        text-align: center;
    
        color: #FFFFFF;
    
        padding-bottom: 51px;
    }
    
    form{
        display: flex;
        flex-direction: column;
    }
    .formInput {
        width: 435px;
        height: 60px;
    
        opacity: 1;
        border: 1.5px solid #FFFFFF;
        box-sizing: border-box;
        border-radius: 10px 10px 10px 10px;
        background: none;
        font-size: 16px;
        outline: none;
    
        padding-left: 65px;
    }
    .formInput:focus{
        background: var(--upload_light_black);
    }
    .fi2{
        margin: 41px 0px;
    }
    button {
        width: 435px;
        height: 60px;
        border-radius: 10px;
        padding: 15px 52px;
        font-size: 18px;
        background: linear-gradient(270deg, var(--main_blue) -26.38%, var(--main_purple) 100%);
        outline: none;
        border: none;
    }
    button:hover{
        opacity: 0.85;
        cursor: pointer;
    }
    .formIcons{
        position: absolute;
        width: 29px;
        margin: 20px;
    }
    .fic2{
        margin: 25px;
        margin-top: 58px;
        width: 20px;
    }
    .right-conatiner > img {
        transform: scale(0.9);
        max-width: 100%;
    }
    .loginBtn:hover{
        margin-top: 0px;
    }
    
    </style>
    
    <style>
        .backArrow{
            position: absolute;
            margin: 40px 40px;
            transform: scale(0.7);
        }
        .backArrow:hover{
            transform: scale(0.6);
        }
    </style>