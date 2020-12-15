<template>
    <div id="divo">
        <container  fill-width style="height: 100vh; max-height: 100%;"  class="klasa" id="conto">
            <v-row justify="center" align="center">
                <TourDetails/>
          </v-row>
        </container>
    </div>
</template>

<script>

import TourDetails from "@/components/TourDetails.vue"

export default {
    name: "TourView",
    components: {TourDetails}
}
</script>

<style scoped>
.klasa{
  display: table;
  width: 100%;
}
#divo{
  margin-top: 90px;
}
</style>

