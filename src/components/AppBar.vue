<template>
    <div>
        <v-app-bar
         color="#fcb69f"
         dark
         id="color"
         app
        >

        <v-app-bar-nav-icon v-on:click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Crossift</v-toolbar-title>

        <v-spacer></v-spacer>


        <!-- <div >
            <v-btn
                v-for="item in topnav_items"
                :key="item.title"
                text
                router :to="item.to"
            >
                <span>{{ item.title }}</span>
            </v-btn>
        </div> -->
        <v-btn
            v-for="(item, i ) in topnav_items"
            :key="i"
            text
            dark
            router :to="item.route"
            class="hidden-md-and-down"
        >   
            <v-icon class="ml-1 white--text" left>{{ item.icon }}</v-icon>
            <span class="white--text" v-text="item.title"></span>
        </v-btn>
        </v-app-bar>
       
          <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
        >
            <v-list-item>
                <v-list-item-content>
                <v-list-item-title class="font-weight-bold headline purple--text">Crossift</v-list-item-title>
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

        topnav_items: [
            { title: "Home", icon: 'mdi-home', route: '/' },
            { title: "News", icon: 'mdi-apps', route: '/news' },
            { title: "Create a post", icon: 'mdi-plus', route: '/new_post' }
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