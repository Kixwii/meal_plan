<template>
    <div class="center">
        <form @submit.prevent="login">
            <h2>Login</h2>
            <input type="email" placeholder="Email" required v-model="email" />
            <h2></h2>
            <input type="Password" placeholder="Password" required v-model="password" />
            <h2></h2>
            <button>Login</button>
        </form>
        <p>
            If you don't have an account, please
            <span @click="gotoSignup"> <b>Sign up </b> </span>
        </p>
    </div>
</template>
  
<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/init.js";
export default {
    data() {
        return {
            email: "",
            password: "",
        };
    },
    methods: {
        gotoSignup() {
            this.$router.push({ name: "sign up" });
        },
        login() {
            signInWithEmailAndPassword(auth, this.email, this.password).then(() => {
                this.$emit("loggedIn", true);
                this.$router.push({ name: "home" });
            });
        },
    },
};
</script>
  
<style scoped>
.center {
    margin: 0;
    top: 50%;
    left: 50%;
    position: absolute;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
}

input,
select {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}

button {
    width: 80%;
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 10px;
    cursor: pointer;
}

button:hover {
    background-color: darkgreen;
}

div {
    border-radius: 10px;
    background-color: #f4f4f4;
    padding: 20px;
    width: 35%;
    border-width: 5px;
}

span {
    text-decoration: underline;
}
</style>
  