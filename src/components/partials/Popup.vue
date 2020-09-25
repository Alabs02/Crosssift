<template>
  <div>
    <v-card class="mt-n4 mb-4" id="card">
      <v-row>
        <v-col md="8" cols="12">
          <v-card-text>
            <v-icon class="mt-n3" color="purple">mdi-account-group</v-icon>
            <span class="ml-3 mt-n2 body-1">Impact the world by sharing the happenings around you</span>
          </v-card-text>
        </v-col>

        <v-col md="4" cols="12">
          <v-card-text>
            <v-row justify-sm="center">
              <v-btn
                outlined
                color="indigo darken-1"
                router to="/auth"
                class="mt-n3"
                id="btn"
              >
                <v-icon left>mdi-speedometer</v-icon>
                get started
              </v-btn>
            </v-row><br>
          </v-card-text>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>


<script>
// import starter from "@/components/starter.vue";

export default {
  components: {
    // starter: starter
  }
};
</script>

<style scoped>
#banner {
  transform: translateY(-1rem) !important;
}
#share {
  transform: translateY(-0.8rem) !important;
}


@media screen and (max-width: 1024px) {
  #card {
    height: 220px !important;
    text-align: center !important;
  }
  #btn {
    margin-top: -1rem !important;
    margin: auto;
    width: 50%;
  }
}
</style>