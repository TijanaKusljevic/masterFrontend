<template>
    <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-img
      :src="image"
      width="300px"
    ></v-img>

    <v-card-title>
      {{firstName}}  {{lastName}}
    </v-card-title>

    <v-card-actions>
      <v-btn
        color="primary"
        text
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
        firstName: String,
        lastName: String,
        telephone: String,
        email: String,
        licence: String,
        biography: String,
    },
    data(){
       return {image: image}
    }
}
</script>