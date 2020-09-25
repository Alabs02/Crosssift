export const state = {
  userEmail: "",
  userData: {},
  fullpost: {},
  postComments: [],
  userProfile: {},
  postsWithImg: [],
  postsWithoutImg: [],
  color: "",
  avatarColor: "",

  /**
  *  Alert Handling
  */
  snackbarSuccess: false,
  snackbarError: false,
  snackbarWarning: false,
  successText: "",
  errorText: "",
  warningText: "",

  postSuccess: false,
  postError: false,

  /**
  *  Render Hanflers
  */
showAvatar: false,
showIcon: false,

  /**
  * Loaders
  */

  postLoader: false,
};