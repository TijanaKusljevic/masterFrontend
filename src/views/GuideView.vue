<template>
    <div id="divo">
        <container  fill-width style="height: 100vh; max-height: 100%;" id="conto">
            <v-row justify="center" align="center">
                <GuideDetails/>
          </v-row>
        </container>
    </div>
</template>

<script>

import GuideDetails from "@/components/GuideDetails.vue"

export default {
    name: "GuideView",
    components: {GuideDetails}
}
</script>

<style scoped>

#divo{
  margin-top: 90px;
}
</style>

