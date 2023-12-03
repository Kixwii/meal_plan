<template>
  <div class="home">
    <h1>This is the Home Page</h1>
    <div class="calories-card"> 
      <h1> {{ totalCalories }}</h1>
    </div>
  <div> </div>
  </div>
</template>

<script>

import { useMealStore } from '../stores/mealStore';
// import { computed } from 'vue';
export default{
  computed: {
    totalCalories(){
      const mealStore = useMealStore();
      return mealStore.totalCalories;
    }
  }
}

</script>

<style>
.calories-card{
  top: 100px;
  left: 0;
  background-color: yellow;
  color: black;
  height: 150px;
  width: 150px;
  border-radius: 15px;
  display: flex;
  justify-items: center;
  align-items: center;
}

.calories-card h1{
 font-weight: bold;
 justify-content: center;
 align-items: center;
 margin: 0;
 text-align: center;
}
</style>
