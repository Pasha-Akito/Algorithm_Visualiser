<template>
  <div>
    <header>
      <h1>{{ message }}</h1>
      <p>Count is: {{ counter.count }}</p>
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