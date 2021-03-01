<template>
    <v-container style="width: 65%">
      <form class="form" @submit = "createComment" ref="form">
          <v-card>
                <v-container>
                    <v-textarea
                        rows="3"
                        outline
                        v-model="content"
                        label="Komentar"
                    ></v-textarea>
                </v-container>
                <v-card-actions>
                    <v-btn type="submit">
                        Pošalji
                    </v-btn>
                    <v-btn @click="reset">
                        Odustani
                    </v-btn>
                </v-card-actions>
          </v-card>
      </form>
    </v-container>
</template>

<script>

import axios from "axios";

export default {
    name: "NewComment",
    props: {
        id: Number,
        guide: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return {
            content: ''
        };
    },
    methods: {
        createComment(e) {
            console.log("usao bla bla");
            e.preventDefault();
            if (this.guide) {
                axios.post("http://localhost:47000/api/guide/comment", {
                    content: this.content,
                    targetId: this.id
                })
                .then(() => {
                    console.log("podatke poslao");
                })
                .catch(()=>{
                    this.error = true;
                    console.log("error");
                })
                ;
            } else {
                axios.post("http://localhost:47000/tour/comment", {
                    content: this.content,
                    targetId: this.id
                })
                .then(() => {
                    console.log("podatke poslao");
                })
                .catch(()=>{
                    this.error = true;
                    console.log("error");
                })
                ;
            }
        },
        reset () {
        this.$refs.form.reset()
        
      }
    }
}
</script>