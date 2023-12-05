<script>
import { RouterLink, RouterView } from 'vue-router'
import LoginView from './views/LoginView.vue';
import {auth} from './Firebase/init.js'
import { signOut } from "firebase/auth"

export default{
  components:{
    LoginView,
    RouterLink,
    RouterView
  },
  data(){
    return{
      isLoggedIn: false
    }
  },
  methods:{
    logIn(showHeader){
      if(showHeader){
        this.isLoggedIn = true
      }
      else{
        this.isLoggedIn = false
      }
    },
    signOut(){
      signOut(auth).then(() =>{
        console.log('Logging out');
        this.$emit('isLoggedIn', false);
        this.$router.push({name:'login'});
      });
    }
  }
}
</script>

<template>
  <header  v-if="isLoggedIn">
    <RouterLink to="/home" class="title-link">
        <h1 class="app-title">MEAL_PLAN</h1>
      </RouterLink>
    <div class="wrapper">
      <nav>
        <RouterLink to="/home">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/meal-list">Meal-List</RouterLink>
      </nav>
    </div>
      <button @click="signOut">log out</button>
  </header>

  <RouterView @loggedIn = "logIn"/>
</template>



<style scoped>
/* header {
  line-height: 1.5;
  max-height: 100vh;
} */

nav {
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Inconsolata',monospace;
  
}

@media screen {
  nav {
  position: relative;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  font-family: 'Inconsolata',monospace;
  }
  .app-title{
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: red;
}
  
}


nav a {
  display: inline-block;
  padding: 0 1rem;
  color:black
}
nav a:hover{
  color:rgb(164, 64, 44);
}

.app-title{
  position: relative;
  top: 0;
  left: 0;
  margin: 0;
  padding: 10px;
  font-size: 24px;
  font-weight: bold;
  color: red;
}
button{
  margin: 0;
  border: none;
  background-color: #ffff;
  color: red;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  
}

</style>
