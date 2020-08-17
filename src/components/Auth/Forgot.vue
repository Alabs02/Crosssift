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
                        v-model="forgotForm.email"
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
                    <v-btn color="indigo" class="white--text">
                        <span>reset</span>
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
            forgotForm: {
                email: ""
            },
        }
    },

    methods: {
        forgotPassword() {
            alert('Function fired')
            this.$store.dispatch('forgotPassword', {
                email: this.forgotForm.email
            })
        }
    }
}
</script>