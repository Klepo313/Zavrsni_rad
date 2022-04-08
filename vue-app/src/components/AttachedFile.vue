<template>
    <main>
        <img :src="require(`../assets/extIcons/${image}`)" alt="ext">
        <h1> {{ header }} </h1>
    </main>
</template>

<script>
export default {
  props: ['image', 'header']
}
</script>

<style scoped>
    main{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin-bottom: 5px;
    }
    main:hover{
        opacity: 0.8;
        cursor: pointer;
    }
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        text-transform: uppercase;
        margin-left: 12px;
    }
    
</style>