<template>
  <div id="app">
    <router-view></router-view> <!-- Aquí se renderiza la vista principal -->
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
}
</style>