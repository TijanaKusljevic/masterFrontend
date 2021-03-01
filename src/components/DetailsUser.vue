<template>
    <div>
        <v-card
            max-width="500"
            class="mx-auto"
        >
            <v-toolbar
                color="primary"
                >
                    <v-toolbar-title>
                        {{userData.firstName}} {{userData.lastName}}
                    </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
            <v-list two-line>
            <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-phone
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>{{userData.telephone}}</v-list-item-title>
                <v-list-item-subtitle>Mobilni</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-email
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>{{userData.email}}</v-list-item-title>
                <v-list-item-subtitle>Email</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-map-marker
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>{{userData.address}}</v-list-item-title>
                <v-list-item-subtitle>Adresa</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>

            <!-- <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-calendar-range
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>{{userData.dateOfBirth}}</v-list-item-title>
                <v-list-item-subtitle>Datum rodjenja</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item> -->

            <v-list-item>
                <v-list-item-icon>
                <v-icon color="indigo">
                    mdi-numeric
                </v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                <v-list-item-title>{{userData.number}}</v-list-item-title>
                <v-list-item-subtitle>Broj knjizice</v-list-item-subtitle>
                </v-list-item-content>
            </v-list-item>
            </v-list>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name : "DetailsUser",
    data(){
        return {
            userData:null
        }
    },
    mounted(){
         axios.get("http://localhost:47000/api/userDetails").then((response)=>{
             this.userData = response.data;
         });
    }
}
</script>