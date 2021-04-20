<template>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>{{ type }}</span>
        <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <a href="/" class="dropdown-item">All Makes</a>
        <div v-for="make in allMakes" 
          :key="make.id" 
          class="dropdown-item" 
          @click="addMakeFilter(make)">
        {{ make }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EventBus from '../main'

export default ({
  name: "FilterDropdown",
  props: [
    "type",
  ],
  data () {
    return {
      filter: '',
    }
  },
  methods: {
    addMakeFilter(filter) {
      this.$store.dispatch('addFilterByMake', filter);
      EventBus.$emit('added-filter')
    }
  },
  computed: {
    ...mapGetters([
      'allMakes'
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