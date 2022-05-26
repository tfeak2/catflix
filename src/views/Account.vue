<template>
    <div class="center">
        <div class="form">
            <h1>Account Details</h1>
            <p><strong>Username: </strong>{{profile.username}}<strong v-if="profile.admin">Admin User</strong></p>
            <p><strong>Password: </strong>{{profile.password}}</p>
        </div>
    </div>
</template>
<script>

export default {
    //load profile on page load
    beforeMount() {
        this.profile = JSON.parse(localStorage.profile);
    },
    data(){
        return {
            profile: {},
        }
    }
}
</script>

<style scoped>
    .center{
        display: flex;
        flex-direction: row;
        width: 100%;
        justify-content: center;
    }
    .form{
        width: 30em;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
    }
    .container{
      display: flex;
      flex-direction: column;
      justify-content: left;
      align-items: left;
    }
    a{
      color: #96CDFB;
      cursor: pointer;
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