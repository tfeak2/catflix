<template>
        <div class="sidebar">
            <div class="logo">
                <img src="../assets/logo.png" alt="">
                <Link to="./home" name="Catlfix" icon="null" />
            </div>
            <div class="links">
                <Link to="./search" name="Search" icon="fas fa-magnifying-glass" />
                <Link to="./cart" name="Cart" icon="fas fa-cart-shopping" />
                <Link to="./account" name="Account" icon="fas fa-user" />
            </div>
            
        </div>
</template>
<script>
import Link from './Link'
export default {
    components: {
        Link
    },
    setup() {
        
    },
    data(){
        return {
            
        }
    }
}
</script>
<style scoped>
    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: left;
        z-index: 1;
    }
    img{
        margin-right: 0.5em;
        height: 3em;
    }
    .links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: right;
        z-index: 1;
    }
    .sidebar {
        width: 100%;
        height: 4em;
        color: white;
        font-family: 'JetBrains Mono';
        font-size: 1.3em;
        background-color: #1E1E2E;
        border-bottom: 2px solid #302D41;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        bottom: 0;
        padding: 0.5em;
        transition: 0.3s ease;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
</style>