<template>
    <div class="meal">
       <h3><slot name="mealName"></slot></h3>
       <div><slot name="mealCalories"></slot></div>
       <div><slot name="mealPrepDuration"></slot></div>
       <div><slot name="mealDirections"></slot></div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  div{
      border: none;
  }
  
  </style>

