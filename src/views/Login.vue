<template>
<body>
    <b>Login</b>
    <br>
    <br>
    <div>
        <table border="0">
            <tbody>
                <tr>
                    <td>username</td>
                    <td><input type="text" autofocus="true" v-model="user.nameLogin"></td>
                </tr>
                <tr>
                    <td>password</td>
                    <td><input type="password" v-model="user.passwordLogin"></td>
                </tr>
            </tbody>
        </table>
        <br>
        <br>
        <input type="submit" value="login" @click="onLogin">
    </div>
        <br>
        <br>
        <a href="forgot"> Forgot your password?</a>
        <br>
        <br>
        <b>Create Account</b>
        <br>
        <br>
        <div>
            <table border="0">
                <tbody>
                    <tr>
                        <td>username</td>
                        <td><input type="text" v-model="user.name"></td>
                    </tr>
                    <tr>
                        <td>password</td>
                        <td><input type="password" v-model="user.password"></td>
                    </tr>
                </tbody>
            </table>
            <br>
            <br>
            <input type="submit" value="create account" @click="onCreate">
        </div>
</body>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: "",
                password: ""
            }
        };
    },

    methods: {
        handleSubmit() {
            // Send data to the server or update your stores and such.
        },
        onLogin() {
            console.log("loggin in", this.user.nameLogin);
            // Make a request for a user with a given ID
            const axios = this.$http
            const vm = this
            axios
                .post("/user/login", {
                    username: this.user.nameLogin,
                    password: this.user.passwordLogin
                })
                .then(function (response) {
                    const token = response.data.token

                    localStorage.setItem("token", token)
                    vm.$router.push("/")
                })
                .catch(function (error) {
                    alert(error.response.data.error)
                })
                .then(function () {
                    // always executed
                });
        },
        onCreate() {
            const axios = this.$http
            const vm = this
            axios
                .post("/user/registration", {
                    username: this.user.name,
                    password: this.user.password
                })
                .then(function (response) {
                    console.log(response);
                    // TODO
                    // alert that new user registration was successful prompting them to log in
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};
</script>
