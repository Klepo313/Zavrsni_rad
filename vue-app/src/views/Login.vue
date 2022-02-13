<template>
    <div class="main">
        <img class="backArrow" src="../assets/backArrow.svg" alt="">
        <div class="left-conatiner">

            <h2>upCloud.</h2>
            <div class="loginDiv">
                <form action="">
                    <h3>Login to upCloud</h3>

                    <input type="email" id="email" class="formInput" autocomplete="off" placeholder="Email">
                    <input type="password" id="password" class="formInput fi2" autocomplete="off" placeholder="Password">
    	            <button class="loginBtn" type="submit">Login</button>

                </form>
            </div>

        </div>
        <div class="right-conatiner">
            <img src="../assets/loginImage.svg" alt="img">
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style scoped>

.backArrow{
    position: absolute;
    margin: 40px 40px;
}
.backArrow:hover{
    transform: scale(0.9);
}

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
    font-weight: 200;
    font-size: 20px;
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

    padding-left: 20px;
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
}
.right-conatiner > img {
    transform: scale(0.9);
}

</style>
