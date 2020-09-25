<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent="" max-width="400">
            <template v-slot:activator="{ on }">
                <v-btn v-on="on" text small color="indigo" class="ml-3 mt-n2" >Forgot?</v-btn>
            </template>

            <v-card>
                <v-container></v-container>
                <v-card-text>
                    <v-text-field
                        v-model="form.email"
                        label="Email"
                        type="email"
                        outlined
                        color="indigo"
                        placeholder="johndeo@thecrossift.com"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="grey" class="white--text" @click="dialog=false">
                        <span>cancel</span>
                    </v-btn>
                    <v-btn @click="forgotPassword" color="indigo" class="white--text">
                        <span>reset</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <div>
            <!-- Alert Handlers  -->
            <success-alert></success-alert>  
            <error-alert></error-alert>
            <warning-alert></warning-alert>
        </div>
    </v-row>
</template>

<script>
import * as fb from '@/firebaseConfig.js'
// import { mapState, mapActions, mapMutations } from 'vuex'
import SuccessAlert from '@/components/core/SuccessAlert.vue'
import ErrorAlert from '@/components/core/ErrorAlert.vue'
import WarningAlert from '@/components/core/WarningAlert.vue'

export default {
    components: {
        'success-alert': SuccessAlert,
        'error-alert': ErrorAlert,
        'warning-alert': WarningAlert,
    },
    data() {
        return {
            dialog: false,
            form: {
                email: ""
            },
        }
    },

    computed: {
    },

    methods: {  
        forgotPassword: () => {
            // eslint-disable-next-line no-unused-vars
            fb.auth.sendPasswordResetEmail(this.form.email).then(response => {
                this.$store.commit('SET_SUCCESS_TEXT', "Email sent")
                this.$store.commit('SET_SNACKBAR_SUCCESS')
                setTimeout(() => {
                    this.dialog = false
                }, 3600);
            }).catch(error => {
                this.$store.commit('SET_ERROR_TEXT',`${error}`)
                this.$store.commit('SET_SNACKBAR_ERROR')
                setTimeout(() => {
                    this.dialog = false
                }, 3600);
            })
        },
    }
}
</script>