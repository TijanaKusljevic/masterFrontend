<template>
    <v-container style="width: 60%">
      <v-card
      >
        <div class="d-flex flex-no-wrap ">
          <v-avatar
            class="ma-3"
            size="250"
            tile
          >
            <v-img :src="image"></v-img>
          </v-avatar>
          <div>
            <v-card-title
              class="headline"
              
            >Milorad Milinkovic</v-card-title>

            <v-divider class="mx-4"></v-divider>

            <v-card-subtitle >Broj licence: MB 134</v-card-subtitle>

            <v-divider class="mx-4"></v-divider>

            <v-card-subtitle >
              <v-icon > {{icons.mdiPhone}} </v-icon>
              064/34-23-820
            </v-card-subtitle>

            <v-divider class="mx-4"></v-divider>

            <v-card-subtitle >
              <v-icon > {{icons.mdiAt}} </v-icon>
              milorad@gmial.com
            </v-card-subtitle>


            <!-- <v-card-actions>
              <v-btn
                
              >
                <v-icon>mdi-play</v-icon>
              </v-btn>

              <v-btn
               
              >
                START RADIO
              </v-btn>
            </v-card-actions> -->
          </div>
        </div>
      </v-card>
      <br>
      <h3> Kratka planinarska biografija </h3>
    </v-container>
</template>

<script>

import image from "../assets/slicica.jpg";
import { mdiPhone } from '@mdi/js';
import { mdiAt } from '@mdi/js';

export default {
    name: "GuideDetails",
    data() {
        return {image: image, icons: { mdiPhone, mdiAt}}
    }
}
</script>