<template>
  <div>
    <v-card id="banner" min-height="100" width="100%" class="mx-auto">
      <v-container>
        <v-row id="share" class="mt-6">
          <v-col cols="12" md="8" sm="6">
            <v-avatar color="purple" size="35">
              <v-icon size="25" color="white">mdi-account-group</v-icon>
            </v-avatar>
            <span class="ml-3 body-1 font-weight-medium">Share the happenings in your community</span>
          </v-col>

          <v-col cols="12" md="4" sm="6">
            <v-btn
              outlined
              ripple
              color="indigo"
              router to="/auth"
              class="mt-1"
            >
              <v-icon left>mdi-speedometer</v-icon>
              <span>Get started</span>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
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
  #banner {
    height: 180px !important;
    text-align: center !important;
  }
}
</style>