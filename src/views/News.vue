<template>
    <div>
        <v-toolbar
         dark
         fixed
         app
         extended
         flat
         id="toolbar"
        >
            <v-app-bar-nav-icon v-on:click="drawer = !drawer" class="hidden-lg-only"></v-app-bar-nav-icon>

        </v-toolbar>

         <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline indigo--text text--darken-4">Crossift</v-list-item-title>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>

                <v-list-item
                v-for="item in items"
                :key="item.title"
                router :to="item.to"
                link
                >
                <v-list-item-icon>
                    <v-icon class="indigo--text">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <v-list-item-title class="indigo--text text--darken-4">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
                </v-list-item>

                <v-list-item
                    link
                    @click="signOut"
                >
                    <v-list-item-icon>
                        <v-icon color="indigo">mdi-logout-variant</v-icon>
                    </v-list-item-icon>

                    <v-list-item-content>
                        <v-list-item-title class="indigo--text text--darken-4">Logout</v-list-item-title>
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
                <v-toolbar-title class="title indigo--text text-captilize">Crossift</v-toolbar-title>

                
                <v-text-field
                    class="mx-6 ml-12 hidden-md-and-down"
                    id="search"
                    flat
                    hide-details
                    label="Search"
                    prepend-inner-icon="mdi-database-search"
                    solo-inverted
                    clearable
                ></v-text-field>
                
                <v-spacer></v-spacer>
                
                <search-bar />

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
                         link
                         router to="/"
                        >
                            <v-list-item-icon>
                                <v-icon color="purple darken-3">mdi-home-city</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="indigo--text text text--darken-4">Home</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         router to="/new_post"
                        >
                            <v-list-item-icon>
                                <v-icon color="purple darken-3">mdi-pen</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="indigo--text text text--darken-4">Make a post</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         router to="/dashboard"
                        >
                            <v-list-item-icon>
                                <v-icon color="purple darken-3">mdi-view-dashboard</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="indigo--text text text--darken-4">Dashboard</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         router to="/about"
                        >
                            <v-list-item-icon>
                                <v-icon color="purple darken-3">mdi-account-group</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="indigo--text text text--darken-4">About Us</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         router to="/contact"
                        >
                            <v-list-item-icon>
                                <v-icon color="purple darken-3">mdi-phone</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="indigo--text text text--darken-4">Contact Us</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>

                        <v-list-item
                         link
                         @click="signOut"
                        >
                            <v-list-item-icon>
                                <v-icon color="purple darken-3">mdi-logout-variant</v-icon>
                            </v-list-item-icon>

                            <v-list-item-content>
                                <v-list-item-title class="indigo--text text text--darken-4">Logout</v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-menu>

                <v-menu bottom left transition="scale-transition">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn icon v-on="on" v-bind="attrs">
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

                    <v-list>
                        <v-subheader>UNREAD POSTS</v-subheader>
                        <v-list-item
                        v-for="(item, i) in notifications"
                        :key="i"
                        link
                        >
                        <v-list-item-avatar>
                            <v-img
                            contain
                            lazy-src="@/assets/josh.png"
                            src="@/assets/josh.png"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title v-text="item.title"></v-list-item-title>
                            <v-list-item-subtitle v-text="item.subtitle"></v-list-item-subtitle>
                        </v-list-item-content>

                        <v-list-item-action>
                            <v-btn
                            icon
                            ><v-icon size="30">mdi-bell</v-icon></v-btn>
                        </v-list-item-action>
                        </v-list-item>
                        <v-divider class="mx-4"></v-divider>
                        <v-card-title class="inset overline ml-5 mt-2 amber--text text--darken-2">Warning</v-card-title>
                        <v-container>
                            <v-card elevation="1" flat class="rounded-xl">
                                <v-alert
                                    type="warning"
                                    dense
                                >
                                    I'm a warning alert.
                                </v-alert>
                            </v-card>
                        </v-container>
                        <v-divider></v-divider>
                        <pre class="text-center overline mt-2 grey--text">CROSSIFT</pre>
                    </v-list>
                </v-menu>

                <settings />
            </v-toolbar>

            <v-divider></v-divider>

           <v-content class="content-news">
               <v-container>
                   <v-item-group>
                       <v-container>
                           <v-row>
                               <v-col
                                v-for="n in 3"
                                :key="n"
                                cols="12"
                                md="4"
                                lg="4"
                                sm="12"
                               >
                                   <v-card
                                    elevation="5"
                                    height="190"
                                    width="100%"
                                    id="trendingCard"
                                    ripple
                                    router to="/single_post"
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

                                        <v-card-actions class="mb-2">
                                            <v-list-item class="grow">
                                                <v-list-item-avatar size="30">
                                                    <v-img
                                                        class="elevation-2"
                                                        src="../assets/andrea.jpg"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title style="font-size: .9rem !important;">Andrea</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                 align="center"
                                                 justify="end"
                                                >
                                                    <v-btn icon class="ml-n2">
                                                        <v-icon class="red--text mr-1">mdi-close-circle</v-icon>
                                                        <span class="subheading mr-1">100</span>
                                                    </v-btn>
                                                
                                                    <v-btn icon class="ml-5">
                                                          <v-icon class="success--text mr-1">mdi-checkbox-marked-circle</v-icon>
                                                          <span class="subheading mr-1">30</span>
                                                    </v-btn>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions><br>
                                   </v-card>
                               </v-col>
                            </v-row>

                           <v-row>
                               <v-col
                                v-for="n in 3"
                                :key="n"
                                cols="12"
                                md="4"
                                lg="4"
                                sm="12"
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
                                        Visit ten places on our planet that are undergoing the biggest changes today...
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
                                        <v-spacer></v-spacer>                           
                                        <v-btn
                                        icon
                                        color="grey darken-3"
                                        >
                                            <v-icon class="red--text v-bold font-weight-bold">mdi-close-circle</v-icon>
                                        </v-btn>
                                        <span>80</span>

                                        <v-btn
                                        icon
                                        color="grey darken-3"
                                        >
                                            <v-icon class="success--text v-bold font-weight-bold">mdi-checkbox-marked-circle</v-icon>
                                        </v-btn>
                                    <span>190</span>
                                    </v-card-actions>
                                </v-card><br>
                               </v-col>
                           </v-row><br>

                           <v-row justify="center" class="mt-12">
                                <v-col
                                v-for="(card, i) in cards"
                                :key="i"
                                cols="12"
                                md="4"
                                >
                                    <v-card
                                    id="mainCard"
                                    class="mx-auto"
                                    elevation="8"
                                    >
                                        <v-card
                                        id="nestedCard"
                                        class="mx-auto ml-3 mr-3 text-center bob animate infinite bounce"
                                        height="160"
                                        elevation="12"
                                        flat
                                        >
                                           <v-img
                                            src="@/assets/post.png"
                                            lazy-src="@/assets/post.png"
                                            width="100%"
                                            
                                            class="white--text align-end"
                                           >
                                            <v-card-title id="postTitle">Top 10 Australian beaches</v-card-title>
                                           </v-img>
                                        </v-card>
                                        <v-sheet class="text-center">
                                            <v-card-text class="newText">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae sed blanditiis </v-card-text>
                                            <div>
                                                <v-btn rounded router to="/single_post" outlined color="indigo" small class="newBtn">Read</v-btn>
                                            </div>
                                        </v-sheet>
                                        <!-- <v-divider class="mx-4"></v-divider> -->
                                        <v-card-actions class="mt-n3">
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
                                                   <v-spacer></v-spacer>                           
                                                    <v-btn
                                                    icon
                                                    dark
                                                    color="red"
                                                    >
                                                        <v-icon class=" v-bold font-weight-bold">mdi-close-circle</v-icon>
                                                    </v-btn>
                                                    <span>80</span>

                                                    <v-btn
                                                    icon
                                                    dark
                                                    color="green"
                                                    >
                                                        <v-icon class="v-bold font-weight-bold">mdi-checkbox-marked-circle</v-icon>
                                                    </v-btn>
                                                    <span>190</span>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card><br>
                                </v-col>
                           </v-row>

                           <v-row>
                               <v-col
                                v-for="card in cards"
                                :key="card"
                                cols="12"
                                md="4"
                                lg="4"
                                sm="12"
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
                                                   <v-spacer></v-spacer>                           
                                                    <v-btn
                                                    icon
                                                    color="grey darken-3"
                                                    >
                                                        <v-icon class="white--text v-bold font-weight-bold">mdi-close-circle</v-icon>
                                                    </v-btn>
                                                    <span>80</span>

                                                    <v-btn
                                                    icon
                                                    color="white"
                                                    >
                                                        <v-icon class="white--text v-bold font-weight-bold">mdi-checkbox-marked-circle</v-icon>
                                                    </v-btn>
                                                    <span>190</span>
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
                   <div class="text-center ma-2">
                        <v-pagination
                        v-model="page"
                        :length="10"
                        circle
                        next-icon="mdi-menu-right"
                        prev-icon="mdi-menu-left"
                        :page="page"
                        color="indigo"
                        ></v-pagination>
                    </div>
               </v-container>
               <div>
                   <!-- Alert Handlers  -->
                    <success-alert></success-alert>  
                    <error-alert></error-alert>
                    <warning-alert></warning-alert>
               </div>
           </v-content>
        </v-card><br><br><br><br>
    </div>
</template>


<script>
import SearchBar from "@/components/partials/SearchBar.vue";
import Settings from "@/components/core/Settings.vue";
import SuccessAlert from '@/components/core/SuccessAlert.vue'
import ErrorAlert from '@/components/core/ErrorAlert.vue'
import WarningAlert from '@/components/core/WarningAlert.vue'

export default {
    name: 'News',

    components: {
        'search-bar': SearchBar,
        'settings': Settings,
        'success-alert': SuccessAlert,
        'error-alert': ErrorAlert,
        'warning-alert': WarningAlert,
    },

    computed: {
        
    },

    data: () => ({
        fav: true,
        menu: false,
        message: false,
        hints: true,
        value: true,
        drawer: false,
        items: [
            { title: 'Home', icon: 'mdi-home-city', to: '/' },
            { title: 'News', icon: 'mdi-apps', to: '/news' },
            { title: 'About Us', icon: 'mdi-account-group', to: '/about' },
            { title: 'Contact', icon: 'mdi-phone', to: '/contact' },
            // { title: 'Logout', icon: 'mdi-open-in-new', to: '#!'},
        ],

        notifications: [
        { title: 'Our changing Planet', subtitle: 'Aug 20, 2020' },
        { title: 'The Plateau', subtitle: 'Aug 10, 2020' },
        { title: 'Our changing Planet', subtitle: 'Aug 20, 2020' },
        { title: 'The Plateau', subtitle: 'Aug 10, 2020' },
        { title: 'Our changing Planet', subtitle: 'Aug 20, 2020' },
      ],
       
        right: null,
        d_items: [
            {title: 'Home', icon: 'mdi-home-city', link: '/'},
            {title: 'Make a post', icon: 'mdi-pen', link: '/new_post'},
            {title: 'Dashboard', icon: 'mdi-view-dashboard', link: '/dashboard'},
            {title: 'About Us', icon: 'mdi-account-group', link: '/about'},
            {title: 'Contact Us', icon: 'mdi-phone', link: '/contact'},
            {title: 'Logout', icon: 'mdi-open-in-new', link: '/'},
        ],
        cards: [
            { color_id: 'card-two-x' },
            { color_id: 'card-two-y' },
            { color_id: 'card-two-z' },
        ]
    }),

    methods: {
        async signOut() {
            await this.$store.dispatch('signOut')
        }
    }
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
    
    .newText {
        transform: translateY(-1.7rem);
    }

    #nestedCard  {
        transform: translateY(-4rem);
        padding: 0rem 0 !important;
        border-radius: 1.2rem;
        background-color: transparent !important;
        border: none !important;
        cursor: pointer !important;
    }

    #nestedCard:hover {
        animation: mover 1s infinite alternate;
    }
    @keyframes mover {
        0%{ transform: translateY(-4rem); }
        100%{ transform: translateY(-6em); }
    }

    .newBtn {
        transform: translateY(-1.6rem);
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
    #postTitle {
        padding: 5px;
        background-color: rgba(0, 0, 0, 0.5);
    }
    #trendingCard {
        border-radius: 1rem !important;
    }
    #trendingCard:hover {
        box-shadow: rgba(0, 0, 0, 0.5);
    }

    .v-application a {
        color: transparent;
    }

    .v-bold {
        font-weight: bold;
    }
    .content-news {
            margin-top: 15px !important;
        }
    @media screen and (max-width: 1024px) {
        #nestedCard {
            margin-top: 2.3rem !important;
        }
        .content-news {
            margin-top: 3px !important;
        }
    }


</style>