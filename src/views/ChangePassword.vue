<template>
    <div id="divo">
        <v-container  fill-width style="height: 100vh; max-height: 100%;">
            <v-row justify="center" align="center">
                 <PasswordChange/>
            </v-row>
        </v-container>
    </div>
</template>

<script>

import PasswordChange from "../components/PasswordChange.vue"

export default {
  name: 'ChangePassword',
  components: {PasswordChange}
}

</script>

<style scoped>
#divo{
  margin-top: 100px;
}
</style>