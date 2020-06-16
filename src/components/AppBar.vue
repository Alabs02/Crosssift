<template>
    <div>
        <v-app-bar
         color="#fcb69f"
         dark
         id="color"
         app
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
        </v-app-bar>
       
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
                 v-for="(nav, i) in nav_items"
                 :key="i"
                 router :to="nav.route"
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

    </div>
    
</template>


<script>
export default {
    data: () => ({
        drawer: false,
        pop: false,
        nav_items: [
            { title: 'News', icon: 'mdi-apps', route: '/news' },
            { title: 'About Us', icon: 'mdi-account-group', route: '/about' },
            { title: 'Contact', icon: 'mdi-phone', route: '/contact' },
            { title: 'Logout', icon: 'mdi-open-in-new', route: "#!" },
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