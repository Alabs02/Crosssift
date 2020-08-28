import * as firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/functions'

// => firebase init
const firebaseConfig = {
    apiKey: "AIzaSyDA8ItBxCOPqGu20kTr1-e1Lw0tMS3oj1Q",
    authDomain: "crosssift-bb9c6.firebaseapp.com",
    databaseURL: "https://crosssift-bb9c6.firebaseio.com",
    projectId: "crosssift-bb9c6",
    storageBucket: "crosssift-bb9c6.appspot.com",
    messagingSenderId: "908623356363",
    appId: "1:908623356363:web:1096207632b9cee94a564e",
    measurementId: "G-NK5D4RE12J"
};

firebase.initializeApp(firebaseConfig)
// firebase.analytics();

// => Utils
const db = firebase.firestore()
const auth = firebase.auth()
const auth_ = firebase.auth

// => Collection references
const usersCollection = db.collection('users')
const postsCollection = db.collection('posts')
const commentsCollection = db.collection('comments')
const likesCollection = db.collection('likes')
const dislikesCollection = db.collection('dislikes')

// => export utils/refs
export {
    db,
    auth,
    auth_,
    usersCollection,
    postsCollection,
    commentsCollection,
    likesCollection,
    dislikesCollection
}