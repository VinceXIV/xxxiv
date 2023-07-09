<template>
    <div class="page login-page">
        <div class="container">
            <h1 class="title">
                College Registration Course
            </h1>

            <form action="" @submit="handleLoginSubmit">
                <h2 class="login">Login</h2>

                <div class="form-item">
                    <label for="email">Email address</label>
                    <input name="email"
                        placeholder="email address"
                        v-model="email"
                    />
                </div>
    
                <div class="form-item">
                    <label for="password">Password</label>
                    <input name="password"
                        placeholder="password"
                        v-model="password"
                    />
                </div>
    
                <input class="btn" type="submit" value="enter system">
            </form>
        </div>
    </div>
</template>

<script>

export default({
    name: 'LoginPage',

    props: {
        login: Function,
        loggedIn: Boolean,
        navigate: Function
    },

    data(){
        return {
            email: "",
            password: ""
        }
    },

    created: function(){
        if(this.loggedIn){
            this.navigate('/main')
        }
    },

    methods: {
        handleLoginSubmit: function(e){
            e.preventDefault()
            this.login(this.email, this.password)
        }
    }
})
</script>

<style scoped>
.login-page .container {
    outline: var(--outline-bold);
    margin-bottom: 4rem;
}

form {
    padding: 1.2vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

form .login {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.form-item {
    display: flex;
    flex-direction: column;
    gap: 0.3vw;
    width: 100%;
    justify-content: left;
}

.form-item input {
    outline: var(--outline-faint);
    padding: 0.45vw;
}
</style>