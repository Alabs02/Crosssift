<template>
  <div>
    <app-bar></app-bar>

    <v-content>
      <app-carousel></app-carousel>
      <v-alert
        border="left"
        color="purple darken-1"
        dark
        class="text-center"
      >
        <span class="headline">Welcome to Crosssift!!!</span>
      </v-alert>
      <v-layout align-center>
        <v-flex>
          <app-starter></app-starter>
        </v-flex>
      </v-layout>

      <v-container> 
        <div class="text-center">
          <h3 class="why grey--text text--darken-3">Why Crosssift</h3>
          <p class="grey--text text-darken-2">A platform that helps to dissemenate credible, authentic, ubnaised and abashed news to of the fascinating world!!!</p>
        </div>
      </v-container>

      <div id="off">
        <v-container>
          <v-card
           color="indigo lighten-5"
           class="mx-auto"
           max-height="400"
          >
            <v-card-text class="headline font-weight-bold text-center indigo--text darken-2">
              Crosssift Offers
            </v-card-text>
            <v-sheet
             class="mx-auto"
            >
            <v-container>
              <v-text>Crosssift is a platform that allows you shared the happening in vicinity. We also help to authenticate the information you post to ensure it true and to reduce the icesant spread of fake news in Nigeria. </v-text><v-text>Crosssift is a platform that allows you shared the happening in vicinity. We also help to authenticate the information you post to ensure it true and to reduce the icesant spread of fake news in Nigeria. </v-text>
            </v-container>
            </v-sheet>

          </v-card>
        </v-container>
      </div>

      <v-flex>
        
      </v-flex>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '../components/AppBar';
import Carousel from '../components/Carousel';
import Starter from '../components/starter';


export default {
  name: 'home',
  components: {
    'app-bar': AppBar,
    'app-carousel': Carousel,
    'app-starter': Starter,
  },

  data: () => ({
    drawer: false,
    dialog: false,
    step: 1,
    items: [
      { title: 'Navigate', icon: 'mdi-apps' },
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'Logout', icon: 'mdi-open-in-new' },
    ],
  }),

  computed: {
    currentTitle () {
      switch (this.step) {
        case 1: return 'Sign-up'
        case 2: return 'Create a password'
        default: return 'Account created'
      }
    },
  }

}
</script>


<style scoped>
  .why {
    font-size: 40px;
  }

  #off{
    background-image: url(../assets/discussion.svg);
  }
</style>