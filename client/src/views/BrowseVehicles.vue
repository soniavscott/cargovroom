<template>
  <div id="browse-vehicles" class="container">
    <FilterVehicles class="pointer"/>

    <section class="columns is-multiline">
      <VehicleEntry v-for="vehicle in matchingVehicles"
        :key="vehicle.id" 
        :vehicle="vehicle" />
    </section>

    <AddVehicleButton id="add-vehicle-button" />
  </div>
</template>

<script>
import SearchService from "../services/SearchService";
import FilterVehicles from '../components/FilterVehicles';
import VehicleEntry from "../components/VehicleEntry";
import AddVehicleButton from '../components/AddVehicleButton';

export default {
  name: "BrowseVehicles", 
  data () {
    return {
      matchingVehicles: {}
    }
  },
  async mounted () {
    const make = this.$route.params.make
    console.log('route', this.$route.params);
    if (make) {
      this.matchingVehicles = (await SearchService.show(make)).data
      return;
    }
    this.matchingVehicles = (await SearchService.all()).data;
  },
  components: {
    FilterVehicles,
    VehicleEntry,
    AddVehicleButton
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