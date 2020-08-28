export const mutations = {
    SET_USER_PROFILE: (state, payload) => {
        state.userProfile = payload
    },

    SET_POST: (state, payload) => {
        state.posts = payload
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
}