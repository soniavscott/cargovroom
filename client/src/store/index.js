import Vue from "vue";
import Vuex from "vuex";
import Api from '@/services/Api';

Vue.use(Vuex);

const state = {
  allVehicles: [],
  filters: {
    make: '',
    model: '',
    year: '',
    category: '',
    color: '',
  },
  displayedVehicles: []
}



const mutations = {
  UPDATE_ALL_VEHICLES (state, payload) {
    state.allVehicles = payload;
  },

  UPDATE_FILTER (state, { type, filter }) {
    if (filter) {
      state.filters[type.toLowerCase()] = filter;
    } else {
      state.filters[type.toLowerCase()] = "";
    }
  }
}




const actions = {
  getAllVehicles({commit}) {
    Api().get('/api').then((response) => {
      response.data.map(vehicle => {
        vehicle.category = arrayify(vehicle.category);      
      })
      commit('UPDATE_ALL_VEHICLES', response.data)
    })
  },

  addFilter({ commit }, { type, filter } ) {
    commit('UPDATE_FILTER', {type, filter});
  },

  clearFilter({ commit }, type) {
    commit('UPDATE_FILTER', { type });
  },

  clearAllFilters({ commit }) {
    commit ('UPDATE_FILTER', { type: 'make' });
    commit ('UPDATE_FILTER', { type: 'model'});
    commit ('UPDATE_FILTER', { type: 'year'});
    commit ('UPDATE_FILTER', { type: 'category'});
    commit ('UPDATE_FILTER', { type: 'color'});
  },

  addNewVehicle(_context, input) {
    input.timestamp = getDateTime();
    Api().post('/api/add-new-vehicle', input).then((response) => {
      console.log('response', response);
      this.dispatch('getAllVehicles');
    })
  },

  updateVehicle(_context, input) {
    input.timestamp = getDateTime();
    Api().post('/api/update-vehicle', input).then((response) => {
      console.log('response', response);
      this.dispatch('getAllVehicles');
    })
  },

  deleteVehicle(_context, id) {
    Api().post('/api/delete-vehicle', {id: id}).then((response) => {
      console.log('response', response);
      this.dispatch('getAllVehicles');
    })
  }
}

function arrayify(original) {
  if (original[0] !== "[") {
    return [original];
  }
  var str = original.toString().split('[').pop();
  str = str.split(']')[0];
  str = str.substring(1, str.length-1);
  const clean = str.split('", "');
  return clean;
}

function getDateTime() {
  var now = new Date();
  now = now.toISOString();
  var dateTime = now.slice(0, now.length-5).split('T');
  dateTime = dateTime[0] + ' ' + dateTime[1];
  return dateTime;
}


const getters = {
  /** gets all vehicles in db, unfiltered */
  allVehicles: state => state.allVehicles,

  /** gets dict of all vehicle fields (make, model, category, color...)
   * @return {dict} - { 'make': ['Acura', 'Audi'...], 
   *                  ...}
   */
  allVehiclesByField: state => {
    const all =  {
      make: {
        type: "make",
        items: getByType("make", state.allVehicles),
      },
      model: {
        type: "model",
        items: getByType("model", state.allVehicles),
      },
      year: {
        type: "year",
        items: getByType("year", state.allVehicles),
      },
      category: {
        type: "category", 
        items: getByType("category", state.allVehicles),
      }, 
      color: {
        type: "color",
        items: getByType("color", state.allVehicles)
      }
    }
    return all;
  },

  /** 
   * gets all vehicle makes & their models
   * @return {dict} - { 'Acura': ['RDX',...], ... }
   */
  makeAndModel: state => {
    var makeAndModel = {};
    
    state.allVehicles.map(vehicle => {
      if (!makeAndModel[vehicle.make]) {
        makeAndModel[vehicle.make] = [];
      }
      makeAndModel[vehicle.make].push(vehicle.model);
    })

    return makeAndModel;
  },

  filters: state => {
    return state.filters;
  },

  availableWithFilters: state => {
    return getAvailableWithFilters(state.filters, state.allVehicles);
  },


  /** gets vehicles that match all state.filters 
   * @return {vehicle obj} 
    */
   filteredVehicles: state => {
    var filtered = state.allVehicles;
    filtered = filterBy("make", state.filters.make, filtered);
    filtered = filterBy("model", state.filters.model, filtered);
    filtered = filterBy("year", state.filters.year, filtered);
    filtered = filterBy("category", state.filters.category, filtered);
    filtered = filterBy("color", state.filters.color, filtered);
    return filtered;
  },
}

/** 
 * helper func, gets filtered list of vehicles
 * @param {String} filterType- filter field e.g. 'make'
 * @param {String} filter - value to be matched, e.g. 'Acura'
 * @param {Array} vehicles - list of vehicle objects 
 * @returns {[Object]} - list of matching vehicle objects
*/
function filterBy(filterType, filter, vehicles) {
  if (filter=='') return vehicles;

  if (filterType == "category") {
    return vehicles.filter(vehicle => vehicle.category.includes(filter));
  }

  return vehicles.filter(vehicle => vehicle[filterType] == filter)
}

/** helper func, gets list of values matching field type  
 * @param {String} type - e.g. 'make'
 * @param {Array} allVehicles
 * @returns {[String]} - matching values, e.g. ['Acura', 'Audi'...]
*/
function getByType(type, allVehicles) {
  var withDupes = [];
  allVehicles.map(vehicle => {
    if (type=="category") {
      vehicle["category"].map(cat => withDupes.push(cat))
    } else {
      withDupes.push(vehicle[type])
    }
  })
  return removeDupes(withDupes);
}

function removeDupes(arr) {
  return [...new Set(arr)].sort();
}


function getAvailableWithFilters(filters, allVehicles) {
  var vehicles = allVehicles;
  for (let type of Object.keys(filters)) {
    vehicles = filterBy(type, filters[type], vehicles)
  }
  const makes = getByType('make', vehicles);
  const models = getByType('model', vehicles);
  const years = getByType('year', vehicles);
  const category = getByType('category', vehicles);
  const color = getByType('color', vehicles);

  const available = {
    makes: {
      type: 'make',
      items: makes,
    },
    models: {
      type: 'model',
      items: models,
    },
    years: {
      type: 'year',
      items: years,
    }, 
    category: {
      type: 'category', 
      items: category,
    }, 
    color: {
      type: 'color', 
      items: color,
    }
  }
  return available;
}



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
});
