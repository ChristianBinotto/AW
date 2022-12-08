<template>
  <v-app>
    <v-main>
      <Menu/>
      <router-view></router-view>
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
