<template>
    <div class="mealListView">
        <h1> Your Meal List </h1>
        <div class="meal-card" v-for="meal in getAllMeals" :key="meal">
            <MealComponent 
            :id="meal.id"
            :name="meal.name" 
            :calories="meal.calories" 
            :duration_hour="meal.duration_hour" 
            :duration_minute="meal.duration_minute" 
            :directions="meal.directions"
            @addCalories="addToTotalCalories">

                <template #mealName>
                    <div class="meal-name">
                        <h2>{{ meal.name }}</h2>
                    </div>
                </template>
                <template #mealCalories>
                    <div class="meal-calories">
                        <p>{{ meal.calories}} Calories</p>
                    </div>
                </template>
                <template #mealPrepDuration>
                    <div class="meal-duration">
                        <p>{{ formatDuration(meal.duration_hour ,  meal.duration_minute) }}</p>
                    </div>
                </template>
                <template #mealDirections>
                    <div class="meal-directions">
                        <p>{{ meal.directions }}</p>
                    </div>
                </template>
            </MealComponent>
        </div>

        <div> 
            <form @submit.prevent="addNewMeal">
                <label for="mealName"> Meal Name:</label>
                <input type="text" id="mealName" v-model="newMeal.name">

                <label for="mealCalories">Calories:</label>
                <input type="number" id="mealCalories" v-model.number="newMeal.calories" >


                <label for="mealPrepTimeHour">Duration (Hours):</label>
                <input type="number" id="mealPrepTimeHour" v-model.number="newMeal.duration_hour" >

                <label for="mealPrepTimeMinutes">Duration( Minutes ):</label>
                <input type="number" id="mealPrepTimeMinutes" v-model.number="newMeal.duration_minute">

                <label for="mealDirections">Prep-Directions: </label>
                <textarea id="mealDirections" v-model="newMeal.directions"></textarea>

                <button @click="addNewMeal" :disabled="formIncomplete" type="submit">Add New Meal</button>

                <h5 v-if="formIncomplete">Missing Info!</h5>
            </form>
        </div>
    <h4>Number of Meals: {{ getNumberOfMeals }}</h4>
    </div>
</template>

<script>

import MealComponent from '../components/MealComponent.vue';
import { useMealStore } from '../stores/mealStore';
import { mapActions, mapState} from 'pinia';

export default{

components: {
        MealComponent 
    },
    data() {
        return{
            newMeal:{
                name: "",
                calories: null,
                duration_hour: null,
                duration_minute: null,
                directions: ""
            },
            formIncomplete: true,
        }
    },
    computed:{
        ...mapState(useMealStore, ['getAllMeals', 'getNumberOfMeals']),
   
    },
    beforeMount(){
        this.retrieveMeals()
    },

    methods:{

        ...mapActions(useMealStore,['addMeal','addToTotal','retrieveMeals']),

        formatDuration(hours, minutes){
            return `${hours}hr ${minutes}min`
        },
        addNewMeal(){
            if(!this.formIncomplete) {
            const newMeal = {name:this.newMeal.name,
                calories: this.newMeal.calories,
                duration_hour: this.newMeal.duration_hour,
                duration_minute: this.newMeal.duration_minute,
                directions: this.newMeal.directions} 
            this.addMeal(newMeal);
            }
            console.log('Meal created');
            this.resetForm();
        },
        addToTotalCalories(calories){
            this.addToTotal(calories);
        },
        resetForm(){
            this.newMeal ={
                name: '',
                calories:'',
                duration_hour: null,
                duration_minute: null,
                directions: ''
            }
            this.formIncomplete = true;
        },
    },

    watch: {
        newMeal: {
            deep: true,
            handler(){
                if(
                    this.newMeal.name &&
                    this.newMeal.calories !== null
                ){
                    this.formIncomplete=false;
                }else{
                    this.formIncomplete=true;
                }
            }
        }
    }
}
</script>


<style>
.mealListView{
  background-image: url('../assets/flat-lay-uncooked-spaghetti-penne-parmesan-with-copy-space_23-2148361276.jpg');
  min-width: 70vw;
  min-height: 100vh;
}
.meal-name{
    font-family: 'B612 Mono', monospace;
}
.meal-card{
    background-color:antiquewhite;
    width: 50%;
    border-radius: 5px;
    margin-top: 10px;
    margin-right: 10px;
    margin-left: 10px;
    margin-bottom: 10px;
}
label{
    margin-right: 10px;
}
input{
    margin-bottom: 10px;
}
button{
    margin: 10px;
    border: none;
    color: green;
    background-color: lightgrey;
    height: 25px;
    font-weight: bold;
    border-radius: 10px;
}
form{
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

</style>
