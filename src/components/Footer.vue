<template>
  <div>
    <v-footer
     absolute
     dark
     class="font-weight-medium"
     color="grey darken-4"
     id="footer"
    >
      <v-col
       class="text-center"
       cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>Crosssift</strong> 
        <v-btn rounded ripple color="grey lighten-3" class="ml-2 grey--text text--darken-3">Privacy Policy</v-btn>
      </v-col>
    </v-footer>
  </div>
</template>


<script>
  export default {
    data: () => ({
      //
    }),
  }
</script>


<style scoped>
  #footer {
    bottom: 0 !important;
  }
</style>