<template>
    <div class="form">
        <p>Username</p>
        <input type="text">
        <p>Password</p>
        <input type="text">
        <button>Confirm</button>
    </div>
</template>
<style scoped>
    .form{
        width: 17em;
        margin-left: 40%;
        display: flex;
        flex-direction: column;
        justify-content: left;
        align-items: left;
    }
    button{
        width: 5em;
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