<template>
    <v-container class="klasa" >
        <v-row >
          <NewTour/>
       </v-row>
    </v-container>
</template>

<script>

/*import store from "../store";*/
import NewTour from "../components/NewTour.vue"

export default {
  name: 'NewTourView',
  components: {NewTour}
  /*data(){
    return{
      tok: ''
    }
  },*/
  /*created(){
    this.tok = store.getters["authentication/getToken"];
  }*/
//store.getters["authentication/getToken"];
}
</script> 

<style scoped>
.klasa{
  display: table;
  width: 100%;
  margin-top: 90px;
}
</style>



