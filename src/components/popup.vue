<template>
  <div class="text-center">
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on }">
        <v-btn
         outlined
         color="indigo darken-3"
         v-on="on"
        >
            <v-icon left>mdi-speedometer</v-icon>
            <span>Get Started</span>
        </v-btn>
      </template>

    <v-card color="basil"  max-width="600">
        <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 indigo--text">Crossift</h1>
        </v-card-title>

        <v-tabs
        v-model="tab"
        background-color="transparent"
        color="purple darken-4"
        grow
        >
        <v-tab
            v-for="tab in tabs"
            :key="tab"
        >
            {{ tab }}
        </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
        <v-tab-item
            v-for="tab in tabs"
            :key="tab"
        >
            <v-card
             class="mx-auto"
             max-width="500"
            >
                <v-card-title class="title font-weight-regular justify-space-between">
                    <span>{{ currentTitle }}</span>
                    <v-avatar
                     color="indigo lighten-2"
                     class="subheading white--text"
                     size="27"
                     v-text="step"
                    ></v-avatar>
                </v-card-title>

                <!-- <v-window v-model="step">
                    <v-form v-model="valid">
                        <v-window-item :value="1">
                            <v-card-text>
                                    <v-text-field
                                        v-model="email"
                                        label="Email"
                                        type="email"
                                        :counter="10"
                                        required
                                        Placeholder="someone@gmail.com"
                                    ></v-text-field>
                                    <span>Required for your Login</span>
                            </v-card-text>
                        </v-window-item>

                        <v-window-item :value="2">
                            <v-card-text>
                                <v-text-field
                                 label="Password"
                                 type="password"
                                ></v-text-field>
                                <span class="caption grey--text text--darken-1">
                                    Please enter a password for your account
                                </span>
                            </v-card-text>
                        </v-window-item>
                    </v-form>
                </v-window> -->

                <v-divider></v-divider>

                <v-card-actions>
                    <v-btn
                        :disabled="step === 1"
                        text
                        v-on_click="step--"
                    >
                        <span>Back</span>

                        <v-spacer></v-spacer>

                        <v-btn
                         :disabled="step === 2"
                         depressed
                         color="indigo"
                         @click="step++"
                        ></v-btn>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-tab-item>
        </v-tabs-items>
    </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
    data: () => ({
        dialog: false,
        tab: null,
        icons: true,
        centered: true,
        step: 1,
        tabs: [
          'Login', 'Sign-up',
        ],
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor',
       
    }),

    computed: {
        currentTitle () {
            switch (this.step) {
                case 1: return 'Login Details'
                default: return 'Password Needed'
            }
        }
    },
}
</script>

<style scoped>
    /* Helper classes */
    .basil {
    background-color: #FFFBE6 !important;
    }
    .basil--text {
    color: #356859 !important;
    }
</style>