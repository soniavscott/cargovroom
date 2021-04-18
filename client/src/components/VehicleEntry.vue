<template>
  <div class="vehicle-entry column card is-one-fifth">
    <div class="card-image">
      <b-image
        :src="require('@/assets/images/chevy-trailblazer-2018.png')"
        alt="2018 Chevy Trailblazer"
        ratio="5by3"
      ></b-image>
    </div>

    <div class="vehicle-info">
      <div class="is-flex-direction-row">
        <p class="size-5" id="vehicle-make">{{ vehicle.make }}</p>
        <p class="size-5" id="vehicle-model">{{ vehicle.model }}</p>
      </div>
      <p id="vehicle-year">{{ vehicle.year }}</p>
    </div>
  </div>
</template>

<script>

export default ({
  name: "VehicleEntry",
  props: ["vehicle"],
})
</script>

<style lang="scss" scoped>
.vehicle-entry {
  margin: $size-7;
  margin-bottom: $size-3;
  background-color: $white;
  border-bottom: 2px solid $primary;

  :hover {
    cursor: pointer;
  }
  
  .card-image {
    margin: $size-4;
  }

  .card-header {
    box-shadow: none;
  }

  .vehicle-info {
    margin: $size-6;
    margin-bottom: 0;

    #vehicle-make {
      margin-bottom: 0;
      margin-right: 0.4rem;
      font-weight: $weight-bold;
    }

    #vehicle-model, #vehicle-year {
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
