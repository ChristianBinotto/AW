<template>
  <v-app>
    <Menu msg="Welcome to Your Vue.js App"/>
    <Pie/>
  </v-app>
</template>

<script>
import Menu from './components/Menu'
import Pie from './components/Pie'

export default {
  name: 'App',
  components: {
    Menu,
    Pie
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}
</style>
