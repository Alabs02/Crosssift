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
        &copy; {{ new Date().getFullYear() }} — <strong class="" id="fon">Crossift</strong> 
        <v-btn rounded elevation="0" small ripple color="grey darken-3" class="ml-2 white--text text--darken-3">Privacy Policy</v-btn>
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

  #fon {
    font-size: large !important;
    text-transform: uppercase;
      font-weight: 500 !important;

  }
  @media screen and (max-width: 1024px) {
    #footer {
      margin-top: 10px !important;
    }
    #fon {
      font-size: medium !important;
      font-weight: 300 !important;
    }
  }
</style>