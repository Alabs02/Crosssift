<template>
  <v-card color="indigo lighten-5">
    <v-card-title class="text-center justify-center py-6">
      <h3 class="font-weight-bold display-1 indigo--text">CROSSIFT</h3>
    </v-card-title>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="indigo"
      grow
    >
      <v-tab
        v-for="(tab, i) in tabs"
        :key="i"
        :href="tab.uid"
      >
        <span class="font-weight-medium">{{ tab.title }}</span>
      </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item id="signin">
          <v-sheet elevation="5" color="indigo lighten-5" tile>
              <div class="custom-container">
                  <v-sheet tile color="white">
                      <v-row justify="center">
                            <v-card
                                color="white"
                                flat=""
                                width="500"
                                tile
                            >
                                <v-container></v-container>
                                <v-row no-gutters justify="center" class="mb-3">
                                    <v-card-title class="headline">
                                        <span class="grey--text text--darken-3">Welcome back</span>
                                    </v-card-title>
                                </v-row>
                                <v-row justify="center">
                                    <v-btn @click="signinWithGoogle"  large outlined class="mr-3" id="googleBtn">
                                        <span class="google-blue">G</span>
                                        <span class="google-red">O</span>
                                        <span class="google-yellow">O</span>
                                        <span class="google-blue">G</span>
                                        <span class="google-green">L</span>
                                        <span class="google-red">E</span>
                                    </v-btn>

                                    <v-btn @click="signinWithFacebook" dark large class="facebook-color">
                                        <span>facebook</span>
                                    </v-btn>
                                </v-row>
                                <v-row no-gutters justify="center" class="mt-4">
                                    <v-card-title class="grey--text text--darken-2 body-1">Or sign in with</v-card-title>
                                </v-row>

                                <v-form @submit.prevent="signIn" class="mt-n3 form-container">
                                    <v-row justify="center">
                                        <v-col>
                                            <p class="overline">Your Email</p>
                                            <v-text-field
                                                v-model.trim="signinForm.email"
                                                outlined
                                                color="indigo"
                                                type="email"
                                                label="Email"
                                                placeholder="johndeo@thecrossift.com"
                                            ></v-text-field>

                                            <v-row no-gutters="">
                                                <p class="overline">Your Password</p><span><forgot /></span>
                                            </v-row>
                                            <v-text-field
                                                v-model.trim="signinForm.password"
                                                outlined
                                                :type="showSigninP ? 'text' : 'password'"
                                                color="indigo"
                                                :append-icon="showSigninP ? 'mdi-eye' : 'mdi-eye-off'"
                                                @click:append="showSigninP = !showSigninP"
                                                placeholder="******"
                                                label="Password"
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row no-gutters>
                                        <v-col cols="12" md="12" sm="8">
                                            <v-btn
                                                :loading="loading"
                                                :disabled="loading"
                                                color="indigo"
                                                block
                                                type="submit"
                                                dark
                                                rounded
                                                @click.prevent="signIn"
                                            >
                                                sign in
                                                <template v-slot:loader>
                                                    <span class="grey--text text--darken-1">Loading...</span>
                                                </template>
                                            </v-btn><br><br id="break" style="display: none !important;">
                                        </v-col>
                                    </v-row>
                                </v-form>

                                <v-row justify="center">
                                    <v-card-text class="text-center justify-center">
                                        <span class="body-1">Don't have an account? </span><span><v-btn text color="indigo" class="ml-1">Sign Up</v-btn></span>
                                    </v-card-text>
                                </v-row>
                            </v-card>
                    </v-row>
                  </v-sheet>
                  <!-- <div class="sized-box"></div> -->
              </div>
          </v-sheet><br /><br class="hidden-lg-only" />
      </v-tab-item>

      <v-tab-item id="signup">  
          <v-sheet elevation="5" tile color="indigo lighten-5">
              <div class="custom-container">
                  <v-sheet tile color="white">
                      <v-row justify="center">
                          <v-col cols="12" md="6" sm="12">
                                <v-card tile elevation="0">
                                    <v-container>
                                         <v-row justify="center">
                                             <v-col>
                                                <v-row no-gutters justify="center" class="mb-3">
                                                    <v-card-title class="title" id="start-sharing">
                                                        <span class="grey--text text--darken-3" id="signup-heading">Start sharing the happenings around you</span>
                                                    </v-card-title>
                                                </v-row>

                                                <v-row justify="center">
                                                    <v-btn @click="signupWithGoogle" large outlined class="mr-3" id="googleBtn">
                                                        <span class="google-blue">G</span>
                                                        <span class="google-red">O</span>
                                                        <span class="google-yellow">O</span>
                                                        <span class="google-blue">G</span>
                                                        <span class="google-green">L</span>
                                                        <span class="google-red">E</span>
                                                    </v-btn>

                                                    <v-btn @click="signupWithFacebook" dark large class="facebook-color">
                                                        <span>facebook</span>
                                                    </v-btn>
                                                </v-row>
                                                <v-row no-gutters justify="center" class="mt-4">
                                                    <v-card-title class="grey--text text--darken-2 body-1">Or sign up with</v-card-title>
                                                </v-row>

                                                <v-row class="form-container">
                                                    <v-col>
                                                        <form @submit.prevent="signUp" action="">
                                                            <p class="overline">Your Name</p>
                                                            <v-text-field
                                                                v-model.trim="signupForm.name"
                                                                outlined
                                                                color="indigo"
                                                                type="text"
                                                                label="Fullname"
                                                                placeholder="John Deo"
                                                            ></v-text-field>

                                                            <p class="overline">Your Username</p>
                                                            <v-text-field
                                                                v-model.trim="signupForm.username"
                                                                outlined
                                                                type="text"
                                                                color="indigo"
                                                                label="Username"
                                                                placeholder="John_D"
                                                            ></v-text-field>

                                                            <p class="overline">Your Email</p>
                                                            <v-text-field
                                                                v-model.trim="signupForm.email"
                                                                outlined
                                                                color="indigo"
                                                                type="email"
                                                                label="Email"
                                                                placeholder="johndeo@thecrossift.com"
                                                            ></v-text-field>

                                                            <p class="overline">Your password</p>
                                                            <v-text-field
                                                                v-model.trim="signupForm.password"
                                                                outlined
                                                                color="indigo"
                                                                :type="showSignupP ?  'text' : 'password'"
                                                                label="Password"
                                                                :append-icon="showSignupP ? 'mdi-eye' : 'mdi-eye-off'"
                                                                @click:append="showSignupP = !showSignupP"
                                                                placeholder="******"
                                                            ></v-text-field>

                                                            <v-row no-gutters>
                                                                <v-col cols="12" md="12" sm="12">
                                                                    <!-- <v-btn
                                                                        rounded
                                                                        dark
                                                                        color="indigo"
                                                                        block
                                                                        type="submit"
                                                                        @click.prevent="signUp"
                                                                    >
                                                                        
                                                                    </v-btn><br> -->
                                                                    <v-btn
                                                                        :loading="loading2"
                                                                        :disabled="loading2"
                                                                        color="indigo"
                                                                        block
                                                                        type="submit"
                                                                        dark
                                                                        rounded
                                                                        @click.prevent="loader = 'loading2'"
                                                                    >
                                                                        start using crossift
                                                                        <template v-slot:loader>
                                                                            <span class="grey--text text--darken-1">Loading...</span>
                                                                        </template>
                                                                    </v-btn><br />
                                                                </v-col>
                                                                <v-col>
                                                                    <v-card-text class="text-center grey--text body-1">
                                                                        <span>By continuing you agree to Crossift's <span class="font-weight-bold">Privacy policy</span> and <span class="font-weight-bold">terms of use</span>.</span>
                                                                    </v-card-text>
                                                                    <v-card-text class="text-center">
                                                                        <div class="signup">
                                                                            <span class="body-2 font-weight-medium grey--text text-daken-3">Already have an account? </span><span><v-btn text color="indigo" class="">Sign in</v-btn></span>
                                                                        </div>
                                                                    </v-card-text>
                                                                </v-col>
                                                            </v-row>
                                                        </form>
                                                    </v-col>
                                                </v-row>
                                             </v-col>
                                        </v-row>
                                    </v-container>
                                </v-card>
                          </v-col>

                          <v-col cols="12" md="6" sm="12" class="grey lighten-4 hidden-md-and-down">
                              <v-img
                                id="crossiftImg"
                                src="@/assets/mobile-testing.svg"
                                lazy-src="@/assets/mobile-testing.svg"
                                width="70%"
                                class="bm mt-4"
                              ></v-img>

                              <v-card
                                height="350"
                                width="350"
                                class="mt-12 mr-n3"
                                id="crossiftCard"
                                flat
                              >
                                <v-row justify="end">
                                    <v-row no-gutters="" justify="center" id="textCard">
                                        <span class="display-2 indigo--text text--darken-4 cardText">"CROSSIFT"</span>
                                    </v-row>
                                </v-row>
                              </v-card>
                          </v-col>
                      </v-row>
                  </v-sheet>
              </div>
          </v-sheet>
      </v-tab-item>
    </v-tabs-items>
    <div>
        <success-alert></success-alert>  
        <error-alert></error-alert>
        <warning-alert></warning-alert>
    </div>
  </v-card>
</template>

<script>
import Forgot from '@/components/Auth/Forgot.vue'
import SuccessAlert from '@/components/core/SuccessAlert.vue'
import ErrorAlert from '@/components/core/ErrorAlert.vue'
import WarningAlert from '@/components/core/WarningAlert.vue'

  export default {
    components:{
        'forgot': Forgot,
        'success-alert': SuccessAlert,
        'error-alert': ErrorAlert,
        'warning-alert': WarningAlert,
    },

    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 3000)

        this.loader = null
      },
    },

    data () {
      return {
        tab: null,
        showSigninP: false,
        showSignupP: false,
        tabs: [
            { title: 'Sign In', uid: '#signin' },
            { title: 'Sign Up', uid: '#signup' }
        ],
        loader: null,
        loading: false,
        loading2: false,

        //** models */
        signinForm: {
            email: "",
            password: ""
        },

        signupForm: {
            name: "",
            username: "",
            email: "",
            password: ""
        },
      }
    },

    computed: {
        
        
    },

    methods: {
        signUp: () => {
            this.$store.dispatch('signup', {
                name: this.signupForm.name,
                username: this.signupForm.username,
                email: this.signupForm.email,
                password: this.signupForm.password
            })
        },

        signIn: () => {
            this.$store.dispatch('signin', {
                email: this.signinForm.email,
                password: this.signinForm.password
            })
        },

        signinWithGoogle() {
            window.alert("First trigger fired!")
            this.$store.dispatch('signinWithGoogle')
        },

        signinWithFacebook() {
            this.$store.dispatch('signinWithFacebook')
        },

        // signupWithGoogle: () => {
        //     this.$store.dispatch('signupWithGoogle')
        // },

        // signupWithFacebook: () => {
        //     this.$store.dispatch('signupWithFacebook')
        // },
    }
  }
</script>

<style scoped>
/* Helper classes */
.custom-container {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
    padding-left: 3rem;
    padding-right: 3rem;
    margin-bottom: 2rem;
}

.sign-card {
    margin: auto;
    width: 60%;
}

.v-btn:not(.v-btn--round).v-size--default {
    height: 36px;
    min-width: 64px;
    max-width: 54px !important;
    padding: 0 16px;
}
.facebook-color {
    background-color: rgb(53, 76, 139) !important;
    font-weight: 900 !important;

}
.facebook-text {
    color: rgb(53, 76, 139) !important;
    font-weight: 900 !important;
}
#fbBtn {
    border: thin solid rgb(53, 76, 139) !important;
}

/*  Google Colors   */

.google-red {
    color: rgb(235, 67, 53) !important;
    font-weight: 900 !important;
}
.google-yellow {
    font-weight: 900 !important;
    color: rgb(251, 188, 5) !important;
}
.google-green {
    font-weight: 900 !important;
    color: rgb(52, 168, 83) !important;
}
.google-blue {
    font-weight: 900 !important;
    color: rgb(66, 133, 244) !important;
}
.cardText {
    font-family: fantasy!important;
}
#googleBtn {
    border: thin solid rgb(66, 133, 244);
}
#crossiftImg {
    float: right !important;
    right: 5px !important;
}
#crossiftCard {
    float: right !important;
    margin-bottom: 0px !important;
    right: 0 !important;
    bottom: 0 !important;
    border-radius: 15rem 0rem 0rem 0rem !important;
}
#textCard {
    transform: translateY(10rem);
    /* font-family: cursive !important; */
    font-family:fantasy !important;
}
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
}
@-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }

/*
    ----------------------------------------------------------------------
                        Responsive Design
    ----------------------------------------------------------------------
*/

@media screen and (max-width: 1024px) {
    .custom-container {
        padding-top: 1rem !important;
        padding-bottom: 1rem !important;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
        margin-bottom: 0rem;
    }.form-container {
        padding-left: .5rem !important;
        padding-right: .5rem !important;
    }.title {
        font-size: 20px !important;
    }
    #start-sharing{
        font-size: 20px !important;
    }
    #signup-heading {
        font-size: 13.5px !important;
        font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
}
</style>