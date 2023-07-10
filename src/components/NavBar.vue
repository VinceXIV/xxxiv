<template>
    <nav ref="navbar">
        <div class="container">
            <h1>Code Challenge</h1>
            <button class="btn" @click="changeLoginState">
                {{ loggedIn ? 'Logout' : 'Login' }}
            </button>
        </div>
    </nav>
</template>

<script>
export default({
    name: "NavBar",

    props: {
        logout: Function,
        loggedIn: Boolean,
        navigate: Function,
        lastScroll: Number,
        updateLastScroll: Function
    },

    mounted: function(){
        window.addEventListener("scroll", this.handleScroll)

    },

    methods: {
        changeLoginState: function(){
            if(this.loggedIn){
                this.logout()
            }else {
                this.navigate('/main')
            }
        },

        handleScroll: function(){
            let currentScroll = window.pageYOffset;
            const scrollingDown = currentScroll > this.lastScroll

            const navbar = this.$refs?.navbar

            if(!navbar){
                return
            }else if (scrollingDown) {
                navbar.classList.add("scroll-down");
                navbar.classList.remove("scroll-up");
            } else {
                navbar.classList.add("scroll-up");
                navbar.classList.remove("scroll-down");
            }

            if(this.updateLastSCroll){
                this.updateLastSCroll(currentScroll);
            }
        }
    }

})
</script>

<style>
nav {
    width: 100vw;
    height: 10vh;
    position: fixed;
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

nav.scroll-down {
    animation-name: reduce-opacity;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
}

@keyframes reduce-opacity {
    from {opacity: 1}
    to {opacity: 0}
}
</style>