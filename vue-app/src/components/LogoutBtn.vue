<template>
    <div id="join_eCourse" ref="logoutBtn">
        <img src="../assets/logoutIcon.svg" alt="">
        <span v-on:click="logout">Odjava</span>
    </div>
</template>

<script>
export default {
    methods: {
        logout(){
            console.log("Klik")
            sessionStorage.clear()
            location.reload()
        },
    }
}
</script>

<style scoped>

.upperInfo>div:nth-child(2){
    height: fit-content;
    display: flex;
    align-items: center;
    justify-content: center;
}
.upperInfo>div:nth-child(2):hover{
    cursor: pointer;
    transform: scale(0.97);
}
span{
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    /* identical to box height */

    color: #858585;
    margin-left: 12px;
}
</style>