<template>
    <div>
    <v-toolbar
      id="bar-color"
      dark
      extended
      flat
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-toolbar>

    <v-card
     flat
     class="mx-auto"
     style="margin-top: -64px;"
     max-width="1000"
     id="col"
    > 
        <v-row
        justify="center"
        >
            <v-col
            cols="12"
            md="5"
            >
            <v-card 
                class="mx-auto grey lighten-3"
                >
                    <div class="text-center">
                        <v-avatar size="100">
                            <v-icon color="indigo" style="font-size: 70px;">mdi-phone</v-icon>
                        </v-avatar>

                        <v-flex>
                            <v-card-title class="justify-center headline purple--text text--darken-2">Contact Us</v-card-title>
                        </v-flex>

                        <v-sheet>
                            <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum architecto laudantium nostrum magnam ad aut quod, libero asperiores nam doloribus veritatis cumque iure a! Alias placeat obcaecati aspernatur maiores culpa!</v-card-text>
                        </v-sheet>

                        <v-card-actions class="text-center">
                            <v-btn
                             color="purple darken-3"
                             text
                            >
                                <span class="indigo--text text--lighten-3">+234</span> <span class="indigo--text text--darken-3">90567833222</span>
                            </v-btn>
                        </v-card-actions>

                    </div>
                    
                </v-card>
            </v-col>

            <v-col
            cols="12"
            md="5"
            >
                <v-card 
                class="mx-auto grey lighten-3"
                >
                    <div class="text-center justify-center">
                        <v-avatar size="100">
                            <v-icon color="indigo" style="font-size: 70px;">mdi-chat</v-icon>
                        </v-avatar>

                        <v-flex>
                            <v-card-title class="justify-center headline purple--text text--darken-2">Message Us</v-card-title>
                        </v-flex>

                        <v-sheet>
                            <v-card-text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non at rerum commodi temporibus perferendis dolor quo sapiente, optio minima facilis aperiam suscipit saepe dolorem ipsa. Neque nihil ducimus ex animi?</v-card-text>
                        </v-sheet>

                        <div class="text-center">
                            <v-card-actions>
                                <v-btn
                                color="pink lighten-1"
                                dark
                                >
                                    <span>Contact Support</span>
                                </v-btn>
                            </v-card-actions>
                        </div>
                    </div>
 
                </v-card>
            </v-col>
        </v-row>

        <v-container>
            <v-card
             class="mx-auto"
             max-width="900"
             
            >
                <div class="text-center">
                    <v-text>{{ location }}</v-text>
                    <v-sheet>
                        <iframe 
                         src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7859.440401375894!2d8.88650025431327!3d9.957221481318577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1053727e4edf2bc3%3A0xc601a3a3204c783d!2sUniversity%20Of%20Jos!5e0!3m2!1sen!2sng!4v1580375201913!5m2!1sen!2sng" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen=""
                         ></iframe>
                    </v-sheet>
                </div>
            </v-card>
        </v-container>
    </v-card>
    </div>
</template>


<script>
export default {
    data: () => ({
        //
        location: 'Connect with us',
    }),
}
</script>


<style scoped>
    #col {
      background-color: transparent;
    }

    #bar-color {
        background: linear-gradient(to top right, #673AB7, #1A237E);
    }
</style>