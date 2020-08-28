import * as fb from '@/firebaseConfig.js'
import router from '../router/index'

export const actions = {
    signin ({ dispatch, commit }, form) {
        // eslint-disable-next-line no-unused-vars
        const { user } = fb.auth.signInWithEmailAndPassword(form.email, form.password)
            .then(response => {
                dispatch('fetchUserProfile', response)
                let successText = `${response.user.email} logged in successfully`
                commit('SET_SNACKBAR_SUCCESS_TEXT', successText)
                commit('SET_SNACKBAR_SUCCESS')
                setTimeout(() => {
                    router.push("/news")
                }, 3600);
            })
            .catch(error => {
                // Handling errors codes
                let errorCode = error.code
                let errorMsg = error.message
                if (errorCode == 'auth/weak-password') {
                    console.log('The password is too weak.');
                    commit('SET_WARNING_TEXT', "The password is too weak")
                    commit('SET_SNACKBAR_WARNING')
                } else if (errorCode == 'auth/user-not-found') {
                    alert("User not found")
                    commit('SET_WARNING_TEXT', "User not found!")
                    commit('SET_SNACKBAR_WARNING')
                } else if (errorCode == 'auth/user-disabled') {
                    console.log('user disabled')
                    commit('SET_WARNING_TEXT', "User disabled")
                    commit('SET_SNACKBAR_WARNING')
                } else if (errorCode == 'auth/invalid-email') {
                    console.log('Email address is not valid')
                    commit('SET_WARNING_TEXT', "This email address is invalid or badly formatted")
                    commit('SET_SNACKBAR_WARNING')
                } else if (errorMsg === "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
                    commit('SET_ERROR_TEXT', `An error occurred, please check your internet connection`)
                    commit('SET_SNACKBAR_ERROR')
                } else {
                    console.log(errorMsg)
                    commit('SET_ERROR_TEXT', `${errorMsg}`)
                    commit('SET_SNACKBAR_ERROR')
                }
            });
    },

    /**
     * 
     * Handle sigin with google
     */
    signinWithGoogle({ dispatch }) {
        const googleAuth = new fb.auth_.GoogleAuthProvider()
        googleAuth.addScope('email');
        googleAuth.addScope('profile');
        fb.auth.signInWithPopup(googleAuth).then(response => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            console.log('Response: ', response)
            // Dispatch response
            dispatch("fetchUserProfile", response);
            let token = response.credential.accessToken 
            // The signed-in user info.
            let user = response.user
            console.log("Token: ", token)
            console.log("User: ", user)
        }).catch(error => {
            let errorCode = error.code
            console.log(`Error code: ${errorCode}`)
            let errorMsg = error.message
            console.log(`Error message: ${errorMsg}`)

            let email = error.email
            // The email of the user's account used
            console.log('Email used: ', email)
            // The firebase.auth.AuthCredential type that was used.
            let credentail = error.credential
            console.log("Crendentials: ", credentail)
        })
    },

    async signinWithFacebook({ dispatch }) {
        dispatch("fetchUserProfile");
    },
    
    // Fetch user profile
    async fetchUserProfile({ commit }, userProfile) {

        await commit('setUserProfile', userProfile)

        // change router to news page
        if (router.currentRoute.path === '/auth') {
            router.push('/news')
        }
    },

    /**
     * Handle signup
     */
    async signup({ dispatch, state, commit }, form) {
        // eslint-disable-next-line no-unused-vars
        const { user } = fb.auth.createUserWithEmailAndPassword(form.email, form.password).then(response => {
            // create user profile object in userCollections
            console.log("Response: ", response)
            dispatch("fetchUserProfile", response);

            //Update username
            const newUser = fb.auth.currentUser
            newUser.updateProfile({
              displayName: form.username,
              photoURL: "null"
            }).then(res => {
                console.log(res)
                console.log("Username added")

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
                }).then(res2 => {
                    console.log(res2)
                    console.log("User bio added succcessfully!")
                    commit('SET_SUCCESS_TEXT', `${response.user.email} created successfully`)
                    commit('SET_SNACKBAR_SUCCESS')
                    setTimeout(() => {
                        router.push('/news')
                    }, 3600);
                    
                }).catch(error => {
                    commit('SET_ERROR_TEXT', "An error occurred, please try again")
                    commit('SET_SNACKBAR_ERROR')
                    console.error(error)
                })
            }).catch(error => {
                console.log("An error occurred.", error)
            })
        }).catch(error => {
            let errorCode = error.code
            let errorMsg = error.message
            if (errorCode == "auth/weak-password") {
                console.log("The password is too weak.");
                commit('SET_WARNING_TEXT', "The password is too weak")
                commit('SET_SNACKBAR_WARNING')
            } else if (errorCode == 'auth/email-already-in-use') {
                console.log('This email address is already in use.')
                commit('SET_WARNING_TEXT', "This email address is already in use")
                commit('SET_SNACKBAR_WARNING')
            } else if (errorCode == 'auth/invalid-email') {
                console.log("This email address is invalid or badly formatted")  
                commit('SET_WARNING_TEXT', "This email address is invalid or badly formatted")
                commit('SET_SNACKBAR_WARNING')
            } else if (errorCode == 'auth/operation-not-allowed') {
                console.log('This operation is not allowed')
                commit('SET_WARNING_TEXT', "This operation is not allowed")
                commit('SET_SNACKBAR_WARNING')
            } else if (errorMsg === "A network error (such as timeout, interrupted connection or unreachable host) has occurred.") {
                state.errorText = 
                state.snackbarError = true
                commit('SET_ERROR_TEXT', `An error occurred, please check your internet connection`)
                commit('SET_SNACKBAR_ERROR')
            } else {
                console.log(errorMsg)
                commit('SET_ERROR_TEXT', `${errorMsg}`)
                commit('SET_SNACKBAR_ERROR')
            }
        })
    },

    signOut({ commit, state }) {
        // eslint-disable-next-line no-unused-vars
        const { user } = fb.auth.signOut().then(() => {
            commit('setUserProfile', {})
            state.successText = 
            state.snackbarSuccess = true
            commit('SET_SUCCESS_TEXT', "Sign-out successfully")
            commit('SET_SNACKBAR_SUCCESS')
            setTimeout(() => {
              router.push("/")  
            }, 3600);
        }).catch(error => {
            console.log(error)
            commit('SET_ERROR_TEXT', `An error occurred, Please try again`)
            commit('SET_SNACKBAR_ERROR')
        })
    },


    /**
     *  Manage users
     */

    updateUsername({ dispatch, state }, form) {
        const user = fb.auth.currentUser
        state.userEmail = user.email
        // update username
        user.updateProfile({
            displayName: form.newUsername,
        }).then(() => {
            console.log("Update successful")
            dispatch('fetchUserProfile', user)
        }).catch(error => {
            console.log("An error occurred")
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
            console.log('An error occurred', error)
        ])
    },

    // Reset users password
    // forgotPassword({ commit, state }, form) {
    //     fb.auth.sendPasswordResetEmail(form.email).then(response => {
    //         state.successText = "Email sent"
    //         state.snackbarSuccess = true
    //         console.log('response: ', response)
    //         commit('closeForgotDialog', false)
    //     }).catch(error => {
    //         console.log('forgot pass: ', error)
    //         state.errorText = "An error occurred, please try again"
    //         state.snackbarError = true
    //     })
    // },

    deleteAccount({ commit }) {
        // Delet user account
        const user = fb.auth.currentUser

        user.delete().then(() => {
            alert('user Deleted')
            commit('SET_SUCCESS_TEXT', `${user.email} deleted`)
            commit('SET_SNACKBAR_SUCCESS')

            setTimeout(() => {
                router.push("/")
            }, 4500);
        }).catch(error => {
            console.log("An error occurred")
            console.log(error)
            commit('SET_ERROR_TEXT', `${error}`)
            commit('SET_SNACKBAR_ERROR')
        })
    },

    // Handle posts
    // eslint-disable-next-line no-unused-vars
    async createPost({ state, commit }, post) {
        try {
            await fb.postsCollection.add({
                createdOn: new Date(),
                title: post.title,
                content: post.content,
                author: fb.auth.currentUser.displayName,
                userId: fb.auth.currentUser.uid,
                comments: 0,
                likes: 0,
                dislikes: 0,
                template: [1],
                trending: false
            })
        } catch (error) {
            console.log(error)
        }
    },


    realTime({ commit }) {
        fb.postsCollection.orderBy('createdOn', 'data').onSnapshot(snapshot => {
            let postsArray = []

            snapshot.forEach(doc => {
                let post = doc.data()
                post.id = doc.id

                postsArray.push(post)
            });

            commit('setPosts', postsArray)
        })
    },

    /**
     *  Close Modals
     */
    
    
}