<template>
  <div class="select is-multiple">
    <select class="multiple">
        <option value="all">All makes</option>
        <option value="acura">Acura</option>
        <option value="audi">Audi</option>

    </select>
  </div>
</template>

<script>

export default ({
  name: "FilterSelect",
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