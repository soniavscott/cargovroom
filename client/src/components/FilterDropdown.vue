<template>
  <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
      <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span v-if="isFiltered">{{ isFiltered }}</span>
        <span v-else>All {{ pluralizeType(type) }}</span>
        <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
      </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
      <div class="dropdown-content">
        <div class="dropdown-item pointer" @click="clearFilter(type)">
          All {{ pluralizeType(type) }}
        </div>

        <div v-for="item in items" 
          :key="item.id" 
          class="dropdown-item pointer" 
          @click="addFilter(type, item)">
        {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '../main'

export default ({
  name: "FilterDropdown",
  props: [
    "type",
    "items"
  ],
  data () {
    return {
      isFiltered: '',
    }
  },
  methods: {
    addFilter(type, filter) {
      type=type.toLowerCase();
      this.$store.dispatch('addFilter', {type, filter});
      this.isFiltered = filter;
      EventBus.$emit('added-filter');
    },

    clearFilter(type) {
      type=type.toLowerCase();
      this.$store.dispatch('clearFilter', type);
      this.isFiltered= '';
    },

    pluralizeType(type) {
      if (type=="category") return "categories";
      return type.toLowerCase() + "s";
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

.dropdown-item {
  &.pointer:hover {
    cursor: pointer;
  }

}
</style>