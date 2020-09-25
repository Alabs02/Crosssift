<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" persistent="" max-width="400">
            <template v-slot:activator="{ on }">
                <v-btn icon v-on="on">
                    <v-icon size="25" color="blue darken-4">mdi-pencil</v-icon>
                </v-btn>
            </template>

            <v-card>
                <v-container></v-container>
                <v-card-text>
                    <v-text-field
                        v-model="newUsername"
                        label="Username"
                        outlined=""
                        color="indigo"
                        placeholder="John_D"
                    ></v-text-field>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text color="grey" class="white--text" @click="dialog=false">
                        <span>cancel</span>
                    </v-btn>
                    <v-btn @click="updateUsername" color="indigo" class="white--text">
                        <span>update</span>
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
            updateUsernameForm: {
                newUsername: ""
            },
        }
    },
    methods: {
        updateUsername() {
            this.$store.dispatch('updateUsername', {
                newUsername: this.updateUsernameForm.newUsername
            })
        },
    }
}
</script>