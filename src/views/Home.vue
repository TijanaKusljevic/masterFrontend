<template>
  <div class="home">
    <v-app>
    <Login/>
    </v-app>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "../components/Login.vue"

export default {
  name: 'Home',
  components: {Login}
}
</script>

<style >
.home {
  overflow: hidden !important;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

</style>

