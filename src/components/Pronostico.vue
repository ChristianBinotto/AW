<template>
    <body style="background: url(https://okdiario.com/img/2021/10/16/inspiring-view-of-sunset-light.jpg)">
        <v-container>
            <v-card max-width="1200" class="mx-auto">
                <v-row style="background-color: #6200EE">
                    <v-col
                    cols="6"
                    >
                        <v-card-title style="color: #FFFFFF">Pronóstico</v-card-title>
                    </v-col>
                </v-row>
                <v-row style="padding-top: 50px; justify-content: center;">
                    <v-col
                    cols="4"
                    >
                        <v-select
                        v-model="select"
                        :items="listaPronostico"
                        item-title="dia"
                        label="Seleccione el día"
                        persistent-hint
                        return-object
                        single-line
                        >
                        Día
                        </v-select>
                    </v-col>
                    
                </v-row>
            </v-card>
            <div v-if="select" style="padding-top:30px;">
                <v-card v-for="hora in select.horas" :key="hora">
                    <v-card-title>{{hora.dt_txt.split(" ")[1]}} hs.</v-card-title>
                    <v-card-subtitle>{{ $t(`${hora.weather[0]["main"]}`) }}</v-card-subtitle>
                    <v-card-text>
                        <v-row>
                        <v-col
                            cols="6"
                            offset="1"
                            >
                            <p style="font-size: 80px; padding-bottom: 10px;">{{transformaTemperatura(hora.main["temp"])}}°</p>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col
                            cols="3"
                            offset="1"
                            >
                                Sensación Térmica: {{transformaTemperatura(hora.main["feels_like"])}}°
                            </v-col>
                            <v-col
                            cols="3"
                            >
                                Máximo: {{transformaTemperatura(hora.main["temp_max"])}}°
                            </v-col>
                            <v-col
                            cols="3"
                            >
                                Mínimo: {{transformaTemperatura(hora.main["temp_min"])}}°
                            </v-col>
                            <v-col
                            cols="2"
                            >
                                Viento: {{ hora.wind["speed"] }} km/h
                            </v-col>

                        </v-row>
                    </v-card-text>
                    </v-card>
                </div>
        </v-container>
    </body>
</template>

<script>

    //import { onMounted } from '@vue/runtime-core';
    import { useRoute } from 'vue-router';
    export default{
        data () {
            return {
                select: null,
                listaPronostico: [],

            }
        },
        created(){
            const route = useRoute();

            
            const latitud = route.params.latitud
            const longitud = route.params.longitud
            console.log(latitud)
            console.log(longitud)
           
 
            fetch(" https://api.openweathermap.org/data/2.5/forecast?lat=" + latitud +
            "&lon=" + longitud +  "&appid=6ba76778bc6cfdc6bb87d115d34eacd1") 

            .then((resp) => resp.json())
            .then((data) => {
                console.log(data.list)
                this.listaPronostico = this.agruparData(data.list)
                console.log(this.listaPronostico)
            })
            .catch(function(error) {
            console.log(error)
            alert("No se pudieron cargar los datos")
            }); 
            
        },

        methods:{
            agruparData(list){
                let listaAgrupada = {}
                list.forEach(element => {
                    const fecha = element.dt_txt.split(" ")[0]
                    if(listaAgrupada[fecha])
                        listaAgrupada[fecha].push(element)
                    else
                        listaAgrupada[fecha] = [element]
                });
                let keyValue = []
                Object.entries(listaAgrupada).forEach( element => {
                    keyValue.push({dia: element[0], horas: element[1]})
                })

                return keyValue
            },

            transformaTemperatura(temp){
                console.log(temp)
                let ret = temp - 273.15
                console.log(ret.toFixed(2))
                return ret.toFixed(0)
            }
        }
    }
</script>
