<template>
    <div class="page signup-page">
        <div class="container">
            <h1 class="title">
                College Registration Course
            </h1>

            <form action="" @submit="handleLoginSubmit">
                <h2 class="signup">Signup</h2>

                <div class="name">
                    <div class="form-item">
                        <label for="first-name">First Name</label>
                        <input name="first-name"
                            placeholder="Vincent"
                            v-model="signupData.first_name"
                        />
                    </div>
                    <div class="form-item">
                        <label for="last-name">Last Name</label>
                        <input name="last-name"
                            placeholder="Makokha"
                            v-model="signupData.last_name"
                        />
                    </div>
                </div>

                <div class="form-item">
                    <label for="email">Email address</label>
                    <input name="email"
                        placeholder="email address"
                        v-model="signupData.email"
                    />
                </div>
    
                <div class="form-item">
                    <label for="password">Password</label>
                    <input name="password"
                        type="password"
                        placeholder="password"
                        v-model="signupData.password"
                    />
                </div>
    
                <input class="btn" type="submit" value="signup">
            </form>
        </div>
    </div>
</template>

<script>

export default({
    name: 'signupPage',

    props: {
        signup: Function,
        loggedIn: Boolean,
        navigate: Function
    },

    data(){
        return {
            signupData: {
                email: "",
                password: "",
                first_name: "",
                last_name: ""
            }
        } 
    },

    created: function(){
        if(this.loggedIn){
            this.navigate('/home')
        }
    },

    methods: {
        handleLoginSubmit: function(e){
            e.preventDefault()
            this.signup(this.signupData)
        }
    }
})
</script>

<style scoped>
.signup-page .container {
    outline: var(--outline-bold);
    margin-bottom: 4rem;
}

form {
    padding: 2vw;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

form .signup {
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

.name .form-item {
    width: calc(50% - 1vw);
}

.name {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
}

.form-item input {
    outline: var(--outline-faint);
    padding: 0.45vw;
}
</style>