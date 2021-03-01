<template>
  <v-container fill-width style="height: 100vh; max-height: 100%;" class="klasa1">
    <v-row justify="center" align="center">
        <GuidesTable/>
    </v-row>
    </v-container>
</template>

<script>

import GuidesTable from "../components/GuidesTable.vue"

export default {
  name: 'AllGuides',
  components: {GuidesTable}
}

</script>

<style scoped>
.klasa1{
  margin-top: 100px;
}
</style>