<template>
    <div>
        <v-row justify="center">
            <v-dialog v-model="dialog" persistent="" max-width="600px">
                <template v-slot:activator="{ on, attr }">
                    <v-btn
                        class="hidden-lg-only"
                        icon
                        color="indigo"
                        v-bind="attr"
                        v-on="on"
                    >
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </template>

                <v-card>
                    <v-container>
                        <v-btn
                            left=""
                            ripple="" 
                            class="pink--text mt-n2 mr-n2 close-icon-btn"   
                            icon=""   
                            small=""
                            @click="dialog = !dialog"            
                        >
                            <v-icon>mdi-close</v-icon>
                        </v-btn>
                        <v-row>
                            <v-col
                                cols="12"
                                md="12"
                                sm="12"
                            >
                                <v-text-field
                                    v-model="search"
                                    flat
                                    hide-details
                                    label="Search"
                                    prepend-inner-icon="mdi-database-search"
                                    solo-inverted
                                    rounded
                                    clearable
                                    class="mt-3"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-container>
                            <v-card-title class="overline font-weight-bold">Results</v-card-title>
                        </v-container>
                    </v-container>
                </v-card>
            </v-dialog>
        </v-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            dialog: false,
            search: "",
        }
    }
}
</script>

<style scoped>
    .close-icon-btn {
        /* top: 0 !important;
        right: 0 !important; */
        float: right !important;
    }
</style>