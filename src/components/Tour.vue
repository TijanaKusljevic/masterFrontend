<template>
    <div>
        <v-card
            class="mx-auto my-12"
            max-width="374"
        >
            <v-img :aspect-ratio="16/9" min-width="374px" max-width="374px" v-bind:src="'data:image/jpeg;base64,'+img"/>

            <v-card-title>{{name}}</v-card-title>

            <v-card-text>
                <v-row>
                    <v-col> Datum polaska: {{formatDate(startDate)}} </v-col>
                    <v-col> Datum povratka: {{formatDate(endDate)}} </v-col>
                </v-row>
                <v-row>
                    <v-col> Kondiciona tezina: {{physicalAbility}} </v-col>
                    <v-col> Vodic: {{guideName}} </v-col>
                </v-row>
                
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-actions>
                <v-btn @click="showTour">Detajnije</v-btn>
                <v-spacer/>
                <v-btn @click="editTour" v-if="isGuideOrAdmin && owner && !finished">Izmeni</v-btn>
                <v-spacer/>
                <v-dialog
                    transition="dialog-bottom-transition"
                    max-width="600"
                >
                    <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        color="primary"
                        v-bind="attrs"
                        v-on="on"
                        v-if="isGuideOrAdmin && owner"
                    > Ponovi </v-btn>
                    </template>
                    <template v-slot:default="dialog">
                        <v-card>
                            <v-toolbar
                                color="primary"
                                dark
                                
                            >   
                                Izmena datuma
                            </v-toolbar>
                            <v-card-text>
                                <v-menu
                                    ref="menu"
                                    v-model="menu"
                                    :close-on-content-click="false"
                                    :return-value.sync="date"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date"
                                            label="Datum polaska"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date"
                                        no-title
                                        scrollable
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date)"
                                        >
                                            OK
                                        </v-btn> 
                                    </v-date-picker>
                                </v-menu>
                                <v-menu
                                    ref="menu"
                                    v-model="menu2"
                                    :close-on-content-click="false"
                                    :return-value.sync="date2"
                                    transition="scale-transition"
                                    offset-y
                                    min-width="290px"
                                >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                            v-model="date2"
                                            label="Datum povratka"
                                            prepend-icon="mdi-calendar"
                                            readonly
                                            v-bind="attrs"
                                            v-on="on"
                                        >
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date2"
                                        no-title
                                        scrollable
                                    >
                                        <v-spacer></v-spacer>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="menu = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu.save(date2)"
                                        >
                                            OK
                                        </v-btn> 
                                    </v-date-picker>
                                </v-menu>
                            </v-card-text>
                            <v-card-actions class="justify-end">
                                <v-btn
                                    text
                                    @click="replicateTour"
                                > 
                                    Potvrdi
                                </v-btn>
                                <v-btn
                                    text
                                    @click="dialog.value = false"
                                > 
                                    Odustani
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </template>
                </v-dialog>
                <v-spacer></v-spacer>
                <v-btn v-if="isAdmin" @click="deleteTour">Obriši</v-btn>
                <v-btn v-if="!finished && !signedIn && !isGuideOrAdmin" @click="checkIn">Prijavi se</v-btn>
                <v-btn v-if="!finished && signedIn && !isGuideOrAdmin" @click="checkOut">Odjavi se</v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import axios from "axios";
import store from '../store/index';
import moment from 'moment';

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
        img: String,
        finished: Boolean,
        signedIn: Boolean,
        guideName: String,
        owner: Boolean,
        mounteneers: Number
    },
    computed:{
        isGuideOrAdmin(){
            return store.getters['authentication/getRole']=="ADMIN"||store.getters['authentication/getRole']=="GUIDE";
        },
        isAdmin(){
            return store.getters['authentication/getRole']=="ADMIN";
        }
    },
    data(){
        return {
            menu: false,
            menu2: false,
            date: String,
            date2: String
        }
    },
    beforeMount(){
        this.date = this.startDate;
        this.date2 = this.endDate;
        console.log("RPrikazujem turu");
    },
    methods: {
        formatDate(value) {
            return moment(value).format("DD.MM.YYYY.")
        },
        checkIn(){
            axios.post("http://localhost:47000/tour/checkIn/" + this.tourId) 
            .then(() =>{})
            .catch(()=>{
                console.log("error");
            });
        },
        showTour(){
            console.log("show" + this.tourId);
            this.$router.push(/tourDetails/+this.tourId);
            console.log("show1");
        },
        editTour(){
            this.$router.push(/editTour/+this.tourId);
        },
        replicateTour(){
            console.log("replicate");
            axios.post("http://localhost:47000/tour/editTour", {
                tourId: this.tourId,
                name: this.name,
                startDate: this.date,
                endDate: this.date2,
                days: this.days,
                nights: this.nights,
                description: this.description,
                physicalAbility: this.physicalAbility
            })
            .then(() => {
               console.log("podatke poslao");
            })
            .catch(()=>{
                this.error = true;
                console.log("error");
            })
            ;
        },
        checkOut(){
            console.log("odjava"+this.tourId);
            axios.delete("http://localhost:47000/api/giveUp/" + this.tourId) 
            .then(() =>{
                console.log("uspeo");
            })
            .catch(()=>{
                console.log("error");
            });
        },
        deleteTour(){
            axios.delete("http://localhost:47000/tour/removeTour/" + this.tourId) 
            .then(() =>{
                console.log("uspeo");
            })
            .catch(()=>{
                console.log("error");
            });
        }
    }
}
</script>