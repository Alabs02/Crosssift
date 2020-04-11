<template>
  <div class="about">
    <v-toolbar
      class="color"
      dark
      prominent
      app
      extended
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <v-card
      class="mx-auto"
      max-width="900"
      style="margin-top: -64px;"
    >
      <v-toolbar flat>
        <v-toolbar-title class="indigo--text text--darken-4 headline">About Us</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
             link
             color="indigo draken-2"
             router to="/" 
             v-on="on"
             icon
             >
              <v-icon>mdi-home</v-icon>
            </v-btn>
          </template>
          <span>Home</span>
        </v-tooltip>


        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
             link
             color="indigo draken-2"
             router to="/news" 
             v-on="on"
             icon
             >
              <v-icon>mdi-apps</v-icon>
            </v-btn>
          </template>
          <span>News</span>
        </v-tooltip>

        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-btn
             link
             color="indigo draken-2"
             router to="/contact" 
             v-on="on"
             icon
             >
              <v-icon>mdi-phone</v-icon>
            </v-btn>
          </template>
          <span>Contact Us</span>
        </v-tooltip>
      </v-toolbar>

      <v-divider></v-divider>

      <v-flex class="flix">
        <v-container>
            <img src="../assets/mobile-testing.svg" alt="testing" width="100%" height="500px">
        </v-container>
      </v-flex>
      <v-layout>
        <v-flex>
            <v-row>
              <v-col 
               cols="12" 
               class="mx-auto"
               md="5"
              >
                <v-card elevation="1" flat color="grey-lighten-2">
                    <v-card-title class="text-center">Our Mission</v-card-title>

                    <v-card-text>
                     <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat vel mollitia dicta dolorum culpa 
                       ipsum maxime deleniti eaque quo qui, dignissimos, modi blanditiis, saepe neque id autem voluptatibus 
                       libero magni.
                      </span>
                    </v-card-text>
                </v-card>
              </v-col>

              <v-col  
               cols="12" 
               class="mx-auto"
               md="5"
              >
                <v-card flat elevation="1" color="grey-lighten-2">
                  <v-card-title class="font-weight-bold">Our Story</v-card-title>

                  <v-card-text>
                    <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur, cupiditate tenetur? Soluta i
                      mpedit illo eos vitae, atque saepe a totam rem necessitatibus in 
                      omnis suscipit dolorem, tenetur numquam quo pariatur.
                    </span>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
        </v-flex>
      </v-layout>

      <v-container>
        <v-card flat>
          <v-card-title class="text-center">Our History</v-card-title>
        </v-card>
          <v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
            <v-timeline-item
              v-for="(item, i) in items"
              :key="i"
              :color="item.color"
              :icon="item.icon"
            >
              <v-card
                :color="item.color"
                dark
              >
                <v-card-title class="title">Lorem Ipsum Dolor</v-card-title>
                <v-card-text class="white text--primary">
                  <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                  <v-btn
                    :color="item.color"
                    class="mx-0"
                    outlined
                  >
                    Button
                  </v-btn>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
      </v-container>

       <div>
        <v-container>
          <v-card
           color="indigo lighten-5"
           class="mx-auto"
           max-height="400"
          >
            <v-card-text class="headline font-weight-bold text-center indigo--text darken-2">
              Our Platform
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

      <v-container>
        <v-card>
          <div class="text-center">
            <v-card-title class="indigo--text text--darken-3 align-content-center">Motto And Quote</v-card-title>

            <v-sheet>
              <v-card-text class="font_weight_bold">"I like the dreams of the future better than the history of the past"</v-card-text>
              <v-card-text>"Never underestimate the power you have to take your life in a new direction."</v-card-text>
            </v-sheet>
          </div>
          
        </v-card>
      </v-container>
      
    </v-card><br><br>
  </div>
</template>


<script>
  export default {
    data: () => ({
      items: [
        {
          color: 'indigo',
          icon: 'mdi-star',
        },
        {
          color: 'pink darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'purple lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'green',
          icon: 'mdi-buffer',
        },
      ],
    }),
  }
</script>

<style scoped>
  .color {
    background: linear-gradient(to bottom right, #1A237E, #880E4F);
  }

  #frame {
    border: none;
  }

  .flix {
    margin-top: -12px;
  }
</style>
