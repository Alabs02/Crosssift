<template>
  <div id="spost">
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
        <v-toolbar-title class="indigo--text font-weight-bold"
          >Full Post</v-toolbar-title
        >
      </v-toolbar>

      <v-divider></v-divider>

      <v-content id="content">
        <v-card class="mx-auto">
          <v-container class="con">
            <v-img src="../assets/post.png"></v-img>
          </v-container>

          <v-card-text class="headline indigo--text darken-3">
            <span class="grey--text text--darken-1">Headline: </span> Our
            Changing Planet
          </v-card-text>
          <v-divider></v-divider>
          <v-card-text class="subtitle purple--text text--darken-2">
            by Helen John
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
              <p style="text-align: left !important;" class="blockquote">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corporis labore voluptatibus aperiam suscipit saepe accusamus
                reprehenderit provident tenetur deleniti fugit, mollitia dicta.
                Dolores, magni voluptatem inventore laborum suscipit id numquam.
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni
                sunt commodi id hic autem? Deleniti cupiditate quasi non
                consequuntur fugiat commodi quod, molestiae sint praesentium
                facilis laborum, assumenda nostrum et? Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Suscipit laborum nulla nihil
                est magni autem quam dignissimos eum corrupti. Consectetur
                soluta quam ratione quis magnam, laboriosam quod velit odit
                placeat.
              </p>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>
            <v-container>
              <div>
                <v-row>
                  <v-col cols="12" lg="3" md="3" sm="3">
                    <v-chip pill ripple="" link dark color="success darken-3">
                      <v-avatar left>
                        <v-icon>mdi-checkbox-marked-circle</v-icon>
                      </v-avatar>
                      <span class="ml-1">{{ like }}</span>
                      <span class="ml-1">Likes</span>
                    </v-chip>
                  </v-col>

                  <v-spacer></v-spacer>

                  <v-col cols="12" lg="3" md="3" sm="3">
                    <!-- <v-btn
                                         rounded
                                         dark
                                         color="red"
                                         @click="false"
                                         class="mr-n3"
                                        >
                                            <v-icon class="left">mdi-close-circle</v-icon>
                                            <span class="ml-1">{{ dislike }}</span><span class="ml-1">Dislike</span>
                                        </v-btn> -->

                    <v-chip pill ripple="" link dark color="red">
                      <v-avatar left>
                        <v-icon>mdi-close-circle</v-icon>
                      </v-avatar>
                      <span class="ml-1">{{ dislike }}</span>
                      <span class="ml-1">Dislikes</span>
                    </v-chip>
                  </v-col>
                </v-row>
                <v-row justify-sm="center" justify-md="center" justify="center">
                  <v-col cols="12" lg="12" md="12" sm="12">
                    <v-btn
                      rounded
                      @click="
                        comment = !comment;
                        remark;
                      "
                      right
                      dark
                      id="btn-com"
                      color="purple darken-3"
                      class="text-center"
                      style="text-align: center !important;"
                    >
                      <v-icon class="left">mdi-comment</v-icon>
                      <span class="ml-1">{{ comments }}</span
                      ><span class="ml-1">Comment</span>
                    </v-btn>
                  </v-col>
                </v-row>
              </div>
            </v-container>

            <v-divider class="mx-4"></v-divider>

            <v-card-title class="inset overline">Time and Date</v-card-title>

            <v-card-text>
              <v-row justify-sm="center">
                <v-col cols="12" md="3" sm="6">
                  <v-chip>
                    <span>1:30pm</span>
                  </v-chip>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" md="2" sm="6">
                  <v-chip>
                    <span>Aug 23 2020</span>
                  </v-chip>
                </v-col>
              </v-row>
            </v-card-text>
          </v-container>
        </v-card>

        <v-card class="mx-auto" v-show="comment">
          <div class="text-center">
            <v-card-text>Make your Comments!</v-card-text>
            <v-flex>
              <v-container>
                <v-form>
                  <v-textarea
                    filled
                    auto-grow
                    label="Coments"
                    shaped
                    color="purple"
                  ></v-textarea>
                </v-form>
              </v-container>
            </v-flex>
            <v-card-actions>
              <v-btn dark color="purple darken-3">
                <v-icon left>mdi-comment</v-icon>
                <span>Comment</span>
              </v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-content> </v-card
    ><br /><br /><br /><br />
  </div>
</template>

<script>
import moment from 'moment'
export default {
  data() {
    return {
      drawer: false,
      comment: false,
      like: 0,
      dislike: 0,
      comments: 0,
      links: [
        { title: "Home", icon: "mdi-home-city", route: "/" },
        { title: "News", icon: "mdi-apps", route: "/news" },
        { title: "About Us", icon: "mdi-account-group", route: "/about" },
        { title: "Contact", icon: "mdi-phone", route: "/contact " },
        { title: "Logout", icon: "mdi-open-in-new" },
      ],
      miniVariant: true,
      expandOnHover: true,
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

  methods: {
    true() {
      this.like += 1;
    },
    false() {
      this.dislike++;
    },
    remark() {
      this.comment++;
    },
  },
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    },
  },
};
</script>

<style scoped>
#content {
  margin-top: 30px;
}

#toolbar {
  background: linear-gradient(to bottom right, #1a237e, #4a148c);
}

.con {
  margin-top: 30x;
}

.v-application a {
  color: transparent;
}
</style>
