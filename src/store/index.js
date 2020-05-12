import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      confirmados:0,
      decesos:0,
      fechas:[],
      estados: {
        aguascalientes: [],
        bajaCalifornia: [],
        bajaCaliforniaSur: [],
        campeche: [],
        chiapas: [],
        chihuahua: [],
        cdmx: [],
        coahuila: [],
        colima: [],
        durango: [],
        guanajuato: [],
        guerrero: [],
        hidalgo: [],
        jalisco: [],
        michoacan: [],
        morelos: [],
        mexico: [],
        nayarit: [],
        nuevoLeon: [],
        oaxaca: [],
        puebla: [],
        queretaro: [],
        quintanaroo: [],
        sanLuis: [],
        sinaloa: [],
        sonora: [],
        tabasco: [],
        tamaulipas: [],
        tlaxcala: [],
        veracruz: [],
        yucatan: [],
        zacatecas: []
    },
    estadosDecesos: {
      aguascalientes: [],
      bajaCalifornia: [],
      bajaCaliforniaSur: [],
      campeche: [],
      chiapas: [],
      chihuahua: [],
      cdmx: [],
      coahuila: [],
      colima: [],
      durango: [],
      guanajuato: [],
      guerrero: [],
      hidalgo: [],
      jalisco: [],
      michoacan: [],
      morelos: [],
      mexico: [],
      nayarit: [],
      nuevoLeon: [],
      oaxaca: [],
      puebla: [],
      queretaro: [],
      quintanaroo: [],
      sanLuis: [],
      sinaloa: [],
      sonora: [],
      tabasco: [],
      tamaulipas: [],
      tlaxcala: [],
      veracruz: [],
      yucatan: [],
      zacatecas: []
  },
  },
  mutations: {
      setConfirmados(state, value){
        state.confirmados = value['confirmados']
        state.decesos = value['decesos']
      },
      setFechas(state, value){
          state.fechas = value
      },
      setEstados(state, value){
          state.estados = value
      },
      setEstadosDecesos(state, value){
        state.estadosDecesos = value
      }
      
  },
  actions: {
    async loadInfo({commit}){
         
          const data = []
          const fechas = []
          const estados = {
            aguascalientes: [],
            bajaCalifornia: [],
            bajaCaliforniaSur: [],
            campeche: [],
            chiapas: [],
            chihuahua: [],
            cdmx: [],
            coahuila: [],
            colima: [],
            durango: [],
            guanajuato: [],
            guerrero: [],
            hidalgo: [],
            jalisco: [],
            michoacan: [],
            morelos: [],
            mexico: [],
            nayarit: [],
            nuevoLeon: [],
            oaxaca: [],
            puebla: [],
            queretaro: [],
            quintanaroo: [],
            sanLuis: [],
            sinaloa: [],
            sonora: [],
            tabasco: [],
            tamaulipas: [],
            tlaxcala: [],
            veracruz: [],
            yucatan: [],
            zacatecas: []
          }
          const estadosDecesos = {
            aguascalientes: [],
            bajaCalifornia: [],
            bajaCaliforniaSur: [],
            campeche: [],
            chiapas: [],
            chihuahua: [],
            cdmx: [],
            coahuila: [],
            colima: [],
            durango: [],
            guanajuato: [],
            guerrero: [],
            hidalgo: [],
            jalisco: [],
            michoacan: [],
            morelos: [],
            mexico: [],
            nayarit: [],
            nuevoLeon: [],
            oaxaca: [],
            puebla: [],
            queretaro: [],
            quintanaroo: [],
            sanLuis: [],
            sinaloa: [],
            sonora: [],
            tabasco: [],
            tamaulipas: [],
            tlaxcala: [],
            veracruz: [],
            yucatan: [],
            zacatecas: []
          }
          
          
            
        
          let cont=0
            await axios.get('https://raw.githubusercontent.com/IrvingCanales/indecision-app/master/mex_ejem.json')
              .then( (response) => {
                      response.data.forEach(element => {    
                          //A partir de esta fecha empiezan a ver casos
                          if(element.Fecha>='2020-02-25'){

                            //Fechas                
                            fechas[cont] = element.Fecha;
                            

                            //Estados confirmados
                         estados.aguascalientes[cont] = element.AGU
                        estados.bajaCalifornia[cont] = element.BCN
                        estados.bajaCaliforniaSur[cont] = element.BCS
                        estados.campeche[cont] = element.CAM
                        estados.chiapas[cont] = element.CHP
                        estados.chihuahua[cont] = element.CHH
                        estados.cdmx[cont] = element.CMX
                        estados.coahuila[cont] = element.COA
                        estados.colima[cont] = element.COL
                        estados.durango[cont] = element.DUR
                        estados.guanajuato[cont] = element.GUA
                        estados.guerrero[cont] = element.GRO
                        estados.hidalgo[cont] = element.HID
                        estados.jalisco[cont] = element.JAL
                        estados.michoacan[cont] = element.MIC
                        estados.morelos[cont] = element.MOR
                        estados.mexico[cont] = element.MEX
                        estados.nayarit[cont] = element.NAY
                        estados.nuevoLeon[cont] = element.NLE
                        estados.oaxaca[cont] = element.OAX
                        estados.puebla[cont] = element.PUE
                        estados.queretaro[cont] = element.QUE
                        estados.quintanaroo[cont] = element.ROO
                        estados.sanLuis[cont] = element.SLP
                        estados.sinaloa[cont] = element.SIN
                        estados.sonora[cont] = element.SON
                        estados.tabasco[cont] = element.TAB
                        estados.tamaulipas[cont] = element.TAM
                        estados.tlaxcala[cont] = element.TLA
                        estados.veracruz[cont] = element.VER
                        estados.yucatan[cont] = element.YUC
                        estados.zacatecas[cont] = element.ZAC

                        //Estados decesos
                       estadosDecesos.aguascalientes[cont] = element.AGU_D
                        estadosDecesos.bajaCalifornia[cont] = element.BCN_D
                        estadosDecesos.bajaCaliforniaSur[cont] = element.BCS_D
                        estadosDecesos.campeche[cont] = element.CAM_D
                        estadosDecesos.chiapas[cont] = element.CHP_D
                        estadosDecesos.chihuahua[cont] = element.CHH_D
                        estadosDecesos.cdmx[cont] = element.CMX_D
                        estadosDecesos.coahuila[cont] = element.COA_D
                        estadosDecesos.colima[cont] = element.COL_D
                        estadosDecesos.durango[cont] = element.DUR_D
                        estadosDecesos.guanajuato[cont] = element.GUA_D
                        estadosDecesos.guerrero[cont] = element.GRO_D
                        estadosDecesos.hidalgo[cont] = element.HID_D
                        estadosDecesos.jalisco[cont] = element.JAL_D
                        estadosDecesos.michoacan[cont] = element.MIC_D
                        estadosDecesos.morelos[cont] = element.MOR_D
                        estadosDecesos.mexico[cont] = element.MEX_D
                        estadosDecesos.nayarit[cont] = element.NAY_D
                        estadosDecesos.nuevoLeon[cont] = element.NLE_D
                        estadosDecesos.oaxaca[cont] = element.OAX_D
                        estadosDecesos.puebla[cont] = element.PUE_D
                        estadosDecesos.queretaro[cont] = element.QUE_D
                        estadosDecesos.quintanaroo[cont] = element.ROO_D
                        estadosDecesos.sanLuis[cont] = element.SLP_D
                        estadosDecesos.sinaloa[cont] = element.SIN_D
                        estadosDecesos.sonora[cont] = element.SON_D
                        estadosDecesos.tabasco[cont] = element.TAB_D
                        estadosDecesos.tamaulipas[cont] = element.TAM_D
                        estadosDecesos.tlaxcala[cont] = element.TLA_D
                        estadosDecesos.veracruz[cont] = element.VER_D
                        estadosDecesos.yucatan[cont] = element.YUC_D
                        estadosDecesos.zacatecas[cont] = element.ZAC_D
                        
                        


                            //Decesos y confirmados
                              data['confirmados'] = element.Pos
                              data['decesos'] = element.Deceased                            
                            

                            cont++
                          }
                      });

                     //Commits 
                     commit('setFechas',fechas)
                     commit('setEstados',estados)
                     commit('setEstadosDecesos',estadosDecesos)
                     commit('setConfirmados',data)
                     
              }        
              ).catch(e => {
                  console.log(e)
              })

    }

  },
  getters:{   
    getConfirmados(state){
        return state.confirmados
    },
    getDecesos(state){
        return state.decesos
    },
    getFechas(state){
        return state.fechas
    },
    getEstados(state){
        return state.estados
    },
    getEstadosDecesos(state){
      return state.estadosDecesos
    }


  },
  
})
