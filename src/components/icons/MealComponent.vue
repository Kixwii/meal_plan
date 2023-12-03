<template>
    <div class="meal">
       <h3><slot name="mealName"></slot></h3>
       <div><slot name="mealCalories"></slot></div>
       <div><slot name="mealPrepDuration"></slot></div>
       <div><slot name="mealDirections"></slot></div>
       <div> 
        <button @click="addCaloriesToTotal">Add Calories</button>
       </div>
    </div>
  </template>
  
  <script>
  export default {

    methods: {
        addCaloriesToTotal(){
            this.$emit('add-calories', this.calories);
        },
    },
  
  }
  </script>
  
  <style>
  div{
      border: none;
  }
  
  </style>

