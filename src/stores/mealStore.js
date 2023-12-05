import { defineStore } from 'pinia';
import {onSnapshot, collection, addDoc} from 'firebase/firestore'
import db from '../Firebase/init.js'


export const useMealStore = defineStore('mealStore', {
    state:() => ({
        meals: [],
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
        addMeal(meal) {
            addDoc(collection(db, 'meals'), {
                name:meal.name,
                calories:meal.calories,
                duration_hour:meal.duration_hour,
                duration_minute:meal.duration_minute,
                directions:meal.directions,
            })
        },
        resetMeals(){
            this.meals = [];
        },
        //handles calories addition to the home display
        addToTotal(calories){
            this.addedCalories += calories;
        },
        retrieveMeals(){
            onSnapshot(collection(db, 'meals'), (querySnapshot)=>{
                const mealsArr = []
                querySnapshot.forEach((doc) => {
                  const meal={
                    id:doc.id,
                    name:doc.data().name,
                    calories:doc.data().calories,
                    duration_hour:doc.data().duration_hour,
                    duration_minute:doc.data().duration_minute,
                    directions:doc.data().directions,
                  }
                  mealsArr.push(meal)
                })
                this.meals = mealsArr
            })
        }
    },
});