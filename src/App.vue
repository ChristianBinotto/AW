<template>
  <v-app>
    <v-main style="min-height: 100vh; display: flex; flex-direction: column">
      <Menu/>
      <router-view style="flex: 1"></router-view>
      <Pie/>
    </v-main>
  </v-app>
</template>

<script>
import Menu from './components/Menu'
import Pie from './components/Pie'

export default {
  name: 'App',

  components: {
    Menu,
    Pie,
  },

  data: () => ({
    //
  }),
}
</script>
