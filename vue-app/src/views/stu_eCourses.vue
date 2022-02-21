<template>
    <div>
        <div class="upperInfo">
            <div>
                <h1>My eCourses</h1>
                <h4>ELEKTROTEHNIČKA ŠKOLA SPLIT - 4.e</h4>
            </div>
            <div id="join_eCourse">
                <img src="../assets/person-add.svg" alt="">
                <span>Join eCourse</span>
            </div>
        </div>
        <div class="courseContainer">
            <label for="">All attending eCourses</label>
            <eCourse 
                v-for="post in posts"
                :key="post.id"
                :name="post.name"
                :admin="post.admin"
            />
        </div>
    </div>
</template>

<script>

import eCourse from "../components/eCourse.vue"

export default {
    components: {
        eCourse
    },
    data() {
        return {
            posts: [
                { id: 1, name: "Predmet br. 1", admin: 'Profesor 1' },
                { id: 2, name: "Predmet br. 2", admin: 'Profesor 2' },
                { id: 3, name: "Predmet br. 3", admin: 'Profesor 3' }
            ]
        }
    },
    
}

</script>

<style scoped>

.upperInfo{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.upperInfo>div:nth-child(2){
    display: flex;
    align-items: center;
    justify-content: center;
}
.upperInfo>div:nth-child(2):hover{
    cursor: pointer;
    transform: scale(0.97);
}
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
.courseContainer{
    margin-top: 40px;
    display: flex;
    flex-direction: column;
}
label{
    margin-bottom: 15px;
}


</style>