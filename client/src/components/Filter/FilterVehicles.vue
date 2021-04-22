<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item" v-for="field in availableWithFilters" :key="field.id">
        <FilterDropdown :type="field.type" :items="field.items" :cleared="isCleared"/>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <b-button
          :label="'Clear All Filters'"
          type="is-grey"
          @click="clearFilters"
        /> 
      </div>
      <!-- <b-input type="text" class="is-normal level-item" placeholder="Search for a vehicle..."/> -->
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
  data () {
    return {
      isCleared: false,
    }
  },
  computed: {
    ...mapGetters([
      'allVehiclesByField',
      'availableWithFilters'
    ])
  }, 
  methods: {
    clearFilters() {
      this.$store.dispatch('clearAllFilters')
      this.isCleared = true
    }
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