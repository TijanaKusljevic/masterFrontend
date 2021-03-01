<template>
  <v-container fill-width style="height: 100vh; max-height: 100%;" class="klasa1">
        <v-row>
            Predstojeće ture:
        </v-row>
        <v-row justify="center" align="center">
          <MyTourList/>
       </v-row>
       <v-row>
            Prethodne ture:
        </v-row>
        <v-row justify="center" align="center">
          <MyPreviousTourList/>
       </v-row>
    </v-container>
</template>

<script>
// @ is an alias to /src
import MyTourList from "../components/MyTourList.vue"
import MyPreviousTourList from "../components/MyPreviousTourList.vue"

export default {
  name: 'MyTours',
  components: {MyTourList, MyPreviousTourList}
}
</script>

<style scoped>
.klasa1{
  margin-top: 100px;
}
</style>