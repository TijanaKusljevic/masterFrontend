<template>
    <div id="divo">
        <v-container  fill-width style="height: 100vh; max-height: 100%;">
            <v-row justify="center" align="center">
                 <DetailsUser/>
            </v-row>
        </v-container>
    </div>
</template>

<script>

import DetailsUser from "../components/DetailsUser.vue"

export default {
  name: 'UserDetails',
  components: {DetailsUser}
}

</script>

<style scoped>
#divo{
  margin-top: 70px;
}
</style>