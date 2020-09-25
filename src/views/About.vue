<template>
  <div class="about">
    <v-toolbar
      class="color"
      dark
      prominent
      app
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
    </v-toolbar>

    <v-card
      class="mx-auto"
      max-width="900"
      style="margin-top: -64px;"
    >
      <v-toolbar flat>
        <v-toolbar-title class="indigo--text text--darken-4 headline">About Us</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-menu bottom left transition="scale-transition">
          <template v-slot:activator="{ on, attr }">
            <v-btn
              icon
              v-bind="attr"
              v-on="on"
              class="indigo lighten-5"
            ><v-icon class="indigo--text text--darken-4">mdi-dots-vertical</v-icon></v-btn>
          </template>

          <v-list>
            <v-list-item
              v-for="(item, i) in leftNavItems"
              :key="i"
              router :to="item.to"
              link
            >
              <v-list-item-avatar>
                <v-icon
                  color="indigo"
                  v-text="item.icon"
                ></v-icon>
              </v-list-item-avatar>

              <v-list-item-content>
                <v-list-item-title class="indigo--text text--darken-3" v-text="item.title"></v-list-item-title>
              </v-list-item-content>

              <!-- <v-list-item-action>
                <v-btn
                  icon
                ><v-icon>mdi-email</v-icon></v-btn>
              </v-list-item-action> -->
            </v-list-item>
          </v-list>
        </v-menu>
      </v-toolbar>

      <v-divider></v-divider>

      <v-flex class="flix">
        <v-container>
            <img src="../assets/mobile-testing.svg" alt="testing" width="100%" height="500px">
        </v-container>
      </v-flex>
      <v-container>
        <v-layout>
          <v-flex>
              <v-row>
                <v-col 
                cols="12" 
                class="mx-auto"
                md="5"
                >
                  <v-card elevation="3" color="grey-lighten-2">
                      <v-card-title class="text-center font-weight-bold indigo--text">Our Mission</v-card-title>

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
                  <v-card elevation="3" color="grey-lighten-2">
                    <v-card-title class="font-weight-bold indigo--text">Our Story</v-card-title>

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
      </v-container>

      <v-container>
        <v-card flat>
          <v-card-title class="title  font-weight-bold">Our History</v-card-title>
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
              <v-card-text class="">Crossift is a platform that allows you shared the happening in vicinity. We also help to authenticate the information you post to ensure it true and to reduce the icesant spread of fake news in Nigeria.</v-card-text>
            </v-container>
            </v-sheet>
          </v-card>
        </v-container>
      </div>

      <v-container>
      <v-card>
        <v-toolbar
            color="indigo"
            dark
            dense
            flat
          >
            <v-toolbar-title class="title text-center">Quotes</v-toolbar-title>
        </v-toolbar>

        <v-card-text>
            "I like the dreams of the future better than the history of the past"<br>
            "Never underestimate the power you have to take your life in a new direction"
          </v-card-text>
      </v-card>
      </v-container>

      <v-card
        class="mx-auto mt-4"
        max-width="950"    
        flat
      >
          <v-container>
            <v-toolbar color="indigo" dark>
                <v-toolbar-title class="headline">Team</v-toolbar-title>
            </v-toolbar>
          </v-container>

          <v-container>
            <v-row justify="center">
                <v-col
                  cols="12"
                  md="6"
                  sm="12"
                >
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                              class="mx-auto"
                              elevation="5"
                              max-width="355"
                            >
                                <v-img height="250" src="@/assets/male.svg"></v-img>

                                <v-card-text>
                                    <h2 class="title primary--text text--darken-1">Alabura Usman Aliyu</h2>
                                    <p class="subheader font-weight-light blue-grey--text text--darken-2"><v-icon color="blue-grey" left>{{ code }}</v-icon>Lead Developer</p>
                                    <span class="caption grey--text text--darken-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                    <span class="caption grey--text text--darken-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </v-card-text>

                                <v-divider></v-divider>
                                <v-card-actions class="blue"></v-card-actions>
                                <!-- Overlay Content -->
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="#0D47A1"
                                    >   
                                        <v-row justify="center">
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="grey--text text--darken-3">{{ github }}</v-icon>
                                            </v-btn>
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="blue--text">{{ twitter }}</v-icon>
                                            </v-btn>
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="blue--text text--darken-2">{{ linkedin }}</v-icon>
                                            </v-btn>
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="blue--text text--darken-4">{{ facebook }}</v-icon>
                                            </v-btn>
                                        </v-row>
                                        <div class="text-center mt-2">
                                            <v-btn>Portfolio <v-icon right>{{ open }}</v-icon></v-btn>
                                        </div>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                  sm="12"
                >
                    <v-hover>
                        <template v-slot:default="{ hover }">
                            <v-card
                              class="mx-auto"
                              elevation="5"
                              max-width="355"
                            >
                                <v-img height="250" src="@/assets/male.svg"></v-img>

                                <v-card-text>
                                    <h2 class="title indigo--text text--darken-2">Alams Titus Mammu'an</h2>
                                    <p class="subheader font-weight-light blue-grey--text text--darken-2"><v-icon color="blue-grey" left>{{ idea }}</v-icon>Co-founder</p>
                                    <span class="caption grey--text text--darken-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                    <span class="caption grey--text text--darken-1">Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
                                </v-card-text>

                                <v-divider></v-divider>
                                <v-card-actions class="indigo"></v-card-actions>
                                <!-- Overlay Content -->
                                <v-fade-transition>
                                    <v-overlay
                                        v-if="hover"
                                        absolute
                                        color="#1A237E"
                                    >
                                        <v-row justify="center">
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="grey--text text--darken-3">{{ github }}</v-icon>
                                            </v-btn>
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="blue--text">{{ twitter }}</v-icon>
                                            </v-btn>
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="blue--text text--darken-2">{{ linkedin }}</v-icon>
                                            </v-btn>
                                            <v-btn small class="mx-1 white bor" @click="go">
                                                <v-icon class="blue--text text--darken-4">{{ facebook }}</v-icon>
                                            </v-btn>
                                        </v-row>

                                        <div class="text-center mt-2">
                                            <v-btn>See more info <v-icon right>{{ open }}</v-icon></v-btn>
                                        </div>
                                    </v-overlay>
                                </v-fade-transition>
                            </v-card>
                        </template>
                    </v-hover>
                </v-col>
            </v-row>
          </v-container>
    </v-card><br>
    <br>
    <br>
    </v-card><br><br><br>
    <br>
    <br>
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
          color: 'purple lighten-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'blue-grey lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'pink darken-1',
          icon: 'mdi-buffer',
        },
      ],

      leftNavItems: [
        { title: "Home", icon: 'mdi-home', to: "/" },
        { title: "News", icon: 'mdi-apps', to: "/news" },
        { title: "Contact", icon: 'mdi-phone', to: "/contact" },
      ],

      open: 'mdi-open-in-new',
      code: 'mdi-code-tags',
      idea: 'mdi-brain',
      github: 'mdi-github-circle',
      linkedin: 'mdi-linkedin',
      twitter: 'mdi-twitter-circle',
      facebook: 'mdi-facebook',

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
