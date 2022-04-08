<template>
    <main>
        <div>
            <!-- <img :src="require(`../assets/extIcons/${image}`)" alt="ext"> -->
            <h1> {{ header }} </h1>
        </div>
        <button id="btnRemove">
            <img src="../assets/removeIcon.svg" alt="removeX">
        </button>
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
        justify-content: space-between;
    }
    main:hover{
        cursor: pointer;
    }
    main > div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    h1{
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        text-transform: uppercase;
        margin-left: 12px;
    }
    h1:hover{
        opacity: 0.8;
    }
    button{
        border: none;
        background: none;
        outline: none;

        display: flex;
        align-items: center;
        justify-content: center;
    }
    #btnRemove{
        filter: grayscale(1);
    }
    #btnRemove:hover{
        transform: scale(1.1);
        cursor: pointer;
        filter: grayscale(0);
    }
    
</style>