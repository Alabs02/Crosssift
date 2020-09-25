import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import { auth } from './firebaseConfig'

Vue.config.productionTip = false

let app
// eslint-disable-next-line no-unused-vars
auth.onAuthStateChanged(user => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      async created() {
        await this.listeningToPosts();
        await this.randomColors();
        await this.getUserData()
      },
      methods: {
        listeningToPosts() {
          this.$store.dispatch('displayPosts')
        },
        randomColors() {
          this.$store.dispatch("randomColors")
          this.$store.dispatch("randomAvatarColors")
        },
        getUserData() {
          this.$store.dispatch('fetchUserData')
        },
      },

      render: h => h(App)
    }).$mount('#app')
        // User is signed in.
  } 

  if (user) store.dispatch('fetchUserProfile', user)
});

