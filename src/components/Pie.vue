<template>
    <v-footer
    class="bg-indigo-lighten-1 text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        class="mx-4"
        :icon="icon"
        variant="text"
      ></v-btn>
    </div>

    <div class="pt-0">
      Contamos con trabajadores capacitados de la mejor manera y tecnología utilizada de manera eficaz y eficiente para brindar
      un pronóstico acertado día a día.
    </div>

    <v-divider></v-divider>

    <div>
      {{ new Date().getFullYear()}} — <strong>Weather Company</strong>
    </div>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }

</script>

<style scoped>

</style>
