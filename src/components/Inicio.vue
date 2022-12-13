<template>
    <body style="background: url(https://okdiario.com/img/2021/10/16/inspiring-view-of-sunset-light.jpg)">
        <v-container>
            <v-card height="500px">
                <v-row style="background-color: #6200EE">
                    <v-col
                    cols="6"
                    >
                        <v-card-title style="color: #FFFFFF">Consulte el clima de la ciudad que desee</v-card-title>
                    </v-col>
                </v-row>
                <v-form v-model="valid">
                    <v-row style="padding-top: 50px">
                        <v-col
                        cols="8"
                        offset="2"
                        >
                            <v-text-field
                                style="background-color: #FFFFFF"
                                v-model="ciudad"
                                :rules="reglasCiudad"
                                label="Ingrese una Ciudad"
                                validate-on="blur"
                                required
                                ></v-text-field>
                        </v-col>
                    </v-row>

                    <v-row>
                        <v-col
                        cols="8"
                        offset="2"
                        >
                        <div class="d-flex justify-space-around align-center flex-column flex-md-row fill-height">
                            <v-btn color="primary" @click="buscar(ciudad)">Buscar</v-btn>
                        </div>
                    </v-col>
                </v-row>
            </v-form>
        </v-card>

        </v-container>
    </body>
</template>

<script>
    
    export default{
        data: () => ({
            valid: false,
            ciudad: '',
            reglasCiudad: [
                v => !!v || 'El campo es requerido',
            ] 
        }),
        methods:{
            buscar (ciudad){
                fetch("https://api.api-ninjas.com/v1/city?name=" + ciudad, {
                        method: "GET",
                        withCredentials: true,
                        headers: {
                        "X-Api-Key": "uyQZ+LCqfCG40jm2/GQaPw==TSJmNXXMI9BBUS9D"
                        }
                })
                .then((resp) => resp.json())
                .then((data) => {
                    const name = data[0].name.toLowerCase()
                    ciudad = ciudad.toLowerCase()
                    if(name != ciudad)
                        alert("No existe esa ciudad")
                    else
                        this.clima(data[0].latitude, data[0].longitude)
                })
                .catch(function(error) {
                    console.log(error)
                    alert("No existe esa ciudad")
                });
                
            },

            clima(latitud, longitud){
                this.$router.push({name: 'Pronostico', params: { latitud, longitud}})
            }

        }

    }

</script>
