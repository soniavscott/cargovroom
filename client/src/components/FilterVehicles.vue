<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item" v-for="field in allVehiclesByField" :key="field.id">
        <FilterDropdown :type="field.type" :items="field.items"/>
      </div>
    </div>
    <div class="level-right">
      <b-input type="text" class="is-normal level-item" placeholder="Search for a vehicle..."/>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import FilterDropdown from './FilterDropdown';

export default ({
  name: "FilterVehicles",
  components: {
    FilterDropdown,
  }, 
  computed: {
    ...mapGetters([
      'allVehiclesByField',
    ])
  }
})
</script>

<style lang="scss" scoped>
.center-horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>