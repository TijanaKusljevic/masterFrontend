<template>
    <v-container fluid  style="margin: 0px; padding: 0px; width: 60%">
        <v-table>
        <v-row justify="center" align="center" >
            <v-img
                :src="image"
                :aspect-ratio="16/9" 
            ></v-img>
        </v-row >
        <v-row justify="left" align="center">
                <h3>Naslov</h3>
                <br>
                Datum polaska: 
                <br>
                Datum povratka:
                <br>
                Kondiciona tezina: 3/5
                <br>
                Vodic: Milorad Milinkovic
                <br>
                <br>
                <br>
                <br>
                Plan puta
                <br>
                <br>
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
        </v-table>
    </v-container>
</template>

<script>

import image from "../assets/Planinarenje.jpg";

export default {
    name: "TourDetails",
    data() {
        return {image: image}
    }
}
</script>

