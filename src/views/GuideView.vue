<template>
    <div id="divo">
        <container  fill-width style="height: 100vh; max-height: 100%;" id="conto">
            <v-row justify="center" align="center">
                <v-col>
                    <GuideDetails
                        :guideId="guide.guideId"
                        :firstName="guide.firstName" 
                        :lastName="guide.lastName" 
                        :telephone="guide.telephone" 
                        :email="guide.email" 
                        :licence="guide.licence" 
                        :biography="guide.biography" 
                    />
                </v-col>
          </v-row>
          <v-row justify="center" align="center">
                <v-btn v-if="!showComments" @click="showCommentsMethod" text> Prikazi komantare </v-btn>
                <v-btn v-if="showComments" @click="hideCommentsMethod" text> Skloni </v-btn>
            </v-row>
            <br>
            <br>
            <div v-if="showComments">
                <v-row justify="left" align="left">
                    <NewComment :id = "guide.guideId" :guide = "true"/>
                </v-row>
                <v-row v-for="comment in list" :key="comment.id" >
                    <Comment
                        :id="comment.id"
                        :name="comment.name"
                        :content="comment.content"
                        :isGuide=true
                    />
                </v-row>    
            </div>
        </container>
    </div>
</template>

<script>

import GuideDetails from "@/components/GuideDetails.vue";
import Comment from "@/components/Comment.vue";
import NewComment from "@/components/NewComment.vue";
import axios from "axios";

export default {
    name: "GuideView",
    components: {GuideDetails, Comment, NewComment},
    data(){
        return {
            id: '',
            showComments: false,
            guide: null,
            list: null
        }
    },
    mounted(){
        this.id = this.$route.params.id;
        axios.get("http://localhost:47000/api/guide/"+this.id)
        .then(res => {this.guide = res.data;});
    },
    methods:{
        showCommentsMethod(e){
            e.preventDefault(); /* poziva se beken za listu komentara*/ 
            axios.get("http://localhost:47000/api/guide/comments/" + this.id)
            .then(res => {this.list = res.data});
            this.showComments = true;
        },
        hideCommentsMethod(e){
            e.preventDefault();
            this.showComments = false;
        }
    }
}
</script>

<style scoped>

#divo{
  margin-top: 90px;
}
</style>

