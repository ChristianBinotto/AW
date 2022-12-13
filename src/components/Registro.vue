<template>
  <body style="background: url(https://okdiario.com/img/2021/10/16/inspiring-view-of-sunset-light.jpg)">
    <v-container>
      <v-card height="500" >
      <v-card-title>Bienvenido!!</v-card-title>
        <v-form v-model="valid" ref="form">
          <v-row>
            <v-col
            cols="8"
            offset="2"
            >
         
            <v-text-field
                v-model="email"
                :rules="reglasEmail"
                label="Email"
                prepend-inner-icon="mdi-email-outline"
                validate-on="blur"
                required
            ></v-text-field>
            
            <v-text-field
            :append-inner-icon="visible ? 'mdi-eye-off': 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                v-model="contrasena"
                :rules="reglasContrasena"
                label="Contraseña"
                prepend-inner-icon="mdi-lock-outline"
                validate-on="blur"
                @click:append-inner="visible = !visible"
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
  </body>
</template>

<script>
import { createUserWithEmailAndPassword } from '@firebase/auth'
import { auth } from '../plugins/firebase'
export default {
    
    data: () => ({
      visible: false,
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
            this.registrado ()
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode)
            console.log(errorMessage)
          })
        }
    },

    registrado(){
      this.$router.push('/')
    }
  }
}
</script>
