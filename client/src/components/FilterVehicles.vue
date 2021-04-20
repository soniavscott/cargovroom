<template>
  <div class="level">
    <div class="level-left">
      <FilterDropdown class="level-item" :type="'Make'"/>
    </div>
    <div class="level-right">
      <b-input type="text" class="is-normal level-item" placeholder="Search for a vehicle..."/>
    </div>
  </div>
</template>

<script>
import FilterDropdown from './FilterDropdown';

export default ({
  name: "FilterVehicles",
  components: {
    FilterDropdown,
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