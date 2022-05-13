<template>
    <main ref="main">
        <div>
            <!-- <img :src="extIcon" alt="ext " ref="img"> -->
            <span ref="img"> {{ image }} </span>
            <a :href="blob_url" :download="title"> {{ title }} </a>
        </div>
        <button id="btnRemove" ref="btnRemove">
            <img src="@/assets/removeIcon.svg" alt="removeX">
        </button>
    </main>
</template>

<script>
export default {
  props: ['id', 'image', 'title', 'blob_url'],
  mounted(){

    this.$refs.img.style = "color: white; font-weight: 800;"

    let file_id = this.$.vnode.key
    let btnRemove = this.$refs.btnRemove;
    btnRemove.addEventListener("click", () => {

        let data = {
            "file_id": file_id,
            "file_title": this.title
        }

        console.log(data);

        fetch("http://localhost:3000/deleteFile", {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(response => {
            response.json().then(parsedJson => {
                console.log(parsedJson);

                    var answer = window.confirm("Želiš li izbrisati dokument?");
                    if (answer) {
                        if(parsedJson === "successful"){
                            let file = this.$refs.main
                            file.style.display = "none"
                        }
                    }
                    else {
                        // Ostavi kako je
                    }

            }) 
        })
    })
  
    
  
  }
}
</script>

<style scoped>
    *{
        transition: all 0.2s ease-in-out;
        scroll-behavior: smooth;
    }
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