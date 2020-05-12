<template>
  <div id="app">    
    <Covid/>
    <hr>
    <span>Total personas confirmadas en el país: {{getConfirmados}}</span> <br>
    <span>Total decesos en el país: {{getDecesos }}</span> <br>
    <span>Tasa de letalidad en el país: {{ this.letalidad }} </span> <br>
    <hr>
    <br>
    <br>
      <span>Gráfica de personas confirmados positivos por estados 🤧 </span>

    <Grafica v-if="getConfirmados>0" />
    <br>
      <span>Gráfica de decesos por estados 😞</span>
      <Decesos v-if="getDecesos>0" />   
    <Footer/>   
  </div>
</template>

<script>
import Covid from './components/Covid'
import Grafica from './components/Grafica'
import Decesos from './components/Decesos'
import Footer from './components/Footer'

import { mapGetters, mapActions } from "vuex";

export default {
  name: 'App',
  data(){
    return{
      datos: [],
    }
  },
  components: {
    Covid,
    Grafica,
    Decesos,
    Footer
  },
  created(){
    
  },
   async mounted() {
      
    await this.loadInfo();
    
  },

  methods:{
    ...mapActions(['loadInfo']),
  },
  computed:{
    ...mapGetters(['getConfirmados','getDecesos','getFechas','getEstados']),

    letalidad(){
      let letalidad = (this.getDecesos/this.getConfirmados)*100
          
      return letalidad.toFixed(2)
      
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}


</style>
