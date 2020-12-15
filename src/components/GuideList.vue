<template>
    <div>
        <v-row>
            <v-col v-for="guide in list" :key="guide.firstName">
                <Guide
                    :firstName="guide.firstName" 
                    :lastName="guide.lastName" 
                    :telephone="guide.telephone" 
                    :email="guide.email" 
                    :licence="guide.licence" 
                    :biography="guide.biography" 
                />
            </v-col>
        </v-row>
    </div>
</template>

<script>

import Guide from "@/components/Guide.vue"
import axios from "axios";

export default {
    name: "GuideList",
    components: {Guide},
    data: () => ({
      list: null
    }),
    mounted(){
        axios.get("http://localhost:47000/api/guides")
        .then(res => {this.list = res.data;});
    }
}
</script>