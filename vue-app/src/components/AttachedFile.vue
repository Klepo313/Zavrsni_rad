<template>
    <main>
        <img :src="require(`../assets/extIcons/${image}`)" alt="ext">
        <a :href="blob_url" :download="header"> {{ header }} </a>
    </main>
</template>

<script>
export default {
  props: ['image', 'header', 'blob_url']
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
    a{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        text-transform: uppercase;
        margin-left: 12px;
        text-decoration: none;
    }
    
</style>