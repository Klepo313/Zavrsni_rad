<template>
    <div>
        <div class="upperInfo">
            <h1>Profile</h1>
            <h4>student</h4>
        </div>
        <div class="courseContainer">
            <div class="grid-item">
                Name
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" value="Antonio" readonly>
            </div>
            <div class="grid-item">
                Surname
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" readonly>
            </div>
            <div class="grid-item">
                Email adress
            </div>
            <div class="grid-item">
                <input class="grid-input" type="email" readonly>
            </div>
            <div class="grid-item">
                School
            </div>
            <div class="grid-item">
                <input class="grid-input " type="text" readonly>
            </div>
            <div class="grid-item school">
                School direction
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" readonly>
            </div>
            <div class="grid-item school">
                Class
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" readonly>
            </div>
            <div class="grid-item">
                Enrollment date
            </div>
            <div class="grid-item">
                <input class="grid-input" type="text" readonly>
            </div>
        </div>

    </div>
</template>

<style scoped>

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

</style>