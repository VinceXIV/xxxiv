<template>
    <div class="login-page">
        <div class="container">
            <h1 class="form-title">
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
.login-page {
    width: 100vw;
    height: 100vh;
    display: grid;
    place-items: center;
}

.login-page .container {
    outline: var(--outline-bold);
    padding-top: 1rem;
    padding-bottom: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 30rem;
}

.form-title {
    font-size: 1.3rem;
    text-align: center;
}

.login-page form {
    padding: 0.8rem;
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
    gap: 0.3rem;
    width: 100%;
    justify-content: left;
}

.form-item input {
    outline: var(--outline-faint);
    padding: 0.3rem;
}

@media screen and (max-width: 40rem){
    .login-page .container {
        width: 80vw;
    }
}
</style>