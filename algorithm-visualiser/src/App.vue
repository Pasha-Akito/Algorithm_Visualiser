<template>
  <div class="app">
    <div class="page__container">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
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
.app {
  background-color: rgb(136, 223, 114);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.page__container {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  align-self: center;
  flex-grow: 1;
  max-width: 1600px;
  width: 100%;
  padding: 16px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
}
</style>