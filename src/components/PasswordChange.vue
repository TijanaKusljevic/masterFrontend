<template>
    <div>
        <v-card
            min-width="400"
            class="mx-auto"
        >
            <v-toolbar
                color="primary"
                >
                    <v-toolbar-title>
                        Promeni lozinku
                    </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
            <form method="post" @submit="changePassword">
                    <v-text-field v-model="oldPassword" :rules="[rules.required]" :append-icon="showOldPassword ? 'mdi-eye': 'mdi-eye-off'" 
                    :type= "showOldPassword ? 'text': 'password'" label="Stara lozinka" name ="oldPassword"
                    @click:append="showOldPassword=!showOldPassword"/>
                    
                    <v-text-field v-model="newPassword" :rules="[rules.required]" :append-icon="showPassword ? 'mdi-eye': 'mdi-eye-off'" 
                    :type= "showPassword ? 'text': 'password'" label="Nova lozinka" name ="newPassword"
                    @click:append="showPassword=!showPassword"/>

                     <v-text-field v-model="confirmPassword" :rules="[rules.required, rules.passwordMatch]" :append-icon="showConfirmPassword ? 'mdi-eye': 'mdi-eye-off'" 
                    :type= "showConfirmPassword ? 'text': 'password'" label="Ponovi novu lozinku" name ="confirmPassword"
                    @click:append="showConfirmPassword=!showConfirmPassword"/>

                    <div class="text-center">
                        <v-btn :disabled="loading" color="primary" block type="submit">Promeni lozinku</v-btn>
                    </div>
                </form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>

import axios from "axios";

export default {
    name : "DetailsUser",
    data(){
        return {
            oldPassword: '',
            newPassword:'',
            confirmPassword:'',
            showOldPassword:false,
            showPassword:false,
            showConfirmPassword:false,
            rules: {
                required: value => {
                    if(!value)
                        return "Required";
                    return true;
                },
                passwordMatch: () => {
                    if(this.newPassword===this.confirmPassword){
                        this.validPassword = true;
                        return true;
                    }
                    this.validPassword = false;
                    return `The Confirm password does not match the password.`;
                }
            }
        }
    },
    methods: {
        changePassword(){
            axios.post("http://localhost:47000/api/changePassword", {
                oldPassword: this.oldPassword,
                newPassword: this.newPassword
            })
            .then(() => {
               console.log("podatke poslao");
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