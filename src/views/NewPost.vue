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
                <v-list-item-title class="font-weight-bold headline purple--text">Crossift</v-list-item-title>
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
                <v-toolbar-title class="deep-purple--text">Make a post</v-toolbar-title>

                <v-spacer></v-spacer>

                <v-tooltip bottom>
                    <template v-slot:activator="{ on }">
                        <v-btn
                         icon
                         v-on="on"
                         router to="/news"
                        >
                            <v-icon color="indigo" dark>mdi-apps</v-icon>
                        </v-btn>
                    </template>
                    <span>News</span>
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
                    <v-form @submit.prevent ref="form" lazy-validation v-model="validation">
                        <v-text-field
                            v-model.trim="post.title"
                            color="indigo"
                            label="Title"
                            outlined
                            required
                            placeholder="My new post"
                        ></v-text-field>

                        <v-textarea
                        v-model.trim="post.content"
                        color="indigo"
                        outlined
                        label="Content"
                        required
                        placeholder="Text goes here"
                        ></v-textarea>
                        <v-row no-gutters class="mb-4">
                            <v-switch 
                                inset
                                hide-details
                                v-model="imgEnable"
                                class="ml-5"
                                color="indigo"
                            ></v-switch><span class="mt-5 ml-2">Toogle the switch to upload an image</span>
                        </v-row>
                        
                        <v-file-input
                            v-model.trim="post.img" 
                            :rules="imgRules"
                            chips
                            show-size
                            accept="image/png, image/jpeg, image/bmp"
                            outlined
                            color="indigo"
                            label="upload image (Optional)"
                            prepend-icon="mdi-camera"
                            :disabled="!imgEnable"
                        ></v-file-input>


                        <v-row no-gutters class="mb-4">
                            <v-switch 
                                inset
                                hide-details
                                v-model="vidEnable"
                                class="ml-5"
                                color="indigo"
                            ></v-switch><span class="mt-5 ml-2">Toogle the switch to upload an video clip</span>
                        </v-row>
                        
                        <v-file-input
                            v-model.trim="post.multimedia" 
                            chips
                            show-size
                            accept="image/png, image/jpeg, image/bmp"
                            outlined
                            color="indigo"
                            label="upload video clip (Optional)"
                            prepend-icon="mdi-play-box"
                            :disabled="!vidEnable"
                        ></v-file-input>

                        <v-divider class="my-2"></v-divider>

                        <v-item-group multiple>
                            <v-subheader>Tags</v-subheader>
                            <v-item
                            v-for="n in 3"
                            :key="n"
                            v-slot:default="{ active, toggle }"
                            >
                            <v-chip
                                active-class="purple--text"
                                :input-value="active"
                                @click="toggle"
                                class="mr-2"
                            >
                                rickrock embezlement funds {{ n }}
                            </v-chip>
                            </v-item>
                        </v-item-group>

                        <v-subheader class="mt-2">Select how you want your to be displayed.</v-subheader>
                        <v-chip-group
                            v-model.trim="post.template"
                            column
                            multiple
                        >
                            <v-chip :disabled="post.img === null" filter outlined>First View</v-chip>
                            <v-chip :disabled="post.img === null" filter outlined>Second View</v-chip>
                            <v-chip filter outlined>Third View</v-chip>
                        </v-chip-group>
                    </v-form>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                    dark
                    color="indigo lighten-5 blur-grey--text text--darken-4"
                    large
                    v-on:click="resetForm"
                    >
                        <span class="indigo--text text--darken-4">reset</span>
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn
                        dark
                        color="indigo"
                        large
                        :disabled="post.title === '' && post.content === ''"
                        @click="createPost"
                    >
                        <span>Post</span>
                        <v-icon right>mdi-send</v-icon>
                    </v-btn>
                </v-card-actions>
            </v-content>
        </v-card><br>
        <br>
        <br><br>
    </div>
</template>


<script>
import format from 'date-fns/format';


export default {
    data: () => ({
        currentDate: new Date().toISOString().substr(0, 10),
        menu: false,
        imgEnable: false,
        vidEnable: false,
        enablePost: false,
        drawer: false,
        items: [
            { title: 'Home', icon: 'mdi-home-city', route: '/' },
            { title: 'News', icon: 'mdi-apps', route: '/news' },
            { title: 'About Us', icon: 'mdi-account-group', route: '/about' },
            { title: 'Contact', icon: 'mdi-phone', route: '/contact' },
            { title: 'Logout', icon: 'mdi-open-in-new', route: '/' },
        ],
        imgs: [
            { view: '@/assets/logo.png' },
            { view: '@/assets/logo.png' },
            { view: '@/assets/logo.png' }
        ], 

        // Rules
        imgRules: [
            value => !value || value.size < 2000000 || 'Image size should be less than 2 MB!',
        ],

        // Firebase create post
        post: {
            title: "",
            content: "",
            img: null,
            multimedia: null,
            tags: null,
            template: [2]
        }
    }),

    created() {
        //
    },
    
    watch: {
        
    },

    computed: {
        dataFormat () {
            return this.date ? format(this.date, 'dddd, MMMM Do YYYY') : ''
        },
    },

    methods: {
        resetForm () {
            this.$refs.form.reset()
        },

        createPost() {
            this.$store.dispatch('createPost', {
                title: this.post.title,
                content: this.post.content,
                img: this.post.img,
                multimedia: this.post.multimedia,
                tags: this.post.tags,
                template: this.post.template
            })
            this.post.content = ''
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


