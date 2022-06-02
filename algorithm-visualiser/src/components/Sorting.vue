<template>

    <div v-for="value in array">
        <div class="array__bar" :style="{height: value + 'px'}">
            <div class="array__dot" :style="{height: (value - 3) + 'px'}">
               {{ value }}
            </div>
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
    for (let i = 0; i < 400; i++) {
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
    width: 3px;
    background-color: rgb(255, 0, 0);
    display: flex;
    margin: 0.5px;
}

.array__dot {
    width: 3px;
    background-color: rgb(136, 223, 114);
    display: flex;
}

.array__container {
    position: absolute;
    width: 100%;
    height: 100%;
}
</style>