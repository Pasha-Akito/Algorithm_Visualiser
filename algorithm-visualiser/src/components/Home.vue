<template>
    <router-link class="card__container" to="sorting">
       <div class="card__body">
            <div class="image__body">
                <img src="../assets/sorting_algorithms.png" alt="Sorting Algorithms">
            </div>
            
            <div class="title__body">
                <h3>Sorting Algorithms</h3>
            </div>
        </div>
    </router-link>

</template>

<script>

</script>

<style>
.card__container {
    border-radius: 6;
    color: black;
    background-size: cover;
    background-color: white;
    box-shadow: 0px, 1px, 5px, 0px, rgba(0, 0, 0, 0.15);
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300;
    width: 31%;
    margin: 10;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-decoration: none;
    }
    .card__container:hover {
        background-color: lightseagreen;
    }

.card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
}

.image__body { 
    height: 220;
    position: relative;
}

.image__body > img {
    object-fit: cover;
    width: 100%;
    height: 10%;
    filter: grayscale(60%);
}

.title__body {
    padding: 18px;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}

.title__body > h3 {
    text-align: center;
    font-size: 22px;
    line-height: 16px;
    font-weight: 700;
    color: black;
    flex: 1;
}

</style>