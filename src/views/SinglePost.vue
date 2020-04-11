<template>
    <div id="spost">
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
                v-for="link in links"
                :key="link.title"
                router :to=" link.route "
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
         style="margin-top: -60px;"
        >
            <v-toolbar flat>
                <v-toolbar-title class="indigo--text font-weight-bold">Full Report</v-toolbar-title>
            </v-toolbar>

            <v-divider></v-divider>

          

            <v-content id="content">
                <v-card
                 class="mx-auto"
                >
                    <v-container class="con">
                        <v-img
                        src="../assets/post.png"
                        ></v-img>
                    </v-container>

                    <v-card-text class="headline indigo--text darken-3">
                        <span class="grey--text text--darken-1">Headline: </span> Our Changing Planet
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="subtitle purple--text text--darken-2">
                        by Peret John
                    </v-card-text>
                    <v-divider></v-divider>
                    <v-card-text class="title indigo--text text--darken-3">
                        <span class="grey--text text--darken-1">Location: </span>Bauchi Road, Jos plateau State
                    </v-card-text>
                </v-card>
        
                <v-card>
                    <v-container>
                        <v-card-text>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis labore
                            voluptatibus aperiam suscipit saepe accusamus reprehenderit provident tenetur
                            deleniti fugit, mollitia dicta. Dolores, magni voluptatem inventore laborum 
                            suscipit id numquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            Magni sunt commodi id hic autem? Deleniti cupiditate quasi non consequuntur fugiat 
                            commodi quod, molestiae sint praesentium facilis laborum, assumenda nostrum et?
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit laborum nulla 
                            nihil est magni autem quam dignissimos eum corrupti. Consectetur soluta quam ratione 
                            quis magnam, laboriosam quod velit odit placeat.
                        </v-card-text>

                        <v-divider class="mx-4"></v-divider>

                        <v-card-text>
                            <v-chip-group
                             column
                            >
                                <v-chip>5:30 PM</v-chip>

                                <v-spacer></v-spacer>

                                <v-chip>Jan-23-2020</v-chip>
                            </v-chip-group>
                        </v-card-text>
                    </v-container>
                </v-card>
            </v-content>
        </v-card><br><br>
    </div>
</template>



<script>
  export default {
    data () {
      return {
        drawer: false,
        links: [
          { title: 'Navigate', icon: 'mdi-apps', route: '/' },
          { title: 'Home', icon: 'mdi-home-city', route: '/' },
          { title: 'Logout', icon: 'mdi-open-in-new', route: '/' },
          {}
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

    .con {
        margin-top: 30x;
    }

    .v-application a {
        color: transparent;
    }
</style>