<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Main/Header.vue'

export default ({
  components: {
    Header
  }
})
</script>


<style lang="scss">
body {
  background-color: $off-white
}
</style>
