<template>
    <div class="box">
        <img :src="image" alt="">
        <p>{{name}} ({{year}})</p>
    </div>
</template>
<script>
export default {
    setup() {
        
    },
    props: {
        name: String,
        year: Number,
        image: String,
    },
}
</script>
<style scoped>
    img{
        width: 11em;
        height: 11em;
        border-radius: 0.5em;
        background-color: #332e41;
    }
    .box{
        margin-right: 1em;
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 0.9em;
        cursor: pointer;
    }
    .box :hover{
        background-color: #1B1923;
    }
</style>