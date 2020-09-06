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
    signinWithGoogle({ dispatch, commit }) {
        const googleAuth = new fb.auth_.GoogleAuthProvider()
        googleAuth.addScope('email');
        googleAuth.addScope('profile');
        fb.auth.signInWithPopup(googleAuth).then(response => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            console.log('Response: ', response)
            // Dispatch response
            dispatch("fetchUserProfile", response);
            commit('SET_SUCCESS_TEXT', `${response.user.email} logged in successfully`)
            commit('SET_SNACKBAR_SUCCESS')
            let token = response.credential.accessToken 
            // The signed-in user info.
            let user = response.user
            console.log("Token: ", token)
            console.log("User: ", user)
        }).catch(error => {
            let errorCode = error.code
            let errorMsg = error.message
            let email = error.email
            // The firebase.auth.AuthCredential type that was used.
            let credentail = error.credentail
            console.log(email)
            console.log(credentail)
            if (errorCode) {
                commit('SET_WARNING_TEXT', `${errorCode}`)
                commit('SET_SNACKBAR_WARNING')
            } else if (errorMsg) {
                commit('SET_ERROR_TEXT', `${errorMsg}`)
                commit('SET_SNACKBAR_ERROR')
            }
        })
    },

    async signinWithFacebook({ dispatch, commit }) {
        const facebookAuth = new fb.auth_.FacebookAuthProvider()
        fb.auth.signInWithPopup(facebookAuth).then(response => {
            dispatch("fetchUserProfile", response);
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            let token = response.credentail.accessToken
            // The signed-in user info.
            let user = response.user
            commit('SET_SUCCESS_TEXT', `${response.user.email} is logged in successfully`)
            commit('SET_SNACKBAR_SUCCESS')
            console.log("Token: ", token)
            console.log("User: ", user)
        }).catch(error => {
            let errorCode = error.code
            let errorMsg = error.message
            let email = error.email
            let credentail = error.credentail
            console.log(email)
            console.log(credentail)
            if (errorCode) {
                commit('SET_WARNING_TEXT', `${errorCode}`)
                commit('SET_SNACKBAR_WARNING')
            } else {
                alert(errorMsg)
            }
        })
    },
    
    // Fetch user profile
    async fetchUserProfile({ commit }, userProfile) {

        await commit('SET_USER_PROFILE', userProfile)

        // change router to news page
        if (router.currentRoute.path === '/auth') {
            setTimeout(() => {
                router.push('/news')
            }, 3600);
        }
    },

    async fetchUserData({ commit }) {
        const snapshot = await fb.usersCollection.get()
        snapshot.forEach(doc => {
            commit('SET_USER_DATA', doc.data())
        })
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
                    bio: "null",
                    followers: 0,
                    following: 0,
                    gender: "null",
                    notifications: [],
                    occupation: "null",
                    reps: 0,
                }).then(res2 => {
                    console.log(res2)
                    console.log("User bio added succcessfully!")
                    const snapshot = fb.usersCollection.get().then(() => {
                        snapshot.forEach(doc => {
                            console.log(doc.id, '=>', doc.data())
                            commit('SET_USER_DATA', doc.datat())
                        })
                    })
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
            commit('SET_USER_PROFILE', {})
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

    updateUsername({ dispatch }, form) {
        const user = fb.auth.currentUser
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
    updateUserPass: () => {},

    updateUserAvatar({ dispatch }, obj) {
        if (obj.avatar !== null) {
            let avatar = obj.avatar
            alert(avatar)

            let metadata = { contentType: avatar.type }

            const uploadAvatarTask = fb.storageRef.child('imgArchive' + avatar.name).put(avatar, metadata)

            uploadAvatarTask.on(fb.storage.TaskEvent.STATE_CHANGED, (avatarSnapshot) => {
                let uploadProgress = (avatarSnapshot.bytesTransferred / avatarSnapshot.totalBytes) * 100
                console.log(`Avatar upload is ${uploadProgress}% done`)
                switch (avatarSnapshot.state) {
                    case fb.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Image upload is paused');
                        break;
                    case fb.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        console.log("User doesn't have permission to access the object")
                        break;
                    case 'storage/canceled':
                        console.log("User canceled the upload")
                        break;

                    case 'storage/unknown':
                        console.log("Unknown error occurred, inspect error.serverResponse")
                        break;
                }
            }, () => {
                    uploadAvatarTask.avatarSnapshot.ref.getDownloadURL().then((downloadAvatarURL) => {
                    alert("Uploaded successfully")
                    var uploadedAvatarURL = downloadAvatarURL
                    const user = fb.auth.currentUser

                    user.updateProfile({
                        photoURL: uploadedAvatarURL
                    }).then(() => {
                        alert('Update successful')
                        dispatch('fetchUserProfile', user)
                    }).catch(error => {
                        alert("An error occurred, please try again")
                        console.log(error)
                    })
                })
            })
        } else if (obj.avatar == null) {
            alert("select an image!")
        }
    },



    // Update cover picture
    updateUserCoverImg(capture) {
        let coverImg = capture.coverImg

        let metadata = { contentType: coverImg.type }

        let uploadCoverImg = fb.storageRef.child('imgArchive/' + coverImg.name).put(coverImg, metadata)

        uploadCoverImg.on(fb.storage.TaskEvent.STATE_CHANGED, (coverImgSnapshot) => {
            let progress = (coverImgSnapshot.bytesTransferred / coverImgSnapshot.totalBytes) * 100
            console.log(`Cover image upload is ${progress}% done`)
            switch (coverImgSnapshot.state) {
                case fb.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Cover imag upload is paused');
                    break;
                case fb.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
            }
        }, (error) => {
            switch (error.code) {
                case 'storage/unauthorized':
                    console.log("User doesn't have permission to access the object")
                    break;
                case 'storage/canceled':
                    console.log("User canceled the upload")
                    break;

                case 'storage/unknown':
                    console.log("Unknown error occurred, inspect error.serverResponse")
                    break;
            }
        }, () => {
            uploadCoverImg.coverImgSnapshot.ref.getDownloadURL().then(downloadCoverImgURL => {
                alert("Getting url")
                const user = fb.auth.currentUser
                const data = {
                    coverImg: downloadCoverImgURL
                }
                const res = fb.usersCollection.doc(user.uid).set(data).then(() => {
                    alert(res)
                }).catch(error => {
                    alert(error)
                })
            })
        })
    },

    updateEmailAddr: ({ dispatch }, form) => {
        const user = fb.auth.currentUser;
        alert(form.email, " => 2")
        user.updateEmail(form.email).then((response) => {
            console.log(response)
            alert("Updated successfully ", response)
            dispatch('fetchUserProfile', response)
        }).catch(error => {
            alert(error)
            console.log(error)
        })
    },

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

    async getUserData({ commit }) {
        const userRef = fb.usersCollection
        const docSnapshot = await userRef.get()
        docSnapshot.forEach(doc => {
            console.log(doc.id, '=>', doc.data())
            commit('', doc.data())
        })
    },

    createNewPost({ state }, post) {
        // Activate loader
        state.postLoader = true

        if (post.img !== null) {
            // File
            let file = post.img
            
            // Create file metadata
            let metadata = { contentType: file.type }
            
            const uploadImgTask = fb.storageRef.child('imgArchive/' + file.name).put(file, metadata)

            // Listen for state changed, errors and completion
            uploadImgTask.on(fb.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
                let progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                console.log(`Image upload is ${progress}% done`)
                switch (snapshot.state) {
                    case fb.storage.TaskState.PAUSED: // or 'paused'
                        console.log('Image upload is paused');
                        break;
                    case fb.storage.TaskState.RUNNING: // or 'running'
                        console.log('Upload is running');
                        break;
                }
            }, (error) => {
                switch (error.code) {
                    case 'storage/unauthorized':
                        console.log("User doesn't have permission to access the object")
                        break;
                    case 'storage/canceled':
                        console.log("User canceled the upload")
                        break;
                
                    case 'storage/unknown':
                        console.log("Unknown error occurred, inspect error.serverResponse")
                        break;
                }
            }, () => {
                uploadImgTask.snapshot.ref.getDownloadURL().then((downloadImgURL) => {
                    var uploadedImgURL = downloadImgURL
                    console.log(`File available at ${uploadedImgURL}`)

                    fb.postsCollection.add({
                        author: state.userProfile.displayName,
                        createdOn: new Date(),
                        content: post.content,
                        userId: fb.auth.currentUser.uid,
                        avatar: state.userProfile.photoURL,
                        img: uploadedImgURL,
                        title: post.title,
                        template: post.template,
                        trending: false,
                        comments: 0,
                        likes: 0,
                        dislikes: 0
                    }).then(docRef => {
                        // console.log('New post created!')
                        console.log("Document written with ID: ", docRef.id);
                        state.postLoader = false
                        state.postSuccess = true
                    }).catch(error => {
                        console.error("Error adding document: ", error);
                        state.postLoader = false
                        state.postError = true
                    })

                })
            });
        } else if (post.img == null) {
            fb.postsCollection.add({
                author: state.userProfile.displayName,
                createdOn: new Date(),
                content: post.content,
                userId: fb.auth.currentUser.uid,
                avatar: state.userProfile.photoURL,
                title: post.title,
                template: post.template,
                trending: false,
                comments: 0,
                likes: 0,
                dislikes: 0
            }).then(docRef => {
                console.log("Document written with ID: ", docRef.id);
                state.postLoader = false
                state.postSuccess = true
            }).catch(error => {
                console.error("Error adding document: ", error);
                state.postLoader = false
                state.postError = true
            })
        }
    },

    // eslint-disable-next-line no-unused-vars
    async displayPosts({ commit }) {
        await fb.postsCollection.orderBy('createdOn', 'desc').onSnapshot(snapshot => {
            const postsArray = []

            snapshot.forEach(doc => {
                let post = doc.data()
                post.id = doc.id

                postsArray.push(post)
                const filteredPostsWithoutImgs = postsArray.filter(postArray => postArray.img == undefined)
                const filteredPostsWithImgs = postsArray.filter(postArray => postArray.img != undefined)
                
                commit('SET_POSTS_WITH_IMG', filteredPostsWithImgs)
                commit('SET_POST_WITHOUT_IMG', filteredPostsWithoutImgs)
            })
        })
    },

    // eslint-disable-next-line no-unused-vars
    async likePost({ commit }, post) {
        const userId = fb.auth.currentUser.uid
        const docId = `${userId}_${post.id}`

        // Check if user has liked post
        const doc = await fb.likesCollection.doc(docId).get()
        if (doc.exists) { return }

        // Create likes 
        await fb.likesCollection.doc(docId).set({
            postId: post.id,
            userId: userId
        })

        // update post likes count
        fb.postsCollection.doc(post.id).update({
            likes: post.likesCount + 1
        })
    },

    // Select user-defined colors at random
    randomColors({ commit }) {
        const arr = ["card-two-x", "card-two-y", "card-two-z"]
        const res = arr[Math.floor(Math.random() * arr.length)]
        commit('SET_COLOR', res)
    },

    randomAvatarColors({ commit }) {
        const colors = [
            "purple",
            "pink",
            "red",
            "indigo",
            "primary",
            "teal",
            "amber",
            "cyan",
            "orange",
            "brown",
            "blue-grey",
            "green",
            "deep-purple"
        ]
        const color = colors[Math.floor(Math.random() * colors.length)]
        commit('SET_AVATAR_COLOR', color)
    },
}