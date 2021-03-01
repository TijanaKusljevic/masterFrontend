<template>
    <div id="divo">
        <v-container  fill-width style="height: 100vh; max-height: 100%;">
            <v-row justify="center" align="center">
                <SignUp edit123/>
            </v-row>
        </v-container>
    </div>
</template>

<script>

import SignUp from "@/components/SignUp.vue"

export default {
    name: "EditUser",
    components: {SignUp}
}
</script>

<style scoped>

#divo{
  margin-top: 70px;
}
</style>