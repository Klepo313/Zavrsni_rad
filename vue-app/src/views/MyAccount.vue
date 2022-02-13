<template>
    <div>

        <nav>
            <h2>upCloud.</h2>

            <ul>
                <li><img class="liImg" src="../assets/dashboardICon.svg" alt=""> Dashboard</li>
                <li><img class="liImg" src="../assets/myEcourses.svg" alt=""> My eCourses</li>
                <li><img class="liImg" src="../assets/calendarIcon.svg" alt=""> Calendar</li>
                <li><img class="liImg" src="../assets/myAccIcon.svg" alt=""> Profile</li>
            </ul>

        </nav>
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

nav{
    position: fixed;
    width: 22.39583vw;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 80px 80px 0px 80px;
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

    padding: 15px 0px 15px 26px;
    margin: 14px 0px;

    
    opacity: 1;
    border-radius: 10px;

    cursor: pointer;
}
li:nth-child(1){
    background: linear-gradient(92.72deg, #C850C0 0%, #4158D0 100%);
}
.liImg{
    padding-right: 26px;
}

</style>