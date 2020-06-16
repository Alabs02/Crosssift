<template>
  <div>
    <v-card id="banner" min-height="100" width="100%" class="mx-auto">
      <v-container>
        <v-row id="share">
          <v-col cols="12" md="8" sm="6">
            <v-avatar color="purple" size="30">
              <v-icon size="25" color="white">mdi-account</v-icon>
            </v-avatar>
            <span class="ml-3 subtitle-1">Share the Happenings in your community</span>
          </v-col>

          <v-col cols="12" md="4" sm="6">
            <starter />
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </div>
</template>


<script>
import starter from "@/components/starter.vue";

export default {
  components: {
    starter: starter
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