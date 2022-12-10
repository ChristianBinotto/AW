<template>
        <v-container>
        <v-card height="500" >
        <v-card-title>Bienvenido</v-card-title>
        <v-form v-model="valid" ref="form">
        <v-row>
            

            <v-col
            cols="8"
            offset="2"
            >
         
            <v-text-field
                v-model="email"
                :rules="reglasEmail"
                :counter="10"
                label="Email"
                validate-on="blur"
                required
            ></v-text-field>
            
            <v-text-field
                type="password"
                v-model="contrasena"
                :rules="reglasContrasena"
                :counter="10"
                label="Contraseña"
                validate-on="blur"
                required
            ></v-text-field>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="8" offset="2">
                <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
                    <v-btn color="primary" block @click="validate(email, contrasena)">
                        Registrarse
                    </v-btn>
                </div>
            </v-col>
        </v-row>
        </v-form>
        </v-card>
        </v-container>
</template>

<script>
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../plugins/firebase'
export default {
    
    data: () => ({
      valid: false,
      email: '',
      reglasEmail: [
        v => !!v || 'Email es un campo requerido',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      contrasena: '',
      reglasContrasena: [
        v => !!v || 'Contraseña es un campo mandatorio',
        v => v.length > 6 || 'Contraseña debe ser mayor 6 caracteres',
      ],
    }),
    methods:{
      async validate (email, contrasena) {
        const { valid } = await this.$refs.form.validate()

        if (valid) { 
          createUserWithEmailAndPassword(auth, email, contrasena)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...
            alert('Registro Exitoso')
            console.log(user)
            console.log("Registro Exitoso")
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode)
            console.log(errorMessage)
          })
        }
    }
  }
}
</script>
