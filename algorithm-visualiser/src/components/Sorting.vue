<template>

    <div v-for="value in array">>
        <div class="array__bar" >
            {{ value }} 
        </div>
    </div>

</template>



<script setup>
import { ref, onMounted } from 'vue'

// need array to sort
const array = ref([])

// creating function to populate array with random values at random intervals
function populateArray() {
    // 10 values in array (for time being)
    for (let i = 0; i < 10; i++){
        array.value.push(randomIntFromInterval(10, 1000))
    }
    console.log(array.value)
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

onMounted(() => {
    console.log('componenet loaded')
    populateArray()
})

</script>



<style>

.array__bar {
    width: 10px;
    height: 100px;
    background-color: coral;
    display: flex;
    margin: 10px;
}

.array__container {
    position: absolute;
    width: 100%;
    height: 100%;
}

</style>