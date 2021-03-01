<template>
    <div class="top">
        <router-view/>
            <form class="form" @submit = "createTour" ref="form">
                <v-row>
                    <v-col> 
                        <v-row>
                            <v-col> 
                                <v-text-field label="naziv ture" v-model="tourName" />  
                            </v-col>
                            <v-col> 
                                <v-file-input
                                    label="naslovna fotografija"
                                    accept="image/png, image/jpeg, image/bmp"
                                    prepend-icon="mdi-camera"
                                    @change="selectImg"
                                ></v-file-input> 
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col >
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
                                            Odustani
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
                            </v-col>
                            <v-col >
                                <v-menu
                                    ref="menu2"
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
                                            @click="menu2 = false"
                                        >
                                            Cancel
                                        </v-btn>
                                        <v-btn
                                            text
                                            color="primary"
                                            @click="$refs.menu2.save(date2)"
                                        >
                                            OK
                                        </v-btn> 
                                    </v-date-picker>
                                </v-menu>
                            </v-col>
                            <v-col>
                                <v-select
                                    :items="items"
                                    label="Kondiciona tezina"
                                    v-model="physicalAbility"
                                ></v-select>
                            </v-col>
                            <v-col>
                                <v-select
                                    :items="items"
                                    label="Broj noci"
                                    v-model="nights"
                                ></v-select>
                            </v-col>
                            <v-col>
                                <v-select
                                    :items="items"
                                    label="Broj dana"
                                    v-model="days"
                                ></v-select>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-textarea
                                rows="9"
                                outline
                                name="input-7-4"
                                label="Opis ture"
                                v-model="description"
                            ></v-textarea>
                        </v-row>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col/>
                    <v-col/>
                    <v-col/>
                    <v-col>
                        <v-btn type="submit">POTVRDI</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="reset">ODUSTANI</v-btn>
                    </v-col>
                </v-row>    
            </form>
    </div>
</template> 


<script>

  import axios from "axios";

  export default {
    name: "NewTour",
    props:{
        edit123 : Boolean
    },
    data(){
        return {
            date: new Date().toISOString().substr(0, 10),
            date2: new Date().toISOString().substr(0, 10),
            menu: false,
            menu2: false,
            items: [1, 2, 3, 4, 5],
            image: undefined,
            tourName: '',
            physicalAbility: 0,
            days: 0,
            nights: 0,
            description: '',
            tourId: ''
        };
    },
    mounted(){
        if(this.edit123){
            var id = this.$route.params.id;
            axios.get("http://localhost:47000/tour/tour/"+id)
            .then(res => {
                this.date = res.data.startDate;
                this.date2 = res.data.endDate;
                this.tourName = res.data.name;
                this.days = res.data.days;
                this.nights = res.data.nights;
                this.physicalAbility = res.data.physicalAbility;
                this.description = res.data.description;
            });
        }
    },
    methods: {
        selectImg(file){
            this.image = file;
        },
        reset () {
            this.$refs.form.reset()
        },
        createTour(e){
            e.preventDefault();

            let fd= new FormData();

            fd.append('file', this.image);

            const config = {
                headers: { 
                    'Content-Type': 'multipart/form-data' 
                }
            };
            axios.post("http://localhost:47000/tour/newTour", {
                name: this.tourName,
                startDate: this.date,
                endDate: this.date2,
                days: this.days,
                nights: this.nights,
                description: this.description,
                physicalAbility: this.physicalAbility
            })
            .then(res => {
               console.log("podatke poslao");
               this.tourId = res.data;
               console.log(this.tourId);
               
               axios.post("http://localhost:47000/tour/fileUpload/"+this.tourId, fd, config)
               .then(() => {
                  console.log("stavio sliku");
               })
               .catch(()=>{
                  this.error = true;
                  console.log("error");
               })
               ;
            })
            .catch(()=>{
                this.error = true;
                console.log("error");
            })
            ;

        }
    }

  }
</script>



