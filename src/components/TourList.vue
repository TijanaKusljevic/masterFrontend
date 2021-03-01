<template>
    <div>
      <v-row justify="left" align="left">
          <v-checkbox
            label="Prikaži samo ture bez noćenja"
            @click="check"
          ></v-checkbox>
        </v-row>
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
                  :img="tour.imageSrc"
                  :finished="tour.finished"
                  :signedIn="tour.signedIn"
                  :guideName="tour.guideName"
                  :owner="tour.owner"
                  :mounteneers="tour.mounteneers"
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
      },
      check(e){
        e.preventDefault();
        this.checkbox = !this.checkbox;
        if (this.checkbox) {
          axios.get("http://localhost:47000/tour/oneDayTrips")
          .then(res => {this.list = res.data;});
        } else {
          axios.get("http://localhost:47000/tour/allTours")
          .then(res => {this.list = res.data;});
        }
        console.log(this.checkbox);
      }
    },

    mounted(){
        axios.get("http://localhost:47000/tour/allTours")
        .then(res => {
          this.list = res.data;
          }
        );

       // axios.get("http://localhost:47000/tour/img")
       // .then(res => {this.img ='data:image/jpeg;base64,' + res.data;});
    }
}

</script>