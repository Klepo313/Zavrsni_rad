<template>
    <div class="main">
        <img src="../assets/groupIcon.svg" alt="">
        <h3>Enter the code</h3>
        <input type="text" placeholder="Xc6hF?">
        <button class="btnLogin"></button>
    </div>
</template>

<script>

</script>

<style scoped>

main{
    width: 436px;
    height: 476px;
    background-color: var(--light_black);
    border-radius: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
input{
    width: 200px;
    border-bottom: 2px solid var(--main_yellow);
    background: none;
    outline: none;
    text-align: center;
}
input::placeholder{
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #909090;
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

</style>