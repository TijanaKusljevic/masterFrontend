<template>
    <container style="width: 70%">
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
                        required
                    ></v-text-field>
                </v-col>
                
                <v-col>
                    <v-text-field
                        v-model="password"
                        label="Lozinka"
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
            </v-row>
            <v-row>
                <v-col>
                    <v-text-field
                        v-model="telephone"
                        label="Telefon"
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
                        v-model="address"
                        label="Adresa"
                        required
                    ></v-text-field>
                </v-col>

                <v-col>
                    <v-text-field
                        v-model="dateOfBirth"
                        label="Datum rođenja"
                        required
                    ></v-text-field>
                </v-col>
            </v-row>

            <v-row>
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
            </v-row>

            <!-- <v-checkbox
                v-model="checkbox"
                :rules="[v => !!v || 'You must agree to continue!']"
                label="Do you agree?"
                required
            ></v-checkbox> -->

            <v-row>
                <v-col> </v-col>
                <v-col >
                    <v-btn
                        :disabled="!valid"
                        color="success"
                        class="mr-4"
                        @click="validate"
                    >
                        Validate
                    </v-btn>

                    <v-btn
                        color="error"
                        class="mr-4"
                        @click="reset"
                    >
                        Reset Form
                    </v-btn>

                    <v-btn
                        color="warning"
                        type="submit"
                        
                    >
                        Reset Validation
                    </v-btn>
                </v-col>
            </v-row>
        </v-form>
    </container>
</template>

<script>

import axios from "axios";

export default {
    data: () => ({
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
      select: null,
      items: [
        'Vodič',
        'Planinar'
      ],
      checkbox: false,
      type: 'Planinar',
      number: '',
      licence: '',
      licenceYear: ''
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      signUp (e) {
        /* this.$refs.form.resetValidation() */
        e.preventDefault();

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
            .then(() => {
               console.log("podatke poslao");
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