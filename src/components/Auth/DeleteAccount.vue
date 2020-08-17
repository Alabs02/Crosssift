<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent="" max-width="400">
            <template v-slot:activator="{ on }">
                <v-spacer></v-spacer>
                <v-btn dark color="red" v-on="on">
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
                        <v-card-text class="red--text text-center text--lighten-2">johndeo@thecrossift.com</v-card-text>
                    </v-container>
                </v-row>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn small text color="grey" class="white--text" @click="dialog=false">
                        <span>cancel</span>
                    </v-btn>
                    <v-btn small @click="deleteAccount" dark color="red" class="white--text">
                        <span class="text-none" style="text-transform: capitalise !miportant">I understand the consequences</span>
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            updateEmailForm: {
                newEmail: ""
            },
        }
    },

    methods: {
        deleteAccount() {
            alert("Function fired")
            this.$store.dispatch('deleteAccount')
        }
    }
}
</script>

<style scoped>
 
</style>