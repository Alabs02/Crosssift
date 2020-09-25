<template>
    <v-card min-height="95" elevation="12">
        <!-- <p>Name: {{ userName }}</p> -->
        <!-- <button id="btn" class="btn-primary"></button>
        <button id="btn" class="btn-primary"></button>
        <button id="btn" class="btn-primary"></button> -->
        <v-container>
            <v-form @submit.prevent ref="form">
                <v-row no-gutters>
                    <v-col cols="11" class="space-between" >
                        <v-textarea
                            v-model.trim="form.comment"
                            id="commentArea"
                            rows="2"
                            type="text"
                            no-resize
                            hide-details
                            filled
                            auto-grow
                            autofocus
                            rounded
                            label="Comment"
                            placeholder="Type a comment..."
                            clearable
                            color="purple"
                        ></v-textarea>
                    </v-col>

                    <v-col cols="1">
                        <v-btn @click="addComment(post)" :disabled="form.comment == ''" :loading="loader" color="purple" icon x-large class="mt-2 ml-1">
                            <v-icon size="40" id="send_icon">mdi-telegram</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-container>
    </v-card>
</template>

<script>
import { commentsCollection, postsCollection, auth } from '@/firebaseConfig'
import { mapState } from 'vuex'

export default {
    data() {
        return {
            form: {
                comment: ""
            },
            loader: false,
            userName: this.$store.state.userData.name, 
        }
    },

    computed: {
        ...mapState({ 'post': 'fullpost'})
    },

    methods: {
        resetForm() {
            this.$refs.form.reset()
        },
        async addComment(post) {
            // create comment
            if (this.form.comment != "") {
                this.loader = true
                commentsCollection.add({
                    createdOn: new Date(),
                    content: this.form.comment,
                    postId: post.id,
                    userId: auth.currentUser.uid,
                    userAvatar: auth.currentUser.photoURL,
                    userName: this.userName,
                    likes: 0
                }).then(() => {
                    alert("Comment successful 🖤")
                }).catch(err => {
                    alert(err)
                })

                // update comment count on post
                await postsCollection.doc(post.id).update({
                    comments: parseInt(post.comments, 10) + 1
                })
                this.resetForm()
                this.loader = false
            } else {
                this.loader = false
                alert("Type a comment!")
            }
        },

        
    }
    
}
</script>

<style scoped>
@media screen and (max-width: 1024px) {
    .v-btn--icon.v-size--x-large {
        margin-top: 20px !important;
        height: 30px;
        width: 30px;
    }
}
</style>