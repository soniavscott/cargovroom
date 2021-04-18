<template>
   <div class="dropdown is-hoverable">
    <div class="dropdown-trigger">
    <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
        <span>Make</span>
        <span class="icon is-small">
        <i class="fas fa-angle-down" aria-hidden="true"></i>
        </span>
    </button>
    </div>
    <div class="dropdown-menu" id="dropdown-menu" role="menu">
    <div class="dropdown-content">
        <a href="/" class="dropdown-item">
        All makes
        </a>
        <a href="/search/acura" class="dropdown-item">
        Acura
        </a>
        <a href="/search/audi" class="dropdown-item">
        Audi
        </a>
        <a href="/search/chevrolet" class="dropdown-item">
        Chevrolet
        </a>
        <a href="/search/ford" class="dropdown-item">
        Ford
        </a>
        <a href="/search/honda" class="dropdown-item">
        Honda
        </a>
    </div>
    </div>
  </div>
</template>

<script>

export default ({
  name: "FilterDropdown",
  props: [
    "type",
    "filterItems",
  ],
})
</script>

<style lang="scss" scoped>
.center-horizontal {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>