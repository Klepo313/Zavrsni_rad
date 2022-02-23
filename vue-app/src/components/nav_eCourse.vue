<template>
    <div class="quickCourse">
        <img v-bind:src="props.url">
        <p class="qcName"> {{ qcName }} </p>
    </div>
</template>

<script>
export default{
    props: ['qcName', 'url']
}
</script>

<style scoped>



</style>