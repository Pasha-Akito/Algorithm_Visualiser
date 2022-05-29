<template>
  <div>
    <header>
      <h3><router-link to="/">Home</router-link></h3>
      <h3><router-link to="sorting">Sorting Algorithms</router-link></h3>
      <p>Testing out message in App.vue inbetween components: {{ message }}</p>
    </header>

  <router-view></router-view>

 </div>

</template>

<script>
export default {
  data(){
    return {
      message: 'Hello World',
      counter: {
        count: 0
      }
    }
  }
}
</script>

<style> 

</style>