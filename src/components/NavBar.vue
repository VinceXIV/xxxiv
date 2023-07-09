<template>
    <nav>
        <div class="container">
            <h1>Code Challenge</h1>
            <button class="btn" @click="changeLoginState">
                {{ token? 'Logout' : 'Login' }}
            </button>
        </div>
    </nav>
</template>

<script>
export default({
    name: "NavBar",

    props: {
        login: Function,
        logout: Function,
        loggedIn: Boolean
    },

    methods: {
        changeLoginState: function(){
            if(this.loggedIn){
                this.logout()
            }else {
                this.login()
            }
        }
    }

})
</script>

<style>
nav {
    width: 100vw;
    height: 10vh;
    display: grid;
    place-items: center;
    background-color: rgb(0, 119, 190, 1);
}

nav .container {
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 80%;
    height: max-content;
    justify-content: space-between;
    align-items: center;
    padding: 0;
}
</style>