<template>
    <main>
        <div class="upperInfo">
            <div>
                <h1 ref="hd1">My eCourses</h1>
                <h4 ref="subh">student</h4>
            </div>
            <LogoutBtn />
        </div>
        <themeSection />
    </main>
</template>

<script>

//import sourceData from './../../data/db.json'
import themeSection from '../components/eCourse_theme.vue'
import LogoutBtn from '../components/LogoutBtn.vue'

export default {
    components: {
        themeSection,
        LogoutBtn
    },
    computed: {
        destinationId(){ 
            return parseInt(this.$route.params.id) 
        },
        destination(){
            //return sourceData.destinations.find(destination => destination.id === this.destinationId)
            return null;
        }
    },
    mounted(){
        let eCourse_title = sessionStorage.getItem('eCourse_title')
        this.$refs.hd1.innerHTML = eCourse_title
    }
}

</script>

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

</style>
