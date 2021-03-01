<template>
   <div id="miki">
    <v-app>
    <!-- <v-container fill-width style="height: 100vh; max-height: 100%;" class="klasa"> -->
    <v-app-bar color="primary" fixed id="bar" justify="center" align="center" > 
      <v-spacer></v-spacer>
      <v-btn-toggle
        tile
        group
        min-width="75vw"
      >
        <v-btn v-if="loggedIn" min-width="10vw" max-width="25vw" 
          v-on:click="$router.push('/tours').catch(err => {$router.go()})" >
          POČETNA
        </v-btn>

        <v-btn v-if="loggedIn && !isAdmin" min-width="10vw" max-width="25vw"
          v-on:click="$router.push('/myTours').catch(err => {$router.go()})" >
          MOJE TURE
        </v-btn>
        <v-btn v-if="loggedIn" min-width="10vw" max-width="25vw"
          v-on:click="$router.push('/guides').catch(err => {$router.go()})">
          VODIČI
        </v-btn>
        <v-btn v-if="loggedIn && isGuide" min-width="10vw" max-width="25vw"
          v-on:click="$router.push('/newTour').catch(err => {$router.go()})">
          NOVA TURA
        </v-btn>
        <v-btn v-if="loggedIn && isAdmin" min-width="10vw" max-width="25vw" 
          v-on:click="$router.push('/registration').catch(err => {$router.go()})" >
          REGISTRACIJA
        </v-btn>

        <v-menu offset-y v-if="loggedIn && isAdmin ">
        <template v-slot:activator="{ on, attrs }">
          <v-btn  v-bind="attrs" v-on="on" >
            KORISNICI
          </v-btn>
        </template>
        <v-card
          class="mx-auto"
          min-width="300"
          tile
        >
          <v-list>
            <v-list-item-group color="primary">
              <v-list-item v-if="loggedIn" v-on:click="$router.push('/allUsers').catch(err => {$router.go()})">
                <v-list-item-content>
                  <v-list-item-title v-if="loggedIn">Planinari</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="loggedIn" v-on:click="$router.push('/allGuides').catch(err => {$router.go()})">
                <v-list-item-content>
                  <v-list-item-title v-if="loggedIn">Vodiči</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
        
        
      </v-btn-toggle>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-spacer></v-spacer>
      <v-menu offset-y v-if="loggedIn">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" v-bind="attrs" v-on="on">
            <v-icon > {{icons.mdiAccount}} </v-icon>
          </v-btn>
        </template>
        <v-card
          class="mx-auto"
          min-width="300"
          tile
        >
          <v-list>
            <v-list-item-group color="primary">
              <v-list-item v-if="loggedIn" v-on:click="$router.push('/userDetails').catch(err => {$router.go()})">
                <v-list-item-content>
                  <v-list-item-title v-if="loggedIn">Moji podaci</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="loggedIn" v-on:click="$router.push('/changePassword').catch(err => {$router.go()})">
                <v-list-item-content>
                  <v-list-item-title v-if="loggedIn">Promeni lozinku</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item v-if="loggedIn" v-on:click="signOut">
                <v-list-item-content>
                  <v-list-item-title v-if="loggedIn">Izloguj se</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-card>
      </v-menu>
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
import {mapActions} from 'vuex';

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
   },
   computed:{
     loggedIn: function () {
        return store.getters['authentication/isLoggedIn'];
      },
      isAdmin(){
        return store.getters['authentication/getRole']=="ADMIN";
      },
      isGuide(){
        return store.getters['authentication/getRole']=="GUIDE";
      }
   },
   methods:{
     ...mapActions({
            signOutAuth:'authentication/signOut'
        }),

      signOut(){
          this.signOutAuth();
          this.$router.push('/');
      }
   }
}
</script>

<style scoped>
#miki{
  width: 100%
}

</style>




