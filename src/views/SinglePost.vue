<template>
  <div id="spost">
    <!-- <keep-alive>    -->
      <v-toolbar id="toolbar" dark extended color="indigo">
        <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
      </v-toolbar>

      <v-navigation-drawer v-model="drawer" absolute temporary>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="font-weight-bold headline purple--text"
              >Crossift</v-list-item-title
            >
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item
            v-for="link in links"
            :key="link.title"
            router
            :to="link.route"
            link
          >
            <v-list-item-icon>
              <v-icon class="indigo--text">{{ link.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ link.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-card
        border="bottom"
        class="mx-auto"
        max-width="850"
        style="margin-top: -64px;"
      >
        <v-toolbar flat>
          <v-toolbar-title class="grey--text font-weight-light headline ">Headline: <span class="indigo--text font-weight-bold text--darken-4">{{ fullpost.title }}</span></v-toolbar-title
          >
        </v-toolbar>

        <v-divider></v-divider>

        <v-content id="content">
          <v-card flat class="mx-auto">
            <v-container class="con">
              <v-img :src="fullpost.img" :lazy-src="fullpost.img"></v-img>
            </v-container>

            <v-card-text class="mt-n3">
              <v-row justify="center" no-gutters>
                <v-chip dark color="green">
                  <v-avatar size="50" left class="green darken-4">
                    <v-icon>mdi-check</v-icon>
                  </v-avatar>
                  <span class="ml-2 font-weight-medium">90%</span> . <span class="ml-5 overline" style="font-size: .8rem !important;">Probability</span>
                </v-chip>
              </v-row>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="subtitle purple--text text--darken-2">
              by {{ fullpost.author }}
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="title indigo--text text--darken-3">
              <span class="grey--text text--darken-1">Location: </span>Bauchi
              Road, Jos plateau State
            </v-card-text>
          </v-card>

          <v-card>
            <v-container>
              <v-card-text>
                <p style="text-align: left !important;" class="body-1">
                  {{ fullpost.content }}
                </p>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-container>
                <div>
                  <v-row justify="center">
                    <v-col :cols="oc1">
                      <v-chip @click="likePost(post.id, post.likes)" pill ripple link dark color="success darken-3">
                        <v-avatar left>
                          <v-icon>mdi-checkbox-marked-circle</v-icon>
                        </v-avatar>
                        <span class="ml-1">{{ fullpost.likes }}</span>
                        <span class="ml-1">Likes</span>
                      </v-chip>
                    </v-col>

                    <v-spacer></v-spacer>

                    <v-col :cols="oc2">
                      <v-chip pill ripple="" link dark color="red">
                        <v-avatar left>
                          <v-icon>mdi-close-circle</v-icon>
                        </v-avatar>
                        <span class="ml-1">{{ fullpost.dislikes }}</span>
                        <span class="ml-1">Dislikes</span>
                      </v-chip>
                    </v-col>
                  </v-row>
                </div>
              </v-container>

              <v-divider class="mx-4"></v-divider>

              <v-subheader class="overline">Time and Date</v-subheader>

              <v-card-text class="mt-n5">
                <v-row justify="center">
                  <v-col :cols="oc1">
                    <v-chip>
                      <span>{{ fullpost.createdOn | formatDate }}</span>
                    </v-chip>
                  </v-col>
                  <v-spacer></v-spacer>
                  <v-col :cols="oc2">
                    <v-chip>
                      <span>{{ fullpost.createdOn | formatDate }}</span>
                    </v-chip>
                  </v-col>
                </v-row>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>
              <v-subheader class="overline font-weight-bold">Comments<span  class="ml-5"><v-avatar dark size="30" color="purple"><span class="font-weight-bold body-2 white--text">{{ fullpost.comments }}</span></v-avatar></span></v-subheader>
              <v-sheet elevation="0" class="commentsSheet">
                <v-list inset>
                  <v-list-item
                    v-for="(comment, i) in postComments"
                    :key="i"
                    three-line
                  >
                    <v-list-item-avatar v-if="comment.userAvatar != 'null'">
                      <v-img 
                        :src="comment.userAvatar"
                        :lazy-src="comment.userAvatar"
                      ></v-img>
                    </v-list-item-avatar>

                    <v-list-item-avatar v-else :color="avatarColor">
                      <h1 class="white--text text-uppercase font-weight-medium" style="font-size: 1rem !important">{{ comment.userName.slice(0, 1) }}</h1>
                  </v-list-item-avatar>

                    <v-list-item-content>
                      <v-list-item-title class="" v-text="comment.userName"></v-list-item-title>
                      <v-list-item-subtitle>{{ comment.content }}</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-content></v-list-item-content>

                    <v-list-item-action>
                      <v-list-item-action-text>{{ comment.createdOn | formatDate }}</v-list-item-action-text>
                      <v-btn  v-if="!active" icon>
                        <v-icon
                          icon
                          color="grey lighten-1"
                        >
                          mdi-heart-outline
                        </v-icon>
                      </v-btn>
                      
                      <v-btn v-else icon>
                        <v-icon
                          icon
                          color="red"
                        >
                          mdi-heart
                        </v-icon>
                      </v-btn>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider v-if="index + 1 > commentsObj.length" :key="index" inset></v-divider>
                </v-list> 
              </v-sheet>
            </v-container>
            <!-- Comment Area  -->
            <comment-area></comment-area>
          </v-card>
        </v-content> </v-card
      ><br /><br /><br /><br />
    <!-- </keep-alive> -->
  </div>
</template>

<script>
import moment from 'moment'
import CommentArea from '@/components/partials/CommentArea.vue'
import { mapState } from 'vuex'
// import { commentsCollection, postsCollection, auth } from '@/firebaseConfig'

var mediaScreen = window.matchMedia("(max-width: 1024px)");

export default {
  components: {
    'comment-area': CommentArea,
  },

  data() {
    return {
      drawer: false,
      miniVariant: true,
      expandOnHover: true,
      oc1: null,
      oc2: null,
      like: 0,
      dislike: 0,
      comments: 0,
      index: 0,
      links: [
        { title: "Home", icon: "mdi-home-city", route: "/" },
        { title: "News", icon: "mdi-apps", route: "/news" },
        { title: "About Us", icon: "mdi-account-group", route: "/about" },
        { title: "Contact", icon: "mdi-phone", route: "/contact " },
        { title: "Logout", icon: "mdi-logout-variant" },
      ],

      commentsObj: [
        {
          action: '15 min',
          name: 'Ali Connors',
          content: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out? I'll be in your neighborhood doing errands this weekend. Do you want to hang out",
        },
      ],
    };
  },
  
  filters: {
    formatDate(val) {
      if (!val) { return '-' }
      
      let date = val.toDate()
      return moment(date).fromNow()
    },
    trimLength(val) {
      if (val.length < 200) { return val }
      return `${val.substring(0, 200)}...`
    }
  },

  computed: {
    ...mapState(['fullpost', 'postComments', 'avatarColor'])
  },

  created() {
    this.opinionMediaQuery(mediaScreen)
    mediaScreen.addListener(this.opinionMediaQuery)
  },

  methods: {
    opinionMediaQuery(mediaScreen) {
      if (mediaScreen.matches) {
        this.oc1 = 6
        this.oc1 = 6
      } else {
        this.oc1 = 6
        this.oc2 = 2
      }
    },

    likePost(id, likesCount) {
      this.$store.dispatch('likePost', {
        id,
        likesCount
      })
    },
  }
  
};
</script>

<style scoped>
#spost {
  overflow-x: hidden !important;
}
#content {
  margin-top: 30px;
}
.commentsSheet {
  border: none #fff !important;
}

/* #commentArea {
  width: 70% !important;
} */

#toolbar {
  background: linear-gradient(to bottom right, #1a237e, #4a148c);
}

.con {
  margin-top: 30x;
}

.v-application a {
  color: transparent;
  overflow-x: hidden !important;
}
</style>
