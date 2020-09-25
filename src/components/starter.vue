<template>
    <div>
        <v-dialog v-model="dialog" persistent max-width="450">
            <template v-slot:activator="{ on }">
                <v-btn
                 outlined
                 color="indigo darken-2"
                 v-on="on"
                 class="getBtn"
                >
                    <v-icon class="left">mdi-speedometer</v-icon>
                    <span>Get Started</span>
                </v-btn>
            </template>

            <v-card class="mx-auto">
                <v-card-title class="text-center justify-center py-6">
                    <h1 class="font-weight-bold body-1 indigo--text">CROSSIFT</h1>
                </v-card-title>

                <v-tabs
                 v-model="tab"
                 background-color="transparent"
                 color="indigo"
                 grow
                >
                    <v-tabs-slider></v-tabs-slider>

                    <v-tab
                     href="#login"
                    >
                        Login
                    </v-tab>

                    <v-tab
                     href="#signup"
                    >
                        Sign-Up
                    </v-tab>
                </v-tabs>

                <v-tabs-items v-model="tab">
                    <v-tab-item
                     id="login"
                    >
                        <v-container>
                            <v-card flat>
                                <v-row justify="center">
                                    <v-col
                                    cols="12"
                                    md="12"
                                    sm="12"
                                    >
                                        <v-text-field
                                        label="Email"
                                        type="email"
                                        outlined
                                        shaped
                                        color="indigo darken-2"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="12"
                                    sm="12"
                                    >
                                        <v-text-field
                                        label="Password"
                                        type="password"
                                        outlined
                                        shaped
                                        color="indigo darken-2"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-btn @click="close" ripple  color="blue-grey lighten-4" class="blue-grey--text text--darken-4">Close<v-icon right>mdi-close</v-icon></v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn router to="/news" ripple dark color="indigo">Login</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-container>
                    </v-tab-item>

                    <v-tab-item
                     id="signup"
                    >
                        <v-container>
                            <v-card flat>
                                <v-row justify="center">
                                    <v-col
                                    cols="12"
                                    md="12"
                                    sm="12"
                                    >
                                        <v-text-field
                                        label="Fullname"
                                        type="text"
                                        outlined
                                        shaped
                                        color="indigo darken-2"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="12"
                                    sm="12"
                                    >
                                        <v-text-field
                                        label="Create Password"
                                        type="password"
                                        outlined
                                        shaped
                                        color="indigo darken-2"
                                        ></v-text-field>
                                    </v-col>

                                    <v-col
                                    cols="12"
                                    md="12"
                                    sm="12"
                                    >
                                        <v-text-field
                                        label="Confirm Password"
                                        type="password"
                                        outlined
                                        shaped
                                        color="indigo darken-2"
                                        ></v-text-field>
                                    </v-col>
                                </v-row>
                                <v-divider></v-divider>

                                <v-card-actions>
                                    <v-btn @click="close" ripple  color="blue-grey lighten-4" class="blue-grey--text text--darken-4">Close<v-icon right>mdi-close</v-icon></v-btn>

                                    <v-spacer></v-spacer>

                                    <v-btn ripple dark color="indigo">Sign-Up</v-btn>
                                </v-card-actions>
                            </v-card>
                        </v-container>
                    </v-tab-item>
                </v-tabs-items>
                
            </v-card>
        </v-dialog>
    </div>
</template>


<script>
export default {
    data() {
        return {
            tab: null,
            dialog: false,
        }
    },

    methods: {
        close() {
            this.dialog = false;
        }
    }
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
    .getBtn {
        margin-bottom: 2rem !important;
    }
}
</style>