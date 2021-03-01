<template>
<div class="top">
<router-view/>
<section class="container">
  <div class="left-half">
    <img :src="image"/>
  </div>
  <div class="right-half">
    <v-container>
    <form @submit="login" method="post" class="form">
        <!-- <input type="text" v-model="username" placeholder="username" > -->
        <v-container> 
          <v-row>
            <v-col cols="12" sm="10" > 
              <v-text-field label="korisničko ime" v-model="username" />  
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="10" > 
              <v-text-field label="lozinka" v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'" 
              hint="Barem 8 karaktera" counter @click:append="show1 = !show1"/>  
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="10" > 
              <v-btn elevation="2" color="#1E90FF" type="submit" style="color:white">Prijavi se</v-btn>  
            </v-col>
          </v-row>
        </v-container>
        <!-- <input type="password" v-model="password" placeholder="password" > 
        <button type="submit"> uloguj se </button>    -->
    </form>
    <div class = "snackbar"> 
      <v-snackbar v-model="error" color="red"> 
          <span> Neispravni kredencijali! </span>
          <v-btn color="red" text @click="error = false" >
                Zatvori
          </v-btn>
      </v-snackbar>
    </div>
    </v-container>
  </div>
</section>
    
</div>
</template>

<script>

import axios from "axios";
import image from "../assets/Planinarenje.jpg";
import {mapActions} from "vuex";

export default {
    name: "Login",
    data(){
        return {show1: false, username:'', password:'', image: image, error: false};
    },
    methods: {
        login(e){
            e.preventDefault();
            console.log(this.username + this.password);
            axios.post("http://localhost:47000/login",{username: this.username, password: this.password})
            .then(res => {
              this.signIn(res.headers["token"]);
              console.log("postavljen token");
              axios.get("http://localhost:47000/api/user/role")
              .then(res => {
                console.log("rola se postavlja");
                this.role(res.data);
              });
              this.$router.push('/tours');
            })
            .catch(()=>{
                this.error = true;
                console.log("error");
            })
            ;
        },
        ...mapActions({signIn: "authentication/signIn", role: "authentication/role"})
    }
}

</script>

<style scoped>
* {
  box-sizing: border-box;
}


body {
  font-size: 1.25rem;
  font-family: sans-serif;
  line-height: 150%;
  color: #fff;
  /*text-shadow: 0 2px 2px #1f0566;*/
  overflow:hidden;
  margin: 0;
  padding: 0;
  display:flex;
}

section {
  text-align: center;
  height: 100%;
}

/*div {
  height: 100%;
}*/

img {
  /*position: absolute;*/
  top: 20%;
  left: 20%;
  transform: translate(-2%, -2%);
  width: 100%;
  height: 100%;
  /*padding: px;
  display: block;*/
}


/* Pattern styles */
.container {
  display: table;
  width: 100%;
}

.left-half {
  position: absolute;
  left: 0px;
  width: 75%;
}

.right-half {
  /*background-color: #2467be;*/
  position: absolute;
  right: 0px;
  width: 25%;
  height: 100%;
}

.form{
   margin:auto;
   height: 100%;
   margin-top: 40px;
}

.snackbar{
  margin:auto;
  position: absolute;
  right: 0px;
}
</style>