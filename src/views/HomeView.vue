<template>
  <div class="home">
    <h1>This is the Home Page</h1>
    <div class="calories-card"> 
      <h1> {{ totalCalories + userAddedCalories }}</h1>
    </div>
    <div> 
    <label for="caloriesInput">Add them yourself!!:</label>
    <input class="calories-input" type="number" id="caloriesInput" v-model="userAddedCalories"/>
      <button @click="addToTotalCalories">Add Calories</button>
    </div>
  </div>
  
</template>

<script>

import { useMealStore } from '../stores/mealStore';
import { mapState , mapActions} from 'pinia';
export default{
  data(){
    return{
      additionalCalories:0,
      userAddedCalories: 0,
    }
  },
  computed: {
    ...mapState(useMealStore, ['totalCalories']),
    // totalCaloriesDisplayed(){
    //   const mealStore = useMealStore();
    //   return mealStore.totalCalories;
    // },
  },
  methods: {
    ...mapActions(useMealStore, ['addToTotal']),
    
    addToTotalCalories(){
      this.addCalories();
    },

    addCalories(){
      const parsedCalories = parseInt(this.userAddedCalories);
      if(!isNaN(parsedCalories)) {
        //Add the new calories to the store
        this.addToTotal(parsedCalories);
        this.userAddedCalories = 0;// Resetting the input after adding the calories
      }
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
  flex-direction: row;
  justify-items: center;
  align-items: center;
}

.calories-card h1{
  font-family: 'Pixelify Sans', sans-serif;
  font-weight: bold;
  font-size: 50px;
  justify-content: center;
  align-items: center;
  transform: translateX(20%);
  margin: 0;
  text-align: center;
}
.calories-input{
  border: none;
  border-radius: 12px;
  color: black;
  background-color: lightgrey;
  height: 20px;
  margin: 10px;
}
.home{
  background-image: url('../assets/7414518.webp');
  background-repeat: no-repeat;
  background-size:contain;
  min-height: 100vh;
  min-width: 70vw; 
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
}
</style>
