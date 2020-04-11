<template>
  <v-app>

    <router-view></router-view>

    <app-footer></app-footer>
  </v-app>

</template>

<script>
import Footer from './components/Footer';


export default {
  name: 'App',

  components: {
    'app-footer': Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>

</style>
