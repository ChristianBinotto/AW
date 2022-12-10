<template>
    
    <v-container>
        <v-card height="300" >
        <v-card-title>Bienvenido</v-card-title>
        <v-form v-model="valid">
        <v-row>
            

            <v-col
            cols="12"
            md="4"
            offset="4"
            >
         
            <v-text-field
                v-model="usuario"
                :rules="reglasUsuario"
                :counter="10"
                label="Usuario"
                required
            ></v-text-field>
            
            <v-text-field
                v-model="contrasena"
                :rules="reglasContrasena"
                :counter="10"
                label="Contraseña"
                required
            ></v-text-field>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="12" md="4" offset="4">
                <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
                    <v-btn color="primary" block>
                        Login
                    </v-btn>
                </div>
            </v-col>
        </v-row>
    </v-form>
    </v-card>
    </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      usuario: '',
      reglasUsuario: [
        v => !!v || 'Usuario es un campo requerido',
        v => v.length <= 10 || 'Usuario debe tener máximo 10 caracteres',
      ],
      contrsena: '',
      reglasContrasena: [
        v => !!v || 'Contraseña es un campo obligatorio',
        v => v.length <= 10 || 'E-mail must be valid',
      ],
    }),
  }
</script>