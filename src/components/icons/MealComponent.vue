<template>
    <div class="meal">
       <h3><slot name="mealName"></slot></h3>
       <div><slot name="mealCalories"></slot></div>
       <div><slot name="mealPrepDuration"></slot></div>
       <div><slot name="mealDirections"></slot></div>
       <div> 
        <button @click="addCalories">Add Calories</button>
       </div>
    </div>
  </template>
  
  <script>
  export default {
    props:['calories'],
    methods: {
        addCalories(){
            //Emitting an event with the calories to the parent component
            this.$emit('addCalories', this.calories);
        },
    },
  
  }
  </script>
  
  <style>
  div{
      border: none;
  }
  
  </style>

