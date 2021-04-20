<template>
  <div id="browse-vehicles" class="container">
    <FilterVehicles class="pointer"/>

    <section v-if="showAll" class="columns is-multiline">
      <VehicleEntry v-for="vehicle in allVehicles"
        :key="vehicle.id" 
        :vehicle="vehicle" />
    </section>

    <section v-if="showFiltered" class="columns is-multiline">
      <VehicleEntry v-for="vehicle in filterVehicleMake"
        :key="vehicle.id" 
        :vehicle="vehicle" />
    </section>


    <AddVehicleButton id="add-vehicle-button" />
  </div>
</template>

<script>
// import SearchService from "../services/SearchService";
import FilterVehicles from '../components/FilterVehicles';
import VehicleEntry from "../components/VehicleEntry";
import AddVehicleButton from '../components/AddVehicleButton';
import { mapGetters } from 'vuex';
import EventBus from '../main';

export default {
  name: "BrowseVehicles", 
  data () {
    return {
      matchingVehicles: {},
      showAll: true,
      showFiltered: false,
    }
  },
  mounted () {
  //   const make = this.$route.params.make
  //   console.log('route', this.$route.params);
  //   if (make) {
  //     this.matchingVehicles = (await SearchService.filter(make)).data
  //     return;
  //   }
  //   this.matchingVehicles = (await SearchService.all()).data;

    // EventBus.$on("added-filter", this.showFilteredVehicles);
  },
  components: {
    FilterVehicles,
    VehicleEntry,
    AddVehicleButton
  },
  async created () {
    await this.$store.dispatch('getAllVehicles');
    EventBus.$on("added-filter", this.showFilteredVehicles);
  },
  computed: {
    ...mapGetters([
      'allVehicles',
      'filterVehicleMake'
    ])
  }, 
  methods: {
    showFilteredVehicles() {
      this.showAll = false;
      this.showFiltered = true;
    }
  }
};

</script>

<style lang="scss">
#browse-vehicles {
  margin: $size-3;
}

#add-vehicle-button {
  position: fixed;
  bottom: $size-3;
  right: $size-3;
}

</style>