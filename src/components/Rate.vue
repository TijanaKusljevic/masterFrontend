<template>
    <v-container style="width: 65%">
      <v-container >
          <v-row>
            <span>
                <!-- ({{ rating }}) -->
                Oceni:
             </span>
            <v-rating
                v-model="rating"
                icon-label="custom icon label text {0} of {1}"
            ></v-rating>
          </v-row>
      </v-container>
    </v-container>
</template>

<script>
  export default {
      name: "Rate",
      data: () => ({
      rating: 4
    })
  }
</script>