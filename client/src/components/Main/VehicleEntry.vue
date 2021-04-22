<template>
  <div class="vehicle-entry column card is-one-quarter">
  <!-- <div class="vehicle-entry column card is-one-fifth" @mouseover="hover=true" @mouseleave="hover=false"> -->
    <div id="edit-delete-container">
      <EntryOptionsButtons v-if="hover" :vehicle="vehicle" />
    </div>
    <div class="card-image">
      <b-image
        :src="require('@/assets/images/chevy-trailblazer-2018.png')"
        alt="2018 Chevy Trailblazer"
        ratio="5by3"
      ></b-image>
    </div>

    <div class="vehicle-info">
      <div class="is-flex-direction-column">
        <p class="size-5" id="vehicle-make">{{ vehicle.make }}</p>
        <p class="size-5" id="vehicle-model">{{ vehicle.model }}</p>
      </div>
      <p id="vehicle-year">{{ vehicle.year }}</p>
    </div>
  </div>
</template>

<script>
import EntryOptionsButtons from '../EditAndDelete/EntryOptionsButtons.vue';
export default ({
  name: "VehicleEntry",
  props: ["vehicle"],
  data () {
    return {
      hover: true,
    }
  },
  components: {
    EntryOptionsButtons
  }
})
</script>

<style lang="scss" scoped>
.vehicle-entry {
  margin: $size-7;
  background-color: $white;
  border-bottom: 2px solid $primary;

  .card-image {
    margin: 0 $size-4;
  }

  .card-header {
    box-shadow: none;
  }

  .vehicle-info {
    margin: $size-6;
    margin-bottom: 0;

    #vehicle-make {
      font-weight: $weight-bold;
    }

    
    #vehicle-model {
      font-style: italic;
      font-weight: $weight-medium;
      font-size: $size-6;
    }

    #vehicle-year {
      font-weight: $weight-light;

    }


  }
}

.size-5 {
  font-size: $size-5;
}

// dunno why bulma's preset var isn't working but this does 
.is-flex-direction-row {
  display: flex;
  flex-direction: row;
}

</style>
