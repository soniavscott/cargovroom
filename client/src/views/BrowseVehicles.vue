<template>
  <div id="browse-vehicles" class="">
    <FilterVehicles class="pointer container" id="filter-vehicles"/>

    <section>
      <div v-if="showAll" class="columns is-multiline is-centered">
        <VehicleEntry v-for="vehicle in allVehicles"
          :key="vehicle.id" 
          :vehicle="vehicle" />
      </div>

      <div v-if="showFiltered" class="columns is-multiline is-centered">
        <VehicleEntry v-for="vehicle in filteredVehicles"
          :key="vehicle.id" 
          :vehicle="vehicle" />
      </div>
    </section>


    <AddVehicleButton id="add-vehicle-button" />
  </div>
</template>

<script>
import FilterVehicles from '../components/Filter/FilterVehicles';
import VehicleEntry from "../components/Main/VehicleEntry";
import AddVehicleButton from '../components/AddNewVehicle/AddVehicleButton';
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
  // mounted () {
  //   const make = this.$route.params.make
  //   console.log('route', this.$route.params);
  //   if (make) {
  //     this.matchingVehicles = (await SearchService.filter(make)).data
  //     return;
  //   }
  //   this.matchingVehicles = (await SearchService.all()).data;

    // EventBus.$on("added-filter", this.showFilteredVehicles);
  // },
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
      'filteredVehicles',
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
// #browse-vehicles {
  // margin: 0 auto;
  // width: 100%;
  // display: flex;
  // flex-direction: column;
  // align-items: center;
// }

#add-vehicle-button {
  position: fixed;
  bottom: $size-3;
  right: $size-3;
}

// #browse-vehicles {
  // .display-vehicles {
    // margin: 0 auto;
  // }
// }

// #filter-vehicles {
//   margin: 0 $size-7;
// }

</style>