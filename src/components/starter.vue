<template>
        <v-dialog v-model="dialog" persistent max-width="500" >
            <template v-slot:activator="{ on }">
                <v-banner two-line id="ban">
                    <v-row>
                        <v-col cols="12" md="9">
                            <v-avatar
                                slot="icon"
                                color="deep-purple accent-4"
                                size="40"
                                >
                                <v-icon
                                    icon="mdi-lock"
                                    color="white"
                                >
                                    mdi-lock
                                </v-icon>
                            </v-avatar>
                           Share the Happenings in your community!
                            <v-spacer></v-spacer>
                        </v-col>
                        <v-col cols="12" md="1">
                            <v-btn
                            right
                                v-on="on"
                                outlined
                                color="indigo"
                                >
                                    <v-icon left>mdi-speedometer</v-icon>
                                    <span>Get started</span>
                            </v-btn>
                        </v-col>
                    </v-row>
                </v-banner>
            </template>

            <v-card
                class="mx-auto"
                max-width="500"
            >
                <v-card-title class="title font-weight-regular justify-space-between">
                <span>{{ currentTitle }}</span>
                <v-avatar
                    color="indigo darken-4"
                    class="subheading white--text"
                    size="25"
                    v-text="step"
                ></v-avatar>
                </v-card-title>

                <v-window v-model="step">
                <v-window-item :value="1">
                    <v-card-text>
                    <v-text-field
                        v-model="email"
                        label="Email"
                        shaped
                        outlined
                        type="email"
                        placeholder="alabson.inc@gmail.com"
                        :rules="emailRules"
                        required
                    ></v-text-field>
                    <span class="caption grey--text text--darken-1">
                        This is field is required and email must be gmail
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="2">
                    <v-card-text>
                    <v-text-field
                        v-model="pass"
                        label="Password"
                        type="password"
                        outlined
                        shaped
                        required

                    ></v-text-field>
                    <span class="caption grey--text text--darken-1">
                        Please enter a password for your account
                    </span>
                    </v-card-text>
                </v-window-item>

                <v-window-item :value="3">
                    <div class="pa-4 text-center">
                    <v-img
                        class="mb-4"
                        contain
                        height="128"
                        src="https://cdn.vuetifyjs.com/images/logos/v.svg"
                    ></v-img>
                    <h3 class="title font-weight-light mb-2">Welcome to Crosssift</h3>
                    <span class="caption grey--text">Thanks for using Crosssift!!!</span>
                    <v-flex>
                        <v-btn outlined color="indigo" router to="/news" @click="dialog = false" class="mt-8">
                            Go to News
                        </v-btn>
                    </v-flex>
                    </div>
                </v-window-item>
                </v-window>

                <v-divider></v-divider>

                <v-card-actions>
                <v-btn
                    :disabled="step === 1"
                    text
                    @click="step--"
                >
                    Back
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn
                    :disabled="step === 3"
                    color="indigo darken-3"
                    dark
                    depressed
                    @click="step++"
                >
                    Next
                </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    <!-- </v-flex> -->
</template>

<script>
  export default {
    data: () => ({
      step: 1,
      dialog: false,
      pass: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Sign-up'
          case 2: return 'Create a password'
          default: return 'Account created'
        }
      },
    },
  }
</script>


<style scoped>
    #ban {
        margin-top: -24.5px;
        width: 100%;
    }
</style>