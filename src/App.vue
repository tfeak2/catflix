<template>
  <div id="app">
    <head>
      <link href='https://fonts.googleapis.com/css?family=JetBrains Mono' rel='stylesheet'>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" referrerpolicy="no-referrer" />
    </head>
    <Sidebar />
    <div id="content">
      <router-view />
    </div>
  </div>
</template>
<script>
import Sidebar from "./components/Sidebar"
export default {
  components: {
    Sidebar,
  },
  setup() {
    
  },
}
</script>
<style>
  #content{
    margin-top: 7em;
    font-family: 'JetBrains Mono';
    font-size: 1.3em;
    font-weight: medium;
  }
  body{
    background-color: #1e1e2e;
    color: white;
  }
</style>