<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="grey darken-4 white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-row>
        <v-col
         class="mx-auto"
         cols="12"
         md="4"
        >
          <v-btn
            icon
          >
            <v-icon large>mdi-apps</v-icon>
          </v-btn>
        </v-col>

        <v-col
         class="mx-auto"
         cols="12"
         md="5"
        >
          <v-card-text class="white--text pt-0">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius provident quae aliquid dignissimos, atque architecto minima quis ea pariatur tempora. Repellat dolor officia pariatur iusto nostrum repellendus illum, error amet!
          </v-card-text>
        </v-col>
      </v-row>

      

      <v-divider></v-divider>

      <v-card-text class="indigo darken-3 white--text">
        {{ new Date().getFullYear() }} — <strong>Crosssift</strong> <v-spacer></v-spacer> <v-btn text rounded><span>Privacy Policy</span></v-btn>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>


<style scoped>
  #foot-color {
    background: linear-gradient(to right, #283593, #4527A0)
  }
</style>