<template>
    <div class="page login-page">
        <div class="container">
            <h1 class="title">
                College Registration Course
            </h1>

            <form>
                <h2 class="login">Login</h2>

                <div class="form-item">
                    <label for="email-address">Email address</label>
                    <input name="email-address" placeholder="email address"/>
                </div>
    
                <div class="form-item">
                    <label for="password">Password</label>
                    <input name="password" placeholder="password" />
                </div>
    
                <input class="btn" type="submit" value="enter system">
            </form>
        </div>
    </div>
</template>

<script>
export default({
    name: 'LoginPage'
})
</script>

<style scoped>
.login-page .container {
    outline: var(--outline-bold);
    width: max(40vw, 40rem);
    margin-bottom: 4rem;
}

form .login {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

@media screen and (max-width: 50rem){
    .login-page .container {
        width: 80vw;
        min-width: none;
    }
}
</style>