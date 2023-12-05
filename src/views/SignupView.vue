<template>
  <div class="center">
    <form @submit.prevent="signup">
      <h2>Sign Up</h2>
      <input type="text" placeholder="Username" required v-model="username" />
      <h2></h2>
      <input type="email" placeholder="Email" required v-model="email" />
      <h2></h2>
      <input type="Password" placeholder="Password" required v-model="password" />
      <h2></h2>
      <button>Sign up</button>
    </form>
    <p>
      If you are already registered,
      <span @click="gotoLogin"><b>Login </b></span>
    </p>
  </div>
</template>

<script>
import { auth } from "../Firebase/init.js";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
    };
  },
  methods: {
    gotoLogin() {
      this.$router.push({ name: "login" });
    },
    signup() {
      createUserWithEmailAndPassword(auth, this.email, this.password).then(
        () => {
          updateProfile(auth.currentUser, {
            displayName: this.username,
          }).then(() => {
            console.log("Display: ", auth.currentUser.displayName);
            this.$emit("loggedIn", true);
            this.$router.push({ name: 'home' });

          });
        }
      );
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
