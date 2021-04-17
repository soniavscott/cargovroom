<template>
  <div id="browse-vehicles" class="container">
    <div class="columns is-multiline">
    <VehicleEntry v-for="vehicle in matchingVehicles"
      :key="vehicle.id" 
      :vehicle="vehicle" />
    </div>
  </div>
</template>

<script>
import SearchService from "../services/SearchService";
import VehicleEntry from "../components/VehicleEntry";

export default {
  name: "BrowseVehicles", 
  data () {
    return {
      matchingVehicles: {}
    }
  },
  async mounted () {
    const make = this.$route.params.make
    if (make) {
      this.matchingVehicles = (await SearchService.show(make)).data
      return;
    }
    this.matchingVehicles = (await SearchService.all()).data
  },
  components: {
    VehicleEntry
  }
};

</script>

<style lang="scss">
#browse-vehicles {
  margin: $size-3;
  justify-content: center;
}



</style>