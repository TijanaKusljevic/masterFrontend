<template>
   <div id="miki">
    <v-app>
    <!-- <v-container fill-width style="height: 100vh; max-height: 100%;" class="klasa"> -->
    <v-app-bar color="primary" fixed id="bar" justify="center" align="center" > 
      <v-spacer></v-spacer>
      <v-btn-toggle
        v-model="text"
        tile
        group
        min-width="75vw"
      >
        <v-btn value="left" min-width="10vw" max-width="25vw">
          POCETNA
        </v-btn>

        <v-btn value="center" min-width="10vw" max-width="25vw">
          MOJE TURE
        </v-btn>
        <v-btn value="right" min-width="10vw" max-width="25vw">
          VODICI
        </v-btn>
        
        
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
        <v-btn color="primary">
          <v-icon > {{icons.mdiAccount}} </v-icon>
          
        </v-btn>
    </v-app-bar>  
    <!-- </v-container>  -->
    <router-view/>
    </v-app>  
  </div>
</template>

<script>

import store from './store' ;
import axios from "axios";
import {mdiAccount} from '@mdi/js'; 

export default {
  name:"App",
  data: () => ({
    icons: {
        mdiAccount
    }
    }),
   created(){
    axios.interceptors.request.use(
      async config => {
        config.headers = { 
          'Authorization':`${store.getters['authentication/getToken']}`
        }
        return config;
      },
      error => {
        Promise.reject(error)
    });
   }
}
</script>

<style scoped>
#miki{
  width: 100%
}

</style>




