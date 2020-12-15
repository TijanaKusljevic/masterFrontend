<template>
  <v-container fill-width style="height: 100vh; max-height: 100%;" class="klasa1">
        <v-row justify="center" align="center">
          <GuideList/>
       </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import GuideList from "../components/GuideList.vue"

export default {
  name: 'Guides',
  components: {GuideList}
}
</script>

<style scoped>
.klasa1{
  margin-top: 100px;
}
</style>