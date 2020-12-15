<template>
    <div id="divo">
        <container  fill-width style="height: 100vh; max-height: 100%;">
            <v-row justify="center" align="center">
                <SignUp/>
          </v-row>
        </container>
    </div>
</template>

<script>

import SignUp from "@/components/SignUp.vue"

export default {
    name: "Registration",
    components: {SignUp}
}
</script>

<style scoped>

#divo{
  margin-top: 70px;
}
</style>