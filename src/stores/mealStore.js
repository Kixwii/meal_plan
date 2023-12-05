import { defineStore } from 'pinia';


export const useMealStore = defineStore('mealStore', {
    state:() => ({
        meals: [
            {
                name: 'Pulled Buffalo Chicken',
                calories: 1290,
                duration_hour: 0,
                duration_minute: 30,
                Directions: 'Add the chicken and 1 cup (8-oz.) buffalo sauce to the Crockpot. Toss to combine. Cook on low for 6-8 hours or high for 3-4 hours. Remove the chicken breasts from the Crockpot and use two forks to shred the meat. Discard the remaining liquid from the Crockpot then add the meat back and toss with the remaining 1/2 cup (4-oz.) of buffalo sauce. '
            },
        ],
        addedCalories: 0,
    }),
    getters: {
        totalCalories(state){
            return state.meals.reduce((total, meal) => total + meal.calories, 0);
        },
        getAllMeals(state){
            return state.meals;
        }
    },
    actions: {
        addMeal(meal){
            this.meals.push(meal);
        },
        resetMeals(){
            this.meals = [];
        },
        //handles calories addition to the home display
        addToTotal(calories){
            this.addedCalories += calories;
        }
    },
});