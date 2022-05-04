<template>
    <router-link :to="to">
        <i class="icon" :class="icon" /><p>{{name}}</p>
    </router-link>
</template>
<script>
export default {
    props: {
        to: String,
        icon: String,
        name: String,
    },
    setup() {
        
    },
}
</script>
<style scoped>
   a{
       text-decoration: none;
       text-align: center;
       color: white;
       border: none;
       margin-right: 1em;
       border-radius: 0.5em;
       padding-right: 1em;
       padding-left: 1em;
       font-weight: medium;
       align-items: center;
       display: flex;
       justify-content: left;
       align-items: center;
   }
   a:hover:not(.router-link-active){
       background-color: #1E1E2E;
   }
   .router-link-active{
       background-color: #302D41;
       color: white;
   }
   .icon{
       margin-right: 10px;
   }
</style>