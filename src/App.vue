<script>
import { RouterLink, RouterView } from 'vue-router'
import LoginView from './views/LoginView.vue';
export default{
  components:{
    LoginView,
    RouterLink,
    RouterView
  }
}
</script>

<template>
  <div @loggedIn = "logIn" v-if="isLoggedIn">
  <header >
    <RouterLink to="/" class="title-link">
        <h1 class="app-title">MEAL_PLAN</h1>
      </RouterLink>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/meal-list">Meal-List</RouterLink>
      </nav>
    </div>
  </header>


  <RouterView />
</div>
<div v-else>
<LoginView/>
</div>
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

</style>
