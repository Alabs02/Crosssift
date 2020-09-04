<template>
  <v-app>
    <router-view></router-view>
    <!-- <v-container class="mt-n12">
      <v-row no-gutters class="text-center" justify="center">
        <v-col
          cols="12"
          md="12"
          sm="12"
        >
          <v-avatar tile size="400">
            <img src="./assets/404.svg" srcset="./assets/404.svg" draggable="false" alt="404">
          </v-avatar>

          <v-card-text class="mt-n12">
            <h1 class="text"><span>Oops!</span></h1>
          </v-card-text>

          <v-row justify="center" class="mt-12">
            <div class="text-center">
              <v-card-text class="text-capitalize body-1 mt-n4 font-weight-medium">this page does not exist</v-card-text>
              <v-btn router to="/" dark ripple class="btn"><v-icon left>mdi-home</v-icon>go to homepage</v-btn>
            </div>
          </v-row>
        </v-col>
      </v-row>
    </v-container> -->

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
  .btn {
    background: linear-gradient(to bottom right, #283593, #880E4F);
  }

	h1 {
    font-family: "Arial", sans-serif;
    font-size: 85px;
    text-align: center;
    font-weight: bold;
    color: #1A237E;
  }

  .text {
    position:relative;
  }
  .text:after {
    content: '';
    position:absolute;
    display:block;
    top:0;
    height:100%;
    width:100%;
  }

  span {
    text-shadow: 
      0 -1px 0 #8a54ee,
             
      0 1px 10px rgba(192, 175, 240, 0.6),
      0 6px 1px rgba(207, 199, 243, 0.6),
      0 0 5px rgba(170, 152, 211, 0.6),
      0 1px 3px rgba(84, 83, 114, 0.6),
      0 3px 5px rgba(128, 44, 161, 0.2),
      0 7px 10px rgba(0,0,0,.25),
      0 15px 10px rgba(0,0,0,.2),
      0 25px 15px rgba(0,0,0,.15);
  }
</style>
