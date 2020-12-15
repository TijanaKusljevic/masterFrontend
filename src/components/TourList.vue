<template>
    <div>
        <v-row>
            <v-col v-for="tour in list" :key="tour.tourId">
                <Tour 
                    :tourId="tour.tourId" 
                    :name="tour.name" 
                    :startDate="tour.startDate"
                    :endDate="tour.endDate"
                    :days="tour.days"
                    :nights="tour.nights"
                    :physicalAbility="tour.physicalAbility"
                    :description="tour.description"
                    :img="img"
                    />
            </v-col>
        </v-row>
    </div>
</template>

<script>

import Tour from "@/components/Tour.vue"
import axios from "axios";

export default {
    name: "TourList",
    components: {Tour},
    data: () => ({
      loading: false,
      selection: 1,
      list: null,
      img: ''
    }),

    methods: {
      reserve () {
        this.loading = true

        setTimeout(() => (this.loading = false), 2000)
      }
    },

    mounted(){
        axios.get("http://localhost:47000/tour/allTours")
        .then(res => {this.list = res.data;});

        axios.get("http://localhost:47000/tour/img")
        .then(res => {this.img ='data:image/jpeg;base64,' + res.data;});
    }



}

</script>