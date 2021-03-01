<template>
    <v-container style="width: 70%">
        <v-form
            ref="form"
            v-model="valid"
            lazy-validation
            @submit = "signUp"
        >

            <v-row>
                <v-col>
                    <v-text-field
                        v-model="username"
                        label="Korisničko ime"
                        :rules="[required]"
                    ></v-text-field>
                </v-col>
                
                <v-col>
                    <v-text-field
                        v-model="password"
                        label="Lozinka"
                        required
                    ></v-text-field>
                </v-col>

                <v-col>
                    <v-text-field
                        v-model="email"
                        :rules="emailRules"
                        label="E-mail"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>


            <v-row>
                <v-col>
                    <v-text-field
                        v-model="firstName"
                        label="Ime"
                        required
                    ></v-text-field>
                </v-col>
                
                <v-col>
                    <v-text-field
                        v-model="lastName"
                        label="Prezime"
                        required
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-text-field
                        v-model="telephone"
                        label="Telefon"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>
           <!--  <v-row>
                

                
            </v-row> -->

            <v-row>
                <v-col>
                    <v-text-field
                        v-model="address"
                        label="Adresa"
                        required
                    ></v-text-field>
                </v-col>

                <!-- <v-col>
                    <v-text-field
                        v-model="dateOfBirth"
                        label="Datum rođenja"
                        required
                    ></v-text-field>
                </v-col> -->

                <v-col>
                    <v-text-field
                        v-model="number"
                        label="Broj planinarske knjižice"
                        required
                    ></v-text-field>
                </v-col>

                <v-col>
                    <v-select
                        v-model="type"
                        :items="items"
                        :rules="[v => !!v || 'Tip korisnika je obavezan']"
                        label="Tip korisnika"
                        required
                        @change="checkType"
                    ></v-select>
                </v-col>
            </v-row>

            <!-- <v-row>
                

                
            </v-row> -->

            <v-row>
                <v-col>
                    <v-text-field
                        v-model="licence"
                        label="Broj licence"
                        required
                        :disabled="!guide"
                    ></v-text-field>
                </v-col>
                
                <v-col>
                    <v-text-field
                        v-model="licenceYear"
                        label="Godina izdavanja licence"
                        required
                        :disabled="!guide"
                    ></v-text-field>
                </v-col>
                <v-col>
                    <v-file-input
                        label="naslovna fotografija"
                        accept="image/png, image/jpeg, image/bmp"
                        prepend-icon="mdi-camera"
                        @change="selectImg"
                        :disabled="!guide"
                    ></v-file-input> 
                </v-col>
            </v-row>
            <!-- <v-row>
                
            </v-row> -->
            <v-row>
                <v-textarea
                    rows="5"
                    outline
                    name="input-7-4"
                    label="Kratka planinarska biografija"
                    v-model="biography"
                    :disabled="!guide"
                ></v-textarea>
            </v-row>

            <!-- <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
            ></v-checkbox> -->

            <v-row>
                <v-col> </v-col>
                <v-col> </v-col>
                <v-col> </v-col>
                <v-col >
                    
                    <v-btn
                        class="mr-4"
                        @click="reset"
                    >
                        Odustani
                    </v-btn>

                    <v-btn
                        type="submit"
                    >
                        Potvrdi
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </v-container>
</template>

<script>

import axios from "axios";

export default {
    name: "SignUp",
    props:{
        edit123 : Boolean
    },
    data: () => ({
      image: undefined,
      guide: false,
      valid: true,
      /* name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
      ], */
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      telephone: '',
      address: '',
      dateOfBirth: '',
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      required: value => {
                    if(!value)
                        return "Required";
                    return true;
                },
      select: null,
      items: [
        'Vodič',
        'Planinar'
      ],
      checkbox: false,
      type: 'Planinar',
      number: '',
      licence: '',
      licenceYear: '',
      biography: '',
      userId: ''
    }),
    mounted(){
        console.log(this.edit123+"aaa");
        if(this.edit123){
            var id = this.$route.params.id;
            axios.get("http://localhost:47000/api/user/"+id)
            .then(res => {
                this.username = res.data.username;
                this.password = res.data.password;
                this.firstName = res.data.firstName;
                this.lastName = res.data.lastName;
                this.telephone = res.data.telephone;
                this.email = res.data.email;
                this.address = res.data.address;
                this.dateOfBirth = res.data.dateOfBirth;
                this.number = res.data.number;
            });
        }
    },
    methods: {
      selectImg(file){
        this.image = file;
      },
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      signUp (e) {
        /* this.$refs.form.resetValidation() */
        e.preventDefault();

        let fd= new FormData();

        fd.append('file', this.image);

        const config = {
            headers: { 
                'Content-Type': 'multipart/form-data' 
            }
        };

        axios.post("http://localhost:47000/api/signup", {
                username: this.username,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                telephone: this.telephone,
                address: this.address,
                dateOfBirth: this.dateOfBirth,
                type: this.type,
                number: this.numebar,
                licence: this.licence,
                licenceYear: this.licenceYear
            })
            .then(res => {
               console.log("podatke poslao");
               this.userId = res.data;
               axios.post("http://localhost:47000/api/fileUpload/"+this.userId, fd, config)
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

      },
      checkType(){
          if (this.type == "Vodič"){
              this.guide = true;
          } else {
              this.guide = false;
          }
      }
    },
}
</script>