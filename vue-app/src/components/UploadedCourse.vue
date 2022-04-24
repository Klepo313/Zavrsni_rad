<template>
    <main>
        <div>
            <!-- <img :src="extIcon" alt="ext " ref="img"> -->
            <span ref="img"> {{ image }} </span>
            <a :href="blob_url" :download="title"> {{ title }} </a>
        </div>
        <button id="btnRemove">
            <img src="@/assets/removeIcon.svg" alt="removeX">
        </button>
    </main>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'blob_url'],
  mounted(){

    this.$refs.img.style = "color: white; font-weight: 800;"
    // function showExtIcons(extension) {

    //         switch(extension){
    //             default:
    //                 extension.style = "color: white; font-weight: 800;"
    //                 break;
    //             case "docx":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "html":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "png"||"jpg"||"jpeg"||"gif"||"bmp":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "pdf":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "pptx":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "sql":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "zip":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "txt":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //             case "exe":
    //                 extension.style = "color: #ff0000; font-weight: 800;"
    //                 break;
    //         }

    //         return extension
    // }

    // showExtIcons(this.$refs.img)
  }
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
        opacity: 0.8;
    }
    main > div{
        display: flex;
        align-items: center;
        justify-content: flex-start;
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