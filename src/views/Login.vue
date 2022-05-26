<template>
    <div class="center">
    <div class="form" v-if="!register">
        <p>Username</p>
        <input type="text" v-model="username">
        <p>Password</p>
        <input type="text" v-model="password">
        <button @click="buttonClick()">Confirm</button>
    </div>
    </div>
</template>
<script>
//load json file with user data
import userData from "../data/users.json";
export default {
    data(){
        //data saved on the page
        return {
            username: "",
            password: "",
            users: userData,
            register: false,
        }
    },
    methods: {
        buttonClick(){
            //finds a user in users json data that has matching uername and password
            var profile = this.users.find(profile => profile.username == this.username && profile.password == this.password);
            //checks if a match was found
            if(profile != null){
                //convert the user data to a string and add it to localstorage
                localStorage.profile = JSON.stringify(profile);
                //go to home page
                this.$router.push('home');
            }
        }
    },
}
</script>


<style scoped>
    .center{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
        margin: 0;
        padding: 0;
    }
    .form{
        width: 17em;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
    }
    button{
        padding: 0.5em;
        margin-top: 2em;
        font-size: 0.8em;
        font-weight: medium;
        background-color: #96CDFB;
        border: none;
        border-radius: 0.5em;
        color: #1e1e2e;
        font-family: 'JetBrains Mono';
        font-weight: medium;
        cursor: pointer;
    }
    input{
        font-family: 'JetBrains Mono';
        font-size: 0.8em;
        font-weight: medium;
        width: 25em;
        height: 2em;
        border: none;
        background-color: #575268;
        border-radius: 0.5em;
        color: white;
    }
</style>