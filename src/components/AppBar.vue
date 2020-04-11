<template>
    <div>
        <v-app-bar
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        id="color"
        scroll-target=""
        >
        

        <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Crosssift</v-toolbar-title>

        <v-spacer></v-spacer>


        <div class="hidden-md-and-down">

            <router-link to="/">
                <v-btn
                text
                >
                <span>Home</span>
                </v-btn>
            </router-link>
           
            <router-link to="/news">
                <v-btn
                text
                >
                <span>News</span>
                </v-btn>
            </router-link>
           
           <router-link to="/new_post">
                <v-btn
                text
                >
                <span>Make Post</span>
                </v-btn>
           </router-link>
        </div>

        <!-- <div> -->
            <!-- <v-menu bottom left v-model="pop">
                <template v-slot:activator="{ on }">
                  <v-btn
                   dark
                   icon
                   v-on="on"
                  >
                    <v-icon>mdi-dots-vertical</v-icon>
                  </v-btn>
                </template>

                <v-list>
                    <v-list-item
                     v-for="pane in panes"
                     :key="pane"
                     link
                     router :to="pane.route"
                     @click="pop = !pop"
                    >
                        <v-list-item-icon>
                            <v-icon color="purple darken-2">{{ pane.icon }}</v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title class="indigo--text text--darken-2">{{ pane.title }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list>
            </v-menu> -->
        <!-- </div> -->

           <div class="hidden-md-and-up">
     
            <v-btn
            icon
            text
            >
            <v-icon>mdi-home</v-icon>
            </v-btn>
  
            <v-btn
                router to="/news"
                icon
                text
                >
                <v-icon>mdi-book-open-page-variant</v-icon>
            </v-btn>
           
            <v-btn
            icon
            text
            >
            <v-icon>mdi-pen</v-icon>
            </v-btn>
        </div>
        </v-app-bar>
       
          <v-navigation-drawer
            v-model="drawer"
            absolute
            
        >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline purple--text">Crosssift</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            

            <v-divider></v-divider>

            <v-list dense>

                <v-list-item
                 router :to="item.route"
                 v-for="item in items"
                 :key="item.title"
                 
               
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

    </div>
    
</template>


<script>
export default {
    data: () => ({
        drawer: false,
        pop: false,
        items: [
            { title: 'Navigate', icon: 'mdi-apps', route: '/news' },
            { title: 'Home', icon: 'mdi-home-city', route: '' },
            { title: 'About Us', icon: 'mdi-open-in-new', route: '/about' },
            { title: 'Contact Us', icon: 'mdi-chat', route: '/contact' },
        ],
        panes: [
            { title: 'About Us', icon: 'mdi-help-box', route: '/about'},
            { title: 'Contact Us', icon: 'mdi-phone', route: '/contact'},
        ],
    }),
}
</script>




<style scoped>
    #color {
        background: linear-gradient(to bottom right, #1A237E, #673AB7);
    }

    .v-application a {
        color: transparent;
    }
</style>