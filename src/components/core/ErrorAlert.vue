<template>
    <div>
        <!--    Error alert -->
        <v-snackbar
            v-model="snackbarError"
            color="error"
            dark
            :timeout="timeout"
            top
            multi-line
            vertical
        >
            <span><v-icon color="white" size="25">mdi-close-circle</v-icon><span class="ml-3 text-space">{{ errorText }}</span></span>

            <v-btn
                text
                dark
                @click="this.$store.state.snackbarError = false"
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
        ...mapState(['snackbarError', 'errorText']),
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