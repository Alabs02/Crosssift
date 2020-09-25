<template>
    <div>
        <v-snackbar
            v-model="snackbarSuccess"
            color="success"
            dark
            :timeout="timeout"
            top
            multi-line
            vertical
        >
            
            <span><v-icon color="white" size="25">mdi-check-circle</v-icon><span class="ml-3 text-space">{{ successText }}</span></span>

            <v-btn
                text
                dark
                @click="this.$store.state.snackbarSuccess = false"
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
        ...mapState(['snackbarSuccess', 'successText']),
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