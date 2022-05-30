<template>
   
   <router-link class="card__container" to="sorting">
        <div class="card__body">
            
            <div class="image__body">
                <img src="../assets/sorting.png" alt="Sorting Algorithms">
            </div>
            
            <div class="title__body">
                <h3>Sorting Algorithms</h3>
            </div>

        </div>
    </router-link>

    <router-link class="card__container" to="pathfinding">
       <div class="card__body">
            
            <div class="image__body">
                <img src="../assets/pathfinding.png" alt="Path Finding Algorithms">
            </div>
            
            <div class="title__body">
                <h3>Path Finding Algorithms</h3>
            </div>

        </div>
    </router-link>

    

</template>


<script>

</script>


<style>
.card__container {
    border-radius: 6px;
    color: black;
    background-size: cover;
    background-color: white;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 300px;
    margin: 10px;
    overflow: hidden;
    position: relative;
    cursor: pointer;
    text-decoration: none;

    }
    .card__container:hover {
        background-color: rgb(225, 250, 0);
    }


.card__body {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
}

.image__body { 
    height: 220px;
    position: relative;
}

.image__body > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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