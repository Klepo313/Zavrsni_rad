<template>
    <div>
        <UploadContainer />
    </div>
</template>

<script>

import UploadContainer from '../components/UploadContainer.vue'

export default {
    data(){
        return {
            themeType: 'U'
        }
    },
    components: {
        UploadContainer
    }
}
</script>

<style scoped>

section:nth-child(1) {
    outline: 1px solid red;
}

</style>