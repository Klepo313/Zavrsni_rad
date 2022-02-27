<template>
    <section>
        <div class="container">
            <h1>Laboratorijske vježbe</h1>
        </div>
        <div>
            <ThemeChild class="themeChild" />
        </div>
    </section>
</template>

<script>

import ThemeChild from './theme_child.vue'

export default {
    components: {
        ThemeChild
    }
}
</script>

<style scoped>

section {
    margin-top: 46px;
    width: 50vw;
}
.container {
    padding-bottom: 8px;
    border-bottom: 2px solid rgb(255, 255, 255, 0.2);
}
h1{
    font-family: Poppins;
    font-style: normal;
    font-weight: 200;
    font-size: 35px;
    line-height: 54px;

    color: #FFFFFF;

    opacity: 0.8;
}
.themeChild{
    margin-top: 30px;
}

</style>