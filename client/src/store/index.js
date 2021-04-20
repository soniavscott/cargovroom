import Vue from "vue";
import Vuex from "vuex";
import Api from '@/services/Api';

Vue.use(Vuex);

const state = {
  allVehicles: [],
  // allMakes: [],
  makeFilter: '',

}

const mutations = {
  UPDATE_ALL_VEHICLES (state, payload) {
    state.allVehicles = payload;
    console.log(state.allVehicles);
  },

  // UPDATE_ALL_MAKES (state) {
  //   // const makes = [];
  //   for (let vehicle in state.allVehicles) {
  //     console.log('vehicle', vehicle);
  //   }
  //   console.log('makes', state.allVehicles);
  // },

  UPDATE_FILTERS_BY_MAKE (state, payload) {
    state.makeFilter = payload;
  }
}

const actions = {
  getAllVehicles({commit}) {
    Api().get('/').then((response) => {
      commit('UPDATE_ALL_VEHICLES', response.data)
    })
  },

  getAllMakes({commit}) {
    commit('UPDATE_ALL_MAKES')
  },

  addFilterByMake({commit}, filter) {
    commit('UPDATE_FILTERS_BY_MAKE', filter)
  }
}

const getters = {
  allVehicles: state => state.allVehicles,
  allMakes: state => {
    const makes = state.allVehicles.map(vehicle => vehicle.make);
    const makesUnique = [...new Set(makes)].sort();

    return makesUnique;
  },
  filterVehicleMake: state => getByMake(state.allVehicles, state.makeFilter)
}

function getByMake(allVehicles, make) {
  return allVehicles.filter(vehicle => vehicle.make == make);
}


export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
