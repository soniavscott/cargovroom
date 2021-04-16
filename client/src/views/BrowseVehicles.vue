<template>
  <div class="browse-vehicles">
    <VehicleEntry v-for="vehicle in matchingVehicles"
      :key="vehicle.id" 
      :vehicle="vehicle" />
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
