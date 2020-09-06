export const mutations = {
    SET_USER_PROFILE: (state, payload) => {
        state.userProfile = payload
    },

    SET_USER_DATA: (state, payload) => {
        state.userData = payload
    },

    SET_POSTS_WITH_IMG: (state, payload) => {
        state.postsWithImg = payload
    },
    SET_FULLPOST: (state, payload) => {
        state.fullpost = payload
    },
    SET_POST_COMMENTS: (state, payload) => {
        state.postComments = payload
    },
    SET_POST_WITHOUT_IMG: (state, payload) => {
        state.postsWithoutImg = payload
    },
    SET_COLOR: (state, payload) => {
        state.color = payload
    },
    SET_AVATAR_COLOR: (state, payload) => {
        state.avatarColor = payload
    },

    // => Handle Error Alerts

    /** Success alerts */
    SET_SUCCESS_TEXT: (state, val) => {
        state.successText = val
    },

    SET_SNACKBAR_SUCCESS: (state) => {
        state.snackbarSuccess = true
    },

    /** Warning alerts */
    SET_WARNING_TEXT: (state, val) => {
        state.warningText = val
    },

    SET_SNACKBAR_WARNING: (state) => {
        state.snackbarWarning = true
    },

    /** Error alerts */
    SET_ERROR_TEXT: (state, val) => {
        state.errorText = val
    },

    SET_SNACKBAR_ERROR: (state) => {
        state.snackbarError = true
    },

    SET_POSTSUCCESS_SNACKBAR: (state) => {
        state.postSuccess = false
    },
    SET_POSTERROR_SNACKBAR: (state) => {
        state.postError = false
    }
}