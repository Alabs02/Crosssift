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
                    label="Search news"
                    prepend-inner-icon="mdi-database-search"
                    color="indigo"
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
                                :content="0"
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
                    <div v-if="postsWithImg.length">
                       <v-container>
                           <!-- Trending    -->
                           <!-- <v-row>
                               <v-col
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
                            </v-row> -->
                       
                            <!-- Card One   -->
                           <v-row class="mt-n3">
                               <v-col
                                v-for="post in postsWithImg"
                                :key="post.id"
                                cols="12"
                                md="4"
                                lg="4"
                                sm="12"
                               >
                                <v-card
                                 elevation="10"
                                 class="mx-auto"
                                 min-height="400"
                                >
                                    <v-list-item>
                                        <v-list-item-avatar v-if="!userProfile.photoURL" color="grey darken-3">
                                            <v-img
                                                class="elevation-6"
                                                :src="userProfile.photoURL"
                                                :lazy-src="userProfile.photoURL"
                                            ></v-img>
                                        </v-list-item-avatar>

                                        <v-list-item-avatar v-else :color="avatarColor">
                                            <h1 class="white--text text-uppercase font-weight-medium" style="font-size: 1rem !important">{{ userProfile.displayName.slice(0, 1) }}</h1>
                                        </v-list-item-avatar>

                                        <v-list-item-content>
                                            <v-list-item-title class="title indigo--text text--darken-3">{{ post.title }}</v-list-item-title>
                                            <v-list-item-subtitle>by {{ post.author }}</v-list-item-subtitle>
                                        </v-list-item-content>
                                    </v-list-item>

                                    <v-img
                                     :src="post.img"
                                     :lazy-src="post.img"
                                     height="180"
                                    ></v-img>

                                    <v-card-text class="grey--text text--darken-4">
                                        {{ post.content.slice(0, 50) }}...
                                    </v-card-text>

                                    <v-card-actions>
                                        <v-btn
                                            @click="viewPost(post)"
                                            rounded
                                            text
                                            color="deep-purple accent-4"
                                        >
                                            <span>Read</span>
                                        </v-btn>    
                                        <v-spacer></v-spacer>                           
                                        <v-btn
                                        @click="dislikePost(post.id, post.dislikes)"
                                        icon
                                        color="grey darken-3"
                                        >
                                            <v-icon class="red--text v-bold font-weight-bold">mdi-close-circle</v-icon>
                                        </v-btn>
                                        <span>{{ post.dislikes }}</span>

                                        <v-btn
                                        @click="likePost(post.id, post.likes)"
                                        icon
                                        color="grey darken-3"
                                        >
                                            <v-icon class="success--text v-bold font-weight-bold">mdi-checkbox-marked-circle</v-icon>
                                        </v-btn>
                                    <span>{{ post.likes }}</span>
                                    </v-card-actions>
                                </v-card><br>
                               </v-col>
                           </v-row><br>

                            <!-- Card Third -->
                           <v-row>
                               <v-col
                                v-for="post in postsWithoutImg"
                                :key="post.id"
                                cols="12"
                                md="4"
                                lg="4"
                                sm="12"
                               >
                                    <v-card
                                     :id="color"
                                     class="text-center"
                                     min-height="300"
                                     dark
                                    >
                                        <div class="text-center">
                                            <v-card-text>
                                                <v-list-item-title class="title text-truncate">{{ post.title }}</v-list-item-title>
                                            </v-card-text>
                                        </div>

                                        <v-card-text class="white--text mt-n2">
                                            {{ post.content.slice(0, 150) }}...
                                            <div>
                                                <v-btn @click="viewPost(post)" small outlined rounded class="mt-3">Read more</v-btn>
                                            </div>
                                        </v-card-text>

                                        <v-card-actions id="third_card_actions">
                                            <v-list-item class="grow">
                                                <v-list-item-avatar v-if="!userProfile.photoURL" color="grey darken-3">
                                                    <v-img
                                                        class="elevation-6"
                                                        :src="userProfile.photoURL"
                                                        :lazy-src="userProfile.photoURL"
                                                    ></v-img>
                                                </v-list-item-avatar>

                                                <v-list-item-avatar v-else :color="avatarColor">
                                                    <h1 class="white--text text-uppercase font-weight-medium" style="font-size: 1rem !important">{{ userProfile.displayName.slice(0, 1) }}</h1>
                                                </v-list-item-avatar>

                                                <v-list-item-content>
                                                    <v-list-item-title>{{ post.author }}</v-list-item-title>
                                                </v-list-item-content>

                                                <v-row
                                                 align="center"
                                                 justify="end"
                                                >   
                                                   <v-spacer></v-spacer>                           
                                                    <v-btn
                                                    @click="dislikePost(post.id, post.dislikes)"
                                                    icon
                                                    color="grey darken-3"
                                                    >
                                                        <v-icon class="white--text v-bold font-weight-bold">mdi-close-circle</v-icon>
                                                    </v-btn>
                                                    <span>{{ post.dislikes }}</span>

                                                    <v-btn
                                                    @click="likePost(post.id, post.likes)"
                                                    icon
                                                    color="white"
                                                    >
                                                        <v-icon class="white--text v-bold font-weight-bold">mdi-checkbox-marked-circle</v-icon>
                                                    </v-btn>
                                                    <span>{{ post.likes }}</span>
                                                </v-row>
                                            </v-list-item>
                                        </v-card-actions>
                                    </v-card>
                               </v-col>
                           </v-row>
                       </v-container>
                    </div>
                    <div v-else>
                       <v-row justify="center" class="grey lighten-5">
                           <v-col cols="12">
                               <div class="text-center mt-8">
                                   <v-avatar size="190" tile>
                                        <v-img
                                            src="../assets/problem.svg"
                                        ></v-img>
                                    </v-avatar>

                                    <v-card-text class="text-capitalize text-center headline font-weight-medium" style="text-align: center !important;">no data available</v-card-text>
                                    <v-card-text>
                                        <span class="font-weight-light body-1">There are currently no post available.</span>
                                    </v-card-text>

                                    <v-card-text>
                                        <v-btn @click="reloadCurrentRoute" ripple large dark color="indigo"><v-icon left>mdi-database-refresh</v-icon>refresh</v-btn>
                                    </v-card-text>
                               </div>
                           </v-col>
                       </v-row>
                    </div>
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
import { mapState } from 'vuex'
import { commentsCollection } from '@/firebaseConfig.js'
import SearchBar from "@/components/partials/SearchBar.vue"
import Settings from "@/components/core/Settings.vue"
import SuccessAlert from '@/components/core/SuccessAlert.vue'
import ErrorAlert from '@/components/core/ErrorAlert.vue'
import WarningAlert from '@/components/core/WarningAlert.vue'
import router from '../router/index'

export default {
    name: 'News',

    components: {
        'search-bar': SearchBar,
        'settings': Settings,
        'success-alert': SuccessAlert,
        'error-alert': ErrorAlert,
        'warning-alert': WarningAlert,
    },

    filters: {
        trimLength(val) {
            if (val.length < 150) { return val }
            return `${val.substring(0, 150)}...`
        }
    },

    computed: {
        ...mapState(['userProfile', 'postsWithImg', 'postsWithoutImg', 'userData', 'color', 'avatarColor'])
    },

    data: () => ({
        // Firebase
        fullpost: null,
        postComments: [],
        fav: true,
        menu: false,
        message: false,
        hints: true,
        value: true,
        drawer: false,
        page: null,
        colors: [
            "red",
            "blue",
            "green",
            "indigo",
            "purple",
            "teal",
            "orange",
            "brown",
            "deep-orange",
            "blue-grey",
            "cyan"
        ],
        currentColor: "",
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
    }),

    async created() {
    },

    methods: {
        async viewPost(post) {
            console.log(post.id)
            const snapshot = await commentsCollection.where('postId', '==', post.id.toString()).get()
            if (snapshot.empty) {
                alert('No matching documents.');
                return
            }
            snapshot.forEach(doc => {
                console.log(doc.id, '=>', doc.data())
                const comment = doc.data()
                comment.id = doc.id
                this.postComments.push(comment)
            })

            this.fullpost = post
            this.$store.commit('SET_FULLPOST', post)
            this.$store.commit('SET_POST_COMMENTS', this.postComments)
            setTimeout(() => {
                router.push('/single_post')
            }, 500);
        },
        likePost(id, likesCount) {
            this.$store.dispatch('likePost', {
                id, 
                likesCount
            })
        },
        dislikePost(id, dislikesCount) {
            this.$store.dispatch('dislikePost', {
                id,
                dislikesCount
            })
        },
        async signOut() {
            await this.$store.dispatch('signOut')
        },
        async reloadCurrentRoute() {
            await this.$router.go(this.$router.currentRoute)
        },
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
    #third_card_actions {
        bottom: 0 !important; 
        margin-bottom: 0 !important;
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
            transform: translateY(-11rem) !important;
            margin-top: 3rem !important;
            width: 90% !important;
            height: 180px !important;
            margin: auto 5% !important;
        }
        .content-news {
            margin-top: 3px !important;
        }

        #mainCard {
            margin-bottom: 13rem !important;
        }
        @keyframes mover {
        0%{ transform: translateY(-4rem); }
        100%{ transform: translateY(-6em); }
    }
    }


</style>