import * as fb from '@/firebaseConfig'
import router from '../router/index'

export const actions = {
    signin ({ dispatch }, form) {
        const { user } = fb.auth.signInWithEmailAndPassword(form.email, form.password)
            .then(response => {
                console.log(response)

                // ftech user profile and set in state
                dispatch('fetchUserProfile', user)
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
        const userProfile = await fb.usersCollection.doc(user.uid).get()

        // set user profile in state
        if (!userProfile.exists) {
            alert('No such document!')
        } else {
            commit('setUserProfile', userProfile.data())
        }
        

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
            console.log(response)

            //Update username
            // const newUser = fb.auth.currentUser
            // newUser.updateProfile({
            //   displayName: form.username,
            //   photoURL: "null"
            // }).then(response => {
            //     console.log(response)
            //     alert("Username added")
            // }).catch(error => {
            //     alert("An error happened.", error)
            // })
            // fetch user profile and set in state
            dispatch("fetchUserProfile", user);
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
    }
}