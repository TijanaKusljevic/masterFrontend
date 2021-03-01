<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      v-bind:src="'data:image/jpeg;base64,'+img"
      width="300px"
    ></v-img>

    <v-card-title>
      {{firstName}}  {{lastName}}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="primary"
        text
        @click="showGuide"
      >
        Detaljnije
      </v-btn>

    </v-card-actions>

  </v-card>
</template>

<script>

import image from "../assets/slicica.jpg";

export default {
    name: "Guide",
    props: {
        guideId: Number,
        firstName: String,
        lastName: String,
        telephone: String,
        email: String,
        licence: String,
        biography: String,
        img: String,
    },
    data(){
       return {image: image}
    },
    methods: {
      showGuide(){
        this.$router.push(/guideDetails/+this.guideId);
      }
    }
}
</script>