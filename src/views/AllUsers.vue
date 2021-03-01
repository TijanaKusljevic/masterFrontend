<template>
  <v-container fill-width style="height: 100vh; max-height: 100%;" class="klasa1">
    <v-row justify="center" align="center">
        <Users/>
    </v-row>
    </v-container>
</template>

<script>

import Users from "../components/Users.vue"

export default {
  name: 'AllUsers',
  components: {Users}
}

</script>

<style scoped>
.klasa1{
  margin-top: 100px;
}
</style>
