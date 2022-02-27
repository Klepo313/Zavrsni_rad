<template>
    <div>
        <section v-if="themeType === 'U'">
            Pekmez
        </section>
        <section v-else>
            
        </section>
    </div>
</template>

<script>
export default {
    data(){
        return {
            themeType: 'U'
        }
    }
}
</script>

<style scoped>

section:nth-child(1) {
    outline: 1px solid red;
}

</style>