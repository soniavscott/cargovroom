<template>
  <b-dropdown
    :scrollable="true"
    :max-height="200"
    :triggers="['hover']"
    v-model="selectedItem"
    aria-role="list"
  >
    <template #trigger>
        <b-button
            :label="selectedItem"
            type="is-grey"
            icon-right="menu-down" />
    </template>

    <b-dropdown-item 
      :value="mainTitle"
      @click="clearFilter(type)">
      {{ mainTitle }}
    </b-dropdown-item>

    <b-dropdown-item
        v-for="item in items"
        :key="item.id"
        :value="item"
        aria-role="listitem"
        @click="addFilter(type, item)">
        <div class="media">
          <div class="media-content">
            <h3>{{ item }}</h3>
          </div>
        </div>
    </b-dropdown-item>
  </b-dropdown>
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
      mainTitle: 'All ' + this.pluralizeType(this.type),
      selectedItem: 'All ' + this.pluralizeType(this.type),
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


a.dropdown-item.is-active {
  background-color: $accent;
}
</style>