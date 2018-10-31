
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
      const axios = require("axios");
      axios
        .post("/login", {
          firstName: this.user.nameLogin,
          lastName: this.user.password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        })
        .then(function() {
          // always executed
        });
    },
    onCreate() {
      axios
        .post("/registration", {
          firstName: user.name,
          lastName: user.password
        })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
