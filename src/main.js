import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify';
import store from './store'
import { auth } from './firebaseConfig'

Vue.config.productionTip = false

let app
auth.onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      vuetify,
      store,
      render: h => h(App)
    }).$mount('#app')
        // User is signed in.
    } else {
        // User is signed out.
    }
});

