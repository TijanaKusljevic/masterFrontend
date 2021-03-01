<template>
    <v-container fluid  style="margin: 0px; padding: 0px; width: 60%">
        <!-- <v-table> -->
        <v-row justify="center" align="center" >
            <v-img
                v-bind:src="'data:image/jpeg;base64,'+img"
                :aspect-ratio="16/9" 
            ></v-img>
        </v-row >
        <v-row justify="left" align="center">
                <br>
                <br>
                <br>
                <br>
                <h3>{{name}}</h3> 
                <v-spacer></v-spacer> 
                <v-btn color="primary" @click="checkIn" v-if="!finished && !signedIn"> Prijavi se </v-btn>
                <v-btn @click="checkOut" v-if="!finished && signedIn">Odjavi se</v-btn>
                <br>
                Datum polaska: {{formatDate(startDate)}}
                <br>
                Datum povratka: {{formatDate(endDate)}}
                <br>
                Kondiciona tezina: {{physicalAbility}}
                <br>
                Vodic: {{guideName}}
                <br>
                <template v-if="isGuideOrAdmin">
                    Broj prijavljenih: {{mounteneers}}
                </template> 
                <br>
                <br>
                <br>
                Plan puta
                <br>
                <br>
                {{description}}
                PETAK

17.30 - Polazak iz Beograd

21.00 - Dolazak na smeštaj i slobodno vreme

Noćenje
 


SUBOTA  
 
07.00 - 09.00 Doručak 
 
11.00 - Dolazak do Jezera Selište (980 m). Odatle prvo šumskim putem, zatim stazama preko livada i grebenom planine do vrha Ljukten 1216 mnv. Predah na širokom, zaravnjenom vrhu. Vidik je odličan, u daljini se mogu videti Rtanj, a bliže se vide Željin, Stolovi, Kopaonik... Pauza za užinu i fotografisanje. Posle predaha na vrhu vračamo se drugom stazom do jezera Selište.
 
18.00 - Dolazak u smeštaj 
 
19:30 Fakultativna večera, slobodno vreme, VEČERNjE DRUŽENjE UZ GITARU, stoni tenis, monopol... :) 
 
Noćenje 
 
 
NEDELJA 
 
09:00 - 10:00 – doručak 
 
10:00 – polazak na pešačku turu Plava staza – ''Velika livada''. Dužina staze je 10 km i nije mnogo zahtevna. Vodič (predstavnik Šumarskog fakulteta) će u toku šetnje na više punktova informisati učesnike o šumskom ekosistemu, vrstama drveća i biljaka, funkcijama i značaju šuma, vrstama divljači, o lovnim objektima i hranilištima za divljač i dr; 
 
Oko 12:00 - očekivano vreme dolaska na Veliku livadu. Sa ovog lokaliteta se pruža pogled na okolne vrhove planina Željin i Kopaonik, pogled možda nema veliku atrakciju ali je ambijent prelep i livada je okružena šumom. Nakon dolaska nam sledi piknik! :) Hranu će obezbediti uprava odmarališta, a plan je da ekipa u društvu zajedno sprema klopu. 
 
Zvuči interesantno, zar ne? :) 
 
Oko 17.00 – Polazak za Beograd 
 
Oko 21.00 - Očekivani dolazak u Beograd
            
        </v-row >
        <!-- </v-table> -->
    </v-container>
</template>

<script>

import image from "../assets/Planinarenje.jpg";
import axios from "axios";
import store from '../store/index';
import moment from 'moment';


export default {
    name: "TourDetails",
    props: {
        tourId: Number,
        name: String,
        startDate: String,
        endDate: String,
        days: Number,
        nights: Number,
        physicalAbility: Number,
        description: String,
        guideName: String,
        img: String,
        signedIn: Boolean,
        finished: Boolean,
        mounteneers: Number
    },
    data() {
        return {image: image}
    },
    computed:{
        isGuideOrAdmin(){
            return store.getters['authentication/getRole']=="ADMIN"||store.getters['authentication/getRole']=="GUIDE";
        },
        isAdmin(){
            return store.getters['authentication/getRole']=="ADMIN";
        }
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
        checkOut(){
            console.log("odjava"+this.tourId);
            axios.delete("http://localhost:47000/api/giveUp/" + this.tourId) 
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

