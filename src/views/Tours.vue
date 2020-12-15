<template>
  <v-container fill-width style="height: 100vh; max-height: 100%;" class="klasa1">
        <v-row justify="center" align="center">
          <TourList/>
       </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import TourList from "../components/TourList.vue"

export default {
  name: 'Tours',
  components: {TourList}
}
</script>

<style scoped>
.klasa1{
  margin-top: 100px;
}
</style>