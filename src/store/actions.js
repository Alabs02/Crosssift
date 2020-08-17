import * as fb from '@/firebaseConfig'
import router from '../router/index'

export const actions = {
    signin ({ dispatch }, form) {
        const { user } = fb.auth.signInWithEmailAndPassword(form.email, form.password)
            .then(response => {
                console.log("current user: ", user)
                console.log(response)

                // ftech user profile and set in state
                dispatch('fetchUserProfile', response)
            })
            .catch(error => {

                // Handling errors codes
                let errorCode = error.code
                let errorMsg = error.message
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else if (errorCode == 'auth/user-not-found') {
                    alert("User not found")
                } else if (errorCode == 'auth/user-disabled') {
                    alert('user disabled')
                } else if (errorCode == 'auth/invalid-email') {
                    alert('Email address is not valid')
                } else {
                    alert(errorMsg)
                }
            });
    },

    // Fetch user profile
    async fetchUserProfile({ commit }, user) {
        // Fetch user profile
        const userProfile = await fb.usersCollection.doc(user.user.uid).get()

        await commit('setUserProfile', userProfile.data())

        // // set user profile in state
        // if (!userProfile.exists) {
        //     alert('No such document!')
        // } else {
        // }
        

        // change router to news page
        router.push('/news')
    },

    /**
     * Handle signup
     */
    async signup({ dispatch }, form) {
        // sign user up
        const { user } = fb.auth.createUserWithEmailAndPassword(form.email, form.password).then(response => {
            // create user profile object in userCollections
            console.log(`new created: ${user}`)
            console.log(response)

            //Update username
            const newUser = fb.auth.currentUser
            newUser.updateProfile({
              displayName: form.username,
              photoURL: "null"
            }).then(response => {
                console.log(response)
                alert("Username added")

                // Add other user data
                fb.usersCollection.doc(newUser.uid).set({
                    name: form.name,
                    bio: null,
                    followers: null,
                    following: null,
                    gender: null,
                    notifications: null,
                    occupation: null,
                    reps: 0,
                }).then(res => {
                    console.log(res)
                    alert("User bio added succcessfully!")
                    router.push('/news')
                }).catch(error => {
                    console.error(error)
                })
            }).catch(error => {
                alert("An error happened.", error)
            })
            // fetch user profile and set in state
            dispatch("fetchUserProfile", newUser);
        }).catch(error => {
            let errorCode = error.code
            let errorMsg = error.message
            if (errorCode == "auth/weak-password") {
                alert("The password is too weak.");
            } else if (errorCode == 'auth/email-already-in-use') {
                alert('This email address is already in use.')
            } else if (errorCode == 'uth/invalid-email') {
                alert("This email address is invalid or badly formatted")   
            } else if (errorCode == 'auth/operation-not-allowed') {
                alert('This operation is not allowed')
            } else {
                alert(errorMsg)
            }
        })
    },

    signOut() {
        fb.auth.signOut().then(() => {
            alert("Sign-out successfully")
            setTimeout(() => {
              router.push("/")  
            }, 2000);
        }).catch(error => {
            console.log(error)
            alert("An error happened")
        })
    },


    /**
     *  Manage users
     */

    updateUsername({ dispatch }, form) {
        const user = fb.auth.currentUser

        // update username
        user.updateProfile({
            displayName: form.newUsername,
        }).then(() => {
            console.log("Update successful")
            dispatch('fetchUserProfile', user)
        }).catch(error => {
            console.log("An error happened")
            console.log(error)
        })
       
    },

    updateEmailAddr({ dispatch }, form) {
        const user = fb.auth.currentUser

        // Update user email
        alert(form.email)
        user.updateEmail(form.email).then(response => {
            console.log("response: ", response)
            alert("Update successful")
            dispatch('fetchUserProfile', response)
        }).catch(error => [
            console.log('An error happened', error)
        ])
    },

    forgotPassword(form) {
        // Reset users password
        fb.auth.sendPasswordResetEmail(form.email).then((response) => {
            alert("Email sent")
            console.log('response: ', response)
        }).catch(error => {
            alert("An error happened")
            console.log('forgot pass: ', error)
        })
    }
}