<template>
    <div>
        <!--  Warning alert -->
        <v-snackbar
            v-model="snackbarWarning"
            color="warning"
            dark
            :timeout="timeout"
            top
            multi-line
            vertical
        >
            <span><v-icon color="white" size="25">mdi-alert-circle</v-icon><span class="ml-3 text-space">{{ warningText }}</span></span>
            
            <v-btn
                text
                dark
                @click="this.$store.state.snackbarWarning = false"
            >Close</v-btn>
            
        </v-snackbar>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data() {
        return {
            timeout: 3500,
        }
    },

    computed: {
        ...mapState(['snackbarWarning', 'warningText']),
    },

    methods: {

    }
}
</script>

<style scoped>
.text-space {
    letter-spacing: .6px !important;
}
</style>