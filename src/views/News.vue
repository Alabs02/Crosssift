<template>
    <div>
        <v-toolbar
         dark
         fixed
         app
         extended
         text
         id="toolbar"
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
                v-for="item in items"
                :key="item.title"
                link
                >
                <v-list-item-icon>
                    <v-icon class="indigo--text">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>


        <v-card
         class="mx-auto"
         max-width="1100"
         style="margin-top: -64px;"
        >
            <v-toolbar text>
                <v-toolbar-title class="title indigo--text">Crosssift</v-toolbar-title>

                
                <v-text-field
                    class="mx-6 ml-12 hidden-md-and-down"
                    id="search"
                    flat
                    hide-details
                    label="Search"
                    prepend-inner-icon="mdi-database-search"
                    solo-inverted
                ></v-text-field>
                
             
               


                <v-spacer></v-spacer>


                <v-btn
                 class="hidden-lg-only"
                 icon
                 color="indigo"
                >
                    <v-icon>mdi-magnify</v-icon>
                </v-btn>

                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn
                         icon
                         color="indigo"
                         v-on="on"
                        >
                            <v-icon>mdi-apps</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                         v-for="(drop, index) in d_items"
                         :key="index"
                         link
                        >
                            <router-link :to=" drop.link">
                                <v-list-item-icon>
                                    <v-icon color="purple darken-3">{{ drop.icon }}</v-icon>
                                </v-list-item-icon>
                            </router-link>
                            <router-link :to=" drop.link">
                                <v-list-item-content>
                                    <v-list-item-title class="indigo--text text--darken-4">{{ drop.title }}</v-list-item-title>
                                </v-list-item-content>
                            </router-link>
                         

                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu
                v-model="menu"
                :close-on-content-click="false"
                :nudge-width="200"
                offset-x
                >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-badge
                        :content="5"
                        color="pink"
                        icon
                        id="badge"
                        small
                        overlap
                        link
                        >
                            <v-icon color="indigo">mdi-bell-outline</v-icon>
                        </v-badge>
                    </v-btn>
                </template>

                <v-card>
                    <v-list>
                    <v-list-item>
                        <v-list-item-avatar>
                        <img src="../assets/josh.png" alt="Josh">
                        </v-list-item-avatar>

                        <v-list-item-content>
                        <v-list-item-title>Josh</v-list-item-title>
                        <v-list-item-subtitle>Renowned Journalist</v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                        <v-btn
                            :class="fav ? 'red--text' : ''"
                            icon
                            @click="fav = !fav"
                        >
                            <v-icon>mdi-heart</v-icon>
                        </v-btn>
                        </v-list-item-action>
                    </v-list-item>
                    </v-list>

                    <v-divider></v-divider>

                    <v-list>
                    <v-list-item>
                        <v-list-item-action>
                        <v-switch v-model="message" color="purple"></v-switch>
                        </v-list-item-action>
                        <v-list-item-title>Enable messages</v-list-item-title>
                    </v-list-item>
                    </v-list>

                    <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn text @click="menu = false">Cancel</v-btn>
                    <v-btn color="primary" text @click="menu = false">Save</v-btn>
                    </v-card-actions>
                </v-card>
                </v-menu>

                <v-menu bottom left>
                    <template v-slot:activator="{ on }">
                        <v-btn
                         color="purple darken"
                         icon
                         v-on="on"
                        >
                            <v-icon>mdi-dots-vertical</v-icon>
                        </v-btn>
                    </template>

                    <v-list>
                        <v-list-item
                         v-for="(item, i) in side_items"
                         :key="i"
                         router :to="item.link"
                         link
                        >

                            <v-list-item-icon>
                                <v-icon color="purple darken-3">{{ item.icon }}</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="indigo--text text--darken-4">{{ item.title }}</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>

            </v-toolbar>

            <v-divider></v-divider>

           <v-content style="margin-top: 50px;">
               <v-container>
                   <v-item-group>
                       <v-container>

                           <v-row>
                               <v-col
                                v-for="n in 3"
                                :key="n"
                                cols="12"
                                md="4"
                               >
                                <v-card
                                elevation="10"
                                 class="mx-auto"
                                >
                                    <v-list-item>
                                        <v-list-item-avatar color="grey darken-3">
                                            <v-img
                                                class="elevation-6"
                                                src="../assets/josh.png"
                                            ></v-img>
                                        </v-list-item-avatar>
                                        <v-list-item-content>
                                            <v-list-item-title class="headline indigo--text text--darken-3">Our Changing Planet</v-list-item-title>
                                            <v-list-item-subtitle>by Simon Josh</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-img
                                     src="../assets/mountain.webp"
                                     height="180"
                                    ></v-img>

                                    <v-card-text class="grey--text text--darken-4">
                                        Visit ten places on our planet that are undergoing the biggest changes today.
                                    </v-card-text>

                                    <v-card-actions>
                                            <v-btn
                                            router to="/single_post"
                                            rounded
                                            text
                                            color="deep-purple accent-4"
                                            >
                                                <span>Read</span>
                                            </v-btn>

                                        <v-btn
                                        rounded
                                         text
                                         color="deep-purple accent-4"
                                        >
                                            Bookmark
                                        </v-btn>
                                    
                                    <v-btn
                                     icon
                                     color="grey darken-3"
                                    >
                                        <v-icon>mdi-heart-outline</v-icon>
                                    </v-btn>
                                    <span>80</span>

                                    <v-btn
                                     icon
                                     color="grey darken-3"
                                    >
                                        <v-icon>mdi-comment-outline</v-icon>
                                    </v-btn>
                                    <span>190</span>
                                    </v-card-actions>
                                </v-card>
                               </v-col>
                           </v-row>

                           <v-row>
                               <v-col
                                v-for="card in cards"
                                :key="card"
                                cols="12"
                                md="4"
                               >
                                    <v-card
                                     :id=" card.color_id"
                                     dark
                                    >
                                        <v-card-title>
                                            <span  class="heading">Road Construction in Rogo</span>
                                        </v-card-title>

                                        <v-card-text class="white--text">
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laborum aliquam sapiente,
                                            baiores vel te eius consequuntur asperiores.
                                            <div id="btn-read">
                                                <router-link to="/single_post">
                                                    <v-btn small outlined rounded class="">Read more</v-btn>
                                                </router-link>
 
                                            </div>
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        src="../assets/peret.png"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Helen</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                 align="center"
                                                 justify="end"
                                                >   
                                                    <v-btn icon>
                                                         <v-icon class="mr-1">mdi-heart-outline</v-icon>
                                                    </v-btn>
                                                    <span class="subheading mr-2">256</span>
                                                    <span class="mr-1">·</span>
                                                    <v-btn icon>
                                                        <v-icon class="mr-2">mdi-comment-outline</v-icon>
                                                    </v-btn>
                                                    <span class="subheading mr-1">45</span>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card>
                               </v-col>
                           </v-row>

                            <v-row>
                               <v-col
                                v-for="n in 3"
                                :key="n"
                                cols="12"
                                md="4"
                               >
                                   <v-card
                                    elevation="5"
                                    height="180"
                                   >
                                        <v-card-title>
                                            <v-icon
                                             left
                                             color="red"
                                            >
                                                mdi-trending-up
                                            </v-icon>
                                            <span class="title red--text">Trending</span>
                                        </v-card-title>

                                        <v-card-text class="white--black">
                                            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                                        </v-card-text>

                                        <v-card-actions>
                                            <v-list-item class="grow">
                                                <v-list-item-avatar>
                                                    <v-img
                                                        class="elevation-2"
                                                        src="../assets/andrea.jpg"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>Andrea</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                 align="center"
                                                 justify="end"
                                                >
                                                    <v-btn icon >
                                                        <v-icon color="grey darken-3" class="mr-2">mdi-heart-outline</v-icon>
                                                    </v-btn>
                                                    <span class="subheading mr-2">100</span>
                                                    <span class="mr-1">·</span>
                                                    <v-btn icon>
                                                          <v-icon color="grey darken-3" class="mr-2">mdi-comment-outline</v-icon>
                                                    </v-btn>
                                                  
                                                    <span class="subheading mr-1">30</span>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                   </v-card>

                               </v-col>
                            </v-row>

                        
                       </v-container>
                   </v-item-group>
               </v-container>

                <v-divider class="mr-3 ml-3 "></v-divider>
               <v-container>
                   <div class="text-center">
                        <v-pagination
                        v-model="page"
                        :length="10"
                        circle
                        next-icon="mdi-menu-right"
                        prev-icon="mdi-menu-left"
                        :page="page"
                        color="indigo darken-3"
                        ></v-pagination>
                    </div>
               </v-container>
           </v-content>
        </v-card><br><br>
    </div>
</template>


<script>


export default {
    name: 'toolbar',

    components: {
        
    },

    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
        value: true,
        drawer: false,
        items: [
          { title: 'Navigate', icon: 'mdi-apps' },
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Logout', icon: 'mdi-open-in-new' },
        ],
        side_items: [
            {title: 'About Us', icon: 'mdi-account-group', link: '/about'},
            {title: 'Logout', icon: 'mdi-open-in-new', link: '/'},
        ],
        right: null,
        d_items: [
            {title: 'Home', icon: 'mdi-home-city', link: '/'},
            {title: 'Make a post', icon: 'mdi-pen', link: '/new_post'},
            {title: 'Contact Us', icon: 'mdi-account-circle', link: '/contact'},
        ],
        cards: [
            { color_id: 'card-two-x' },
            { color_id: 'card-two-y' },
            { color_id: 'card-two-z' },
        ]
    }),
}
</script>


<style scoped>
    #card-two-x {
        border-radius: 1rem;
        background: linear-gradient(to bottom right, #512DA8, #2196F3);
    }

    #card-two-y {
        border-radius: 1rem;
        background: linear-gradient(to bottom right, #9C27B0, #FF5722);
    }

    #card-two-z {
        border-radius: 1rem;
        background: linear-gradient(to bottom right, #3F51B5, #42A5F5);
    }

    #chip-usage-example .v-chip {
    margin: 8px;
    }

    #btn-read {
        margin-top: 8px;
        margin-left: 90px;
    }

    #toolbar {
        background: linear-gradient(to bottom right, #1A237E, #4A148C);
    }

    .v-application a {
        color: transparent;
    }


</style>