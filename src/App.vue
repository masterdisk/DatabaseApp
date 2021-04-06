<template>
  <div id="app">
    <Nav/>
    <router-view/>
  </div>
</template>
<script>
import Nav from './components/partials/Nav.vue';

export default {
  name: 'app',
  components: {
    Nav
  }
}
</script>
<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Lato:wght@700&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
