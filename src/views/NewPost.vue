<template>
    <div>
        <v-toolbar
        id="toolbar"
         dark
         extended
         flat
        >
            <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-lg-only"></v-app-bar-nav-icon>
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
                    <v-form @submit.prevent ref="form">
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
                            type="text"
                            auto-grow
                            auto-focus
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
                            @change="onFileSelected"
                            chips
                            type="file"
                            show-size
                            accept="image/png, image/jpeg, image/jpg, image/bmp"
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
                            type="file"
                            show-size
                            accept="image/png, image/jpeg, image/jpg, image/bmp"
                            outlined
                            color="indigo"
                            label="upload video clip (Optional)"
                            prepend-icon="mdi-play-box"
                            :disabled="!vidEnable"
                        ></v-file-input>

                        <v-divider class="my-2"></v-divider>

                        <v-item-group multiple>
                            <v-subheader>Tags</v-subheader>
                            <v-chip-group
                                multiple
                                max="3"
                                light
                                next-icon="mdi-chevron-right"
                                prev-icon="mdi-chevron-left"
                                show-arrows
                                active-class="primary--text"
                                v-model="post.tags"
                            >
                                <v-chip v-for="tag in tags" :key="tag">
                                    {{ tag }}
                                </v-chip>
                            </v-chip-group>

                        </v-item-group>
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
                        @click.prevent="createPost"
                    >
                        <v-icon left>mdi-telegram</v-icon>
                        <span>Post</span>
                    </v-btn>
                </v-card-actions>
                <v-snackbar
                    v-model="postSuccess"
                    elevation="5"
                    top
                    multi-line
                >
                    <v-icon class="white--text">mdi-cloud-check</v-icon> <span class="ml-2 green--text text--darken-1 body-1 font-weight-medium">Posted successfully, thank you</span> <v-icon class="ml-2 red--text" size="15">mdi-heart-multiple</v-icon>

                    <v-btn
                        color="white"
                        text
                        @click="closeGreenSnackbar"
                    >Close</v-btn>
                </v-snackbar>

                <!--    Error Snackbar  -->
                <v-snackbar
                    v-model="postError"
                    elevation="5"
                    top
                    multi-line
                >
                    <v-icon class="white--text">mdi-cloud-alert</v-icon> <span class="ml-4 red--text  body-1 font-weight-medium">An error occurred, please try again</span>

                    <v-btn
                        color="white"
                        text
                        @click="closeRedSnackbar"
                    >Close</v-btn>
                </v-snackbar>
                <v-overlay :value="postLoader">
                    <v-progress-circular indeterminate size="64"></v-progress-circular>
                </v-overlay>
            </v-content>
        </v-card><br>
        <br>
        <br><br>
    </div>
</template>


<script>
import format from 'date-fns/format'
import { mapState } from 'vuex'


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
        previewTemplate: [ 1, 2, 3],
        tags: [
            'Politics',
            'Crisis',
            'Vacation',
            'Food',
            'Work',
            'Art',
            'Tech',
            'Creative Writing',
            'Others'
        ],

        // Rules
        imgRules: [
            value => !value || value.size < 20048 || 'Image size should be less than 2 MB!',
        ],

        // Firebase create post
        post: {
            title: "",
            content: "",
            img: null,
            multimedia: null,
            tags: [],
            template: []
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
        ...mapState(['postLoader', 'postSuccess', 'postError'])
    },

    methods: {
        resetForm () {
            this.$refs.form.reset()
        },

        onFileSelected(e) {
            this.post.img = e
        },

        createPost () {
            this.$store.dispatch('createNewPost', {
                title: this.post.title,
                content: this.post.content,
                img: this.post.img,
                multimedia: this.post.multimedia,
                tags: this.post.tags,
                template: this.post.template
            })
            this.resetForm()
        },

        closeGreenSnackbar() {
            this.$store.commit('SET_POSTSUCCESS_SNACKBAR')
        },

        closeRedSnackbar() {
            this.$store.commit('SET_POSTERROR_SNACKBAR')
        },
    },

    pre(){
        alert(this.previewTemplate)
    },
    pre1(){
        alert(this.previewTemplate)
    },
    pre2() {
        alert(this.previewTemplate)
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


