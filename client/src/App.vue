<template>
  <div id="app">
    <Header />
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
    </div> -->
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header'

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
