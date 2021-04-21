import Vue from "vue";
import Buefy from "buefy";
import 'buefy/dist/buefy.css';
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(Buefy);

const EventBus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
  methods: {
    saveEditedVehicle(input) {
      console.log('saved edited vehicle: ', input);
      this.$store.dispatch('updateVehicle', input);
    }
  },
  created () {
    EventBus.$on("edit-vehicle", input => this.saveEditedVehicle(input));
  }
}).$mount("#app");

export default EventBus;