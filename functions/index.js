import Vue from 'vue'
import functions from 'firebase-functions'
import fb from '../src/firebaseConfig'
import admin from 'firebase-admin'
import { store } from '../src/store/index'

admin.initializeApp()

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// auth trigger (new user signup)
exports.newUserSignup = functions.auth.user().onCreate(user => {
    //admin.firestore().collection('users')

    // update user profile
    const newUser = fb.auth.currentUser;
    newUser.updateProfile({
        // displayName: 
    })
    admin.fb.usersCollection.doc(user.uid).set({

    })
})

Vue.store.state.dialog;
alert(Vue.store.state.dialog);
