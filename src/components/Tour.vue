<template>
    <div>
        <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
        >
            <v-img :aspect-ratio="16/9" min-width="374px" max-width="374px" :src="img"/>

            <v-card-title>{{name}}</v-card-title>

            <v-card-text>
                <v-row>
                    <v-col> Datum polaska: {{startDate}} </v-col>
                    <v-col> Datum povratka: {{endDate}} </v-col>
                </v-row>
                <v-row>
                    <v-col> Kondiciona tezina: {{physicalAbility}} </v-col>
                    <v-col> Vodic: Milorad Milinkovic </v-col>
                </v-row>
                
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
                <v-btn>Detajnije</v-btn>
                <v-spacer></v-spacer>
                <v-btn>Prijavi se</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
export default {
    name: "Tour",
    props: {
        tourId: Number,
        name: String,
        startDate: String,
        endDate: String,
        days: Number,
        nights: Number,
        physicalAbility: Number,
        description: String,
        img: String
    }
}
</script>