<template>
  <div>
    <app-bar></app-bar>
    <v-content>
      <app-carousel></app-carousel>
      <v-alert
        tile
        color="purple darken-1"
        dark
        class="text-center alert"
      >
        <span class="overline mt-n2" id="salute">Welcome to Crossift!</span>
      </v-alert>
      <v-sheet>
        <popup />
      </v-sheet>
       <div class="text-center">
          <v-dialog
            v-model="dialog"
            width="600"
          >
            <template v-slot:activator="{ on }">
             <v-snackbar
              color="white"
              class="black--text"
              elevation="5"
              v-model="snackbar"
              :multi-line="multiLine"
              :timeout="timeout"
            >
              {{ text }}

              <v-btn
               v-on="on"
               text
               color="indigo darken-2"
              >
                <span>View Policy</span>
              </v-btn>
              <v-btn
                color="pink darken-2"
                text
                @click="snackbar = false"
              >
                Close
              </v-btn>
            </v-snackbar>
            </template>

            <v-card>
              <v-card-title
                class="headline indigo lighten-5 indigo--text font-weight-bold text--darken-3"
                primary-title
              >
                Privacy Policy
              </v-card-title>

              <v-card-text class="mt-2 blue-grey--text text--darken-4 body-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </v-card-text>

              <v-divider></v-divider>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="pink font-weight-medium"
                  text
                  @click="dialog = false"
                >
                  Close
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </div>
        <div>
          <!-- Alert Handlers  -->
          <success-alert></success-alert>  
          <error-alert></error-alert>
          <warning-alert></warning-alert>
        </div>
    </v-content>
  </div>
</template>

<script>
// @ is an alias to /src
import AppBar from '@/components/AppBar'
import Carousel from '@/components/Carousel'
import Popup from "@/components/partials/Popup.vue"
import SuccessAlert from '@/components/core/SuccessAlert.vue'
import ErrorAlert from '@/components/core/ErrorAlert.vue'
import WarningAlert from '@/components/core/WarningAlert.vue'


export default {
  name: 'home',
  components: {
    'app-bar': AppBar,
    'app-carousel': Carousel,
    'popup': Popup,
    'success-alert': SuccessAlert,
    'error-alert': ErrorAlert,
    'warning-alert': WarningAlert,
  },

  data: () => ({
    drawer: false,
    dialog: false,
    multiLine: true,
    snackbar: true,
    text: "Please go through our privacy policy!",
    timeout: 10000000,
    step: 1,
    items: [
      { title: 'Navigate', icon: 'mdi-apps' },
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'Logout', icon: 'mdi-open-in-new' },
    ],
  }),

  computed: {
    //
  }

}
</script>


<style scoped>
  .why {
    font-size: 40px;
  }
  .alert {
    height: 45px !important;
  }
  #salute {
    font-size: .8rem !important;
  }
  #off{
    background-image: url(../assets/discussion.svg);
  }
</style>