<template>
    <div>
        <v-toolbar
        id="toolbar"
         dark
         extended
         flat
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
         max-width="1000"
         style="margin-top: -64px;"
        >
            <v-toolbar flat color="">
                <v-toolbar-title class="deep-purple--text">Submit a post</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                         icon
                         v-on="on"
                         router to="/"
                        >
                            <v-icon color="indigo" dark>mdi-home-city</v-icon>
                        </v-btn>
                    </template>
                    <span>Home</span>
                </v-tooltip>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                         icon
                         v-on="on"
                         router to="/dashboard"
                        >
                            <v-icon color="indigo" dark>mdi-view-dashboard</v-icon>
                        </v-btn>
                    </template>
                    <span>Dashboard</span>
                </v-tooltip>
             
            </v-toolbar>

            <v-divider></v-divider>

            <v-content id="post_content">
                  <v-card-text>
        
                     <v-text-field
                        v-model="title"
                        color="deep-purple accent-4"
                        label="Title"
                        outlined
                        shaped
                        placeholder="My new post"
                    ></v-text-field>

                    <v-textarea
                    v-model="content"
                    color="deep-purple accent-4"
                    outlined
                    shaped
                    label="Content"
                    placeholder="Text goes here"
                    ></v-textarea>

                    <v-file-input
                        v-model="files"
                        color="deep-purple accent-4"
                        counter
                        label="File input"
                        multiple
                        placeholder="Upload Images"
                        prepend-icon="mdi-camera"
                        outlined
                        :show-size="1000"
                    >
                        <template v-slot:selection="{ index, text }">
                        <v-chip
                            v-if="index < 2"
                            color="deep-purple accent-4"
                            dark
                            label
                            small
                        >
                            {{ text }}
                        </v-chip>

                        <span
                            v-else-if="index === 2"
                            class="overline grey--text text--darken-3 mx-2"
                        >
                            +{{ files.length - 2 }} File(s)
                        </span>
                        </template>
                    </v-file-input>
                
                    <v-menu
                    v-model="menu2"
                    :close-on-content-click="false"
                    max-width="290"
                    >
                    <template v-slot:activator="{ on }">
                        <v-text-field
                        outlined
                        shaped
                        clearable
                        label="Date"
                        :placeholder="currentDate"
                        prepend-icon="mdi-pen"
                        readonly
                        v-on="on"
                        @click:clear="date = null"
                        ></v-text-field>
                    </template>
                    <v-date-picker
                        v-model="currentDate"
                        @change="menu = false"
                    ></v-date-picker>
                    </v-menu>

                    <v-divider class="my-2"></v-divider>

                    <v-item-group multiple>
                        <v-subheader>Tags</v-subheader>
                        <v-item
                        v-for="n in 4"
                        :key="n"
                        v-slo:activator="{active, toggle}"
                        >
                            <v-chip
                            active="Purple--text"
                            :input-value="active"
                            @click="toggle"
                            > 
                                Tag {{ n }}
                            </v-chip>
                        </v-item>
                    </v-item-group>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                    dark
                    color="indigo"
                    large
                    v-on:click="submit"
                    >
                        <span>Post</span>
                        <v-icon left>mdi-open-in-new</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-content>
        </v-card>
    </div>
</template>


<script>
import format from 'date-fns/format';


export default {
    data: () => ({
        currentDate: new Date().toISOString().substr(0, 10),
        menu: false,
        title: '',
        content: '',
        files: [],
        drawer: false,
        items: [
          { title: 'Navigate', icon: 'mdi-apps' },
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'Logout', icon: 'mdi-open-in-new' },
          {}
        ],
    }),

    methods: {
        submit() {
            console.log(this.title, this.content, this.files);
        }
    },

    computed: {
        dataFormat () {
            return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
        },
    },
}
</script>


<style scoped>
    #toolbar {
        background: linear-gradient(to bottom right, #1A237E, #4A148C);
    }

    #post_content {
        margin-top: 20px;
    }
</style>


