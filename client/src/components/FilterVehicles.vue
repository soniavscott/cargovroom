<template>
  <div class="level">
    <div class="level-left">
      <FilterDropdown class="level-item"/>
      <FilterDropdown class="level-item"/>
    </div>
    <div class="level-right">
      <b-input type="text" class="is-normal level-item" placeholder="Search for a vehicle..."/>
    </div>
  </div>
</template>

<script>
import FilterDropdown from './FilterDropdown';
// import FilterSelect from './FilterSelect';
export default ({
  name: "FilterVehicles",
  props: [
    "type",
    "filterItems",
  ],
  methods: {
    test() {
      console.log('hello');
    }
  },
  components: {
    FilterDropdown,
    // FilterSelect
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