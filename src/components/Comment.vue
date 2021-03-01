<template>
<v-container style="width: 65%">
      <v-card
      >
        <div class="d-flex flex-no-wrap ">
          
          <div>
            <v-card-title
              class="headline"
            >
            <span style="font-size: 75%">
              {{name}}
            </span>
            </v-card-title>

            <v-card-text>
              {{content}}
            </v-card-text>
            <v-card-actions>
              <v-btn @click="deleteComment">
                  Obriši
              </v-btn>
            </v-card-actions>
          </div>
        </div>
      </v-card>
    </v-container>
</template>

<script>
import axios from "axios";

  export default {
      name: "Comment",
      props: {
        id: Number,
        name: String,
        content: String,
        isGuide: Boolean
      },
      methods: {
        deleteComment(){
          console.log("useo u dlete comment");
          if(this.isGuide){
            console.log("useo u if isGuide");
            axios.delete("http://localhost:47000/api/removeComment/" + this.id) 
            .then(() =>{})
            .catch(()=>{
                console.log("error");
            });
          }else{
            axios.delete("http://localhost:47000/tour/removeComment/" + this.id) 
            .then(() =>{})
            .catch(()=>{
                console.log("error");
            });
          }
        }
      }
  }
</script>