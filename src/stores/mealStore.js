import { defineStore } from 'pinia';


export const useMealStore = defineStore('mealStore', {
    state:() => ({
        meals: [],
        totalNumberOfCalories: 0,
    }),
    getters: {
        totalCalories(){
            return this.meals.reduce((total, meal) => total + meal.calories, 0);
        },
    },
    actions: {
        addMeal(meal){
            this.meals.push(meal);
        },
    },
});