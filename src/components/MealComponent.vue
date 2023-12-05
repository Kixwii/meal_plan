<template>
    <div class="meal">
        <h3>
            <slot name="mealName"></slot>
        </h3>
        <div>
            <slot name="mealCalories"></slot>
        </div>
        <div>
            <slot name="mealPrepDuration"></slot>
        </div>
        <div>
            <slot name="mealDirections"></slot>
        </div>
        <div>
            <button @click="addCalories">Add Calories</button>
            <button class="red-cancel" @click="deleteMeal(this.id)">&#10006</button>
        </div>
    </div>
</template>
  
<script>
import { deleteDoc, doc} from 'firebase/firestore'
import db from '../Firebase/init.js'
export default {

    props: ['calories', 'id'],
    methods: {
        addCalories() {
            //Emitting an event with the calories to the parent component
            this.$emit('addCalories', this.calories);
        },
        deleteMeal(id) {
            deleteDoc(doc(db, "meals", id))
        }
    },

}
</script>
  
<style>
div {
    border: none;
}

.red-cancel {
    color: red;
    margin-left: 10px
}</style>

