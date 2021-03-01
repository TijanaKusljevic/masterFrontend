<template>
    <div id="divo">
        <v-container  fill-width style="height: 100vh; max-height: 100%;">
            <v-row justify="center" align="center">
                <NewTour edit123/>
            </v-row>
        </v-container>
    </div>
</template>

<script>

import NewTour from "@/components/NewTour.vue"

export default {
    name: "EditTour",
    components: {NewTour}
}
</script>

<style scoped>

#divo{
  margin-top: 70px;
}
</style>