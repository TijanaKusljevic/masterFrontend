<template>
    <div id="divo">
        <container  fill-width style="height: 100vh; max-height: 100%;"  class="klasa" id="conto">
            <v-row justify="center" align="center">
                <TourDetails
                    :tourId="tour.tourId" 
                    :name="tour.name" 
                    :startDate="tour.startDate"
                    :endDate="tour.endDate"
                    :days="tour.days"
                    :nights="tour.nights"
                    :physicalAbility="tour.physicalAbility"
                    :description="tour.description"
                    :guideName="tour.guideName"
                    :img="tour.imageSrc"
                    :finished="tour.finished"
                    :signedIn="tour.signedIn"
                    :mounteneers="tour.mounteneers"
                />
            </v-row>
            <v-row justify="left" align="left">
                <Rate/>
            </v-row>
            <v-row justify="center" align="center">
                <v-btn v-if="!showComments" @click="showCommentsMethod" text> Prikazi komantare </v-btn>
                <v-btn v-if="showComments" @click="hideCommentsMethod" text> Skloni </v-btn>
            </v-row>
            <br>
            <br>
            <div v-if="showComments">
                <v-row justify="left" align="left">
                    <NewComment :id = "tour.tourId"/>
                </v-row>
                <v-row v-for="comment in list" :key="comment.id" >
                    <Comment
                        :id="comment.id"
                        :name="comment.name"
                        :content="comment.content"
                        :isGuide=false
                    />
                </v-row>    
            </div>
        </container>
    </div>
</template>

<script>

import TourDetails from "@/components/TourDetails.vue";
import Comment from "@/components/Comment.vue";
import NewComment from "@/components/NewComment.vue";
import Rate from "@/components/Rate.vue";
import axios from "axios";

export default {
    name: "TourView",
    components: {TourDetails, Comment, NewComment, Rate},
    data(){
        return {
            id: '',
            tour: null,
            showComments: false,
            list: null
        }
    },
    mounted(){
        console.log("usao");
        this.id = this.$route.params.id;
        axios.get("http://localhost:47000/tour/tour/" + this.id) 
        .then(res => {this.tour = res.data;})
        .catch(()=>{
                console.log("error");
        });
    },
    methods:{
        showCommentsMethod(e){
            e.preventDefault(); /* poziva se beken za listu komentara*/ 
            axios.get("http://localhost:47000/tour/comments/" + this.id)
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
.klasa{
  display: table;
  width: 100%;
}
#divo{
  margin-top: 90px;
}
</style>

