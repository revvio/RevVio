import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export default  new Vuex.Store({
    state: {
      queue: [],
      status:false,
      hoods: {"02138" : "mid-cambridge",
      "02459": "newton",
      "02446": "brookline"
    }
    },
    mutations: {
      setCitizens (state, citizens) {
        citizens.forEach(cit => {
            cit.number = cit.street.replace(/^\d/g, "");
            cit.street = cit.street.replace(/\d/g, "");
            cit.hood = state.hoods[cit.zipcode]
        })
        state.queue = citizens
      }
    },
    actions: {
      getCitizens ({ commit }) {
        let  citizens =[
        { street:'10 Bowdoin Street',
          city:'Cambridge',
          zipcode:'02138',
          status:'3',
          adultNumber:1,
          childNumber: 4
        },
          {
            street:'345 Boylston Street',
            city:'Newton',
            zipcode:'02459',
            status:'2',
            adultNumber:1,
            childNumber: 2
          },
          {
            number:'345',
            street:'Harvard Street',
            city:'Brookline',
            zipcode:'02446',
            status:'4',
            adultNumber:3,
            childNumber: 2
          }]

 
        
        commit('setCitizens', citizens)
      }
    }
  })