<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent="" max-width="400">
            <template v-slot:activator="{ on }">
                <v-spacer></v-spacer>
                <v-btn dark rounded color="red" v-on="on">
                    <v-icon left>mdi-delete</v-icon>
                    Delete account
                </v-btn>
            </template>

            <v-card>
                <v-toolbar color="red"  flat dark> 
                    <v-row no-gutters class="mt-1">
                        <v-icon>mdi-alert</v-icon><v-toolbar-title class="title ml-3">Delete account</v-toolbar-title>
                    </v-row>
                </v-toolbar>
                <v-divider></v-divider>
                <v-container></v-container>
                <v-row no-gutters justify="">
                    <v-container>
                        <h6 class="headline text-center">Are you absolutely sure?</h6>
                        <v-card-text class="red--text text-center text--lighten-2">{{ userProfile.email }}</v-card-text>
                    </v-container>
                </v-row>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn small text color="grey" class="white--text" @click="dialog=false">
                        <span class="grey--text text--darken-3">cancel</span>
                    </v-btn>
                    <v-btn small @click="deleteAccount" dark color="red" class="white--text">
                        <span class="text-none" style="text-transform: capitalise !miportant">I understand the consequences</span>
                    </v-btn>
                </v-card-actions>
                 <div>
                    <success-alert></success-alert>  
                    <error-alert></error-alert>
                    <warning-alert></warning-alert>
                </div>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
import { mapState } from 'vuex'
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
            showDelBtn: true,
            updateEmailForm: {
                newEmail: ""
            },
        }
    },

    computed: {
        ...mapState(['userProfile']),
    },

    created() {
        this.showBtn()
    },

    methods: {
        deleteAccount() {
            alert("Function fired")
            this.$store.dispatch('deleteAccount')
        },
    }
}
</script>

<style scoped>
 
</style>