<template>
    <div>
        <v-toolbar 
         id="toolbar"
         dark
         extended
         color="indigo"
        >
            <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
     
        </v-toolbar>

        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline purple--text">Crosssift</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>

                <v-list-item
                v-for="nav in nav_items"
                :key="nav.title"
                router :to="nav.route"
                link
                >
                <v-list-item-icon>
                    <v-icon class="indigo--text">{{ nav.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ nav.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>

        <v-card
         class="mx-auto"
         max-width="850"
         style="margin-top: -60px;"
        >
            <v-toolbar flat>
                <v-toolbar-title class="indigo--text font-weight-bold">Dashboard</v-toolbar-title>
            </v-toolbar>

            <v-divider></v-divider>

            <v-content id="content">
                <v-container>
                    <div>
                        <v-responsive>
                            <v-img
                             src="../assets/profile-bg.png"
                             max-width=""
                             max-height=""
                            >
                            </v-img>
                            <v-avatar
                                class="ml-5"
                                elevation="10"
                                size="110"
                                id="avatar"
                            >
                                <img src="../assets/female.svg" alt="peret">
                            </v-avatar>
                        </v-responsive>
                    </div>
                    <v-row>
                        <v-col 
                         cols="12" 
                         md="5"
                        >
                            <v-card 
                             flat
                             elevation="1"
                             class="mx-auto"
                             
                             color="grey lighten-3"
                            >

                                <v-container>
                                    <v-content>
                                        <v-btn
                                        class="mt-5 align-center"
                                        id="cont"
                                        color="pink"
                                        dark
                                        >
                                            <span>Follow</span>
                                        </v-btn>
                                        <v-row>
                                            <v-col
                                            cols="12"
                                            md="6"
                                            sm="12"
                                            >
                                                <v-card-text class="foll">Follower <br> <span class="indigo--text font-weight-bold">550</span> </v-card-text>
                                            </v-col>

                                            <v-col
                                            cols="12"
                                            md="6"
                                            sm="12"
                                            >
                                                <v-card-text class="foll">Following <br> <span class="indigo--text font-weight-bold">130</span> </v-card-text>
                                            </v-col>
                                        </v-row>

                                        <v-divider></v-divider>

                                        <v-card-text class="blue-grey--text">
                                            Performance <br>
                                            <span class="indigo--text text--darken-4">56</span> and <span  class="indigo--text text--darken-4">60</span> reviews
                                        </v-card-text>

                                        <v-divider></v-divider>

                                        <v-card-text>
                                            <span class="grey--text text--darken-3">Recent Activities</span>
                                        </v-card-text>

                                        <v-container>
                                            <v-row justify="center">
                                                <v-col
                                                 v-for="n in 4"
                                                 :key="n"
                                                 cols="12"
                                                 md="3"
                                                 sm="6"
                                                >
                                                    <v-img
                                                     id="imgx"
                                                     height="100"
                                                     width="100"
                                                     contain
                                                     src="../assets/37.png"
                                                    ></v-img>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <br>

                                        <v-divider></v-divider>
                                        <br>

                                        <v-card>
                                            <v-card-title class="deep-purple--text">Reputation</v-card-title>

                                            <v-card-text>
                                                <span class="pink--text">100</span>  <span class="blue-grey--text font-weight-bold">Reps</span>
                                                <p>Helen is know for credible, authentic, Unbaised, impeccable and actual comentry and reviews on Crosssift.</p>
                                            </v-card-text>
                                        </v-card>
                                    </v-content>
                                </v-container>
                                
                            </v-card>
                        </v-col>

                        <v-col 
                         cols="12" 
                         md="6"
                        >
                            <v-card
                             elevation="2"
                             class="mx-auto grey lighten-5"
                            >

                                <v-card-text>
                                    <span class="title">Helen John</span><br>
                                    <span class="subtitle">Renowned <span class="yellow--text text--darken-4">Broadcaster</span>  on the plateau</span>
                                </v-card-text>

                                <v-card
                                 rounded
                                 class="mx-auto"
                                >
                                    <v-responsive>
                                        <v-img
                                         rounded
                                         class="white--text align-end"
                                         height="200px"
                                         src="../assets/imx.png"
                                        ></v-img>
                                    </v-responsive>

                                    <v-card-subtitle>Top 10 politicians on Nigeria</v-card-subtitle>

                                    <v-card-text>
                                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt accusamus eligendi,  lectus.</span>
                                    </v-card-text>
                                </v-card><br>

                                <v-card>
                                    <v-responsive>
                                        <v-img
                                         src="../assets/books.png"
                                        rounded
                                         height="200"
                                         class="mx-auto white--text align-center"
                                        ></v-img>
                                    </v-responsive>

                                    <v-card-text class="subtitle">
                                        Students forced to read in science school Kuru
                                    </v-card-text>

                                    <v-card-text>
                                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis itaque iste perspiciatis.
                                    </v-card-text>
                                </v-card>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-content>
        </v-card><br><br><br><br>
    </div>
</template>



<script>
  export default {
    data () {
      return {
        drawer: false,
        nav_items: [
            { title: 'Home', icon: 'mdi-home-city', route: '/' },
            { title: 'News', icon: 'mdi-apps', route: '/news' },
            { title: 'About Us', icon: 'mdi-account-group', route: '/about' },
            { title: 'Contact', icon: 'mdi-phone', route: '/contact' },
            { title: 'Logout', icon: 'mdi-open-in-new', },
        ],
        miniVariant: true,
        expandOnHover: true,
      }
    },
    computed: {
      bg () {
        return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
      },
    },
  }
</script>


<style scoped>
    #content {
        margin-top: 30px;
    }

    #toolbar {
        background: linear-gradient(to bottom right, #1A237E, #4A148C);
    }

    #avatar {
        margin-top: -55px;
    }


    #num {
        margin-top: -45px;
    }

    .foll {
        font-size: 16.5px;
    }

    @media screen and (max-width: 1024px) {
        #imgx {
            width: 50px !important;
            height: 50px !important;
        }
    }

 

</style>